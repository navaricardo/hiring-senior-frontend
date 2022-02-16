import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { MouseEventT, OnChangeT } from "../../interfaces";
import { invoiceItemsListState, invoiceItemState } from "../../store";

// Component that adds and item to the invoice
const AddInvoiceItem = (): JSX.Element => {
  // Recoil state manager
  const [invoiceItem, setInvoiceItem] = useRecoilState(invoiceItemState);
  const resetInvoiceItem = useResetRecoilState(invoiceItemState);
  const setInvoiceItemsList = useSetRecoilState(invoiceItemsListState);

  // Component actions
  const formHasEmpty =
    !invoiceItem.amount || !invoiceItem.currency || !invoiceItem.description;

  const onChangeAmount: OnChangeT<HTMLInputElement> = ({
    target: { value: amount },
  }) => setInvoiceItem((prevItem) => ({ ...prevItem, amount }));

  const onChangeCurrency: OnChangeT<HTMLInputElement> = ({
    target: { value: currency },
  }) => setInvoiceItem((prevItem) => ({ ...prevItem, currency }));

  const onChangeDescription: OnChangeT<HTMLInputElement> = ({
    target: { value: description },
  }) => setInvoiceItem((prevItem) => ({ ...prevItem, description }));

  const addItem: MouseEventT = (event) => {
    event.preventDefault();

    if (formHasEmpty) return;

    setInvoiceItemsList((prevInvoiceItemList) => [
      ...prevInvoiceItemList,
      {
        ...invoiceItem,
      },
    ]);
    resetInvoiceItem();
  };

  // Return a valid JSX.Element
  return (
    <div className="flex flex-wrap gap-4 justify-between">
      <input
        type="text"
        onChange={onChangeDescription}
        value={invoiceItem.description}
        placeholder="Description"
      />
      <input
        type="text"
        onChange={onChangeAmount}
        value={invoiceItem.amount}
        placeholder="Amount"
      />
      <input
        type="text"
        onChange={onChangeCurrency}
        value={invoiceItem.currency}
        placeholder="Currency"
      />
      <button className="px-4 bg-lightBlue-400" onClick={addItem}>
        ADD
      </button>
    </div>
  );
};

export default AddInvoiceItem;
