import { InputButtonProps } from "../types";

const InputButton = (props: InputButtonProps) => {
  const { text } = props;
  return <input type="submit" value={text} />;
};

export default InputButton;
