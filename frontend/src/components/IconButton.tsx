import { IconButtonProps } from "../types";
import { Link } from "react-router-dom";

import "../style.css";

const IconButton = (props: IconButtonProps) => {
  const { link } = props;
  const alt = props.alt || "Go Back";
  const icon =
    props.icon ||
    "https://upload.wikimedia.org/wikipedia/commons/7/77/Feather-arrows-chevron-left.svg";

  return (
    <button className="button button--small">
      <Link to={link}>
        <img src={icon} alt={alt} className="img" />
      </Link>
    </button>
  );
};

export default IconButton;
