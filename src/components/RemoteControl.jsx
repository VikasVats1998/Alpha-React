import React from "react";
import { sendSerialJoin } from "../utils/crestronUtils";

function RemoteControl() {
  const handleButtonPress = (button, joinNumber) => {
    sendSerialJoin(joinNumber, button);
    alert(`You pressed: ${button}`);
  };

  return (
    <div className="component">
      <h2>Remote Control</h2>
      <div className="remote-buttons">
        {["Up", "Down", "Left", "Right", "OK"].map((button) => (
          <button
            key={button}
            onClick={() => handleButtonPress(button, "4")}
            style={{ margin: "5px" }}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RemoteControl;