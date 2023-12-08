import { InputButtonProps } from "../types";

const InputButton = (props: InputButtonProps) => {
  const { text } = props;
  return <button>{text}</button>;
};

export default InputButton;
