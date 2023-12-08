import { FC, PropsWithChildren, useState } from "react";
import AppContext, { defaultContext } from "./Context";
import { AppState } from "../types";

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<AppState>(defaultContext());

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
