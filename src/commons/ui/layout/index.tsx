import { Outlet } from 'react-router';

import { Footer } from './footer';
import { Header } from './header';

export const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};
