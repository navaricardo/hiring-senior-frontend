import { FunctionComponent } from "react";
import { UseFieldArrayRemove, UseFormRegister } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { IFormInvoice, InvoiceError } from "../../entities";
import { currencyListState } from "../../store";
import FormInput from "../shared/FormInput";
import FormSelect, { SelectOption } from "../shared/FormSelect";

interface IInvoiceItemProps {
  errors: InvoiceError;
  index: number;
  register: UseFormRegister<IFormInvoice>;
  remove: UseFieldArrayRemove;
}

const InvoiceItem: FunctionComponent<IInvoiceItemProps> = ({
  errors,
  index,
  register,
  remove,
}) => {
  // Hooks
  const currencies = useRecoilValue(currencyListState);

  // Initialization
  const error = errors.items?.[index];
  const isFirstItem = index === 0;
  const selectOptions: Array<SelectOption> = currencies.map(
    ({ name: label, value }) => ({
      label,
      value: JSON.stringify({ label, value }),
    })
  );

  // Actions
  const removeItemByIndex = () => remove(index);

  return (
    <div className="columns">
      <div className="column">
        <div className="field">
          <FormInput
            key={`description${index}`}
            error={error?.description?.message}
            name={"description"}
            label={"Description"}
            register={register(`items.${index}.description` as const, {
              required: {
                value: true,
                message: "Required",
              },
            })}
          />
        </div>
      </div>
      <div className="column is-flex">
        <div className="field has-addons">
          <div className="control">
            <FormInput
              error={error?.amount?.message}
              key={`amount${index}`}
              label={"Amount"}
              name={"amount"}
              register={register(`items.${index}.amount` as const, {
                required: {
                  value: true,
                  message: "Required",
                },
                pattern: {
                  value: /[+-]?\d+(?:[.]\d+)?/,
                  message: "Please enter a number",
                },
              })}
            />
          </div>
          {/* Hard margin to fix issue with label */}
          <div className="control mt-5">
            <div className="mt-2">
              <FormSelect
                error={error?.currency?.message}
                key={`currency${index}`}
                name={"currency"}
                register={register(`items.${index}.currency` as const, {
                  required: {
                    value: true,
                    message: "Required",
                  },
                })}
                options={selectOptions}
              />
            </div>
          </div>
        </div>
        <div className="field ml-5 mt-5">
          <button
            type="button"
            onClick={removeItemByIndex}
            className="button is-danger mt-2"
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
