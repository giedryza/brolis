export const parseCommaFloat = (value: string): string =>
  value.includes(',') ? value.replace(',', '.') : value;
