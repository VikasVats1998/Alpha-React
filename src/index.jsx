import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";
import { SourceProvider } from "./context/SourceContext";
import { VolumeProvider } from "./context/VolumeContext";

ReactDOM.render(
    <SourceProvider>
    <VolumeProvider>
      <App />
    </VolumeProvider>
  </SourceProvider>,
  document.getElementById("root")
);