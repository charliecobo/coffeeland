import type { RouteObject } from 'react-router';

import { CoffeeList } from './pages/coffee-list';
import { CoffeeDetail } from './pages/coffee-detail';

export const COFFEE_ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <CoffeeList />,
  },
  {
    path: '/:id',
    element: <CoffeeDetail />,
  },
];
