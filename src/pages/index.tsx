import type { NextPage } from 'next';

import { MainLayout } from 'layouts';
import { AppHead, Banner } from 'ui';

const Home: NextPage = () => {
  return (
    <>
      <AppHead />

      <MainLayout>
        <Banner title="Welcome" />
      </MainLayout>
    </>
  );
};

export default Home;
