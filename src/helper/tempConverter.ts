export const celsiusConverter = (temp: number) => {
  let celc = temp - 273.15;
  let res = Math.round(celc);
  return res;
};

export const fahrenheitConverter = (temp: number) => {
  let calc = (temp - 273.15) * 1.8 + 32;
  let res = Math.round(calc);
  return res;
};
