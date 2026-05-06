import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ period, title, body, status, statusClass, dotClass }) => (
  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -20 }}
    viewport={{ once: true }}
    className="relative pl-12 mb-12"
  >
    <div className={`absolute left-[-11px] top-1 w-[22px] h-[22px] rounded-full border-2 border-cyan bg-dark flex items-center justify-center z-10 ${dotClass}`}>
      <div className={`w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#00f0ff] ${dotClass === 'border-[#a8ff3e]' ? 'bg-lime shadow-[0_0_10px_#a8ff3e]' : ''}`} />
    </div>
    
    <div className="font-mono text-[10px] text-muted tracking-[0.15em] uppercase mb-1.5">{period}</div>
    <h3 className="font-orbitron text-[18px] font-bold text-[#e2eaf5] mb-2">{title}</h3>
    <p className="text-[14px] text-muted leading-relaxed max-w-[600px] mb-2.5">{body}</p>
    
    <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] px-3 py-1 rounded-full border ${statusClass}`}>
      {status}
    </span>
  </motion.div>
);

const Journey = () => {
  const items = [
    {
      period: 'Foundation',
      title: 'Frontend Developer',
      body: 'Mastered React ecosystem, Next.js for SSR/SSG, and modern JavaScript. Built responsive UIs, integrated APIs, and deployed production apps.',
      status: '✓ Completed',
      statusClass: 'bg-cyan/10 text-cyan border-cyan/30',
      dotClass: '',
    },
    {
      period: 'Now — Present',
      title: 'Full-Stack Development',
      body: 'Deepening backend with Node.js, Express, MongoDB. Exploring PostgreSQL, Docker, and system design to become a complete full-stack engineer.',
      status: '▸ Active',
      statusClass: 'bg-lime/10 text-lime border-lime/30',
      dotClass: 'border-[#a8ff3e]',
    },
    {
      period: 'Next — 2025/26',
      title: 'Python & Machine Learning',
      body: 'Learning Python, NumPy, Pandas, scikit-learn. Building ML models and starting with neural networks via PyTorch. Bridging web dev and data science.',
      status: '→ Upcoming',
      statusClass: 'bg-[#ff2d7a]/10 text-[#ff2d7a] border-[#ff2d7a]/30',
      dotClass: 'border-muted',
    },
    {
      period: 'Future Goal',
      title: 'AI Engineer & Expert',
      body: 'Building with LLMs, RAG pipelines, LangChain, vector databases. Creating AI-powered full-stack products that merge deep ML knowledge with elite web engineering.',
      status: '→ Vision',
      statusClass: 'bg-[#ff2d7a]/10 text-[#ff2d7a] border-[#ff2d7a]/30',
      dotClass: 'border-muted',
    },
  ];

  return (
    <section id="learning" className="py-[100px] px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <div className="section-tag">Career Path</div>
          <h2 className="font-orbitron text-3xl md:text-[44px] font-black tracking-tighter leading-tight">
            My <span className="bg-gradient-to-r from-cyan to-lime bg-clip-text text-transparent">Journey</span>
          </h2>
        </div>
        
        <div className="relative border-l border-gradient-to-b from-cyan via-lime to-transparent ml-[11px]">
          {items.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
