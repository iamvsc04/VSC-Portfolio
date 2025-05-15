import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin,
  faCode
} from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section className="contact">
      <div className="contact-container">
        <h1 className="section-title">Contact Me</h1>
        <p className="section-description">
          Feel free to reach out to me for any questions, project inquiries, or just to say hello!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <p><a href="mailto:veerlapatisaicharan04@gmail.com">veerlapatisaicharan04@gmail.com</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="info-text">
                <h3>Location</h3>
                <p>Hyderabad, India</p>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://github.com/iamvsc04" target="_blank" rel="noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/sai-charan-veerlapati" target="_blank" rel="noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://leetcode.com/Sai_Charan04" target="_blank" rel="noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faCode} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send Me a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                  <>
                    <span>Send Message</span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 