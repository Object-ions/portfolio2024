import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-selection">
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
        <li className="space"> </li>
        <li>
          <a
            href="http://google.com"
            alt="resume"
            target="_blank"
            rel="noopener noreferrer"
            className="outer-link"
          >
            <small> Resume</small>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ fontSize: '10px' }}
            />
          </a>
        </li>
        <li>
          <a
            href="http://google.com"
            alt="resume"
            target="_blank"
            rel="noopener noreferrer"
            className="outer-link"
          >
            <small> GitHub</small>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ fontSize: '10px' }}
            />
          </a>
        </li>
        <li>
          <a
            href="http://google.com"
            alt="resume"
            target="_blank"
            rel="noopener noreferrer"
            className="outer-link"
          >
            <small> LinkedIn</small>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ fontSize: '10px' }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
