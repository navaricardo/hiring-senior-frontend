import { FunctionComponent, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  name: string;
  register?: UseFormRegisterReturn;
}

const FormInput: FunctionComponent<FormInputProps> = ({
  error,
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
      className={`input ${error && "is-danger"}`}
    />
    {error && <span className="help is-danger">{error}</span>}
  </>
);

export default FormInput;
