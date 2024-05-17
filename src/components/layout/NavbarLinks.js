import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const NavbarLinks = () => {
  return (
    <ul>
      <li>
        <a
          href="https://drive.google.com/file/d/1hsO7aD61Cl9fc8i2D7oDLxxpOXsGu8Uf/view?usp=sharing"
          alt="resume"
          target="_blank"
          rel="noopener noreferrer"
          className="outer-link"
        >
          <small>Resume </small>
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
          <small>GitHub </small>
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
          <small>LinkedIn </small>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ fontSize: '10px' }}
          />
        </a>
      </li>
    </ul>
  );
};

export default NavbarLinks;
