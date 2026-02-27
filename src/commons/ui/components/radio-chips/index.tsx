import React, { useState, type ChangeEvent } from 'react';
import { clsx } from '../../../core/utils';

export interface BadgeOption {
  id: string;
  label: string;
  value: string;
}

interface RadioBadgesProps {
  options: BadgeOption[];
  name: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
  ariaLabel?: string;
}

export const RadioChips: React.FC<RadioBadgesProps> = ({
  options,
  name,
  defaultValue,
  onChange,
  ariaLabel = 'Select an option',
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue || options[0]?.value || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div
      className="flex gap-3 px-4 pb-6 overflow-x-auto no-scrollbar relative"
      role="radiogroup"
      aria-label={ariaLabel}
    >
      {options.map(option => {
        const isSelected = selectedValue === option.value;
        const inputId = `${name}-${option.id}`;

        const styles = clsx(
          'flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-coffee-cream dark:bg-primary/10 text-coffee-bean dark:text-slate-200 font-medium text-sm hover:bg-primary/50 hover:text-white',
          {
            'bg-primary text-white': isSelected,
          }
        );

        return (
          <label key={option.id} className={styles} htmlFor={inputId}>
            <input
              type="radio"
              id={inputId}
              name={name}
              value={option.value}
              checked={isSelected}
              onChange={e => handleChange(e)}
              className="absolute opacity-0 w-px h-px -m-px p-0 overflow-hidden whitespace-nowrap border-0"
              aria-checked={isSelected}
              tabIndex={isSelected ? 0 : -1}
            />
            <span className="relative z-10 pointer-events-none">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};
