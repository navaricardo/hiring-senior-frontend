import { useRecoilValue } from "recoil";
import { formatAsCurrency } from "../../helpers";
import { invoiceTotalState } from "../../store";

const InvoiceTotal = (): JSX.Element => {
  const total = useRecoilValue(invoiceTotalState);

  return (
    <div className="box is-flex is-justify-content-space-between has-text-black">
      <strong className="is-size-3">TOTAL:</strong>
      <strong className="is-size-3 has-text-primary">
        {formatAsCurrency(total)}
        <span className="is-size-5 has-text-black has-text-weight-light">
          USD
        </span>
      </strong>
    </div>
  );
};

export default InvoiceTotal;
