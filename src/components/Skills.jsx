
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiJsonwebtokens, SiMongodb,
  SiGit, SiGithub, SiVercel, SiPostman
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';



const SkillCard = ({ title, tags, colorClass }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    viewport={{ once: true }}
    className="bg-[var(--card-bg)]/40 backdrop-blur-md border border-[var(--border-color)] p-7 relative overflow-hidden transition-all hover:border-cyan/35 hover:-translate-y-1 group clickable"
    style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.06),transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" />
    <div className="font-orbitron text-[14px] font-bold text-cyan mb-4 tracking-wider uppercase">
      {title}
    </div>
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <div
          key={tag.name}
          className={`flex items-center gap-2 font-mono text-[11px] px-3 py-1.5 rounded-[3px] border tracking-wider transition-all duration-300 hover:scale-105 ${colorClass}`}
        >
          <span className="text-[14px]">{tag.icon}</span>
          <span>{tag.name}</span>
        </div>
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
      tags: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
      ],
      colorClass: 'text-cyan border-cyan/30 bg-cyan/6 hover:bg-cyan/15 hover:border-cyan/60',
    },
    {
      title: 'Backend',
      tags: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'REST APIs', icon: <TbApi /> },
        { name: 'JWT Auth', icon: <SiJsonwebtokens /> },
      ],
      colorClass: 'text-lime border-lime/30 bg-lime/6 hover:bg-lime/15 hover:border-lime/60',
    },
    {
      title: 'Database',
      tags: [
        { name: 'MongoDB', icon: <SiMongodb /> },
      ],
      colorClass: 'text-[#ff2d7a] border-[#ff2d7a]/30 bg-[#ff2d7a]/6 hover:bg-[#ff2d7a]/15 hover:border-[#ff2d7a]/60',
    },
    {
      title: 'Tools & DevOps',
      tags: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'VS Code', icon: <VscCode /> },
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Postman', icon: <SiPostman /> },
      ],
      colorClass: 'text-[#ffda4d] border-[#ffda4d]/30 bg-[#ffda4d]/6 hover:bg-[#ffda4d]/15 hover:border-[#ffda4d]/60',
    },
  ];

  return (
    <section id="skills" className="py-[100px] px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="section-tag mb-4">Technical Expertise</div>
          <h2 className="font-orbitron text-3xl md:text-[44px] font-black tracking-tighter leading-tight">
            My <span className="bg-gradient-to-r from-cyan to-lime bg-clip-text text-transparent">Stack</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

