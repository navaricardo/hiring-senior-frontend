import { FunctionComponent } from "react";
import InvoiceForm from "../components/CreateInvoice/InvoiceForm";
import InvoiceTotal from "../components/CreateInvoice/InvoiceTotal";
import InvoiceList from "../components/InvoiceList/InvoiceList";

const Home = (): JSX.Element => {
  return (
    <main className="section">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column">
            <InvoiceForm />
            <InvoiceTotal />
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
