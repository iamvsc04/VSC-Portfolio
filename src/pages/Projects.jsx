import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import "../styles/Projects.scss";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TeamSync – Collaborative Project Management Tool",
      description:
        "A full-stack project management web application built with MERN stack. Features include Kanban boards, Gantt charts, task assignment, real-time collaboration, and role-based access control.",
      image: "TeamSync.png",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
      ],
      github: "https://github.com/iamvsc04/TeamSync-Collaborative-Project-Management-Tool",
      live: null,
    },
    {
      id: 2,
      title: "CVR CSE Department Website",
      description:
        "The official departmental website for CVR College of Engineering, improving online visibility by 50%. Built with a responsive and accessible UI for consistent experience across devices.",
      image: "CVR CSE Dept.png",
      technologies: ["Vite", "React.js", "Bootstrap"],
      github: "https://github.com/cvrcsedept/CVR-CSE",
      live: "https://cvr-cse.vercel.app/",
    },  
    {
      id: 3,
      title: "CA Santhosh & Co. Website",
      description:
        "A professional website for a Chartered Accountancy firm, featuring service information, appointment booking, and client testimonials. Built with modern web technologies for optimal performance.",
      image: "caSanthoshAndCo.png",
      technologies: ["Vite", "React.js", "TailwindCSS", "EmailJS"],
      github: "https://github.com/iamvsc04/CA_SANTHOSH_AND_CO",
      live: "https://ca-santhosh-and-co.vercel.app/",
    },
    {
      id: 4,
      title: "Fine Management System",
      description:
        "A comprehensive system for managing fines and penalties in educational institutions. Features include fine tracking, payment processing, and automated notifications.",
      image: "fms.png",
      technologies: ["JSP", "Servlets", "HTML", "CSS", "MySQL"],
      github: "https://github.com/iamvsc04/Fine-Management-System",
      live: null,
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h1 className="section-title">VSC's Nexus</h1>
          <p className="section-description">
            Here are few of the projects I've worked on. Feel free to check them out!
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="project-content">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link github"
                        title="View on GitHub"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link live"
                        title="View Live Demo"
                      >
                        <FontAwesomeIcon icon={faExternalLink} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
