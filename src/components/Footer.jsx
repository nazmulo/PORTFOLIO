import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-cyan/12 px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
      <span className="font-mono text-[11px] text-muted tracking-wider">
        © 2026 — Built with precision & passion
      </span>
      
      <div className="flex items-center gap-2 font-mono text-[11px] text-lime">
        <div className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse shadow-[0_0_8px_#a8ff3e]" />
        Open to opportunities
      </div>
      
      <span className="font-mono text-[11px] text-muted">
        React · Node.js · AI →
      </span>
    </footer>
  );
};

export default Footer;
