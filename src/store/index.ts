import { atom, DefaultValue } from "recoil";
import { AtomEffect, IInvoice } from "../entities";

// effects
const localStorageEffect: AtomEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

// Recoil states
const invoiceListState = atom<Array<IInvoice>>({
  key: "invoiceListstate",
  default: [],
  effects: [localStorageEffect<Array<IInvoice>>("invoice_list")],
});

const invoiceTotalState = atom<number>({
  key: "invoiceTotalState",
  default: 0,
});

export { invoiceListState, invoiceTotalState };
