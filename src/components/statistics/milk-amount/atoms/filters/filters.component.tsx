import { ChangeEvent, VFC } from 'react';

import { Button, TextInput } from 'ui';
import { useStatisticsContext } from 'domain/statistics/statistics.context';

import styles from './filters.module.scss';

export const Filters: VFC = () => {
  const { state, dispatch } = useStatisticsContext();

  const onFilter = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SET_FILTERS',
      payload: { [target.name]: +target.value },
    });
  };

  const onReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className={styles.container}>
      <TextInput
        name="dayFrom"
        placeholder="Day from"
        type="number"
        value={state.filters.dayFrom || ''}
        onChange={onFilter}
      />
      <TextInput
        name="dayTo"
        placeholder="Day to"
        type="number"
        value={state.filters.dayTo || ''}
        onChange={onFilter}
      />
      <Button label="Reset" attributes={{ onClick: onReset }} />
    </div>
  );
};
