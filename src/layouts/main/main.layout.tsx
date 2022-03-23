import { FC } from 'react';

import { Footer } from 'components/footer';
import { Header } from 'components/header';

import styles from './main.module.scss';

export const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
