import { VFC } from 'react';

import { useCows } from 'domain/statistics/statistics.queries';

export const Residuals: VFC = () => {
  const { data: prices = [] } = useCows();

  console.log(prices);

  return <div>residuals</div>;
};
