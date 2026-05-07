import React from 'react';

const Navbar = ({ onHireClick }) => {
  const links = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#learning' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-2xl bg-dark/60 border-b border-cyan/10">
      <div className="font-orbitron text-lg font-black text-cyan tracking-widest drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]">
        NAZMUL
      </div>
      
      <div className="hidden md:flex gap-9">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[#e2eaf5] text-[13px] font-semibold tracking-widest uppercase transition-colors hover:text-cyan font-mono clickable"
          >
            {link.name}
          </a>
        ))}
      </div>

      <button
        onClick={onHireClick}
        className="bg-transparent border border-cyan text-cyan px-5.5 py-2 font-mono text-[12px] tracking-widest cursor-none transition-all hover:bg-cyan hover:text-dark hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] uppercase clickable"
        style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
      >
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;
