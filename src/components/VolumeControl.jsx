import React from "react";
import { increaseVolume, decreaseVolume } from "../utils/crestronUtils"; // Import the functions
import { useVolumeState, useVolumeDispatch } from "../context/VolumeContext";

function VolumeControl() {
  const { volume } = useVolumeState();
  const dispatch = useVolumeDispatch();

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
      <button onClick={() => decreaseVolume(dispatch, volume)}>-</button>
      <button onClick={() => increaseVolume(dispatch, volume)}>+</button>
    </div>
  );
}

export default VolumeControl;