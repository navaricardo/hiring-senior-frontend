import { FunctionComponent } from "react";
import { _INVOICES } from "../BACKEND";
import { IInvoice } from "../interfaces/invoice";

interface InvoiceListProps {}

const InvoiceList: FunctionComponent<InvoiceListProps> = () => {
  const invoices: Array<IInvoice> = _INVOICES;

  return (
    <ul>
      {invoices.map((invoice) => (
        <li>
          {invoice.title}
          <ul className="pl-2">
            {invoice.items?.map((invoiceItem) => (
              <li>{invoiceItem.amount}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default InvoiceList;
