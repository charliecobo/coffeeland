import { COFFEE_METHODS } from '../../../../coffee/constants';
import { RadioChips } from '../radio-chips';

export const FilterList = () => {
  return (
    <>
      <div className="px-4 py-4">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-4 text-primary">search</span>
          <input
            className="w-full bg-coffee-cream dark:bg-primary/5 border-none rounded-2xl py-4 pl-12 pr-4 text-base focus:ring-2 focus:ring-primary/50 placeholder:text-coffee-bean/50 dark:placeholder:text-slate-400"
            placeholder="Search recipes (e.g. Oat Milk Latte)"
            type="text"
          />
        </div>
      </div>

      <RadioChips
        name="type"
        defaultValue="ALL"
        // onChange={handleChange}
        options={[
          { id: '1', label: COFFEE_METHODS.ALL.replaceAll('_', ' '), value: COFFEE_METHODS.ALL },
          { id: '2', label: COFFEE_METHODS.ESPRESSO.replaceAll('_', ' '), value: COFFEE_METHODS.ESPRESSO },
          { id: '3', label: COFFEE_METHODS.COLD_BREW.replaceAll('_', ' '), value: COFFEE_METHODS.COLD_BREW },
          { id: '4', label: COFFEE_METHODS.POUROVER.replaceAll('_', ' '), value: COFFEE_METHODS.POUROVER },
          { id: '5', label: COFFEE_METHODS.LATTE_ART.replaceAll('_', ' '), value: COFFEE_METHODS.LATTE_ART },
        ]}
      />
    </>
  );
};
