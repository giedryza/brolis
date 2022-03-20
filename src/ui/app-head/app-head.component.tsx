import { VFC } from 'react';
import Head from 'next/head';

import { Props } from './app-head.types';
import { APP_NAME } from './app-head.constants';

export const AppHead: VFC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{[APP_NAME, title].filter(Boolean).join(' | ')}</title>

      <meta
        name="description"
        content="Brolis Sensor Technology is a dedicated sensor technology company developing next generation photonic microsensors."
      />
    </Head>
  );
};
