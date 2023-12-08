import { IconButtonProps } from "../types";

const IconButton = (props: IconButtonProps) => {
  const alt = props.alt || "Go Back";
  const icon =
    props.icon ||
    "https://upload.wikimedia.org/wikipedia/commons/7/77/Feather-arrows-chevron-left.svg";

  return (
    <button>
      <img src={icon} alt={alt} />
    </button>
  );
};

export default IconButton;
