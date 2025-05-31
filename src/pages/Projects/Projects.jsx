import React from 'react'
import './Projects.css'
import repl from "../../assets/repl.png"
import threads from "../../assets/threads.png"
const Projects = () => {
  return (
    <div class="projects-container">
    <div class="projects-heading">
        <h2>Featured Projects</h2>
        <p>Explore some of my recent work showcasing my expertise and creative problem-solving abilities.</p>
    </div>
    
    <div class="projects-grid">
        
        <div class="project-card">
            <div class="project-banner">
                <img src="/api/placeholder/500/300" alt="Food Ordering Website"/>
                <div class="project-overlay"></div>
                <span class="project-category">Web Development</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">Modern Food Ordering System</h3>
                <p class="project-description">A fully responsive food ordering system solution with secure payment integration, product filtering, and user authentication.</p>
                <div class="project-meta">
                    <div class="project-tech">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Express.js</span>
                        <span class="tech-tag">MongoDB</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/Raj-Mayank2/movie-recommender-system" class="project-link" title="View Live Site">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="https://github.com/Raj-Mayank2/recipe-app" class="project-link" title="View Source Code">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      <div class="project-card">
            <div class="project-banner">
                <img src="/api/placeholder/500/300" alt="Food Ordering Website"/>
                <div class="project-overlay"></div>
                <span class="project-category">Web Development</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">Movie App</h3>
                <p class="project-description">A fully responsive Movie App displaying the details of movie and their IMDB ratings</p>
                <div class="project-meta">
                    <div class="project-tech">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Express.js</span>
                        <span class="tech-tag">MongoDB</span>
                    </div>
                    <div class="project-links">
                        <a href="https://raj-mayank2.github.io/Portfolio/" class="project-link" title="View Live Site">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="https://github.com/Raj-Mayank2/movieapp" class="project-link" title="View Source Code">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="project-card">
            <div class="project-banner">
                <img src={repl} alt="Repl devs"/>
                <div class="project-overlay"></div>
                <span class="project-category">Web Development</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">REPL Devs Website</h3>
                <p class="project-description">A college club website consisting of features our college website offers</p>
                <div class="project-meta">
                    <div class="project-tech">
                        <span class="tech-tag">Figma</span>
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Firebase</span>
                    </div>
                    <div class="project-links">
                        <a href="https://repldevs.vercel.app/" class="project-link" title="View Live Site">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="https://github.com/Raj-Mayank2/repldevs" class="project-link" title="View Source Code">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="project-card">
            <div class="project-banner">
                <img src="/api/placeholder/500/300" alt="Dashboard Interface"/>
                <div class="project-overlay"></div>
                <span class="project-category">Web Application</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">Movie Recommendation System</h3>
                <p class="project-description">A comprehensive analytics platform with real-time data visualization, customizable reports, and user permission management.</p>
                <div class="project-meta">
                    <div class="project-tech">
                        <span class="tech-tag">SK Learn</span>
                        <span class="tech-tag">Express</span>
                        <span class="tech-tag">Machine Learning</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/Raj-Mayank2/movie-recommender-system" class="project-link" title="View Live Site">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="https://github.com/Raj-Mayank2/movie-recommender-system" class="project-link" title="View Source Code">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="project-card">
            <div class="project-banner">
                <img src={threads} alt="Educational Platform"/>
                <div class="project-overlay"></div>
                <span class="project-category">Full Stack</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">Threads clone website</h3>
                <p class="project-description">This is the clone made by me of the Threads social media website</p>
                <div class="project-meta">
                    <div class="project-tech">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Django</span>
                        <span class="tech-tag">PostgreSQL</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/Raj-Mayank2/threads-clone-master" class="project-link" title="View Live Site">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="https://github.com/Raj-Mayank2/threads-clone-master" class="project-link" title="View Source Code">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    
    <a href="#" class="view-all-btn">View All Projects</a>
</div>
  )
}

export default Projects
