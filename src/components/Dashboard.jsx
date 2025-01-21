import React, { useState } from "react";
import "./Dashboard.css";

const HeaderComponent = () => {
    return (
      <header className="header">
        <div className="header-left">
          <img src="qr_code.png" alt="QR Code" className="qr-code" />
          <img src="logo.png" alt="Logo" className="logo" />
        </div>
        <div className="header-title">Primary Bedroom</div>
        <div className="header-right">
          <button>Itinerary</button>
          <button>Menu</button>
          <button>Directory</button>
        </div>
      </header>
    );
  };
  
  const ControlCard = ({ title, children, color }) => {
    return (
      <div className="control-card" style={{ backgroundColor: color }}>
        <h3 className="control-title">{title}</h3>
        <div className="control-content">{children}</div>
      </div>
    );
  };
  
  const FooterComponent = () => {
    return (
      <footer className="footer">
        <button>💡</button>
        <button>🌡️</button>
        <button>➖</button>
        <button>⏺️</button>
      </footer>
    );
  };
  
  const Dashboard = () => {
    return (
      <div className="dashboard">
        <HeaderComponent />
  
        <main className="main-content">
          <ControlCard title="Lights" color="#f0c541">
            <div className="lights-controls">
              <div>
                <input type="radio" id="high" name="light" />
                <label htmlFor="high">High</label>
              </div>
              <div>
                <input type="radio" id="medium" name="light" />
                <label htmlFor="medium">Medium</label>
              </div>
              <div>
                <input type="radio" id="low" name="light" />
                <label htmlFor="low">Low</label>
              </div>
              <div>
                <input type="radio" id="off" name="light" />
                <label htmlFor="off">Off</label>
              </div>
              <input type="range" className="slider" />
            </div>
          </ControlCard>
  
          <ControlCard title="Climate" color="#d3d3d3">
            <div className="climate-controls">
              <div className="temperature-display">72°F</div>
              <div className="set-temperature">
                <button>+</button>
                <span>Set to 68</span>
                <button>-</button>
              </div>
              <div className="mode">Cooling</div>
            </div>
          </ControlCard>
  
          <ControlCard title="Shades" color="#f35b7a">
            <div className="shades-controls">
              <div>
                <input type="radio" id="open" name="shades" />
                <label htmlFor="open">Open</label>
              </div>
              <div>
                <input type="radio" id="close" name="shades" />
                <label htmlFor="close">Close</label>
              </div>
            </div>
          </ControlCard>
        </main>
  
        <FooterComponent />
      </div>
    );
  };
  
  export default Dashboard;
  