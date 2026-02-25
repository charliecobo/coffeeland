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

      <div className="flex gap-3 px-4 pb-6 overflow-x-auto no-scrollbar">
        <button className="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/50 hover:text-white">
          All
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-coffee-cream dark:bg-primary/10 text-coffee-bean dark:text-slate-200 font-medium text-sm hover:bg-primary/50 hover:text-white">
          Espresso
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-coffee-cream dark:bg-primary/10 text-coffee-bean dark:text-slate-200 font-medium text-sm hover:bg-primary/50 hover:text-white">
          Cold Brew
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-coffee-cream dark:bg-primary/10 text-coffee-bean dark:text-slate-200 font-medium text-sm hover:bg-primary/50 hover:text-white">
          Pourover
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-coffee-cream dark:bg-primary/10 text-coffee-bean dark:text-slate-200 font-medium text-sm hover:bg-primary/50 hover:text-white">
          Latte Art
        </button>
      </div>
    </>
  );
};
