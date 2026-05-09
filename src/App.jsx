import { useState, useEffect } from 'react';
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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    if (!isDarkMode) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="relative min-h-screen">
      <Cursor />
      <div className="scanline" />
      <div className="noise-overlay" />
      <BackgroundCanvas />
      
      <Navbar 
        onHireClick={() => setIsPopupOpen(true)} 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      
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
