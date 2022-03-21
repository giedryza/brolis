import { NextPage } from 'next';

import { AppHead } from 'ui';
import { MainLayout } from 'layouts';
import { MilkAmount2 } from 'components/statistics';

const MilkAmount2Page: NextPage = () => {
  return (
    <>
      <AppHead title="Milk amount 2" />

      <MainLayout>
        <MilkAmount2 />
      </MainLayout>
    </>
  );
};

export default MilkAmount2Page;
