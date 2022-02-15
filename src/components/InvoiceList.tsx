import { FunctionComponent } from "react";
import { ISeed } from "../BACKEND";

interface InvoiceListProps {
  invoices: Array<ISeed>;
}

const InvoiceList: FunctionComponent<InvoiceListProps> = ({ invoices }) => {
  return (
    <ul>
      {invoices.map((invoice) => (
        <li>{invoice.amount}</li>
      ))}
    </ul>
  );
};

export default InvoiceList;
