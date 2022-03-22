import type { NextPage } from 'next';

import { MainLayout } from 'layouts';
import { AppHead } from 'ui';
import { Banner } from 'components/banner';

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
