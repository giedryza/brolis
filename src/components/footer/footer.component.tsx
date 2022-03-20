import { VFC } from 'react';

import styles from './footer.module.scss';

export const Footer: VFC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        &copy; Copyright Brolis Semiconductors
      </div>
    </footer>
  );
};
