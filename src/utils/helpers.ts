// @ts-ignore
export const limitNumOfElements = (arr: any, limit: number) =>
  arr.filter((item: unknown, index: number) => index < limit);
