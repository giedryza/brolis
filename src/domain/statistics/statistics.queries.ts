import { statisticsKeys } from 'domain/statistics/statistics.keys';
import { useQuery } from 'react-query';

import { CowsFilters } from './statistics.types';
import { adapters } from './statistics.adapters';

export const useCows = (filters: CowsFilters = {}) => {
  const query = useQuery(statisticsKeys.list(filters), adapters.getCows);

  return query;
};
