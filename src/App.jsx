import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import BackgroundCanvas from './components/BackgroundCanvas';
import ContactPopup from './components/ContactPopup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Cursor />
      <div className="scanline" />
      <div className="noise-overlay" />
      <BackgroundCanvas />
      
      <Navbar onHireClick={() => setIsPopupOpen(true)} />
      
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />

      <ContactPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </div>
  );
}

export default App;
