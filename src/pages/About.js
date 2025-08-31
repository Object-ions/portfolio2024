import { Link } from 'react-router-dom';
import NavbarLinks from '../components/layout/NavbarLinks';

const About = () => {
  return (
    <div className="about">
      <h2>
        Creativity is my secret weapon and I’m always eager to collaborate.
      </h2>
      <div className="about-text">
        <p>
          <h3>My name is Moses,</h3>
          and I’m a developer and designer with a love for the web, brand storytelling, and user experience. I enjoy building things that connect creativity with function - from animated interfaces to marketing campaigns that leave an impression.
        </p>
        <p>
        I studied Product Design at Shenkar College of Engineering and Design, where I discovered how much I enjoy the intersection of art, technology, and communication. After finishing a full-stack bootcamp, I began working with clients through my agency, Switch Case Studio, creating websites, brand identities, and digital campaigns.
        </p>
        <p>
        I’m currently focused on projects that combine design, modern web technologies, and marketing strategy - whether that means React and Next.js development, SEO-driven content, or campaigns that merge automation with creative storytelling.
        </p>
      </div>
      <div className="about-contact">
        <h3>Let’s create something amazing together</h3>
        <NavbarLinks />
      </div>
      <div className="about-link">
        <Link to="/programming"> {'> '}Check out my projects</Link>
      </div>
    </div>
  );
};

export default About;


