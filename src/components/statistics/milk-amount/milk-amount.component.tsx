import { VFC } from 'react';

import { Graph } from './atoms';
import styles from './milk-amount.module.scss';

export const MilkAmount: VFC = () => {
  return (
    <div className={styles.container}>
      <Graph />
    </div>
  );
};
