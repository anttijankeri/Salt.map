import { IconButtonProps } from "../types";

const IconButton = (props: IconButtonProps) => {
  const { icon, alt } = props;
  return (
    <button>
      <img src={icon} alt={alt} />
    </button>
  );
};

export default IconButton;
