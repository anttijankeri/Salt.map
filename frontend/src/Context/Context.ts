import { createContext } from "react";
import { AppContextType, AppState } from "../types";

export const defaultContext = () => {
  return {
    selectedPerson: "",
    markers: [],
    people: [],
    nameInput: "",
    placedMarker: undefined,
    alreadyExists: false,
    startLat: undefined,
    startLng: undefined,
  } as AppState;
};

const AppContext = createContext({
  state: defaultContext(),
  updateState: undefined,
  makeQuery: undefined,
} as AppContextType);

export default AppContext;
