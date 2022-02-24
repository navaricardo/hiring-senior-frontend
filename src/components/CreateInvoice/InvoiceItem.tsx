import { FunctionComponent } from "react";
import { FieldError } from "react-hook-form";
import useCurrencies from "../../hooks/useCurrency";
import FormInput from "../shared/FormInput";
import FormSelect, { SelectOption } from "../shared/FormSelect";

interface InvoiceItemProps {
  errors: {
    title?: FieldError | undefined;
    items?:
      | {
          description?: FieldError | undefined;
          amount?: FieldError | undefined;
          currency?: FieldError | undefined;
        }[]
      | undefined;
  };
  index: number;
  register: any;
  remove: any;
}

const InvoiceItem: FunctionComponent<InvoiceItemProps> = ({
  errors,
  index,
  register,
  remove,
}) => {
  const { currencies } = useCurrencies();

  const removeItemByIndex = () => remove(index);
  const error = errors.items?.[index];
  const isFirstItem = index === 0;
  const selectOptions: Array<SelectOption> = currencies.map(
    ({ name: label, value }) => ({
      label,
      value: JSON.stringify({ label, value }),
    })
  );

  return (
    <div className="columns">
      <div className="column">
        <div className="field">
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
      </div>
      <div className="column flex">
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
      </div>
      <div className="column is-narrow">
        <div className="field">
          <label className="label">Remove</label>
          <button
            type="button"
            onClick={removeItemByIndex}
            className="button is-danger"
            disabled={isFirstItem}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceItem;
