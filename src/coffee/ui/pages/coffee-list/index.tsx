import { FilterList } from '../../../../commons/ui/components/filter-list';

export const CoffeeList = () => {
  return (
    <>
      <FilterList />

      <div className="px-4 pb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-coffee-bean dark:text-slate-100">Popular Recipes</h2>
        <button className="text-primary text-sm font-semibold">View All</button>
      </div>
    </>
  );
};
