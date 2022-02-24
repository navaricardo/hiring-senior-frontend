import { FunctionComponent, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type SelectOption = { label: string; value: string | number };

interface FormSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  error?: string;
  label?: string;
  name: string;
  options: Array<SelectOption>;
  register: UseFormRegisterReturn;
}

const FormSelect: FunctionComponent<FormSelectProps> = ({
  error,
  name,
  label,
  register,
  options,
  ...props
}) => {
  // actions
  const defaultOption = { label: "", value: "" };
  const selectOptions = [defaultOption, ...options];

  return (
    <div>
      {label && <label className="label">{label}</label>}
      <span className="select">
        <select
          {...register}
          {...props}
          className={`input ${error && "is-danger"}`}
        >
          {selectOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </span>
      {error && <span className="help is-danger">{error}</span>}
    </div>
  );
};

export default FormSelect;
