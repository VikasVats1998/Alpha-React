import { CrComLib } from '@crestron/ch5-crcomlib';

// Function to send a value to an analog join
export const sendAnalogJoin = (joinNumber, value) => {
  if (joinNumber !== null && !isNaN(value)) {
    CrComLib.publishEvent("number", joinNumber, value);
  }
};

// Function to send a value to a serial join
export const sendSerialJoin = (joinNumber, value) => {
  if (joinNumber !== null) {
    CrComLib.publishEvent("string", joinNumber, value);
  }
};

// Function to send a digital join
export const sendDigitalJoin = (joinNumber, state) => {
  if (joinNumber !== null) {
    CrComLib.publishEvent("boolean", joinNumber, state);
  }
};

// Function to subscribe to a state
export const subscribeState = (joinNumber, callback) => {
  CrComLib.subscribeState('serial', joinNumber, callback);
};

// Toggle a digital join with a default delay
export const toggleDigitalJoin = (joinNumber, delay = 500) => {
  sendDigitalJoin(joinNumber, true);
  setTimeout(() => sendDigitalJoin(joinNumber, false), delay);
};

// Function to handle source change
export const handleSourceChange = (dispatch, newSource, digitalJoin) => {
  dispatch({ type: "SET_SOURCE", payload: newSource });
  sendDigitalJoin(digitalJoin, true); // Send digital signal (on)
  console.log("Send Digital join " + digitalJoin);
  
  // Optional: Toggle digital signal off after a short delay
  setTimeout(() => {
    sendDigitalJoin(digitalJoin, false); // Send digital signal (off)
  }, 100);
};
// Volume control functions
export const handleVolumeChange = (dispatch, value) => {
  dispatch({ type: "SET_VOLUME", payload: value });
  sendAnalogJoin(101, value); // Example analog join
};

export const increaseVolume = (dispatch, volume) => {
  if (volume < 100) {
    handleVolumeChange(dispatch, volume + 0.5);
    toggleDigitalJoin(13, 100); // Send digital signal for increase
  }
};

export const decreaseVolume = (dispatch, volume) => {
  if (volume > 0) {
    handleVolumeChange(dispatch, volume - 0.5);
    toggleDigitalJoin(12, 100); // Send digital signal for decrease
  }
};
