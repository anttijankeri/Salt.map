import { HeaderDivProps } from "../types";
import IconButton from "./IconButton";
import { Link } from "react-router-dom";

const HeaderDiv = (props: HeaderDivProps) => {
  const { header, link } = props;
  return (
    <div>
      <Link to={link}>
        <IconButton />
      </Link>
      <h1>{header}</h1>
    </div>
  );
};

export default HeaderDiv;
