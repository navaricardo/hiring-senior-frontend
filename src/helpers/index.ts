import currency from "currency.js";
import { ICurrency, IFormInvoice, IInvoice } from "../entities";

//  Sum all numbers in an Array
export const sumNumbers = (values: Array<number>) =>
  values.reduce((previous, current) => (previous += current));

// Parse value as string with currency decimals
export const formatAsCurrency = (value: string | number): string =>
  currency(value).toString();

// Parse data transfer object as Invoice
export const createInvoice = (
  values: IFormInvoice,
  total: number
): IInvoice => {
  const items = values.items.map((item) => {
    const currencyObject = JSON.parse(item.currency);
    const currency: ICurrency = {
      name: currencyObject.label,
      value: currencyObject.value,
    };
    return {
      ...item,
      amount: parseFloat(item.amount),
      currency: { ...currency },
    };
  });
  return {
    ...values,
    total,
    items,
  } as IInvoice;
};
