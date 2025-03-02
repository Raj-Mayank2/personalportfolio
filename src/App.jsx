import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main route for landing page that shows all sections */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Individual page routes for navigation */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

// Create a new LandingPage component that combines all sections
// In a new file: src/pages/LandingPage/LandingPage.jsx
// --------

// import React from 'react';
// import Home from '../Home/Home';
// import About from '../About/About';
// import Services from '../Services/Services';
// import Projects from '../Projects/Projects';
// import Contact from '../Contact/Contact';

// const LandingPage = () => {
//   return (
//     <>
//       <Home />
//       <About />
//       <Services />
//       <Projects />
//       <Contact />
//     </>
//   );
// };

// export default LandingPage;