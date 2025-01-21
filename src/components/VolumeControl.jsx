import React, { useState } from "react";
import { sendAnalogJoin, sendDigitalJoin } from "../utils/crestronUtils";

function VolumeControl() {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (value) => {
    setVolume(value);
    sendAnalogJoin(101, value); // Example analog join
  };

  const increaseVolume = () => {
    if (volume < 100) {
      handleVolumeChange(volume + 0.5);
      sendDigitalJoin(13, true); // Send digital signal for increase
      setTimeout(() => {
        sendDigitalJoin(13, false); // Turn off digital signal after a short delay
      }, 100);
    }
  };

  const decreaseVolume = () => {
    if (volume > 0) {
      handleVolumeChange(volume - 0.5);
      sendDigitalJoin(12, true); // Send digital signal for decrease
      setTimeout(() => {
        sendDigitalJoin(12, false); // Turn off digital signal after a short delay
      }, 100);
    }
  };

  return (
    <div className="component">
      <h2>Volume Control</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        disabled
      />
      <p>Volume: {volume}%</p>
      <button onClick={decreaseVolume}>-</button>
      <button onClick={increaseVolume}>+</button>
    </div>
  );
}

export default VolumeControl;