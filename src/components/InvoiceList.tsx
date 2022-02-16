import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import { invoiceListState } from "../store";

interface InvoiceListProps {}

const InvoiceList: FunctionComponent<InvoiceListProps> = () => {
  const invoiceList = useRecoilValue(invoiceListState);

  return (
    <ul>
      {invoiceList.map((invoice, invoiceIndex) => (
        <li key={invoiceIndex}>
          {invoice.title}
          <ul className="pl-2">
            {invoice.items?.map(
              ({ amount, currency, description }, itemIndex) => (
                <>
                  <li key={itemIndex + description}>{description}</li>
                  <li key={itemIndex + amount}>{amount}</li>
                  <li key={itemIndex + currency}>{currency}</li>
                </>
              )
            )}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default InvoiceList;
