import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      const target = e.target;
      if (target.closest('a, button, .clickable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan rounded-full pointer-events-none z-[9999] shadow-[0_0_16px_#00f0ff,0_0_40px_rgba(0,240,255,0.3)] hidden md:block"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: isHovering ? 1.6 : 1,
          backgroundColor: isHovering ? '#a8ff3e' : '#00f0ff',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-cyan/50 rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePos.x - 18,
          y: mousePos.y - 18,
          scale: isHovering ? 1.44 : 1,
          borderColor: isHovering ? 'rgba(168,255,62,0.5)' : 'rgba(0,240,255,0.5)',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 150, mass: 0.8 }}
      />
    </>
  );
};

export default Cursor;
