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

export interface IFormInvoiceItem {
  description: string;
  amount: string;
  currency: string;
}

export interface IFormInvoice {
  title: string;
  items: Array<IFormInvoiceItem>;
}
