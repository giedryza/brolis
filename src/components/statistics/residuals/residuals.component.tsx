import { VFC } from 'react';

import { Graph } from './atoms';
import styles from './residuals.module.scss';

export const Residuals: VFC = () => {
  return (
    <div className={styles.container}>
      <Graph />
    </div>
  );
};
