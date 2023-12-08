import { PersonButtonProps } from "../types";

const PersonButton = (props: PersonButtonProps) => {
  const { text, id } = props;
  return <button id={id}>{text}</button>;
};

export default PersonButton;
