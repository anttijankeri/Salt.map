import { FC, PropsWithChildren, useState } from "react";
import AppContext, { defaultContext } from "./Context";
import { AppState } from "../types";

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => {
    const storedValue = localStorage.getItem("state");
    return storedValue ? JSON.parse(storedValue) : defaultContext();
  });

  const updateState = (state: AppState) => {
    setState(state);
    localStorage.setItem("state", JSON.stringify(state));
  };

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
