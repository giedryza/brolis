export interface Day {
  Cow: number;
  days: number;
  fat_fit_conc: number;
  fat_real_conc: number;
  fit_price: number;
  milk_fit_conc: number;
  milk_real_conc: number;
  protein_fit_conc: number;
  protein_real_conc: number;
  real_price: number;
}

export interface Milking {
  Fat_lab: number | null;
  Protein_lab: number | null;
  Milking_days: number;
}

export interface BaseResidual extends Day {
  price_residuals: number;
  milk_residuals: number;
}

export interface Residual extends BaseResidual {
  price_residuals_pos?: number;
  price_residuals_neg?: number;
  milk_residuals_pos?: number;
  milk_residuals_neg?: number;
}

export interface CowsFilters {}
