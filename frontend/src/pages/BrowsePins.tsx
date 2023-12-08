import HeaderDiv from "../components/HeaderDiv";
import InputButton from "../components/InputButton";
import { Link } from "react-router-dom";
import PersonButton from "../components/PersonButton";
import { useContext, useEffect } from "react";
import AppContext from "../Context/Context";

const BrowsePins = () => {
  const { state, setState } = useContext(AppContext);

  const selectPerson = () => {};

  useEffect(() => {
    fetch((import.meta.env.VITE_REACT_APP_BACKEND = "/api/users"))
      .then((data) => data.json())
      .then((data) => {
        setState!({ ...state, people: data.body });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <HeaderDiv header="Browse Pins" link="/" />
      <div onClick={selectPerson}>
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
      <Link to="/single">
        <InputButton text="Done" />
      </Link>
    </>
  );
};

export default BrowsePins;
