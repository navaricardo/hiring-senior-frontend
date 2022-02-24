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
}) => (
  <>
    {label && <label className="label">{label}</label>}
    <input
      {...register}
      {...props}
      className={`input ${errors && "is-danger"}`}
    />
    {errors && <span className="help is-danger">Field is required</span>}
  </>
);

export default FormInput;
