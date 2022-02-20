import { FunctionComponent } from "react";
import { IInvoiceItem } from "../../interfaces";

interface InvoiceTotalProps {
  items: any;
}

const InvoiceTotal: FunctionComponent<InvoiceTotalProps> = ({ items }) => {
  const amounts: Array<number> = items?.map(
    (item: IInvoiceItem) => item.amount
  );
  const total = amounts?.reduce(
    (prevAmount: number, currAmount: number) => prevAmount + currAmount
  );

  return <h3 className="title is-3 my-auto">Total: {total || 0}</h3>;
};

export default InvoiceTotal;
