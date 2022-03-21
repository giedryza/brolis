import { parse } from 'papaparse';

import { endpoints } from 'config';
import { apiRequest } from 'tools/services';
import { parseCommaFloat } from 'tools/utils';

import { Day, Milking, BaseResidual } from './statistics.types';

export const adapters = {
  getCows: async () => {
    const response = await apiRequest<string>(endpoints.cows.all, {
      responseType: 'text',
    });

    const { data } = parse<Day>(response, {
      header: true,
      dynamicTyping: true,
    });

    return data;
  },

  getCow: async (id: number) => {
    const response = await apiRequest<string>(
      endpoints.cows.one.replace(':id', `${id}`),
      {
        responseType: 'text',
      }
    );

    const { data } = parse<Day>(response, {
      header: true,
      dynamicTyping: true,
      transform: parseCommaFloat,
    });

    return data;
  },

  getMilking: async () => {
    const response = await apiRequest<string>(endpoints.milking, {
      responseType: 'text',
    });

    const { data } = parse<Milking>(response, {
      header: true,
      dynamicTyping: true,
      transform: parseCommaFloat,
    });

    return data;
  },

  getResiduals: async () => {
    const response = await apiRequest<string>(endpoints.residuals, {
      responseType: 'text',
    });

    const { data } = parse<BaseResidual>(response, {
      header: true,
      dynamicTyping: true,
      transform: parseCommaFloat,
    });

    return data;
  },
};
