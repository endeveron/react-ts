import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FunctionComponent = () => {
  return (
    <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">React + TS</a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Tasks</NavLink>
        </li>
        <li>
          <NavLink to="/info">Info</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default NavBar;