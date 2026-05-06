import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ num, title, desc, stack, links, bannerStyle, isComingSoon }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    viewport={{ once: true }}
    className={`bg-[#060d18] border border-cyan/12 relative overflow-hidden transition-all duration-500 hover:border-cyan/40 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(0,240,255,0.1)] group clickable ${isComingSoon ? 'border-dashed border-[#ffd24d]/20' : ''}`}
  >
    <div className={`h-[180px] relative overflow-hidden flex items-center justify-center`} style={bannerStyle}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.15)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="text-[56px] relative z-[2] drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]">
        {isComingSoon ? '🤖' : '🚀'}
      </div>
    </div>
    
    <div className="p-6">
      <div className={`font-mono text-[10px] tracking-[0.2em] mb-2 ${isComingSoon ? 'text-[#ffd24d]' : 'text-muted'}`}>
        {isComingSoon ? 'COMING SOON' : 'PROJECT'} / {num}
      </div>
      <h3 className={`font-orbitron text-lg font-bold mb-2.5 ${isComingSoon ? 'text-[#ffd24d]' : 'text-[#e2eaf5]'}`}>
        {title}
      </h3>
      <p className="text-[13px] text-muted leading-relaxed mb-[18px]">
        {desc}
      </p>
      
      <div className="flex flex-wrap gap-1.5 mb-5">
        {stack.map((tag) => (
          <span 
            key={tag} 
            className={`font-mono text-[10px] px-2 py-0.5 rounded-[2px] border ${isComingSoon ? 'text-[#ffd24d] border-[#ffd24d]/30 bg-[#ffd24d]/6' : 'text-cyan border-cyan/20 bg-cyan/8'}`}
          >
            {tag}
          </span>
        ))}
      </div>
      
      {isComingSoon ? (
        <div className="font-mono text-[11px] text-[#ffd24d] opacity-60">⏳ In Progress...</div>
      ) : (
        <div className="flex gap-3">
          <a href="#" className="font-mono text-[11px] text-cyan flex items-center gap-1 tracking-wider border-b border-transparent transition-colors hover:border-cyan">↗ Live Demo</a>
          <a href="#" className="font-mono text-[11px] text-cyan flex items-center gap-1 tracking-wider border-b border-transparent transition-colors hover:border-cyan">⌥ GitHub</a>
        </div>
      )}
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      num: '01',
      title: 'E-Commerce Platform',
      desc: 'Full-stack e-commerce with product management, cart, auth, and payments. Clean REST API with JWT sessions.',
      stack: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      bannerStyle: { background: 'linear-gradient(135deg, #020c18, #041830)' },
    },
    {
      num: '02',
      title: 'Task Management App',
      desc: 'Real-time task manager with boards, drag-and-drop, team collaboration and role-based access control.',
      stack: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
      bannerStyle: { background: 'linear-gradient(135deg, #080418, #0d0824)' },
    },
    {
      num: '03',
      title: 'Analytics Dashboard',
      desc: 'Admin dashboard with real-time charts, data aggregation pipeline, and filterable reports with CSV export.',
      stack: ['Next.js', 'MongoDB Aggregation', 'Chart.js'],
      bannerStyle: { background: 'linear-gradient(135deg, #041808, #081a04)' },
    },
    {
      num: '04',
      title: 'AI Chat Application',
      desc: 'AI-powered chatbot with RAG pipeline, vector search, and streaming responses. First Python + JS fullstack AI project.',
      stack: ['Python', 'FastAPI', 'LangChain', 'Next.js'],
      bannerStyle: { background: 'linear-gradient(135deg, #181008, #12080a)' },
      isComingSoon: true,
    },
  ];

  return (
    <section id="projects" className="py-[100px] px-6 md:px-12 bg-cyan/[0.01]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="section-tag">Work</div>
          <h2 className="font-orbitron text-3xl md:text-[44px] font-black tracking-tighter leading-tight">
            Featured <span className="bg-gradient-to-r from-cyan to-lime bg-clip-text text-transparent">Projects</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
