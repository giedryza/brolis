import { VFC } from 'react';

import { usePrices } from 'domain/statistics/statistics.queries';

export const Residuals: VFC = () => {
  const { data: prices = [] } = usePrices();

  console.log(prices);

  return <div>residuals</div>;
};
