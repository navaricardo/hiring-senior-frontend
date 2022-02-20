import { FunctionComponent } from "react";
import CreateInvoiceForm from "../components/CreateInvoice/CreateInvoiceForm";
import InvoiceList from "../components/InvoiceList/InvoiceList";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <main>
      <div className="max-w-full mx-auto p-16">
        <div className="flex gap-8 sm:px-0">
          <div className="border-2 border-dashed border-gray-300 p-8 w-1/2">
            <InvoiceList />
          </div>
          <div className="border-2 border-dashed border-gray-300 p-8 w-1/2">
            <CreateInvoiceForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
