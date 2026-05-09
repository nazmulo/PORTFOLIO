import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';

const Contact = () => {
  const links = [
    { name: 'Email Me', href: 'mailto:itsnaazmul@gmail.com', icon: <FiMail /> },
    { name: 'GitHub', href: 'https://github.com/nazmulo', icon: <FiGithub /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/itsnaazmul', icon: <FiLinkedin /> },
    { name: 'Resume', href: '#', icon: <FiFileText /> },
  ];


  return (
    <section id="contact" className="py-[100px] px-6 md:px-12">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          className="bg-[#060d18] border border-cyan/12 p-12 md:p-16 relative overflow-hidden group"
          style={{ clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)' }}
        >
          <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,240,255,0.08),transparent_60%)] pointer-events-none" />
          
          <h2 className="font-orbitron text-3xl md:text-5xl font-black leading-[1.1] mb-4">
            Let's Build<br />
            <span className="bg-gradient-to-r from-cyan to-lime bg-clip-text text-transparent">
              Something Great
            </span>
          </h2>
          
          <p className="text-muted text-base md:text-[15px] leading-relaxed mb-10 max-w-[480px] mx-auto">
            Open to freelance projects, full-time roles, and collaborations. Whether you need a web app or an AI-powered product — let's talk.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3.5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5.5 py-3 border border-cyan/12 text-[#e2eaf5] font-mono text-[12px] tracking-wider transition-all hover:border-cyan hover:text-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:-translate-y-0.5 clickable"
                style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
              >
                <span className="text-sm">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
