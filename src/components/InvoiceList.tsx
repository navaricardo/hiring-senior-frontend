import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import { invoiceListState } from "../store";

interface InvoiceListProps {}

const InvoiceList: FunctionComponent<InvoiceListProps> = () => {
  const invoiceList = useRecoilValue(invoiceListState);

  return (
    <ul>
      {invoiceList.map((invoice, index) => (
        <li key={index}>
          {invoice.title}
          <ul className="pl-2">
            {invoice.items?.map((invoiceItem, index) => (
              <li key={index}>{invoiceItem.amount}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default InvoiceList;
