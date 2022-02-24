// Default object to append invoice item to inovoice form
export const DEFAULT_INVOICE_ITEM = {
  description: "",
  amount: "",
  currency: "",
};

// Default object to initialize inovoice form
export const INVOICE_FORM_DEFAULT_VALUES = {
  title: "",
  items: [
    {
      amount: "",
      description: "",
      currency: "",
    },
  ],
};

// Enum for hard coded currencies
export enum Currencies {
  USD = "USD",
}

// API key SIMULATE PRIVATE by not exporting
const API_KEY = "a7719a00-9206-11ec-8132-2fe9ee2125a4";

// Currency api url
export const API_URL = `https://freecurrencyapi.net/api/v2/latest?apikey=${API_KEY}`;
