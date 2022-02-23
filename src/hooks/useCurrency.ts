import { useEffect, useState } from "react";
import { ICurrency } from "../interfaces";
import useFetch from "./useFetch";

const API_URL =
  "https://freecurrencyapi.net/api/v2/latest?apikey=a7719a00-9206-11ec-8132-2fe9ee2125a4";

type APICurrencies = { [s: string]: number };

const useCurrencies = () => {
  const { data, error } = useFetch<APICurrencies>(API_URL);

  const [currencies, setCurrencies] = useState<Array<ICurrency>>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const currencyData = data?.data;

  useEffect(() => {
    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    if (currencyData) {
      const currenciesEntries: Array<[string, number]> = Object.entries(
        data.data
      );
      const parsedCurrencies: Array<ICurrency> = currenciesEntries.map(
        (currency) => ({
          name: currency[0],
          value: currency[1],
        })
      );
      const orderedCurrencies = parsedCurrencies.sort(
        ({ name: prevName }, { name: currName }) =>
          prevName > currName ? 1 : -1
      );
      setCurrencies(orderedCurrencies);
      setLoading(false);
    }
  }, [currencyData, error, data?.data]);

  return { currencies, error, loading };
};

export default useCurrencies;
