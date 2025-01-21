// filepath: /C:/xampp/htdocs/crestron/Projects/Alpha React/src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/power">Power Control</Link></li>
        <li><Link to="/source">Source Control</Link></li>
        <li><Link to="/volume">Volume Control</Link></li>
        <li><Link to="/remote">Remote Control</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;