import { use, type ComponentType, type JSX } from 'react';

interface Props<T> {
  fetchData: Promise<T[]>;
  RenderItem: ComponentType<T>;
  getKey: (item: T) => string | number;
}

export const List = <T,>({ fetchData, getKey, RenderItem }: Props<T>): JSX.Element => {
  const dataList = use(fetchData);

  return (
    <div className="flex flex-col gap-4 px-4 pb-24">
      {dataList.map(item => (
        <RenderItem key={getKey(item)} {...item} />
      ))}
    </div>
  );
};
