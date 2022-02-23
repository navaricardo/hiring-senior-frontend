import { atom } from "recoil";
import { IInvoice } from "../interfaces";

// Recoil states
const invoiceListState = atom<Array<IInvoice>>({
  key: "invoiceListstate",
  default: [],
});

const invoiceTotalState = atom<number>({
  key: "invoiceTotalState",
  default: 0,
});

export { invoiceListState, invoiceTotalState };
