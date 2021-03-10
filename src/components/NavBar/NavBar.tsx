import React from 'react';

const NavBar: React.FunctionComponent = () => {
  return (
    <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">React + TS</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Tasks</a></li>
        <li><a href="/">Info</a></li>
      </ul>
    </div>
  </nav>
  );
};

export default NavBar;