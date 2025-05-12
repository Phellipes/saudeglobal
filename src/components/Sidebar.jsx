import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>SaúdeGlobal</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/relatorios">Relatórios</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;