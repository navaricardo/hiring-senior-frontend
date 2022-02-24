import currency from "currency.js";

//  Sum all numbers in an Array
export const sumNumbers = (values: Array<number>) =>
  values.reduce((previous, current) => (previous += current));

// Parse value as string with currency decimals
export const formatAsCurrency = (value: string | number): string =>
  currency(value).toString();
