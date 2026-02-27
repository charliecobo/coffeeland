import { useLocation } from 'react-router';

export const CoffeeDetail = () => {
  const { pathname } = useLocation();

  console.log({ pathname });

  return (
    <div>
      <span>Coffee Detail</span>
    </div>
  );
};
