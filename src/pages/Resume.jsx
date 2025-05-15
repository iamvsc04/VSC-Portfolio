import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import '../styles/Resume.scss';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);
  
  // Education data
  const education = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'CVR College of Engineering',
      location: 'Hyderabad, Telangana, India',
      period: '2022 - Present',
      description: 'Currently pursuing with a CGPA of 9.44. Focusing on software development, data structures, and algorithms.'
    },
    {
      id: 2,
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Junior Kalashala',
      location: 'Hyderabad, Telangana, India',
      period: '2020 - 2022',
      description: 'Completed with excellent marks (973/1000) in Mathematics, Physics, and Chemistry.'
    }
  ];

  // Projects data (instead of experience)
  const projects = [
    {
      id: 1,
      position: 'TeamSync – Collaborative Project Management Tool',
      company: 'Personal Project',
      location: '',
      period: 'Feb 2025 - Apr 2025',
      responsibilities: [
        'Designed and developed a full-stack project management web application using React.js, Node.js, Express.js, MongoDB, Socket.io, JWT',
        'Implemented Kanban boards, Gantt charts, and task assignment features, improving project visibility and tracking',
        'Enabled real-time collaboration with WebSocket-based communication, supporting instant chat, notifications, and status updates',
        'Integrated JWT authentication and role-based access control, enhancing security and user management',
        'Generated exportable reports (PDF/CSV) and CI/CD pipelines for deployment automation, increasing maintainability and scalability by 40%'
      ]
    },
    {
      id: 2,
      position: 'CVR CSE Department Website',
      company: 'College Project',
      location: '',
      period: 'Jan 2025 - Mar 2025',
      responsibilities: [
        'Developed the official departmental website for CVR College of Engineering using Vite, React.js, Bootstrap',
        'Built a responsive and accessible UI for consistent experience across devices, increasing mobile usability by 40%',
        'Worked with faculty to organize academic content, increasing content discoverability by 35%',
        'Optimized website performance and reduced load times, improving engagement by 30%'
      ]
    },
    {
      id: 3,
      position: 'Code Canvas – Online Code Editor',
      company: 'Personal Project',
      location: '',
      period: 'Jul 2024 - Sep 2024',
      responsibilities: [
        'Developed a real-time HTML/CSS/JS editor inspired by CodePen using React.js, Node.js, Express.js, Firebase, TailwindCSS',
        'Used Firebase to persist user code across sessions, improving reliability and user experience',
        'Designed a responsive and customizable interface using TailwindCSS, improving usability and navigation by 25%'
      ]
    }
  ];

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <section className="resume">
      <div className="resume-container">
        <div className="resume-header">
          <h1 className="section-title">Resume</h1>
          <div className="resume-actions">
            <button 
              onClick={togglePreview}
              className="preview-btn"
            >
              <FontAwesomeIcon icon={faEye} /> {showPreview ? 'Hide Preview' : 'Preview Resume'}
            </button>
          <a 
            href="/resume upt.pdf" 
              download="Sai_Charan_Veerlapati_Resume.pdf" 
            className="download-btn"
          >
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
          </div>
        </div>
        
        {showPreview ? (
          <div className="resume-preview">
            <iframe 
              src="/resume upt.pdf" 
              title="Resume Preview" 
              width="100%" 
              height="800px"
              style={{ border: 'none' }}
            />
          </div>
        ) : (
        <div className="resume-content">
          <div className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            <div className="timeline">
              {education.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{item.degree}</h3>
                    <div className="timeline-info">
                      <span className="timeline-institution">{item.institution}</span>
                      <span className="timeline-location">{item.location}</span>
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="resume-section">
              <h2 className="resume-section-title">Projects</h2>
            <div className="timeline">
                {projects.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{item.position}</h3>
                    <div className="timeline-info">
                      <span className="timeline-company">{item.company}</span>
                        {item.location && <span className="timeline-location">{item.location}</span>}
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <ul className="timeline-responsibilities">
                      {item.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default Resume; 