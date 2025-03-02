import React from 'react'
import profile1 from '../../assets/profile1.jpg'
import './About.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import nodejs from '../../assets/nodejs.png'
const About = () => {
    return (
        <div className='about-container'>
            <div className='heading-section'>
                <br/>
                <h3>Introduction</h3>
                <h1>About Me</h1>
            </div>
            <div className='about-content'>
                <div className='left'>
                    <img src={profile1} alt="" />
                </div>
                <div className='right'>
                    <p>I am an experienced Frontend Developer with over 2 yrs of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <div class="square-container">
                        <div class="square">
                            <i class="fa-solid fa-code"></i>
                            <h3>Languages+</h3>
                            <p>HTML,CSS,JavaScript,Python</p>
                        </div>
                        <div class="square">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <h3>Education</h3>
                            <p>B.Tech in Information Technology</p>
                        </div>
                        <div class="square">
                            <i class="fa-solid fa-list-check"></i>
                            <h3>Projects</h3>
                            <p>Built more than 5 projects</p>
                        </div>
                    </div>
                    <div class="tools-container">
                        <div class="tool">
                            <img src={html} alt="HTML" />
                            <p>HTML</p>
                        </div>
                        <div class="tool">
                            <img src={css} alt="CSS" />
                            <p>CSS</p>
                        </div>
                        <div class="tool">
                            <img src={js} alt="JavaScript" />
                            <p>JavaScript</p>
                        </div>
                        <div class="tool">
                            <img src={react} alt="React" />
                            <p>React</p>
                        </div>
                        <div class="tool">
                            <img src={nodejs} alt="Node.js" />
                            <p>Node.js</p>
                        </div>
                        
                    </div>


                </div>
            </div>
        </div>
    )
}

export default About