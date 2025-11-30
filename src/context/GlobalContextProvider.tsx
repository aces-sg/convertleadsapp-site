import React, { createContext, useEffect, useReducer } from "react";
import { isBrowser } from "../hooks/auth";
import { InitialValueType } from "./interfaces";
import { reducer } from "./reducer";

const initialvalue: InitialValueType = {
  layer: false,
  contactLayer: {
    show: false,
    message: "",
  },
  centerLayerType: "message",
  centerLayerAction: undefined,
  opportunities: [],
  active: "",
  user: {
    id: null,
    name: "",
    email: "",
  },
  message: {
    __type: null,
    message: null,
  },
  admin: {
    selectedEngineer: "",
    activeOpportunity: null,
    activeIndex: 0,
  },
};

const initializer = () => {
  if (!isBrowser()) return;

  let hasLocal = localStorage.getItem("localProvider");
  if (hasLocal) return JSON.parse(hasLocal);
  return initialvalue;
};

export const GlobalStateContext =
  createContext<InitialValueType | null>(null);
export const GlobalDispatchContext = createContext(null);

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [], initializer);

  useEffect(() => {
    try {
      localStorage.setItem("localProvider", JSON.stringify(state));
    } catch (err) {
      console.log("unable to set localStorage", err);
    }
  }, [state]);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
