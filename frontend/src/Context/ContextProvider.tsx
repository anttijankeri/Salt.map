import { FC, PropsWithChildren, useState } from "react";
import AppContext, { defaultContext } from "./Context";
import { AppState, LooseState } from "../types";
import decodeMarkers from "../utils/decodeMarkers";

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => {
    const storedValue = localStorage.getItem("state");
    return storedValue ? JSON.parse(storedValue) : defaultContext();
  });

  const updateState = (updates: LooseState) => {
    setState({ ...state, ...updates });
    localStorage.setItem("state", JSON.stringify(state));
  };

  const makeQuery = () => {
    fetch(import.meta.env.VITE_REACT_APP_BACKEND + "/api/maps")
      .then((data) => data.json())
      .then((data) => {
        updateState!({ markers: decodeMarkers(data) });
      });
  };

  return (
    <AppContext.Provider value={{ state, updateState, makeQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
