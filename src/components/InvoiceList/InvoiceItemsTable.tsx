import { FunctionComponent } from "react";
import { formatAsCurrency } from "../../helpers";
import { IInvoiceItem } from "../../interfaces";

interface InvoiceItemsTableProps {
  items: Array<IInvoiceItem>;
  total: number;
}

const InvoiceItemsTable: FunctionComponent<InvoiceItemsTableProps> = ({
  items,
  total,
}) => {
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>
            <strong>TOTAL</strong>
          </th>
          <td>{formatAsCurrency(total)}</td>
          <td>USD</td>
        </tr>
      </tfoot>
      <tbody>
        {items.map((item) => (
          <tr>
            <td>{item.description}</td>
            <td>{formatAsCurrency(item.amount)}</td>
            <td>{item.currency.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceItemsTable;
