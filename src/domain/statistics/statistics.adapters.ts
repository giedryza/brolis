import { parse } from 'papaparse';

import { endpoints } from 'config';
import { apiRequest } from 'tools/services';

import { Cow } from './statistics.types';

export const adapters = {
  getCows: async () => {
    const response = await apiRequest<string>(endpoints.cows, {
      responseType: 'text',
    });

    const { data } = parse<Cow>(response, {
      header: true,
      dynamicTyping: true,
    });

    return data;
  },
};
