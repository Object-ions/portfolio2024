import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link to={'/about'}>
          <small>{'>'} </small>
          About
        </Link>
      </li>
      <li>
        <Link to={'/'}>
          <small>{'>'} </small>
          Programming
        </Link>
      </li>
      <li>
        <Link to={'/design'}>
          <small>{'>'} </small>
          Design
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
