import { VFC } from 'react';

import { Graph } from './atoms';
import styles from './ssc.module.scss';

export const Ssc: VFC = () => {
  return (
    <div className={styles.container}>
      <Graph />
    </div>
  );
};
