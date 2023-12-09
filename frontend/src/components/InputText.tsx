import { InputTextProps } from "../types";

import "../style.css";

const InputText = (props: InputTextProps) => {
  const { name, label, placeholder, value } = props;
  return (
    <>
      <div className="block">
        <label htmlFor={name} className="label">
          {label}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          className="input"
          value={value}
        />
      </div>
    </>
  );
};

export default InputText;
