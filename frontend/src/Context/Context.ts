import { createContext } from "react";
import { AppContextType, AppState } from "../types";

export const defaultContext = () => {
  return { selectedPerson: "", markers: [] } as AppState;
};

const AppContext = createContext({
  state: defaultContext(),
  setState: undefined,
} as AppContextType);

export default AppContext;
