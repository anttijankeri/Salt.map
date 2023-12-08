import GoogleMapInteractive from "../components/GoogleMapInteractive";
import HeaderDiv from "../components/HeaderDiv";
import InputButton from "../components/InputButton";
import InputText from "../components/InputText";

const AddPin = () => {
  return (
    <>
      <HeaderDiv header="Add Pin" link="/" />
      <InputText name="name" label="Your Name" placeholder="John Doe" />
      <GoogleMapInteractive />
      <InputButton text="Done" />
    </>
  );
};

export default AddPin;
