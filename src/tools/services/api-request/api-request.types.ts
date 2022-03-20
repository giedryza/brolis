export type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export type ResponseType = 'json' | 'text';

export interface Options {
  method?: Method;
  responseType?: ResponseType;
}
