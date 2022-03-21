import { unreachable } from 'tools/utils';

import { Options, ResponseType } from './api-request.types';

const getResponseData = (response: Response, responseType: ResponseType) => {
  switch (responseType) {
    case 'json':
      return response.json();
    case 'text':
      return response.text();
    default:
      return unreachable(responseType);
  }
};

export const apiRequest = async <Data = any>(
  endpoint: string,
  { method = 'GET', responseType = 'json' }: Options = {}
): Promise<Data> => {
  const { href } = new URL(endpoint, process.env.NEXT_PUBLIC_HOST_CLIENT);

  const response = await fetch(href, {
    method,
  });

  const data = await getResponseData(response, responseType);

  if (!response.ok) {
    const { statusText } = response;

    throw new Error(statusText);
  }

  return data as Data;
};
