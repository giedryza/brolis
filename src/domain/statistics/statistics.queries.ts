import { statisticsKeys } from 'domain/statistics/statistics.keys';
import { useQuery } from 'react-query';

import { PricesFilters } from './statistics.types';
import { adapters } from './statistics.adapters';

export const usePrices = (filters: PricesFilters = {}) => {
  const query = useQuery(statisticsKeys.list(filters), adapters.getPrices);

  return query;
};
