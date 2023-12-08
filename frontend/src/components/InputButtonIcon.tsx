import { InputButtonIconProps } from "../types";

const InputButtonIcon = (props: InputButtonIconProps) => {
  const { icon, alt } = props;
  return (
    <button>
      <img src={icon} alt={alt} />
    </button>
  );
};

export default InputButtonIcon;
