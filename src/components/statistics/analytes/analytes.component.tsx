import { VFC } from 'react';

import { Filters, Graph } from './atoms';
import styles from './analytes.module.scss';

export const Analytes: VFC = () => {
  return (
    <div className={styles.container}>
      <Graph />
      <Filters />
    </div>
  );
};
