import type { NextPage } from 'next';

import { MainLayout } from 'layouts';
import { AppHead } from 'ui';

const Home: NextPage = () => {
  return (
    <>
      <AppHead />

      <MainLayout />
    </>
  );
};

export default Home;
