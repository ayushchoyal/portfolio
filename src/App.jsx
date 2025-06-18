import React from 'react';
import './App.css';


import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Project />
      <Contact />
    </div>
  );
}

export default App;
