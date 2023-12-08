import { PersonButtonProps } from "../types";
import { useContext } from "react";
import AppContext from "../Context/Context";

import "../style.css";

const PersonButton = (props: PersonButtonProps) => {
  const { text, id } = props;

  const { state } = useContext(AppContext);

  const extraClass = state.selectedPerson === id ? "--selected" : "";
  return (
    <button id={id} className={"button button--large " + extraClass}>
      {text}
    </button>
  );
};

export default PersonButton;
