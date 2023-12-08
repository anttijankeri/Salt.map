import { HeaderDivProps } from "../types";
import InputButtonIcon from "./InputButtonIcon";
import { Link } from "react-router-dom";

const HeaderDiv = (props: HeaderDivProps) => {
  const { header, link } = props;
  return (
    <div>
      <Link to={link}>
        <InputButtonIcon icon="" alt="Go Back" />
      </Link>
      <h1>{header}</h1>
    </div>
  );
};

export default HeaderDiv;
