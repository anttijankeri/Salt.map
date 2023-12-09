import { FC, PropsWithChildren, useState } from "react";
import AppContext, { defaultContext } from "./Context";
import { AppState, LooseState } from "../types";

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => {
    const storedValue = localStorage.getItem("state");
    return storedValue ? JSON.parse(storedValue) : defaultContext();
  });

  const updateState = (updates: LooseState) => {
    setState({ ...state, ...updates });
    localStorage.setItem("state", JSON.stringify(state));
  };

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
