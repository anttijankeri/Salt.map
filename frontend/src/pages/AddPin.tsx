import { FormEvent, useContext } from "react";
import GoogleMapInteractive from "../components/GoogleMapInteractive";
import HeaderDiv from "../components/HeaderDiv";
import InputButton from "../components/InputButton";
import InputText from "../components/InputText";
import hashUser from "../utils/hashUser";
import AppContext from "../Context/Context";
import { useNavigate } from "react-router-dom";

import "../style.css";

const AddPin = () => {
  const { state, updateState } = useContext(AppContext);

  const navigate = useNavigate();

  const handleInput = (event: FormEvent) => {
    const value = (event.target as HTMLFormElement).value;

    updateState!({
      nameInput: value,
      alreadyExists: state.people.some((person) => {
        return person.name === value;
      }),
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();

      const name = state.nameInput;

      if (name === "" || !state.placedMarker) {
        return;
      }

      const hash = hashUser(name);

      if (!state.alreadyExists) {
        const payload = {
          name,
          userHash: hash,
          lng: state.placedMarker.lng,
          lat: state.placedMarker.lat,
          color: state.placedMarker.color,
        };

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
      } else {
        const payload = {
          lng: state.placedMarker.lng,
          lat: state.placedMarker.lat,
          color: state.placedMarker.color,
        };

        const data = await fetch(
          import.meta.env.VITE_REACT_APP_BACKEND + "/api/maps/" + hash,
          {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(payload),
          }
        );

        if (!data.ok) {
          throw new Error(data.statusText);
        }
      }

      updateState!({
        selectedPerson: hash,
        placedMarker: undefined,
        alreadyExists: false,
        nameInput: "",
      });

      navigate("/all");
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
        <InputButton text={state.alreadyExists ? "Update" : "Add"} />
      </form>
    </>
  );
};

export default AddPin;
