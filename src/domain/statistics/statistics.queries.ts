import { useQuery } from 'react-query';

import { statisticsKeys } from './statistics.keys';
import { Filters } from './statistics.types';
import { adapters } from './statistics.adapters';
import { residualConverter } from './statistics.converters';
import { milkingsFilter, cowFilter } from './statistics.utils';
import { useStatisticsContext } from './statistics.context';

export const useCows = () => {
  const query = useQuery(statisticsKeys.list('cows'), adapters.getCows);

  return query;
};

export const useCow = (id: number, filters: Filters = {}) => {
  const query = useQuery(
    statisticsKeys.list('cow', id, filters),
    () => adapters.getCow(id),
    {
      select: (cow) => cowFilter(cow, filters),
    }
  );

  return query;
};

export const useActiveCow = (id: number) => {
  const {
    state: { filters },
  } = useStatisticsContext();

  const query = useCow(id, filters);

  return query;
};

export const useMilking = (filters: Filters = {}) => {
  const query = useQuery(
    statisticsKeys.list('milking', filters),
    adapters.getMilking,
    {
      select: (milkings) => milkingsFilter(milkings, filters),
    }
  );

  return query;
};

export const useActiveMilking = () => {
  const {
    state: { filters },
  } = useStatisticsContext();

  const query = useMilking(filters);

  return query;
};

export const useFarmMilking = () => {
  const query = useQuery(
    statisticsKeys.list('farm-milking'),
    adapters.getFarmMilking
  );

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
