import { InputButtonProps } from "../types";

import "../style.css";

const InputButton = (props: InputButtonProps) => {
  const { text } = props;
  return <input type="submit" value={text} className="button button--med" />;
};

export default InputButton;
