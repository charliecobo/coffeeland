import { useEffect } from 'react';

import { http } from './commons/core/services/http';
import { FilterList } from './commons/ui/components/filter-list';

function App() {
  useEffect(() => {
    http.get('/resource').then(res => {
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <FilterList />

      <div className="px-4 pb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-coffee-bean dark:text-slate-100">Popular Recipes</h2>
        <button className="text-primary text-sm font-semibold">View All</button>
      </div>
    </>
  );
}

export default App;
