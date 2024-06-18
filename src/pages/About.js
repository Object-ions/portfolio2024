import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <h2>
        Creativity is my secret weapon and I’m always eager to collaborate.
      </h2>
      <div className="about-text">
        <p>
          <h3>Hi, my name is Moses,</h3>
          and my journey began with a deep appreciation for aesthetics, leading
          me to study Product Design at 'Shenkar College of Engineering and
          Design'. This background has given me a keen eye for detail and a
          solid foundation in creating user-friendly designs.
        </p>

        <p>
          As my fascination with user experience grew through my transition from
          physical to digital products, it naturally led me to pursue a career
          in full-stack development. In 2024, I graduated from Epicodus,
          specializing in React and C#. My technical arsenal includes HTML,
          SCSS, JavaScript, Node.js, Express.js, ASP.NET, MySQL, MongoDB,
          Firebase, and more.
        </p>
        <p>
          I thrive on challenges and always looking for new opportunities to
          learning.
        </p>
      </div>
      <div className="about-contact">
        <h3>Let’s create something together</h3>
        <p>@ : moshikatia@gmail.com</p>
      </div>
      <div className="about-link">
        <Link to="/programming"> {'> '}Check out my projects</Link>
      </div>
    </div>
  );
};

export default About;
