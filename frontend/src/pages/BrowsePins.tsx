import HeaderDiv from "../components/HeaderDiv";
import InputButton from "../components/InputButton";
import { useNavigate } from "react-router-dom";
import PersonButton from "../components/PersonButton";
import { useContext, useEffect } from "react";
import AppContext from "../Context/Context";

import "../style.css";
import decodeMarkers from "../utils/decodeMarkers";

const BrowsePins = () => {
  const { state, updateState } = useContext(AppContext);

  const navigate = useNavigate();

  const selectPerson = (event: React.MouseEvent) => {
    event.preventDefault();

    let id = (event.target as HTMLElement).id;

    if (id === state.selectedPerson) {
      id = "";
    }

    let startLat;
    let startLng;

    updateState!({ selectedPerson: id, startLat, startLng });

    if (id) {
      fetch(import.meta.env.VITE_REACT_APP_BACKEND + "/api/maps/" + id)
        .then((data) => data.json())
        .then((data) => {
          const markers = decodeMarkers([data]);
          startLat = markers[0].lat;
          startLng = markers[0].lng;
          updateState!({ selectedPerson: id, startLat, startLng, markers });
        });
    }
  };

  const moveToMap = () => {
    if (!state.selectedPerson) {
      return;
    }

    navigate("/single");
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_REACT_APP_BACKEND + "/api/users")
      .then((data) => data.json())
      .then((data) => {
        updateState!({ people: data });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
