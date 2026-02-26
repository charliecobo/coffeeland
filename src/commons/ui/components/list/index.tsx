import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const List: FC<Props> = ({ children }) => {
  return <div className="flex flex-col gap-4 px-4 pb-24">{children}</div>;
};
