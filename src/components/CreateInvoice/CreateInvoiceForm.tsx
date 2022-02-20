import { FunctionComponent } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import useCurrencies from "../../hooks/useCurrency";
import { ICurrency, IInvoice } from "../../interfaces";
import { invoiceListState } from "../../store";
import FormInput from "../shared/FormInput";
import FormSelect, { SelectOption } from "../shared/FormSelect";
import InvoiceTotal from "./InvoiceTotal";

interface CreateInvoiceFormProps {}

interface IFormInvoiceItem {
  description: string;
  amount: string;
  currency: string;
}

interface IFormInvoice {
  title: string;
  items: Array<IFormInvoiceItem>;
}

const createInvoice = (values: IFormInvoice): IInvoice => {
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
    items,
  } as IInvoice;
};

const defaultInvoiceItem = { description: "", amount: "", currency: null };

const CreateInvoiceForm: FunctionComponent<CreateInvoiceFormProps> = () => {
  // Global State
  const setInvoiceList = useSetRecoilState(invoiceListState);

  // Form Hooks
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormInvoice>({
    defaultValues: {
      title: "Compañía S.A. de C.V.",
      items: [
        {
          description: "Articulo de 600ml",
          amount: "10.5",
        },
      ],
    },
    shouldUnregister: true,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const items = useWatch({
    control,
    name: "items",
  });

  // Custom Hooks
  const { currencies } = useCurrencies();

  // Component Actions
  const selectOptions: Array<SelectOption> = currencies.map(
    ({ name: label, value }) => ({
      label,
      value: JSON.stringify({ label, value }),
    })
  );

  const saveInvoice = (values: IFormInvoice) => {
    const invoice = createInvoice(values);
    setInvoiceList((prevInvoiceList) => [...prevInvoiceList, { ...invoice }]);
  };

  const appendInvoiceItem = () => append(defaultInvoiceItem as any);

  const onSubmit = (values: IFormInvoice) => {
    saveInvoice(values);
    reset();
  };

  return (
    <form
      className="box"
      onSubmit={handleSubmit((data: IFormInvoice) => onSubmit(data))}
    >
      <div className="field">
        <FormInput
          errors={errors["title"]}
          name={"title"}
          label={"Invoice Title"}
          register={register("title" as const, { required: true })}
        />
      </div>
      {fields.map(({ id }, index) => {
        const removeItemByIndex = () => remove(index);
        const error = errors.items?.[index];
        const isFirstItem = index === 0;
        return (
          <div key={id} className="flex gap-x-4">
            <div className="field w-1/3">
              <FormInput
                key={`description${index}`}
                errors={Boolean(error?.description)}
                name={"description"}
                label={"Description"}
                register={register(`items.${index}.description` as const, {
                  required: true,
                })}
              />
            </div>
            <div className="field has-addons">
              <p className="control">
                <FormInput
                  errors={Boolean(error?.amount)}
                  key={`amount${index}`}
                  label={"Amount"}
                  name={"amount"}
                  register={register(`items.${index}.amount` as const, {
                    required: true,
                  })}
                />
              </p>
              <p className="control">
                <FormSelect
                  errors={Boolean(error?.currency)}
                  key={`currency${index}`}
                  label={"Currency"}
                  name={"currency"}
                  register={register(`items.${index}.currency` as const, {
                    required: true,
                  })}
                  options={selectOptions}
                />
              </p>
            </div>

            {!isFirstItem && (
              <div className="field">
                <label className="label">Remove</label>
                <button
                  type="button"
                  onClick={removeItemByIndex}
                  className="button is-danger"
                >
                  X
                </button>
              </div>
            )}
          </div>
        );
      })}
      <div className="flex justify-between mt-4">
        <div className="flex gap-x-4">
          <button
            type="button"
            onClick={appendInvoiceItem}
            className="button is-link"
          >
            Add Item
          </button>
          <button type="submit" className="button is-primary">
            Save
          </button>
        </div>
        <InvoiceTotal items={items} />
      </div>
    </form>
  );
};

export default CreateInvoiceForm;
