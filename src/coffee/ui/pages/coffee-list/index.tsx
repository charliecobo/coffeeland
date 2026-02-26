import { useEffect } from 'react';
import { Card } from '../../../../commons/ui/components/card';
import { FilterList } from '../../../../commons/ui/components/filter-list';
import { List } from '../../../../commons/ui/components/list';
import { http } from '../../../../commons/core/services/http';

export const CoffeeList = () => {
  useEffect(() => {
    http.get('/coffee').then(res => {
      console.log(res.data);
    });
  }, []);

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

      <List>
        <Card />
      </List>
    </>
  );
};
