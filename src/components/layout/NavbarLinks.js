import  AtSignIcon  from '../AtSignIcon';
import  LinkedinIcon  from '../LinkedinIcon';
import  GithubIcon  from '../GithubIcon';
import  AttachFileIcon  from '../AttachFileIcon';

const NavbarLinks = () => {
  return (
    <ul>
      <li>
        <a
          href="https://drive.google.com/file/d/1OWV3l2Ih7UGBPn0vxWeP2C1-z7aUDZnl/view?usp=sharing"
          alt="resume"
          target="_blank"
          rel="noopener noreferrer"
          className="outer-link"
        >
          <AtSignIcon size={15}/>
          <small> : moshikoatia@gmail.com </small>
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
          <GithubIcon size={15}/>
          <small> : github.com/Object-ions </small>
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
          <LinkedinIcon size={15}/>
          <small> : in/moses-a-p </small>
        </a>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1OWV3l2Ih7UGBPn0vxWeP2C1-z7aUDZnl/view?usp=sharing"
          alt="resume"
          target="_blank"
          rel="noopener noreferrer"
          className="outer-link"
        >
          <AttachFileIcon size={15}/>
          <small> : resume </small>
        </a>
      </li>
    </ul>
  );
};

export default NavbarLinks;
