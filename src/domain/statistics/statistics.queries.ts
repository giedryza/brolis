import { useQuery } from 'react-query';

import { statisticsKeys } from './statistics.keys';
import { MilkingsFilters } from './statistics.types';
import { adapters } from './statistics.adapters';
import { milkingsFilter, residualConverter } from './statistics.converters';
import { useStatisticsContext } from './statistics.context';

export const useCows = () => {
  const query = useQuery(statisticsKeys.list('cows'), adapters.getCows);

  return query;
};

export const useCow = (id: number) => {
  const query = useQuery(statisticsKeys.detail(id), () => adapters.getCow(id));

  return query;
};

export const useMilking = (filters: MilkingsFilters = {}) => {
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

  const query = useMilking({
    dayFrom: filters.dayFrom,
    dayTo: filters.dayTo,
  });

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
