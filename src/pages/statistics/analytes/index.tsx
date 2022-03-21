import { NextPage } from 'next';

import { AppHead } from 'ui';
import { MainLayout } from 'layouts';
import { Analytes } from 'components/statistics';

const AnalytesPage: NextPage = () => {
  return (
    <>
      <AppHead title="Analytes" />

      <MainLayout>
        <Analytes />
      </MainLayout>
    </>
  );
};

export default AnalytesPage;
