
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCpu, FiLayers } from 'react-icons/fi';

// Project Images
import sunCartImg from '../assets/projects/suncart.jpg';
import githubIssuesImg from '../assets/projects/githubissues.jpg';
import keenKeeperImg from '../assets/projects/keenkeeper.jpg';
import workflowBoostImg from '../assets/projects/workflowboost.jpg';


const ProjectCard = ({ num, title, desc, stack, links, bannerStyle, isComingSoon, image }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    viewport={{ once: true }}
    className={`bg-[var(--card-bg)]/40 backdrop-blur-md border border-[var(--border-color)] relative overflow-hidden transition-all duration-500 hover:border-cyan/40 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1),0_0_30px_rgba(0,240,255,0.05)] group clickable ${isComingSoon ? 'border-dashed border-[#ffd24d]/20' : ''}`}
  >
    <div className={`h-[180px] relative overflow-hidden flex items-center justify-center`} style={bannerStyle}>
      {image ? (
        <>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-cyan/5 group-hover:bg-transparent transition-colors duration-500" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.15)_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="text-[56px] relative z-[2] drop-shadow-[0_0_20px_rgba(0,240,255,0.5)] text-cyan">
            {isComingSoon ? <FiCpu /> : <FiLayers />}
          </div>
        </>
      )}
    </div>

    <div className="p-6">
      <div className={`font-mono text-[10px] tracking-[0.2em] mb-2 ${isComingSoon ? 'text-[#ffd24d]' : 'text-muted'}`}>
        {isComingSoon ? 'COMING SOON' : 'PROJECT'} / {num}
      </div>
      <h3 className={`font-orbitron text-lg font-bold mb-2.5 ${isComingSoon ? 'text-[#ffd24d]' : 'text-[var(--text)]'}`}>
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
        <div className="font-mono text-[11px] text-[#ffd24d] opacity-60 flex items-center gap-1.5">⏳ In Progress...</div>
      ) : (
        <div className="flex gap-4">
          <a
            href={links?.live || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-cyan flex items-center gap-1.5 tracking-wider border-b border-transparent transition-all hover:border-cyan hover:gap-2"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={links?.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-cyan flex items-center gap-1.5 tracking-wider border-b border-transparent transition-all hover:border-cyan hover:gap-2"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      )}
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      num: '01',
      title: 'Project Sun Cart',
      desc: 'An immersive summer-themed e-commerce journey with seamless authentication, product management, and a premium shopping experience.',
      stack: ['Next.js', 'Tailwind CSS', 'BetterAuth', 'MongoDB'],
      image: sunCartImg,
      links: {
        live: 'https://sun-cart-beta.vercel.app/',
        github: 'https://github.com/nazmulo/suncart.git'
      },
      bannerStyle: { background: 'linear-gradient(135deg, #020c18, #041830)' },
    },
    {
      num: '02',
      title: 'GitHub Issues Tracker',
      desc: 'A comprehensive ecosystem solution for tracking issues, managing workflows, and streamlining collaborative development projects.',
      stack: ['React', 'API', 'Tailwind CSS'],
      image: githubIssuesImg,
      links: {
        live: 'https://sun-cart-beta.vercel.app/',
        github: 'https://github.com/nazmulo/github-issue-tracker.git'
      },
      bannerStyle: { background: 'linear-gradient(135deg, #080418, #0d0824)' },
    },
    {
      num: '03',
      title: 'Project Keen Keeper',
      desc: 'An advanced friendship analytics and journaling platform designed to help users maintain and cherish meaningful connections.',
      stack: ['React', 'API', 'Tailwind CSS'],
      image: keenKeeperImg,
      links: {
        live: 'https://keen-keeper-1.netlify.app/',
        github: 'https://github.com/nazmulo/keenkeeper.git'
      },
      bannerStyle: { background: 'linear-gradient(135deg, #041808, #081a04)' },
    },
    {
      num: '04',
      title: 'Workflow Digitools',
      desc: 'A complete ecosystem web design focused on supercharging digital workflows with modern tools and AI-driven automation.',
      stack: ['React', 'API', 'Tailwind CSS'],
      image: workflowBoostImg,
      links: {
        live: 'https://digitools-plat.netlify.app/',
        github: 'https://github.com/nazmulo/digitools-plat.git'
      },
      bannerStyle: { background: 'linear-gradient(135deg, #181008, #12080a)' },
      isComingSoon: false, // Updated as I have the image now
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

