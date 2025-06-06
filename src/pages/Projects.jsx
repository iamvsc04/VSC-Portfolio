import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import "../styles/Projects.scss";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "TeamSync – Collaborative Project Management Tool",
      description:
        "A full-stack project management web application to improve team productivity and workflow efficiency. Features include Kanban boards, Gantt charts, task assignment, real-time collaboration, and role-based access control.",
      image: "https://via.placeholder.com/400x300",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "JWT",
      ],
      category: "web",
      github:
        "https://github.com/iamvsc04/TeamSync-Collaborative-Project-Management-Tool",
      live: "https://example.com",
    },
    {
      id: 2,
      title: "CVR CSE Department Website",
      description:
        "The official departmental website for CVR College of Engineering, improving online visibility by 50%. Built with a responsive and accessible UI for consistent experience across devices.",
      image: "CVR CSE Dept.png",
      technologies: ["Vite", "React.js", "Bootstrap"],
      category: "web",
      github: "https://github.com/cvrcsedept/CVR-CSE",
      live: "https://cvr-cse.vercel.app/",
    },
    {
      id: 3,
      title: "Code Canvas – Online Code Editor",
      description:
        "A real-time HTML/CSS/JS editor inspired by CodePen, allowing users to write, preview, and share code instantly. Used Firebase to persist user code across sessions.",
      image: "https://via.placeholder.com/400x300",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "Firebase",
        "TailwindCSS",
      ],
      category: "web",
      github: "https://github.com/iamvsc04/CodeSpace",
      live: "https://example.com",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h1 className="section-title">Projects</h1>
        <p className="section-description">
          Here are some of the projects I've worked on. Feel free to check them
          out!
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faExternalLink} />
                  </a>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
