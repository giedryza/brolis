import { useState } from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import { queryClientConfig } from 'tools/services';
import { StatisticsProvider } from 'domain/statistics/statistics.context';

import 'styles/index.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <StatisticsProvider>
          <Component {...pageProps} />
        </StatisticsProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
