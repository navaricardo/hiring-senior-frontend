import { useRecoilValue } from "recoil";
import { invoiceListState } from "../../store";
import InvoiceItemsTable from "./InvoiceItemsTable";

const InvoiceList = (): JSX.Element => {
  const invoiceList = useRecoilValue(invoiceListState);
  return (
    <ul>
      {invoiceList.map((invoice, invoiceIndex) => (
        <li key={invoiceIndex} className="box">
          <h5 className="title is-5 has-text-info">{invoice.title}</h5>
          <InvoiceItemsTable items={invoice.items} total={invoice.total} />
        </li>
      ))}
    </ul>
  );
};

export default InvoiceList;
