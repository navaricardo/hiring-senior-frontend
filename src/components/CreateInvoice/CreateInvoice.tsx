import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";

import { MouseEventT, OnChangeT } from "../../interfaces";
import {
  invoiceItemsListState,
  invoiceListState,
  invoiceState,
} from "../../store";

import AddInvoiceItem from "./AddInvoiceItem";
import InvoiceItemList from "./InvoiceItemList";

// Component that creates invoices
const CreateInvoice = (): JSX.Element => {
  // Recoil state manager
  const [invoice, setInvoice] = useRecoilState(invoiceState);

  const invoiceItemList = useRecoilValue(invoiceItemsListState);

  const resetInvoice = useResetRecoilState(invoiceState);
  const resetInvoiceItems = useResetRecoilState(invoiceItemsListState);
  const setInvoiceList = useSetRecoilState(invoiceListState);

  // Component actions
  const formHasEmpty = !invoice.title;

  const saveInvoice: MouseEventT = (event) => {
    event.preventDefault();

    if (formHasEmpty) return;

    setInvoiceList((prevInvoiceList) => [
      ...prevInvoiceList,
      { ...invoice, items: [...invoiceItemList] },
    ]);
    resetInvoice();
    resetInvoiceItems();
  };

  const onChangeTitle: OnChangeT<HTMLInputElement> = ({
    target: { value: title },
  }) =>
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      title,
    }));

  // Return a valid JSX.Element
  return (
    <form className="flex flex-col w-full p-8 gap-y-4">
      <input
        type="text"
        onChange={onChangeTitle}
        value={invoice.title}
        placeholder="Invoice Title"
      />
      <InvoiceItemList />
      <AddInvoiceItem />
      <button className="bg-green-400 py-2" onClick={saveInvoice}>
        SAVE
      </button>
    </form>
  );
};

export default CreateInvoice;
