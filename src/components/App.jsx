import React, { useEffect } from "react";
import { MemoryRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { CrComLib } from "@crestron/ch5-crcomlib";
import Sidebar from "./Sidebar";
import PowerControl from "./PowerControl";
import SourceControl from "./SourceControl";
import VolumeControl from "./VolumeControl";
import RemoteControl from "./RemoteControl";
import Dashboard from "./Dashboard"; // Import the Dashboard component
import Dashboard1 from "./Dashboard1"; // Import the Dashboard component


function App() {
  useEffect(() => {
    // Subscribe to feedback for digital, analog, and serial joins
    CrComLib.subscribeState("boolean", 1, (value) => {
      console.log(`Digital feedback for join 1: ${value}`);
    });
    CrComLib.subscribeState("number", 3, (value) => {
      console.log(`Analog feedback for join 3: ${value}`);
    });
    CrComLib.subscribeState("string", "2", (value) => {
      console.log(`Serial feedback for join 2: ${value}`);
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <h1>Control Panel</h1>
          <nav>
            <Link to="/dashboard">Go to Dashboard</Link>
            <Link to="/dashboard1">Go to Dashboard</Link>
          </nav>
          <Switch>
            <Route path="/power" component={PowerControl} />
            <Route path="/source" component={SourceControl} />
            <Route path="/volume" component={VolumeControl} />
            <Route path="/remote" component={RemoteControl} />
            <Route path="/dashboard" component={Dashboard} /> {/* Add route for Dashboard */}
            <Route path="/dashboard1" component={Dashboard1} /> {/* Add route for Dashboard */}
            <Route path="/" exact>
              <h2>Welcome to the Control Panel</h2>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;