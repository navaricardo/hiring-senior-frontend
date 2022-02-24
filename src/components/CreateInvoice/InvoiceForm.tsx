import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { sumNumbers } from "../../helpers";
import { ICurrency, IFormInvoice, IInvoice } from "../../interfaces";
import { invoiceListState, invoiceTotalState } from "../../store";
import FormInput from "../shared/FormInput";
import InvoiceItem from "./InvoiceItem";

const createInvoice = (values: IFormInvoice, total: number): IInvoice => {
  const items = values.items.map((item) => {
    const currencyObject = JSON.parse(item.currency);
    const currency: ICurrency = {
      name: currencyObject.label,
      value: currencyObject.value,
    };
    return {
      ...item,
      amount: parseFloat(item.amount),
      currency: { ...currency },
    };
  });
  return {
    ...values,
    total,
    items,
  } as IInvoice;
};

const defaultInvoiceItem = { description: "", amount: "", currency: "" };

const InvoiceForm = (): JSX.Element => {
  // Global State
  const setInvoiceList = useSetRecoilState(invoiceListState);
  const [invoiceTotal, setInvoiceTotal] = useRecoilState(invoiceTotalState);

  // Form Hooks
  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm<IFormInvoice>({
    defaultValues: {
      title: "",
      items: [
        {
          amount: "",
          description: "",
          currency: "",
        },
      ],
    },
    shouldUnregister: true,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  // Component Actions
  const addInvoiceItem = () => {
    append(defaultInvoiceItem as any);
  };

  const removeInvoiceItem = (index: number) => {
    remove(index);
  };

  const saveInvoice = (values: IFormInvoice) => {
    const invoice = createInvoice(values, invoiceTotal);
    setInvoiceList((oldInvoiceList) => [...oldInvoiceList, { ...invoice }]);
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
  }, [watch]);

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
          remove={removeInvoiceItem}
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
