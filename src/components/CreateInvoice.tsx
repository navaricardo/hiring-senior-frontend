import { ChangeEvent, MouseEvent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { invoiceListState, invoiceState } from "../store";

// Types and Interfaces
type AddInvoiceT = (event: MouseEvent<HTMLButtonElement>) => void;
type OnChangeTitleT = (event: ChangeEvent<HTMLInputElement>) => void;

// Component that creates invoices
const CreateInvoice = (): JSX.Element => {
  // Recoil state manager
  const setInvoiceList = useSetRecoilState(invoiceListState);
  const [invoice, setInvoice] = useRecoilState(invoiceState);

  // Component actions
  const addInvoice: AddInvoiceT = (event) => {
    event.preventDefault();

    if (!invoice.title) return;

    setInvoiceList((prevInvoiceList) => [...prevInvoiceList, { ...invoice }]);
  };

  const onChangeTitle: OnChangeTitleT = ({ target: { value: title } }) =>
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      title,
    }));

  // Return a valid JSX.Element
  return (
    <form className="">
      <input type="text" value={invoice.title} onChange={onChangeTitle} />
      <button onClick={addInvoice}>ADD</button>
    </form>
  );
};

export default CreateInvoice;
