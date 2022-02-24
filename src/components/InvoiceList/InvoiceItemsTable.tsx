import { FunctionComponent } from "react";
import { Currencies } from "../../constants";
import { InvoiceItemsTableProps } from "../../entities";
import { formatAsCurrency } from "../../helpers";

const InvoiceItemsTable: FunctionComponent<InvoiceItemsTableProps> = ({
  items,
  total,
}) => (
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
          <strong className="is-size-5">TOTAL</strong>
        </th>
        <td>
          <strong className="is-size-5 has-text-primary">
            {formatAsCurrency(total)}
          </strong>
        </td>
        <td>
          <strong className="is-size-5">{Currencies.USD}</strong>
        </td>
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

export default InvoiceItemsTable;
