import { atom } from "recoil";
import { IInvoice, IInvoiceItem } from "../interfaces";

// Recoil states
const invoiceItemState = atom<IInvoiceItem>({
  key: "invoiceItemState",
  default: {
    description: "",
    amount: "",
    currency: "",
  },
});

const invoiceState = atom<IInvoice>({
  key: "invoiceState",
  default: {
    title: "",
    items: [],
  },
});

const invoiceListState = atom<Array<IInvoice>>({
  key: "invoiceListstate",
  default: [],
});

const invoiceItemsListState = atom<Array<IInvoiceItem>>({
  key: "invoiceItemsListState",
  default: [],
});

export {
  invoiceItemState,
  invoiceState,
  invoiceListState,
  invoiceItemsListState,
};
