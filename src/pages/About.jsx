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
  ];

  const certifications = [
    {
      id: 1,
      title: "Smart Coder Certificate",
      issuer: "Smart Interviews",
      date: "2025",
    },
    {
      id: 2,
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman Academy",
      date: "2024",
    },
  ];

  return (
    <section className="about">
      <div className="about-container">
        <h1 className="section-title">About Me</h1>
        <p className="section-description">
          Get to know more about my background, achievements, and
          certifications.
        </p>
        <div className="about-main-card">
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
        <div className="about-cards-row">
          <div className="about-card achievements-card">
            <div className="about-card-header">
              <h2>Achievements</h2>
            </div>
            <div className="about-card-list">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="about-list-item">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-card certifications-card">
            <div className="about-card-header">
              <h2>Certifications</h2>
            </div>
            <div className="about-card-list">
              {certifications.map((cert) => (
                <div key={cert.id} className="about-list-item">
                  <h3>{cert.title}</h3>
                  <p>Issued by: {cert.issuer}</p>
                  <p>Date: {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
