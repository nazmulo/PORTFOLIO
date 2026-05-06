import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, tags, colorClass }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    viewport={{ once: true }}
    className="bg-[#060d18] border border-cyan/12 p-7 relative overflow-hidden transition-all hover:border-cyan/35 hover:-translate-y-1 group clickable"
    style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.06),transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" />
    <div className="font-orbitron text-[14px] font-bold text-cyan mb-4 tracking-wider">
      {title}
    </div>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`font-mono text-[11px] px-2.5 py-1 rounded-[3px] border tracking-wider ${colorClass}`}
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="absolute top-0 right-0 w-4 h-4 bg-cyan/12">
      <div className="absolute top-0 right-0 w-0 h-0 border-t-0 border-r-[16px] border-b-[16px] border-l-0 border-r-dark border-transparent" />
    </div>
  </motion.div>
);

const Skills = () => {
  const skills = [
    {
      title: 'Frontend',
      tags: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind'],
      colorClass: 'text-cyan border-cyan/30 bg-cyan/6',
    },
    {
      title: 'Backend',
      tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
      colorClass: 'text-lime border-lime/30 bg-lime/6',
    },
    {
      title: 'Database',
      tags: ['MongoDB'],
      colorClass: 'text-[#ff2d7a] border-[#ff2d7a]/30 bg-[#ff2d7a]/6',
    },
    {
      title: 'Tools & DevOps',
      tags: ['Git / GitHub', 'VS Code', 'Vercel'],
      colorClass: 'text-[#ffda4d] border-[#ffda4d]/30 bg-[#ffda4d]/6',
    },
  ];

  return (
    <section id="skills" className="py-[100px] px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="section-tag">Technical Expertise</div>
          <h2 className="font-orbitron text-3xl md:text-[44px] font-black tracking-tighter leading-tight">
            My <span className="bg-gradient-to-r from-cyan to-lime bg-clip-text text-transparent">Stack</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
