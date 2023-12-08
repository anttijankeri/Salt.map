import { FC, PropsWithChildren, useEffect, useState } from "react";
import AppContext, { defaultContext } from "./Context";
import { AppState } from "../types";

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<AppState>(defaultContext());

  const updateState = (state: AppState) => {
    setState(state);
    localStorage.setItem("state", JSON.stringify(state));
  };

  useEffect(() => {
    const base = JSON.parse(localStorage.getItem("state") || "") || state;
    setState(base);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
