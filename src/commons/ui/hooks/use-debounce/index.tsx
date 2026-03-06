import { useEffect, useRef, useCallback } from 'react';

interface UseDebouncerOptions {
  delay?: number;
  minLength?: number;
}

export const useDebounce = <T,>(callback: (value: T) => void, value: T, options: UseDebouncerOptions = {}) => {
  const { delay = 500, minLength = 0 } = options;
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const shouldExecute = typeof value === 'string' ? value.length >= minLength : true;

    if (shouldExecute) {
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(value);
      }, delay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay, minLength]);

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const flush = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      callbackRef.current(value);
    }
  }, [value]);

  return { cancel, flush };
};
