import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Home.scss';

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="greeting">Hello Everyone! <span className="">🙋‍♂️</span></h1>
          <h2 className="intro">
            I am <span className="name">Sai Charan Veerlapati</span>
          </h2>
          <div className="typed-container">
            <span className="prefix">a </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'Web Developer',
                1000,
                'Problem Solver',
                1000,
                'MERN Stack Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2rem', display: 'inline-block' }}
              repeat={Infinity}
              className="typed-text"
            />
          </div>
          <p className="description">
            Computer Science Engineering student with strong expertise in web development using modern technologies.
            Passionate about building innovative and user-friendly applications that solve real-world problems.
          </p>
          <div className="buttons">
            <Link to="/contact" className="btn primary-btn">
              Contact Me
            </Link>
            <Link to="/projects" className="btn secondary-btn">
              View Projects <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
        <div className="home-image">
          <img src="/programmer.svg" alt="Programmer" />
        </div>
      </div>
    </section>
  );
};

export default Home; 