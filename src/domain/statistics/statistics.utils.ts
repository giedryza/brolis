import { Milking, Filters, Day } from './statistics.types';

const filterMilkingByDayFrom = (dayFrom: number) => (milking: Milking) =>
  milking.Milking_days >= dayFrom;

const filterMilkingByDayTo = (dayTo: number) => (milking: Milking) =>
  milking.Milking_days < dayTo;

const filterCowByDayFrom = (dayFrom: number) => (day: Day) =>
  day.days >= dayFrom;

const filterCowByDayTo = (dayTo: number) => (day: Day) => day.days < dayTo;

export const milkingsFilter = (
  milkings: Milking[],
  { dayFrom, dayTo }: Filters
) => {
  let filtered = milkings;

  if (dayFrom) {
    filtered = filtered.filter(filterMilkingByDayFrom(dayFrom));
  }
  if (dayTo) {
    filtered = filtered.filter(filterMilkingByDayTo(dayTo));
  }

  return filtered;
};

export const cowFilter = (days: Day[], { dayFrom, dayTo }: Filters) => {
  let filtered = days;

  if (dayFrom) {
    filtered = filtered.filter(filterCowByDayFrom(dayFrom));
  }
  if (dayTo) {
    filtered = filtered.filter(filterCowByDayTo(dayTo));
  }

  return filtered;
};
