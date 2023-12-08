import { createContext } from "react";
import { AppContextType, AppState } from "../types";

export const defaultContext = () => {
  return {
    selectedPerson: "",
    markers: [],
    people: [],
    nameInput: "",
    placedMarker: undefined,
  } as AppState;
};

const AppContext = createContext({
  state: defaultContext(),
  updateState: undefined,
} as AppContextType);

export default AppContext;
