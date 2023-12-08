import { HeaderDivProps } from "../types";
import IconButton from "./IconButton";
import { Link } from "react-router-dom";

import "../style.css";

const HeaderDiv = (props: HeaderDivProps) => {
  const { header, link } = props;
  return (
    <div className="flex">
      <Link to={link}>
        <IconButton />
      </Link>
      <h1 className="header">{header}</h1>
    </div>
  );
};

export default HeaderDiv;
