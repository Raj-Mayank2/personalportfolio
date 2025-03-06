import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div class="services-container">
    <div class="services-heading">
        <br/>
        <h2>My Services</h2>
        <p>Discover my professional services tailored to meet your specific needs and elevate your business to the next level.</p>
    </div>
    
    <div class="services-grid">
        
        <div class="service-card">
            <div class="service-background"></div>
            <div class="service-icon">
                <i class="fas fa-code"></i>
            </div>
            <div class="service-content">
                <h3 class="service-title">Web Development</h3>
                <p class="service-description">Custom website development with responsive design, ensuring optimal performance across all devices.</p>
                <a href="#" class="service-link">Learn More</a>
            </div>
        </div>
        
        
        <div class="service-card">
            <div class="service-background"></div>
            <div class="service-icon">
                <i class="fas fa-paint-brush"></i>
            </div>
            <div class="service-content">
                <h3 class="service-title">UI/UX Design</h3>
                <p class="service-description">User-centered design approach creating intuitive, engaging interfaces that enhance user experience.</p>
                <a href="#" class="service-link">Learn More</a>
            </div>
        </div>
        
        
        <div class="service-card">
            <div class="service-background"></div>
            <div class="service-icon">
                <i class="fas fa-mobile-alt"></i>
            </div>
            <div class="service-content">
                <h3 class="service-title">Mobile App Development</h3>
                <p class="service-description">Native and cross-platform mobile applications built with the latest technologies.</p>
                <a href="#" class="service-link">Learn More</a>
            </div>
        </div>
        
        
        <div class="service-card">
            <div class="service-background"></div>
            <div class="service-icon">
                <i class="fas fa-search"></i>
            </div>
            <div class="service-content">
                <h3 class="service-title">SEO Optimization</h3>
                <p class="service-description">Boost your online visibility with our comprehensive search engine optimization strategies.</p>
                <a href="#" class="service-link">Learn More</a>
            </div>
        </div>
        
        
        <div class="service-card">
            <div class="service-background"></div>
            <div class="service-icon">
                <i class="fas fa-chart-line"></i>
            </div>
            <div class="service-content">
                <h3 class="service-title">Data Science</h3>
                <p class="service-description">Help in creating a tailored and profitable model for enhancing your company's performance.</p>
                <a href="#" class="service-link">Learn More</a>
            </div>
        </div>
        
        <div class="service-card">
            <div class="service-background"></div>
            <div class="service-icon">
                <i class="fas fa-cogs"></i>
            </div>
            <div class="service-content">
                <h3 class="service-title">Graphic Designing</h3>
                <p class="service-description">Tailored design advertisements for your companies</p>
                <a href="#" class="service-link">Learn More</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Services