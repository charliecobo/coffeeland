import { use, type ComponentType, type JSX } from 'react';

interface Props<T> {
  title: string;
  headerButtonText: string;
  onClickHeaderButton: () => void;
  fetchData: Promise<T[]>;
  RenderItem: ComponentType<T>;
  getKey: (item: T) => string | number;
}

export const List = <T,>({
  title,
  fetchData,
  getKey,
  RenderItem,
  headerButtonText,
  onClickHeaderButton,
}: Props<T>): JSX.Element => {
  const dataList = use(fetchData);

  return (
    <>
      <div className="px-4 pb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-coffee-bean dark:text-slate-100">{title}</h2>
        <button className="text-primary text-sm font-semibold" onClick={onClickHeaderButton}>
          {headerButtonText}
        </button>
      </div>
      <div className="flex flex-col gap-4 px-4 pb-24">
        {dataList.map(item => (
          <RenderItem key={getKey(item)} {...item} />
        ))}
      </div>
    </>
  );
};
