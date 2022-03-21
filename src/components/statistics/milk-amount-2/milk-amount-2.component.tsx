import { VFC } from 'react';

import { Graph } from './atoms';
import styles from './milk-amount-2.module.scss';

export const MilkAmount2: VFC = () => {
  return (
    <div className={styles.container}>
      <Graph />
    </div>
  );
};
