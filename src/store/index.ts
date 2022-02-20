import { atom } from "recoil";
import { IInvoice } from "../interfaces";

const defaultInvoiceList = [
  {
    title: "Titulo",
    total: 0,
    items: [
      {
        description: "Desc 1",
        amount: 300,
        currency: {
          name: "MXN",
          value: 345.88,
        },
      },
      {
        description: "Desc 2",
        amount: 15,
        currency: {
          name: "CAD",
          value: 5.88,
        },
      },
    ],
  },
  {
    title: "Compañía S.A. de C.V.",
    total: 500,
    items: [
      {
        description: "Articulo de 600ml",
        amount: 10.5,
        currency: {
          name: "AFN",
          value: 91.50273,
        },
      },
    ],
  },
  {
    title: "Compañía S.A. de C.V.",
    total: 699,
    items: [
      {
        description: "Articulo de 600ml",
        amount: 10.5,
        currency: {
          name: "AMD",
          value: 478.00776,
        },
      },
      {
        description: "Articulo de 300ml",
        amount: 7.99,
        currency: {
          name: "AED",
          value: 3.67299,
        },
      },
    ],
  },
];

// Recoil states
const invoiceListState = atom<Array<IInvoice>>({
  key: "invoiceListstate",
  default: defaultInvoiceList,
});

export { invoiceListState };
