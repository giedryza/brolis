import { FC } from 'react';

import { Footer } from 'components/footer';

import styles from './main.module.scss';

export const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
