import { useQuery } from 'react-query';

import { statisticsKeys } from 'domain/statistics/statistics.keys';

import { CowsFilters } from './statistics.types';
import { adapters } from './statistics.adapters';

export const useCows = (filters: CowsFilters = {}) => {
  const query = useQuery(
    statisticsKeys.list('cows', filters),
    adapters.getCows
  );

  return query;
};

export const useCow = (id: number) => {
  const query = useQuery(statisticsKeys.detail(id), () => adapters.getCow(id));

  return query;
};

export const useMilking = () => {
  const query = useQuery(statisticsKeys.list('milking'), adapters.getMilking);

  return query;
};

export const useResiduals = () => {
  const query = useQuery(
    statisticsKeys.list('residuals'),
    adapters.getResiduals
  );

  return query;
};
