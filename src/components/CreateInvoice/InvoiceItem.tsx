import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import { InvoiceItemProps } from "../../entities";
import { currencyListState } from "../../store";
import FormInput from "../shared/FormInput";
import FormSelect, { SelectOption } from "../shared/FormSelect";

const InvoiceItem: FunctionComponent<InvoiceItemProps> = ({
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
            errors={Boolean(error?.description)}
            name={"description"}
            label={"Description"}
            register={register(`items.${index}.description` as const, {
              required: true,
            })}
          />
        </div>
      </div>
      <div className="column is-flex">
        <div className="field has-addons">
          <div className="control">
            <FormInput
              errors={Boolean(error?.amount)}
              key={`amount${index}`}
              label={"Amount"}
              name={"amount"}
              register={register(`items.${index}.amount` as const, {
                required: true,
              })}
            />
          </div>
          {/* Hard margin to fix issue with label */}
          <div className="control mt-5">
            <div className="mt-2">
              <FormSelect
                errors={Boolean(error?.currency)}
                key={`currency${index}`}
                name={"currency"}
                register={register(`items.${index}.currency` as const, {
                  required: true,
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
