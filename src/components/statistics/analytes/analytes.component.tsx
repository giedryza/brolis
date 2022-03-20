import { VFC } from 'react';

import { useCow } from 'domain/statistics/statistics.queries';

export const Analytes: VFC = () => {
  const { data: price = [] } = useCow('67388');

  console.log(price);

  return <div>analytes</div>;
};
