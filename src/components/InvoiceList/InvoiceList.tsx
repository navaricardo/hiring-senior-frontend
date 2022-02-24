import { useState } from "react";
import { useRecoilValue } from "recoil";
import { IInvoice, TOnChange } from "../../entities";
import { invoiceListState } from "../../store";
import InvoiceItemsTable from "./InvoiceItemsTable";

const InvoiceList = (): JSX.Element | null => {
  // Hooks
  const invoiceList = useRecoilValue(invoiceListState);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Actions
  const onChange: TOnChange<HTMLInputElement> = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  const filterBySearchQuery = ({ title }: IInvoice): boolean =>
    title.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    <div className="has-background-light p-5">
      <div className="box">
        <input
          className="input"
          placeholder="Search invoice by TITLE"
          onChange={onChange}
        />
      </div>
      <ul>
        {invoiceList
          .filter(filterBySearchQuery)
          .map((invoice, invoiceIndex) => (
            <li key={invoiceIndex} className="box">
              <h5 className="title is-5 has-text-info">{invoice.title}</h5>
              <InvoiceItemsTable items={invoice.items} total={invoice.total} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
