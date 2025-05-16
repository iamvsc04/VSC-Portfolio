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
  return (
    <section className="contact">
      <div className="contact-container">
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-description">
          Connect with me on these platforms
        </p>
        <div className="contact-content center-content">
          <div className="contact-info">
            <div className="profiles-grid">
              {/* Coding Profiles */}
              <a
                href="https://leetcode.com/Sai_Charan04"
                target="_blank"
                rel="noreferrer"
                className="profile-icon"
                title="LeetCode"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                href="https://www.codechef.com/users/iamvsc04"
                target="_blank"
                rel="noreferrer"
                className="profile-icon"
                title="CodeChef"
              >
                <FontAwesomeIcon icon={faLaptopCode} />
              </a>
              <a
                href="https://www.hackerrank.com/iamvsc04"
                target="_blank"
                rel="noreferrer"
                className="profile-icon"
                title="HackerRank"
              >
                <FontAwesomeIcon icon={faTrophy} />
              </a>
              <a
                href="https://github.com/iamvsc04"
                target="_blank"
                rel="noreferrer"
                className="profile-icon"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              {/* Personal Profiles */}
              <a
                href="mailto:veerlapatisaicharan04@gmail.com"
                className="profile-icon"
                title="Email Me"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://linkedin.com/in/sai-charan-veerlapati"
                target="_blank"
                rel="noreferrer"
                className="profile-icon"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://instagram.com/iamvsc4"
                target="_blank"
                rel="noreferrer"
                className="profile-icon"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="profile-icon location"
                title="Hyderabad, India"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
