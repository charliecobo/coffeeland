import { Suspense, useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';

import { Card } from '../../../../commons/ui/components/card';
import { FilterList } from '../../../../commons/ui/components/filter-list';
import { List } from '../../../../commons/ui/components/list';

import { coffeeService } from '../../../core/services/coffee.service';
import type { Coffee, GetCoffeListParams } from '../../../core/interfaces';
import ErrorBoundaryCoffeeList from '../../errors/coffee-list';
import { COFFEE_METHODS } from '../../../constants';

export const CoffeeList = () => {
  const [retryKey, setRetryKey] = useState(0);
  const [filters, setFilters] = useState<GetCoffeListParams>({
    term: '',
    method: COFFEE_METHODS.ALL,
  });

  const handleRetry = () => {
    setRetryKey(prev => prev + 1);
  };

  const fetchCoffee = coffeeService.getCoffeeList({ ...filters });

  return (
    <>
      <FilterList setFilters={setFilters} filters={filters} />

      <div className="px-4 pb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-coffee-bean dark:text-slate-100">Popular Recipes</h2>
        <button className="text-primary text-sm font-semibold">View All</button>
      </div>

      <ErrorBoundaryCoffeeList onReset={handleRetry}>
        <Suspense fallback={<div>⏳ Loading coffee...</div>}>
          <List<Coffee>
            key={retryKey}
            fetchData={fetchCoffee}
            RenderItem={data => <Card {...data} />}
            getKey={post => post.id}
          />
        </Suspense>
      </ErrorBoundaryCoffeeList>
    </>
  );
};
