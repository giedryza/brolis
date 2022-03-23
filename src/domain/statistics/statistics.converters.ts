import { Residual } from 'domain/statistics/statistics.types';

export const residualConverter = (residual: Residual) => ({
  ...residual,
  ...(residual.price_residuals >= 0 && {
    price_residuals_pos: residual.price_residuals,
  }),
  ...(residual.price_residuals < 0 && {
    price_residuals_neg: residual.price_residuals,
  }),
  ...(residual.milk_residuals >= 0 && {
    milk_residuals_pos: residual.milk_residuals,
  }),
  ...(residual.milk_residuals < 0 && {
    milk_residuals_neg: residual.milk_residuals,
  }),
});
