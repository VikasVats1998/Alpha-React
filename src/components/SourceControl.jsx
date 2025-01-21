import React, { useState, useEffect } from "react";
import { sendSerialJoin, sendDigitalJoin, subscribeState } from "../utils/crestronUtils";

function SourceControl() {
  const [source, setSource] = useState("None");

  useEffect(() => {
    const handleSerialReceive = (data) => {
      setSource(data);
    };

    // Subscribe to serial join updates
    const unsubscribe = subscribeState(201, handleSerialReceive);

    // Cleanup on unmount
    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe(); // Unsubscribe if the utility supports it
      }
    };
  }, []);

  const changeSource = (newSource, serialJoin, digitalJoin) => {
    setSource(newSource); // Update the source state
    sendSerialJoin(serialJoin, newSource); // Send the serial join data
    sendDigitalJoin(digitalJoin, true); // Send digital signal (on)
    
    // Optional: Toggle digital signal off after a short delay
    setTimeout(() => {
      sendDigitalJoin(digitalJoin, false); // Send digital signal (off)
    }, 100);
  };

  return (
    <div className="component">
      <h2>Source Control</h2>
      <div className="buttons">
        <button onClick={() => changeSource("Iphone", 2, 5)}>Iphone</button>
        <button onClick={() => changeSource("Android", 2, 6)}>Android</button>
        <button onClick={() => changeSource("PC", 2, 7)}>PC</button>
        <button onClick={() => changeSource("Nvidia", 2, 8)}>Nvidia</button>
      </div>
      <p>Current Source: <strong>{source}</strong></p>
    </div>
  );
}

export default SourceControl;
