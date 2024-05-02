import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';

const Header = () => {
  const [windowLength, setWindowLength] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowLength(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header">
      <Link to="/">
        <h1>
          <small>$</small> Moses Poston
        </h1>
      </Link>
      <div className="header-links">
        <div className="internal-links">
          <Link to="/programming">
            <h3>{'>'} Full-Stack Developer</h3>
          </Link>
          <Link to="/design">
            <h3>{'>'} Designer</h3>
          </Link>
        </div>
        <div className="external-links">
          {windowLength <= 975 && <NavbarLinks />}
        </div>
      </div>
    </div>
  );
};

export default Header;
