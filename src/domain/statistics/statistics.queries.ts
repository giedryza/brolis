import { useQuery } from 'react-query';

import { statisticsKeys } from './statistics.keys';
import { CowsFilters } from './statistics.types';
import { adapters } from './statistics.adapters';
import { residualConverter } from './statistics.converters';

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
    adapters.getResiduals,
    {
      select: (data) => data.map(residualConverter),
    }
  );

  return query;
};

export const useSsc = () => {
  const query = useQuery(statisticsKeys.list('ssc'), adapters.getSsc);

  return query;
};
