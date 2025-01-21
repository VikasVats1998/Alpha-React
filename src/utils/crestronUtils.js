import { CrComLib } from '@crestron/ch5-crcomlib';

// Function to send a value to a digital join
export const sendDigitalJoin = (joinNumber, value) => {
  if (joinNumber !== null) {
    CrComLib.publishEvent("boolean", joinNumber, value);
  }
};

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
export const subscribeState = (joinNumber, callback) => {
  CrComLib.subscribeState('serial', joinNumber, callback);
};

// Toggle a digital join with a default delay
export const toggleDigitalJoin = (joinNumber, delay = 500) => {
  sendDigitalJoin(joinNumber, true);
  setTimeout(() => sendDigitalJoin(joinNumber, false), delay);
};

// Handle button click events
const handleButtonClick = (button) => {
  const digitalJoin = parseInt(button.getAttribute("data-ch5-join-digital"), 10) || null;
  const analogJoin = parseInt(button.getAttribute("data-ch5-join-analog"), 10) || null;
  const serialJoin = button.getAttribute("data-ch5-join-serial") || null;
  const buttonValue = button.textContent.trim(); // Use button text as value

  if (digitalJoin !== null) toggleDigitalJoin(digitalJoin);
  if (analogJoin !== null) sendAnalogJoin(analogJoin, parseInt(buttonValue, 10));
  if (serialJoin !== null) sendSerialJoin(serialJoin, buttonValue);
};

// Attach event listeners to buttons
document.querySelectorAll(".demo").forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button));
});

// Handle slider input events
const handleSliderInput = (slider) => {
  const analogJoin = parseInt(slider.getAttribute("data-ch5-join-analog"), 10) || null;
  const sliderValue = parseInt(slider.value, 10);

  if (analogJoin !== null) {
    sendAnalogJoin(analogJoin, sliderValue);
  }
};

// Attach event listeners to sliders
document.querySelectorAll("input[type='range']").forEach((slider) => {
  slider.addEventListener("input", () => handleSliderInput(slider));
});

// Subscribe to feedback for digital, analog, and serial joins
const subscribeToFeedback = () => {
  // Subscribe to digital feedback
  document.querySelectorAll("[data-ch5-join-digital]").forEach((button) => {
    const digitalJoin = parseInt(button.getAttribute("data-ch5-join-digital"), 10);
    if (digitalJoin !== null) {
      CrComLib.subscribeState("boolean", digitalJoin, (value) => {
        console.log(`Digital feedback for join ${digitalJoin}: ${value}`);
        button.classList.toggle("active", value); // Toggle active state based on feedback
      });
    }
  });

  // Subscribe to analog feedback
  document.querySelectorAll("input[type='range']").forEach((slider) => {
    const analogJoin = parseInt(slider.getAttribute("data-ch5-join-analog"), 10);
    if (analogJoin !== null) {
      CrComLib.subscribeState("number", analogJoin, (value) => {
        console.log(`Analog feedback for join ${analogJoin}: ${value}`);
        slider.value = value; // Update slider position based on feedback
      });
    }
  });

  // Subscribe to serial feedback
  document.querySelectorAll("[data-ch5-join-serial]").forEach((element) => {
    const serialJoin = element.getAttribute("data-ch5-join-serial");
    if (serialJoin) {
      CrComLib.subscribeState("string", serialJoin, (value) => {
        console.log(`Serial feedback for join ${serialJoin}: ${value}`);
        element.textContent = value; // Update text content based on feedback
      });
    }
  });
};

// Initialize feedback subscriptions
subscribeToFeedback();
