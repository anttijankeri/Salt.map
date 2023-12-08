import { InputTextProps } from "../types";

import "../style.css";

const InputText = (props: InputTextProps) => {
  const { name, label, placeholder } = props;
  return (
    <>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input type="text" placeholder={placeholder} className="input" />
    </>
  );
};

export default InputText;
