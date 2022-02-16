// import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import { invoiceItemsListState } from "../../store";

const InvoiceItemList = (): JSX.Element => {
  const invoiceItemList = useRecoilValue(invoiceItemsListState);

  return (
    <ul>
      {invoiceItemList.map(({ amount, currency, description }) => (
        <li>
          <span>{description}</span>
          <span>
            {amount}
            {currency}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default InvoiceItemList;
