import { Fragment } from 'react';

export interface iItem {
  name: string;
  key: number;
}

export type iItems = iItem[];

export interface iList {
  items: iItem[];
}

const List = ({ items }: iList): any => {
  return (
    <Fragment>
      {items.slice(0, 10).map(({ name, key }) => (
        <li key={key}>{name}</li>
      ))}
    </Fragment>
  );
};

export default List;
