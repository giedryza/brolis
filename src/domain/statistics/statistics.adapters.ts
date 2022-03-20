import { parse } from 'papaparse';

import { endpoints } from 'config';
import { apiRequest } from 'tools/services';

import { Day } from './statistics.types';

export const adapters = {
  getCows: async () => {
    const response = await apiRequest<string>(endpoints.cows.all, {
      responseType: 'text',
    });

    const { data } = parse<Day>(response, {
      header: true,
    });

    return data;
  },

  getCow: async (id: string) => {
    const response = await apiRequest<string>(
      endpoints.cows.one.replace(':id', id),
      {
        responseType: 'text',
      }
    );

    const { data } = parse<Day>(response, {
      header: true,
    });

    return data;
  },
};
