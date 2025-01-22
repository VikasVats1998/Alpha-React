import React, { createContext, useReducer, useContext } from "react";

const SourceStateContext = createContext();
const SourceDispatchContext = createContext();

const sourceReducer = (state, action) => {
  switch (action.type) {
    case "SET_SOURCE":
      return { ...state, source: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const SourceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sourceReducer, { source: "None" });

  return (
    <SourceStateContext.Provider value={state}>
      <SourceDispatchContext.Provider value={dispatch}>
        {children}
      </SourceDispatchContext.Provider>
    </SourceStateContext.Provider>
  );
};

export const useSourceState = () => useContext(SourceStateContext);
export const useSourceDispatch = () => useContext(SourceDispatchContext);