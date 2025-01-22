import React, { useEffect } from "react";
import { handleSourceChange, subscribeState } from "../utils/crestronUtils"; // Import the functions
import { useSourceState, useSourceDispatch } from "../context/SourceContext";
import Card from "./Card"; // Import the Card component
import "./Dashboard1.css";
const sourceDigitalNumbers = {
  Iphone: { digital: 5 },
  Android: { digital: 6 },
  PC: { digital: 7 },
  Nvidia: { digital: 8 }
};

const SourceControl = () => {
  const { source } = useSourceState();
    const dispatch = useSourceDispatch();
  
    useEffect(() => {
      const handleSerialReceive = (data) => {
        dispatch({ type: "SET_SOURCE", payload: data });
      };
  
      // Subscribe to serial join updates
      const unsubscribe = subscribeState(201, handleSerialReceive);
  
      // Cleanup on unmount
      return () => {
        if (typeof unsubscribe === "function") {
          unsubscribe(); // Unsubscribe if the utility supports it
        }
      };
    }, [dispatch]);
  
    const handleChange = (e) => {
      const selectedSource = e.target.value;
      const { digital } = sourceDigitalNumbers[selectedSource];
      handleSourceChange(dispatch, selectedSource, digital);
    };

  return (
    <Card title="Source">
            <select
              value={source}
              onChange={handleChange}
            >
              <option value="Iphone">Iphone</option>
              <option value="Android">Android</option>
              <option value="PC">PC</option>
              <option value="Nvidia">Nvidia</option>
            </select>
          </Card>
  );
};

export default SourceControl;