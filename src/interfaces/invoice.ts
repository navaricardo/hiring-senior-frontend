export interface IInvoiceItem {
  description: string;
  amount: number;
  currency: string;
}

export interface IInvoice {
  title: string;
  items?: Array<IInvoiceItem>;
}
