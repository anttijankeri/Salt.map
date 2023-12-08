import { IconButtonProps } from "../types";

import "../style.css";

const IconButton = (props: IconButtonProps) => {
  const alt = props.alt || "Go Back";
  const icon =
    props.icon ||
    "https://upload.wikimedia.org/wikipedia/commons/7/77/Feather-arrows-chevron-left.svg";

  return (
    <button className="button button--small">
      <img src={icon} alt={alt} className="img" />
    </button>
  );
};

export default IconButton;
