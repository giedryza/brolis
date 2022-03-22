import { createContext, FC, useContext, useMemo, useReducer } from 'react';

interface Filters {
  dayFrom: number;
  dayTo: number;
}
type Action =
  | Readonly<{ type: 'SET_FILTERS'; payload: Partial<Filters> }>
  | Readonly<{ type: 'RESET' }>;
type Dispatch = (action: Action) => void;
type State = {
  filters: Filters;
};

const INITIAL_STATE: State = {
  filters: {
    dayFrom: 0,
    dayTo: 0,
  },
};

const StatisticsContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const statisticsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_FILTERS': {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    }
    case 'RESET': {
      return {
        ...state,
        filters: INITIAL_STATE.filters,
      };
    }
    default: {
      return state;
    }
  }
};

const StatisticsProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(statisticsReducer, INITIAL_STATE);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <StatisticsContext.Provider value={value}>
      {children}
    </StatisticsContext.Provider>
  );
};

const useStatisticsContext = () => {
  const context = useContext(StatisticsContext);

  if (context === undefined) {
    throw new Error('useStatistics must be used within a StatisticsProvider');
  }

  return context;
};

export { StatisticsProvider, useStatisticsContext };
