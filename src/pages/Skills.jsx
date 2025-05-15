import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faLaptopCode, 
  faServer, 
  faDatabase, 
  faTools 
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Skills.scss';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Programming Languages',
      icon: faCode,
      skills: ['Java', 'JavaScript', 'C++']
    },
    {
      id: 2,
      title: 'Frontend Development',
      icon: faLaptopCode,
      skills: ['React.js', 'HTML5', 'CSS3', 'TailwindCSS']
    },
    {
      id: 3,
      title: 'Backend Development',
      icon: faServer,
      skills: ['Node.js', 'Express.js']
    },
    {
      id: 4,
      title: 'Databases',
      icon: faDatabase,
      skills: ['MongoDB', 'SQL']
    },
    {
      id: 5,
      title: 'Developer Tools',
      icon: faTools,
      skills: ['Visual Studio Code', 'Git', 'GitHub', 'Postman', 'Android Studio']
    }
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <h1 className="section-title">Skills</h1>
        <p className="section-description">
          Here are the technologies and skills I've acquired and worked with throughout my academic journey.
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <div className="category-header">
                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                <h2 className="category-title">{category.title}</h2>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-name">{skill}</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}></div>
                    </div>
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