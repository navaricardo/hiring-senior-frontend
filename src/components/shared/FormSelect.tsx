import { FunctionComponent, InputHTMLAttributes } from "react";

export type SelectOption = { label: string; value: string | number };

interface FormSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  errors: any;
  label?: string;
  name: string;
  register: any;
  options: Array<SelectOption>;
}

const FormSelect: FunctionComponent<FormSelectProps> = ({
  errors,
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
          className={`input ${errors && "is-danger"}`}
        >
          {selectOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </span>
      {errors && <span className="help is-danger">Field is required</span>}
    </div>
  );
};

export default FormSelect;
