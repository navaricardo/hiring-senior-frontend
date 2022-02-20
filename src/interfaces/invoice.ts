// Types and Interfaces
export interface ICurrency {
  name: string;
  value: number;
}

export interface IInvoiceItem {
  description: string;
  amount: number;
  currency: ICurrency;
}

export interface IInvoice {
  title: string;
  total: number;
  items: Array<IInvoiceItem>;
}
