import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJava,
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faGit,
  faGithub,
  faAndroid,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faLaptopCode,
  faServer,
  faDatabase,
  faTools,
  faCube,
  faC,
  faTerminal,
  faFire
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Skills.scss';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Programming Languages',
      icon: faCode,
      color: '#4169E1', // Royal Blue
      skills: [
        { name: 'Java', icon: faJava },
        { name: 'JavaScript', icon: faJs },
        { name: 'C++', icon: faC }
      ]
    },
    {
      id: 2,
      title: 'Frontend Development',
      icon: faLaptopCode,
      color: '#00FFFF', // Cyan
      skills: [
        { name: 'React.js', icon: faReact },
        { name: 'HTML5', icon: faHtml5 },
        { name: 'CSS3', icon: faCss3Alt },
        { name: 'TailwindCSS', icon: faCss3Alt }
      ]
    },
    {
      id: 3,
      title: 'Backend Development',
      icon: faServer,
      color: '#32CD32', // Lime Green
      skills: [
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Express.js', icon: faTerminal }
      ]
    },
    {
      id: 4,
      title: 'Databases',
      icon: faDatabase,
      color: '#FFA500', // Orange
      skills: [
        { name: 'MongoDB', icon: faDatabase },
        { name: 'SQL', icon: faDatabase },
        { name: 'Firebase', icon: faFire }
      ]
    },
    {
      id: 5,
      title: 'Developer Tools',
      icon: faTools,
      color: '#FF6B81', // Pink
      skills: [
        { name: 'VS Code', icon: faCode },
        { name: 'Git', icon: faGit },
        { name: 'GitHub', icon: faGithub },
        { name: 'Postman', icon: faCube },
        { name: 'Android Studio', icon: faAndroid }
      ]
    }
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <h1 className="section-title">Skills</h1>
        <p className="section-description">
          Here are the technologies and skills I've acquired and worked with throughout my academic journey.
        </p>
        
        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category" style={{'--category-color': category.color}}>
              <div className="category-header">
                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                <h2 className="category-title">{category.title}</h2>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-tab">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 