import { atom } from "recoil";
import { _INVOICES } from "../BACKEND";
import { IInvoice } from "../interfaces/invoice";

// Recoil states
const invoiceState = atom<IInvoice>({
  key: "invoiceState",
  default: {
    title: "",
    items: [],
  },
});

const invoiceListState = atom<Array<IInvoice>>({
  key: "invoiceListstate",
  default: _INVOICES as Array<IInvoice>,
});

export { invoiceState, invoiceListState };
