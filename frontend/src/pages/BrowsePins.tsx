import HeaderDiv from "../components/HeaderDiv";
import InputButton from "../components/InputButton";
import { Link } from "react-router-dom";

const BrowsePins = () => {
  return (
    <>
      <HeaderDiv header="Browse Pins" link="/" />
      BUTTONSssss
      <Link to="/single">
        <InputButton text="Done" />
      </Link>
    </>
  );
};

export default BrowsePins;
