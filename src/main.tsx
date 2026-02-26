import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';

import { APP_ROUTES } from './commons/ui/routes';

if (process.env.MSW_ENABLED) {
  const { worker } = await import('./mocks/browser');
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={APP_ROUTES} />
  </StrictMode>
);
