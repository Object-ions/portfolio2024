import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

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
        <li>
          <Link to={'/design'}>
            <small>{'>'} </small>
            Design
          </Link>
        </li>
        <li className="space"> </li>
        <li>
          <a
            href="https://drive.google.com/file/d/17ZbXvH_BpdkqzDiOV629P5vE5Q5ue6SK/view?usp=sharing"
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
            href="https://github.com/Object-ions"
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
            href="https://www.linkedin.com/in/moses-a-p/"
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
