import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiSend } from 'react-icons/fi';
import img from "../assets/nazu.png"


const Hero = () => {
  const statusPills = [
    { label: 'React · Next.js', color: '#a8ff3e', className: 'top-5 -right-16 md:-right-20' },
    { label: 'Node · Express', color: '#00f0ff', className: 'bottom-10 -left-16 md:-left-20' },
    { label: 'MongoDB', color: '#ff2d7a', className: 'top-1/2 -right-20 md:-right-24 -translate-y-1/2' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-12 pt-[120px] pb-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="font-mono text-[12px] text-lime tracking-[0.2em] uppercase mb-5 flex items-center gap-2.5 before:content-[''] before:w-10 before:h-[1px] before:bg-lime before:shadow-[0_0_8px_#a8ff3e]">
            Available for opportunities
          </div>

          <h1 className="font-orbitron text-[42px] md:text-[6vw] lg:text-[80px] font-black leading-[1.1] tracking-tighter mb-4">
            <span className="text-[#e2eaf5] block">Full-Stack</span>
            <span className="block bg-gradient-to-r from-cyan to-lime bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              Developer
            </span>
          </h1>

          <p className="text-muted text-base md:text-lg mb-8 leading-relaxed max-w-[440px]">
            Building <strong className="text-cyan font-semibold">scalable web systems</strong> with React, Next.js & Node.js —
            on a focused path toward <strong className="text-cyan font-semibold">AI engineering</strong> and Python mastery.
          </p>

          <div className="flex gap-4">
            <a href="#projects" className="btn-primary clickable">
              <FiArrowUpRight className="text-lg" /> View Projects
            </a>
            <a href="#contact" className="btn-ghost clickable">
              <FiSend className="text-lg" /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <div className="relative w-[300px] h-[300px] md:w-[340px] md:h-[340px]">
            {/* Orbit Rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan/20 animate-[spin_20s_linear_infinite]">
              <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan rounded-full shadow-[0_0_12px_#00f0ff]" />
            </div>
            <div className="absolute inset-[-20px] rounded-full border border-dashed border-lime/15 animate-[spin_15s_linear_reverse_infinite]">
              <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-lime rounded-full shadow-[0_0_12px_#a8ff3e]" />
            </div>

            {/* Hexagon SVG Frame */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 340 340" className="w-full h-full fill-none">
                <polygon points="170,10 320,95 320,245 170,330 20,245 20,95" stroke="rgba(0,240,255,0.3)" strokeWidth="1" fill="rgba(0,240,255,0.03)" />
                <polygon points="170,30 305,105 305,235 170,310 35,235 35,105" stroke="rgba(168,255,62,0.15)" strokeWidth="1" />
              </svg>
            </div>

            {/* Avatar Image */}
            <div className="absolute inset-[30px] bg-gradient-to-br from-[#0a1628] to-[#061020] rounded-full border border-cyan/12 overflow-hidden flex items-center justify-center">
              <img
                src={img}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Status Pills */}
            {statusPills.map((pill, idx) => (
              <div
                key={idx}
                className={`absolute bg-dark/90 border border-cyan/12 backdrop-blur-md px-3.5 py-2 rounded-md font-mono text-[11px] whitespace-nowrap flex items-center gap-2 ${pill.className}`}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: pill.color, boxShadow: `0 0 6px ${pill.color}` }}
                />
                <span style={{ color: pill.color }}>{pill.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
