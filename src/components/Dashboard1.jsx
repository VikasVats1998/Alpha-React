import React, { useEffect, Suspense, lazy } from "react";
import { handleSourceChange, subscribeState } from "../utils/crestronUtils"; // Import the functions
import { useSourceState, useSourceDispatch } from "../context/SourceContext";
import "./Dashboard1.css";
import Card from "./Card";
import lucaImage from "../assets/images/luca11.jpg"; // Import the image

const SourceControl = lazy(() => import("./SourceControl"));



function Dashboard1() {
  

  return (
    <div className="dashboard">
      <Card title="Climate">
        <div className="climate-control">
          <div className="temperature-settings">
            <p>Cool When: <span>79</span></p>
            <p>Heat When: <span>63</span></p>
          </div>
          <div className="current-temp">
            <h1>73</h1>
          </div>
          <input type="range" min="60" max="80" defaultValue="73" />
        </div>
      </Card>

      <Card title="Audio">
        <img src={lucaImage} alt="Luca" className="audio-image" /> {/* Use the imported image */}
        <div className="toggle-buttons">
          <button>Off</button>
          <button>On</button>
        </div>
      </Card>

      <Suspense fallback={<div>Loading...</div>}>
        <SourceControl />
      </Suspense>

      <Card title="Shades">
        <div className="toggle-buttons">
          <button>Close</button>
          <button>Open</button>
        </div>
      </Card>

      <Card title="Security">
        <p>DISARMED</p>
        <button>Go to Full Security Page</button>
      </Card>

      
    </div>
  );
}

export default Dashboard1;