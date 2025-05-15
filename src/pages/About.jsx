import React from "react";
import "../styles/About.scss";

const About = () => {
  const achievements = [
    {
      id: 1,
      title: "LeetCode Problem Solving",
      description:
        "Solved 350+ problems on LeetCode, improving algorithmic thinking and data structures proficiency.",
    },
    {
      id: 2,
      title: "GATE Qualification",
      description: "Qualified in GATE-2025 (CS) on the first attempt.",
    },
    {
      id: 3,
      title: "Leadership",
      description:
        "Served as Class Representative for three consecutive years during B.Tech, facilitating communication between faculty and students.",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Google Cloud Generative AI Virtual Internship",
      issuer: "Google Cloud",
      date: "2024",
    },
    {
      id: 2,
      title: "Database Design",
      issuer: "Oracle Academy",
      date: "2023",
    },
    {
      id: 3,
      title: "Database Programming with SQL",
      issuer: "Oracle Academy",
      date: "2023",
    },
    {
      id: 4,
      title: "Database Programming with PL/SQL",
      issuer: "Oracle Academy",
      date: "2023",
    },
  ];

  return (
    <section className="about">
      <div className="about-container">
        <h1 className="section-title">About Me</h1>

        <div className="about-content">
          <div className="about-image">
            <img src="/profile.jpg" alt="Profile" />
          </div>

          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I am Sai Charan Veerlapati, a passionate Computer Science
              Engineering student at CVR College of Engineering with expertise
              in creating responsive and user-friendly web applications. My
              journey in software development has equipped me with strong
              problem-solving skills and the ability to adapt to new
              technologies quickly.
            </p>
            <p>
              I specialize in web development using React.js, Node.js,
              Express.js, and MongoDB, and have experience working with various
              frontend and backend technologies. My approach combines technical
              excellence with a keen eye for design, ensuring that the
              applications I build are not only functional but also provide an
              exceptional user experience.
            </p>
            <p>
              When I'm not coding, I enjoy solving algorithmic problems on
              platforms like LeetCode, expanding my knowledge in the
              ever-evolving field of computer science, and taking on new
              challenges.
            </p>
          </div>
        </div>

        <div className="achievements-section">
          <h2>Achievements</h2>
          <div className="achievements-list">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h2>Certifications</h2>
          <div className="certifications-list">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <h3>{cert.title}</h3>
                <p>Issued by: {cert.issuer}</p>
                <p>Date: {cert.date}</p>
                {/* <a href={cert.link} target="_blank" rel="noreferrer">
                  View Certificate
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
