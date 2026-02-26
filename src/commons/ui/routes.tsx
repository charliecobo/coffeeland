import { createBrowserRouter, type RouteObject } from 'react-router';

import { Layout } from './layout';

import { Login } from '../../auth/ui/pages/login';

import { COFFEE_ROUTES } from '../../coffee/ui/routes';

const router: RouteObject[] = [
  {
    element: <Layout />,
    children: [...COFFEE_ROUTES],
  },
  {
    path: '/login',
    Component: Login,
  },
];

export const APP_ROUTES = createBrowserRouter(router);
