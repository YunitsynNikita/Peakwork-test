import * as React from 'react';

import { Airport } from '@app/types/airports';

interface Props {
  item: Airport;
  clasName?: string;
}

const Item = ({ item, clasName }: Props) => (
  <div className="airport mb--8">
    <span>{item.city}</span>
    <span>{item.name}</span>
    <span>{item.iata}</span>
  </div>
);

export { Item };
