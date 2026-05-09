import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const StatItem = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const step = target / 40;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        setCount(Math.floor(current));
        if (current >= target) clearInterval(timer);
      }, 35);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="bg-[var(--card-bg)]/40 backdrop-blur-md px-8 py-7 text-center relative overflow-hidden transition-colors hover:bg-cyan/5 group clickable">
      <span className="font-orbitron text-4xl font-black text-cyan block drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
        {count}+
      </span>
      <div className="text-[var(--text-muted)] font-mono text-[12px] tracking-widest uppercase mt-1">
        {label}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
};

const Stats = () => {
  const stats = [
    { target: 10, label: 'Technologies' },
    { target: 1, label: 'Years Building' },
    { target: 30, label: 'Projects Built' },
    { target: 2, label: 'Career Goals' },
  ];

  return (
    <div className="max-w-[1200px] mx-auto mb-[100px] px-6 md:px-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[var(--border-color)] border border-[var(--border-color)] relative z-10 backdrop-blur-sm">
        {stats.map((stat, idx) => (
          <StatItem key={idx} target={stat.target} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
