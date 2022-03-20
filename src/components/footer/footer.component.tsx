import { VFC } from 'react';

import styles from './footer.module.scss';

export const Footer: VFC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        &copy; Copyright {currentYear} Brolis Semiconductors
      </div>
    </footer>
  );
};
