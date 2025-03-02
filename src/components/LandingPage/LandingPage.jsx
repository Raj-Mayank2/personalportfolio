import React from 'react';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';
import Services from '../../pages/Services/Services';


 const LandingPage = () => {
   return (
     <>
     <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
     </>
  ); 
};

 export default LandingPage;