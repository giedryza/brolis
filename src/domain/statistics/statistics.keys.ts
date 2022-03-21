export const statisticsKeys = {
  all: ['statistics'] as const,
  lists: () => [...statisticsKeys.all, 'list'] as const,
  list: (...args: any[]) => [...statisticsKeys.lists(), ...args] as const,
  details: () => [...statisticsKeys.all, 'detail'] as const,
  detail: (id: number) => [...statisticsKeys.details(), id] as const,
};
