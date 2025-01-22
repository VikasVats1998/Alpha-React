import React, { createContext, useReducer, useContext } from "react";

const VolumeStateContext = createContext();
const VolumeDispatchContext = createContext();

const volumeReducer = (state, action) => {
  switch (action.type) {
    case "SET_VOLUME":
      return { ...state, volume: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const VolumeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(volumeReducer, { volume: 30 });

  return (
    <VolumeStateContext.Provider value={state}>
      <VolumeDispatchContext.Provider value={dispatch}>
        {children}
      </VolumeDispatchContext.Provider>
    </VolumeStateContext.Provider>
  );
};

export const useVolumeState = () => useContext(VolumeStateContext);
export const useVolumeDispatch = () => useContext(VolumeDispatchContext);