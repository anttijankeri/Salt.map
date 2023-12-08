import { PersonButtonProps } from "../types";

import "../style.css";

const PersonButton = (props: PersonButtonProps) => {
  const { text, id } = props;
  return (
    <button id={id} className="button button--large">
      {text}
    </button>
  );
};

export default PersonButton;
