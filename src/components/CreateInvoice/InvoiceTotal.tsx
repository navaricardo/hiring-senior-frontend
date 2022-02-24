import { useRecoilValue } from "recoil";
import { formatAsCurrency } from "../../helpers";
import { invoiceTotalState } from "../../store";

const InvoiceTotal = (): JSX.Element => {
  const total = useRecoilValue(invoiceTotalState);

  return (
    <div className="box">
      <h3 className="title is-3 my-auto">{formatAsCurrency(total)}USD</h3>
    </div>
  );
};

export default InvoiceTotal;
