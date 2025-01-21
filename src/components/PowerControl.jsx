import React, { useState } from "react";
import { toggleDigitalJoin } from "../utils/crestronUtils";

function PowerControl() {
  const [isOn, setIsOn] = useState(false);

  const togglePower = () => {
    toggleDigitalJoin(1); // Example digital join
    setIsOn(!isOn);
  };

  return (
    <div className="component">
      <h2>Power Control</h2>
      <button onClick={togglePower}>{isOn ? "Turn Off" : "Turn On"}</button>
      <p>Status: {isOn ? "On" : "Off"}</p>
    </div>
  );
}

export default PowerControl;