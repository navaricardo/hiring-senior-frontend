import { FunctionComponent } from "react";
import { ISeed, SEED } from "../BACKEND";
import CreateInvoice from "../components/CreateInvoice";
import InvoiceList from "../components/InvoiceList";
import { useLocalStorage } from "../hooks";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [invoices, setInvoices] = useLocalStorage<Array<ISeed>>(
    "invoices",
    SEED
  );

  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex py-6 gap-8 sm:px-0">
          <div className="border-2 border-dashed border-gray-300 w-1/2">
            <InvoiceList invoices={invoices} />
          </div>
          <div className="border-2 border-dashed border-gray-300 w-1/2">
            <CreateInvoice setInvoices={setInvoices} />
          </div>
        </div>
        {/* /End replace */}
      </div>
    </main>
  );
};

export default Home;
