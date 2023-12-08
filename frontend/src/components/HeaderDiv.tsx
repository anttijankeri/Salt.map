import { HeaderDivProps } from "../types";
import IconButton from "./IconButton";

import "../style.css";

const HeaderDiv = (props: HeaderDivProps) => {
  const { header, link } = props;
  return (
    <div className="flex">
      <IconButton link={link} />
      <h1 className="header">{header}</h1>
    </div>
  );
};

export default HeaderDiv;
