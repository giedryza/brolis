import { VFC } from 'react';

import { Graph, Filters } from './atoms';
import styles from './milk-amount.module.scss';

export const MilkAmount: VFC = () => {
  return (
    <div className={styles.container}>
      <Graph />
      <Filters />
    </div>
  );
};
