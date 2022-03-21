import { NextPage } from 'next';

import { AppHead } from 'ui';
import { MainLayout } from 'layouts';
import { Ssc } from 'components/statistics';

const SscPage: NextPage = () => {
  return (
    <>
      <AppHead title="SSC" />

      <MainLayout>
        <Ssc />
      </MainLayout>
    </>
  );
};

export default SscPage;
