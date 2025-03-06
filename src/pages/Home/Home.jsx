import React, { useState, useEffect } from 'react';
import './Home.css';
import profile1 from '../../assets/profile1.jpg'
const Home = () => {
    const roles = ["Frontend Web Developer","Graphic Designer", "ML Enthusiast", "Aspiring Data Scientist"];
    const [text, setText] = useState('');
    const [currentRole, setCurrentRole] = useState(0);
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            setText((prev) =>
                isDeleting ? prev.slice(0, -1) : roles[currentRole].slice(0, prev.length + 1)
            );

            if (!isDeleting && text === roles[currentRole]) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, currentRole]);

    return (
        <div className='home-section'>
            <div className='image'>
                <img src={profile1} alt="image not available" />
            </div>
            <h3 className='heading-3'>Hi, I'm Mayank Raj</h3>
            <h1 className='heading-1'>{text}<span className="cursor">|</span></h1>
            <div className='desc'>
                <p>I am a frontend web developer and graphic designer with profound experience in working on various projects, be it personal or professional.</p>
            </div>
            <div className='buttons'>
                <a href="https://www.linkedin.com/in/mayank-raj-1a4964217/" target="_blank" rel="noopener noreferrer">
                    <button className='button1'>
                        Connect with me <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </a>

                <a href="https://drive.google.com/file/d/1ijXjLAPizABbUl08_KxB7L0pXTpzniv5/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
                    <button className='button2'>
                        My Resume <i className="fa-solid fa-download"></i>
                    </button>
                </a>

            </div>
        </div>
    );
}

export default Home;
