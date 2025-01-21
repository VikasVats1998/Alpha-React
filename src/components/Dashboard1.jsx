import React, { useState } from "react";
import { sendAnalogJoin } from "../utils/crestronUtils";
import './Dashboard1.css';

// Reusable Card Component
const Card = ({ title, children }) => {

    const [volume, setVolume] = useState(50);
    
      const handleVolumeChange = (value) => {
        setVolume(value);
        sendAnalogJoin(101, value); // Example analog join
      };
    
      const increaseVolume = () => {
        if (volume < 100) {
          handleVolumeChange(volume + 10);
        }
      };
    
      const decreaseVolume = () => {
        if (volume > 0) {
          handleVolumeChange(volume - 10);
        }
      };
    
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
};

// Dashboard Component
const Dashboard1 = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>OFFICE</h1>
        <div className="header-controls">
          <span>Room Scenes</span>
          <button className="power-button">Room Off</button>
        </div>
      </header>

      <main className="main-content">
        <Card title="Lights">
          <div className="toggle-buttons">
            <button>Off</button>
            <button>On</button>
          </div>
        </Card>

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
          <img src="/path-to-image/luca.jpg" alt="Luca" className="audio-image" />
          <div className="toggle-buttons">
            <button>Off</button>
            <button>On</button>
          </div>
        </Card>

        <Card title="Video">
          <select>
            <option>Iphone</option>
            <option>Android</option>
            <option>Source</option>
          </select>
          <div className="toggle-buttons">
            <button>Off</button>
            <button>On</button>
          </div>
        </Card>

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
      </main>

      <footer className="footer">
        <p>7:03 AM</p>
        <p>SIGNOR VESPA</p>
      </footer>
    </div>
  );
};

export default Dashboard1;
