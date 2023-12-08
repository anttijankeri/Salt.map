import GoogleMapInteractive from "../components/GoogleMapInteractive";
import HeaderDiv from "../components/HeaderDiv";
import InputButton from "../components/InputButton";
import InputText from "../components/InputText";
import { Link } from "react-router-dom";

const AddPin = () => {
  return (
    <>
      <HeaderDiv header="Add Pin" link="/" />
      <InputText name="name" label="Your Name" placeholder="John Doe" />
      <GoogleMapInteractive />
      <Link to="/single">
        <InputButton text="Done" />
      </Link>
    </>
  );
};

export default AddPin;
