import { InputTextProps } from "../types";

const InputText = (props: InputTextProps) => {
  const { name, label, placeholder } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type="text" placeholder={placeholder} />
    </>
  );
};

export default InputText;
