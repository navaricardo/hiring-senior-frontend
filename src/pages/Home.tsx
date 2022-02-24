import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import InvoiceForm from "../components/CreateInvoice/InvoiceForm";
import InvoiceTotal from "../components/CreateInvoice/InvoiceTotal";
import InvoiceList from "../components/InvoiceList/InvoiceList";
import useCurrencies from "../hooks/useCurrency";
import { currencyListState } from "../store";

const Home = (): JSX.Element => {
  // Hooks
  const setCurrencyList = useSetRecoilState(currencyListState);
  const { currencies } = useCurrencies();

  // Initialization
  const hasCurrencies = currencies.length > 0;

  // Side-effects
  useEffect(() => {
    if (hasCurrencies) setCurrencyList(currencies);

    // we dont need to track setCurrencyList
  }, [currencies, hasCurrencies]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="section">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column">
            <InvoiceTotal />
            <InvoiceForm />
          </div>
          <div className="column">
            <InvoiceList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
