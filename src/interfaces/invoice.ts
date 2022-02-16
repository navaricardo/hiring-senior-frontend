import { MouseEvent } from "react";

// Types and Interfaces
export interface IInvoiceItem {
  description: string;
  amount: string;
  currency: string;
}

export interface IInvoice {
  title: string;
  items: Array<IInvoiceItem>;
}
