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

export interface CowsFilters {}
