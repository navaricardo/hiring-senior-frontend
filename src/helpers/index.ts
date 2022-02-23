import currency from "currency.js";

//  Sum all numbers in an Array
export const sumNumbers = (values: Array<number>) =>
  values.reduce((previous, current) => (previous += current));

// Parse currency decimals
export const formatAsCurrency = (value: string | number): number =>
  currency(value).value;
