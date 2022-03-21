import { VFC } from 'react';

import { Graph } from './atoms';
import styles from './analytes.module.scss';

export const Analytes: VFC = () => {
  return (
    <div className={styles.container}>
      <Graph />
    </div>
  );
};
