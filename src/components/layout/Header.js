import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <small>$</small> Moses Poston
      </h1>
      <Link to="/programming">
        <h3>{'>'} Full-Stack Developer</h3>
      </Link>
      <Link to="/design">
        <h3>{'>'} Designer</h3>
      </Link>
    </div>
  );
};

export default Header;
