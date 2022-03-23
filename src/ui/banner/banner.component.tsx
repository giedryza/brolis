import { VFC } from 'react';

import { Props } from './banner.types';
import styles from './banner.module.scss';

export const Banner: VFC<Props> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
};
