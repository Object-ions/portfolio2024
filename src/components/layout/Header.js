import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';

const Header = () => {
  const [windowLength, setWindowLength] = useState(window.innerWidth);
  const [displayName, setDisplayName] = useState('Moses Poston');

  useEffect(() => {
    const handleResize = () => {
      setWindowLength(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const replacements = {
      M: 'ẅ',
      ẅ: 'M',
      o: '•',
      '•': 'o',
      s: 'З',
      З: 's',
      e: '&',
      '&': 'e',
      P: 'þ',
      þ: 'P',
      n: 'ň',
      ň: 'n',
      t: 'Ł',
      Ł: 't',
    };

    const timer = setInterval(() => {
      const characters = Array.from(displayName);
      const targets = Object.keys(replacements);

      // Select a random target character from the list that exists in the current displayName
      const validTargets = targets.filter((char) => characters.includes(char));
      if (validTargets.length > 0) {
        const randomChar =
          validTargets[Math.floor(Math.random() * validTargets.length)];
        const indexToReplace = characters.findIndex(
          (char) => char === randomChar
        );

        // Replace the character with its corresponding replacement
        characters[indexToReplace] = replacements[randomChar];
        setDisplayName(characters.join(''));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [displayName]);

  return (
    <div className="header">
      <Link to="/">
        <h1>
          <small>$</small> {displayName}
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
