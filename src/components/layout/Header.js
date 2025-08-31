import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';

const Header = () => {
  return (
    <div className="header">
        <h1>
          <small>$</small> Moses Atia Poston
        </h1>
      <div className="header-links">
        <div className="internal-links">
          <Link to="/">
            <h3>{'>'} About</h3>
          </Link>
          <Link to="/programming">
            <h3>{'>'} Projects</h3>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Header;
