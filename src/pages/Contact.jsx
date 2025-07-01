import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faCode,
  faLaptopCode,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Contact.scss";

const Contact = () => {
  const codingProfiles = [
    {
      id: 1,
      name: "LeetCode",
      icon: faCode,
      url: "https://leetcode.com/Sai_Charan04",
      description: "350+ Problems Solved"
    },
    {
      id: 2,
      name: "CodeChef",
      icon: faLaptopCode,
      url: "https://www.codechef.com/users/iamvsc04",
      description: "3★ Coder"
    },
    {
      id: 3,
      name: "HackerRank",
      icon: faTrophy,
      url: "https://www.hackerrank.com/iamvsc4",
      description: "Problem Solving"
    }
  ];

  const socialProfiles = [
    {
      id: 1,
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/iamvsc04",
      description: "Open Source Projects"
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://linkedin.com/in/sai-charan-veerlapati",
      description: "Professional Network"
    },
    {
      id: 3,
      name: "Instagram",
      icon: faInstagram,
      url: "https://instagram.com/iamvsc04",
      description: "Personal Updates"
    }
  ];

  return (
    <section className="contact">
      <div className="contact-container">
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-description">
          Connect with me on these platforms
        </p>

        <div className="contact-sections">
          {/* Coding Profiles Section */}
          <div className="contact-section">
            <h2 className="section-subtitle">Coding Profiles</h2>
            <div className="profiles-grid">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.id}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="profile-card"
                >
                  <div className="profile-icon">
                    <FontAwesomeIcon icon={profile.icon} />
                  </div>
                  <div className="profile-info">
                    <h3>{profile.name}</h3>
                    <p>{profile.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="contact-section">
            <h2 className="section-subtitle">Social Media</h2>
            <div className="profiles-grid">
              {socialProfiles.map((profile) => (
                <a
                  key={profile.id}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="profile-card"
                >
                  <div className="profile-icon">
                    <FontAwesomeIcon icon={profile.icon} />
                  </div>
                  <div className="profile-info">
                    <h3>{profile.name}</h3>
                    <p>{profile.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
