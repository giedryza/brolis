import { NextPage } from 'next';

import { AppHead } from 'ui';
import { MainLayout } from 'layouts';
import { Residuals } from 'components/statistics';

const ResidualsPage: NextPage = () => {
  return (
    <>
      <AppHead title="Residuals" />

      <MainLayout>
        <Residuals />
      </MainLayout>
    </>
  );
};

export default ResidualsPage;
