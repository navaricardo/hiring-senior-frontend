import {
  FieldError,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { ICurrency } from "./general";

// Types
export type InvoiceError = {
  title?: FieldError | undefined;
  items?:
    | {
        description?: FieldError | undefined;
        amount?: FieldError | undefined;
        currency?: FieldError | undefined;
      }[]
    | undefined;
};

// Interfaces
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

export interface InvoiceItemProps {
  errors: InvoiceError;
  index: number;
  register: UseFormRegister<IFormInvoice>;
  remove: UseFieldArrayRemove;
}

export interface InvoiceItemsTableProps {
  items: Array<IInvoiceItem>;
  total: number;
}
