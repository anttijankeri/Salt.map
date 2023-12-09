import HeaderDiv from "../components/HeaderDiv";
import InputButton from "../components/InputButton";
import { useNavigate } from "react-router-dom";
import PersonButton from "../components/PersonButton";
import { useContext } from "react";
import AppContext from "../Context/Context";

import "../style.css";

const BrowsePins = () => {
  const { state, updateState } = useContext(AppContext);

  const navigate = useNavigate();

  const selectPerson = (event: React.MouseEvent) => {
    event.preventDefault();

    let id = (event.target as HTMLElement).id;

    if (id === state.selectedPerson) {
      id = "";
    }

    const marker = state.markers.find((marker) => {
      return marker.hash === id;
    });

    updateState!({
      selectedPerson: id,
      startLat: marker?.lat,
      startLng: marker?.lng,
    });
  };

  const moveToMap = () => {
    if (!state.selectedPerson) {
      return;
    }

    navigate("/single");
  };

  return (
    <>
      <HeaderDiv header="Browse" link="/" />
      <div className="person-list" onClick={selectPerson}>
        {state.people.map((person) => {
          return (
            <PersonButton
              key={person.hash}
              text={person.name}
              id={person.hash}
            />
          );
        })}
      </div>
      <div onClick={moveToMap}>
        <InputButton text={state.selectedPerson ? "Show" : "Select"} />
      </div>
    </>
  );
};

export default BrowsePins;
