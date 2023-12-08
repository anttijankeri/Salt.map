import { FormEvent, useContext } from "react";
import GoogleMapInteractive from "../components/GoogleMapInteractive";
import HeaderDiv from "../components/HeaderDiv";
import InputButton from "../components/InputButton";
import InputText from "../components/InputText";
import hashUser from "../utils/hashUser";
import AppContext from "../Context/Context";

const AddPin = () => {
  const { state, updateState } = useContext(AppContext);

  const handleInput = (event: FormEvent) => {
    const value = (event.target as HTMLFormElement).value;

    updateState!({ ...state, nameInput: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const name = state.nameInput;

    if (name === "" || !state.placedMarker) {
      return;
    }

    const hash = hashUser(name);

    const payload = {
      name,
      userHash: hash,
      lng: Math.round(state.placedMarker.lng * 100000),
      lat: Math.round(state.placedMarker.lat * 100000),
    };

    try {
      const data = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND + "/api/maps",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!data.ok) {
        throw new Error(data.statusText);
      }

      const body = await data.json();

      updateState!({ ...state, selectedPerson: body.hash });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderDiv header="Add Pin" link="/" />
      <form onSubmit={handleSubmit} onChange={handleInput}>
        <InputText name="person" label="Your Name" placeholder="John Doe" />
        <GoogleMapInteractive />
        <InputButton text="Done" />
      </form>
    </>
  );
};

export default AddPin;
