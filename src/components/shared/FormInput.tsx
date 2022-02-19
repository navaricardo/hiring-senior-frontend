import { FunctionComponent, InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors: any;
  label?: string;
  name: string;
  register: any;
}

const FormInput: FunctionComponent<FormInputProps> = ({
  errors,
  name,
  label,
  register,
  ...props
}) => {
  return (
    <div className="field">
      {label && <label className="label">{label}</label>}
      <input
        {...register}
        className={`input ${errors && "is-danger"}`}
        {...props}
      />
      {errors && <p className="help is-danger">Field is required</p>}
    </div>
  );
};

export default FormInput;
