export const fiveDayForcast = (data: any) => {
  return [data[0], data[8], data[16], data[32]];
};
