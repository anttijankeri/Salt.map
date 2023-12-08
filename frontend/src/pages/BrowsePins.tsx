import HeaderDiv from "../components/HeaderDiv";
import InputButton from "../components/InputButton";
import { useNavigate } from "react-router-dom";
import PersonButton from "../components/PersonButton";
import { useContext, useEffect } from "react";
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

    updateState!({ ...state, selectedPerson: id });
  };

  const moveToMap = () => {
    if (!state.selectedPerson) {
      return;
    }

    navigate("/single");
  };

  useEffect(() => {
    fetch("https://saltmap-production.up.railway.app/api/users")
      .then((data) => data.json())
      .then((data) => {
        updateState!({ ...state, people: data });
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
        <InputButton text="Done" />
      </div>
    </>
  );
};

export default BrowsePins;
