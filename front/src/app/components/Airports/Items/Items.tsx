import * as React from 'react';

import { Item } from './Item/Item';
import { Airport } from '@app/types/airports';

interface Props {
  items: Airport[];
}

const Items: any = ({ items }: Props) => (
  <>
    {items.map((item) => (
      <Item item={item} key={item.id} />
    ))}
  </>
);

export { Items };
