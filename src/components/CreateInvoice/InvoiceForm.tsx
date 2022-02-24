import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  DEFAULT_INVOICE_ITEM,
  INVOICE_FORM_DEFAULT_VALUES,
} from "../../constants";
import { IFormInvoice } from "../../entities";
import { createInvoice, sumNumbers } from "../../helpers";
import { invoiceListState, invoiceTotalState } from "../../store";
import FormInput from "../shared/FormInput";
import InvoiceItem from "./InvoiceItem";

const InvoiceForm = (): JSX.Element => {
  // Hooks
  const setInvoiceList = useSetRecoilState(invoiceListState);
  const [invoiceTotal, setInvoiceTotal] = useRecoilState(invoiceTotalState);
  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm<IFormInvoice>({
    defaultValues: INVOICE_FORM_DEFAULT_VALUES,
    shouldUnregister: true,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  // Actions
  const addInvoiceItem = () => append(DEFAULT_INVOICE_ITEM);

  const saveInvoice = (values: IFormInvoice) => {
    const invoice = createInvoice(values, invoiceTotal);
    setInvoiceList((oldInvoiceList) => [{ ...invoice }, ...oldInvoiceList]);
  };

  const onSubmit = (values: IFormInvoice) => {
    saveInvoice(values);
    reset();
  };

  // Side-Effects
  useEffect(() => {
    const subscription = watch((invoice) => {
      const exchangeItemsAmount = invoice.items?.map((item) => {
        if (item?.amount && item?.currency) {
          return parseFloat(item.amount) / JSON.parse(item.currency).value;
        } else {
          return 0;
        }
      });
      if (exchangeItemsAmount) setInvoiceTotal(sumNumbers(exchangeItemsAmount));
      return () => subscription.unsubscribe();
    });

    // we dont need to track setInvoiceTotal
  }, [watch]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form
      className="box"
      onSubmit={handleSubmit((data: IFormInvoice) => onSubmit(data))}
    >
      <div className="field mb-6">
        <FormInput
          errors={errors["title"]}
          name={"title"}
          label={"Invoice Title"}
          register={register("title" as const, { required: true })}
        />
      </div>
      {fields.map(({ id }, index) => (
        <InvoiceItem
          errors={errors}
          index={index}
          register={register}
          remove={remove}
          key={id}
        />
      ))}
      <button
        type="button"
        onClick={addInvoiceItem}
        className="button is-link mr-4"
      >
        Add Item
      </button>
      <button type="submit" className="button is-primary">
        Save
      </button>
    </form>
  );
};

export default InvoiceForm;
