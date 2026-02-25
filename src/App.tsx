import { useEffect } from 'react';

import { http } from './commons/core/services/http';
import { FilterList } from './commons/ui/components/filter-list';

import { Header } from './commons/ui/layout/header';
import { Footer } from './commons/ui/layout/footer';

function App() {
  useEffect(() => {
    http.get('/resource').then(res => {
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <Header />

      <FilterList />

      it

      <Footer />
    </>
  );
}

export default App;
