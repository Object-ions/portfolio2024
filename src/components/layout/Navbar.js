import { Link } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-selection">
        <li>
          <Link to={'/'}>
            <small>{'>'} </small>
            About
          </Link>
        </li>
        <li>
          <Link to={'/programming'}>
            <small>{'>'} </small>
            Programming
          </Link>
        </li>
        {/* <li>
          <Link to={'/design'}>
            <small>{'>'} </small>
            Design
          </Link>
        </li> */}
        <li className="space"> </li>
      </ul>
      <NavbarLinks />
    </div>
  );
};

export default Navbar;
