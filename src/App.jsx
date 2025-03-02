import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

