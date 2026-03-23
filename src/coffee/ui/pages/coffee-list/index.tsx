import { Suspense, useEffect, useState } from 'react';

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

      <ErrorBoundaryCoffeeList onReset={handleRetry}>
        <Suspense fallback={<div>⏳ Loading coffee...</div>}>
          <List<Coffee>
            title="Popular Recipes"
            headerButtonText="View All"
            onClickHeaderButton={() => console.log('Click View All')}
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
