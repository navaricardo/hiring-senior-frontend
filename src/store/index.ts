import { atom, DefaultValue } from "recoil";
import { TAtomEffect, ICurrency, IInvoice } from "../entities";

// effects
const localStorageEffect: TAtomEffect =
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
const currencyListState = atom<Array<ICurrency>>({
  key: "currencyListState",
  default: [],
});

const invoiceListState = atom<Array<IInvoice>>({
  key: "invoiceListstate",
  default: [],
  effects: [localStorageEffect<Array<IInvoice>>("invoice_list")],
});

const invoiceTotalState = atom<number>({
  key: "invoiceTotalState",
  default: 0,
});

export { currencyListState, invoiceListState, invoiceTotalState };
