import { useEffect, useState } from "react";
import currency from "currency.js";

const useInvoiceTotal = (amounts: Array<string>): number => {
  // prettier-ignore
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (amounts) {
      const exchangedTotal = amounts?.reduce(
        (prevAmount, currAmount) => prevAmount + currAmount
      );
      const totalInDollars = currency(exchangedTotal).dollars();

      setTotal(totalInDollars);
    }
  }, [amounts]);

  return total;
};

export default useInvoiceTotal;
