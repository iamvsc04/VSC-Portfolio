import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import "../styles/Resume.scss";

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  // Education data
  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering",
      institution: "CVR College of Engineering",
      location: "Hyderabad, Telangana, India",
      period: "2022 - Present",
      description:
        "Currently pursuing with a CGPA of 9.44. Focusing on software development, data structures, and algorithms.",
    },
    {
      id: 2,
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior Kalashala",
      location: "Hyderabad, Telangana, India",
      period: "2020 - 2022",
      description:
        "Completed with excellent marks (973/1000) in Mathematics, Physics, and Chemistry.",
    },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      position: "TeamSync – Collaborative Project Management Tool",
      company: "Personal Project",
      location: "",
      period: "Feb 2025 - Apr 2025",
      responsibilities: [
        "A full-stack project management web application to improve team productivity and workflow efficiency.",
        "Implemented Kanban boards, Gantt charts, and task assignment features with real-time updates.",
        "Integrated role-based access control and secure authentication using JWT.",
      ],
    },
    {
      id: 2,
      position: "CVR CSE Department Website",
      company: "College Project",
      location: "",
      period: "Jan 2025 - Mar 2025",
      responsibilities: [
        "Developed the official departmental website for CVR College of Engineering, improving online visibility by 50%.",
        "Built with a responsive and accessible UI for consistent experience across all devices.",
        "Implemented a content management system for faculty to easily update course materials.",
      ],
    },
    {
      id: 3,
      position: "Code Canvas – Online Code Editor",
      company: "Personal Project",
      location: "",
      period: "Jul 2024 - Sep 2024",
      responsibilities: [
        "Created a real-time HTML/CSS/JS editor inspired by CodePen, allowing users to write, preview, and share code instantly.",
        "Used Firebase to persist user code across sessions and enable collaborative editing.",
        "Implemented syntax highlighting and code auto-completion features for improved user experience.",
      ],
    },
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
            <button onClick={togglePreview} className="preview-btn">
              <FontAwesomeIcon icon={faEye} />{" "}
              {showPreview ? "Hide Preview" : "Preview Resume"}
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
              style={{ border: "none" }}
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
                        <span className="timeline-institution">
                          {item.institution}
                        </span>
                        <span className="timeline-location">
                          {item.location}
                        </span>
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
                        {item.location && (
                          <span className="timeline-location">
                            {item.location}
                          </span>
                        )}
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
