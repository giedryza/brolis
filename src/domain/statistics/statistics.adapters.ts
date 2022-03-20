import { parse } from 'papaparse';

import { endpoints } from 'config';
import { apiRequest } from 'tools/services';

import { Price } from './statistics.types';

export const adapters = {
  getPrices: async () => {
    const response = await apiRequest<string>(endpoints.prices, {
      responseType: 'text',
    });

    const { data } = parse<Price>(response, { header: true });

    return data;
  },
};
