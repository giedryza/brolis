import { NextPage } from 'next';

import { AppHead } from 'ui';
import { MainLayout } from 'layouts';
import { MilkAmount } from 'components/statistics';

const MilkAmountPage: NextPage = () => {
  return (
    <>
      <AppHead title="Milk amount" />

      <MainLayout>
        <MilkAmount />
      </MainLayout>
    </>
  );
};

export default MilkAmountPage;
