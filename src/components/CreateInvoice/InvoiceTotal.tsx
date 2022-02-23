import currency from "currency.js";
import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import { invoiceTotalState } from "../../store";

interface InvoiceTotalProps {}

const InvoiceTotal: FunctionComponent<InvoiceTotalProps> = () => {
  const total = useRecoilValue(invoiceTotalState);

  return (
    <div className="box">
      <h3 className="title is-3 my-auto">{currency(total).toString()}USD</h3>
    </div>
  );
};

export default InvoiceTotal;
