import { FunctionComponent } from "react";
import CreateInvoiceForm from "../components/CreateInvoice/CreateInvoiceForm";
import InvoiceList from "../components/InvoiceList/InvoiceList";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <main className="section">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column">
            <CreateInvoiceForm />
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
