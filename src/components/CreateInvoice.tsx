import { FunctionComponent } from "react";
import { ISeed, SEED } from "../BACKEND";

interface CreateInvoiceProps {
  setInvoices: (invoices: any) => void;
}

const CreateInvoice: FunctionComponent<CreateInvoiceProps> = ({
  setInvoices,
}) => {
  const addInvoice = () => {
    setInvoices((prevInvoices: Array<ISeed>) => [
      ...prevInvoices,
      {
        description: "Nuevo",
        amount: 233.59,
        currency: "MXN",
      },
    ]);
  };
  return (
    <>
      <button onClick={addInvoice}>ADD</button>
      <button className="ml-2" onClick={() => setInvoices(SEED)}>
        RESET
      </button>
    </>
  );
};

export default CreateInvoice;
