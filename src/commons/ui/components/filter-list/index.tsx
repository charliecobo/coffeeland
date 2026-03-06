import { useEffect, useRef, type Dispatch, type SetStateAction } from 'react';
import { useFormik } from 'formik';

import { RadioChips } from '../radio-chips';
import { useDebounce } from '../../hooks/use-debounce';

import { COFFEE_METHODS } from '../../../../coffee/constants';
import type { GetCoffeListParams } from '../../../../coffee/core/interfaces';

interface Props {
  filters: Pick<GetCoffeListParams, 'method' | 'term'>;
  setFilters: Dispatch<SetStateAction<Pick<GetCoffeListParams, 'method' | 'term'>>>;
}

export const FilterList = ({ filters, setFilters }: Props) => {
  const previousCategoryRef = useRef<string>('');
  const { handleChange, values, submitForm } = useFormik({
    initialValues: {
      term: filters.term,
      method: filters.method,
    },
    onSubmit: async values => {
      setFilters({ term: values.term, method: values.method });
    },
  });

  useDebounce(() => submitForm(), values.term, {
    delay: 3000,
    minLength: 3,
  });

  useEffect(() => {
    if (previousCategoryRef.current !== '' && previousCategoryRef.current !== values.method) {
      submitForm();
    }
    previousCategoryRef.current = values.method!;
  }, [values.method]);

  return (
    <form>
      <div className="px-4 py-4">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-4 text-primary">search</span>
          <input
            name="term"
            className="w-full bg-coffee-cream dark:bg-primary/5 border-none rounded-2xl py-4 pl-12 pr-4 text-base focus:ring-2 focus:ring-primary/50 placeholder:text-coffee-bean/50 dark:placeholder:text-slate-400"
            placeholder="Search recipes (e.g. Oat Milk Latte)"
            type="text"
            value={values.term}
            onChange={handleChange}
          />
        </div>
      </div>

      <RadioChips
        name="method"
        defaultValue="ALL"
        onChange={handleChange}
        options={[
          { id: '1', label: COFFEE_METHODS.ALL.replaceAll('_', ' '), value: COFFEE_METHODS.ALL },
          { id: '2', label: COFFEE_METHODS.ESPRESSO.replaceAll('_', ' '), value: COFFEE_METHODS.ESPRESSO },
          { id: '3', label: COFFEE_METHODS.COLD_BREW.replaceAll('_', ' '), value: COFFEE_METHODS.COLD_BREW },
          { id: '4', label: COFFEE_METHODS.POUROVER.replaceAll('_', ' '), value: COFFEE_METHODS.POUROVER },
          { id: '5', label: COFFEE_METHODS.LATTE_ART.replaceAll('_', ' '), value: COFFEE_METHODS.LATTE_ART },
        ]}
      />
    </form>
  );
};
