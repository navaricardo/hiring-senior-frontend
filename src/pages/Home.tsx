import { FunctionComponent } from "react";
import CreateInvoice from "../components/CreateInvoice/CreateInvoice";
import InvoiceList from "../components/InvoiceList";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <main>
      <div className="max-w-full mx-auto p-16">
        <div className="flex gap-8 sm:px-0">
          <div className="border-2 border-dashed border-gray-300 w-1/2">
            <InvoiceList />
          </div>
          <div className="border-2 border-dashed border-gray-300 w-1/2">
            <CreateInvoice />
          </div>
        </div>
        {/* /End replace */}
      </div>
    </main>
  );
};

export default Home;
