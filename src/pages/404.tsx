import type { NextPage } from 'next';

import { MainLayout } from 'layouts';
import { AppHead } from 'ui';
import { Banner } from 'components/banner';

const Custom404: NextPage = () => {
  return (
    <>
      <AppHead />

      <MainLayout>
        <Banner title="404 - Page Not Found" />
      </MainLayout>
    </>
  );
};

export default Custom404;