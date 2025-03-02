import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div class="contact-container">
    <div class="contact-heading">
        <h2>Get In Touch</h2>
        <p>Have a question or want to work together? Feel free to reach out and I'll get back to you as soon as possible.</p>
    </div>
    
    <div class="contact-wrapper">
        
        <div class="contact-info">
            <div class="contact-info-header">
                <h3>Contact Information</h3>
                <p>Fill up the form and I'll get back to you within 24 hours.</p>
            </div>
            
            <div class="contact-info-list">
                <div class="contact-info-item">
                    <div class="contact-info-icon">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <div class="contact-info-text">
                        <h4>Phone</h4>
                        <p><a href="tel:+1234567890">+91 918383929</a></p>
                    </div>
                </div>
                
                <div class="contact-info-item">
                    <div class="contact-info-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="contact-info-text">
                        <h4>Email</h4>
                        <p><a href="mailto:vmayank0123@gmail.com">vmayank0123@gmail.com</a></p>
                    </div>
                </div>
                
                <div class="contact-info-item">
                    <div class="contact-info-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="contact-info-text">
                        <h4>Location</h4>
                        <p>Patna,India</p>
                    </div>
                </div>
            </div>
            
            <div class="contact-social">
                <a href="https://github.com/Raj-Mayank2" class="social-link">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/mayank-raj-1a4964217/" class="social-link">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-link">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/mayank_raj_.v?igsh=MWJwaTd2NGNiamdvNw==" class="social-link">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>
        
        
        <div class="contact-form">
            <div class="contact-form-heading">
                <h3>Send Me a Message</h3>
                <p>Have a project in mind or want to collaborate? Let's talk about it.</p>
            </div>
            
            <form action="#" method="POST">
                <div class="form-row">
                    <div class="input-group">
                        <input type="text" id="name" placeholder=" " required/>
                        <label for="name">Full Name</label>
                    </div>
                    
                    <div class="input-group">
                        <input type="email" id="email" placeholder=" " required/>
                        <label for="email">Email Address</label>
                    </div>
                </div>
                
                <div class="input-group">
                    <input type="text" id="subject" placeholder=" " required/>
                    <label for="subject">Subject</label>
                </div>
                
                <div class="input-group">
                    <textarea id="message" placeholder=" " required></textarea>
                    <label for="message">Your Message</label>
                </div>
                
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Contact