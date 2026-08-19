import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Binary,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import {
  ReactIcon,
  TypeScriptIcon,
  NodeIcon,
  DockerIcon,
  AwsIcon,
  GitIcon,
  PostgresIcon,
  MongoIcon,
  PythonIcon,
  TailwindIcon,
  ViteIcon,
  getTechIcon,
} from '../components/common/Icons';
import { fadeUp, staggerContainer } from '../utils/animations';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    const props = { size: 20, className: 'text-[#D4AF37]' };
    switch (iconName) {
      case 'Code2':
        return <Code2 {...props} />;
      case 'Layout':
        return <Layout {...props} />;
      case 'Server':
        return <Server {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Binary':
        return <Binary {...props} />;
      default:
        return <Code2 {...props} />;
    }
  };

  const primaryScanStack = [
    { name: 'React', icon: <ReactIcon size={18} />, color: 'hover:border-[#00D8FF]/60' },
    { name: 'TS', fullName: 'TypeScript', icon: <TypeScriptIcon size={18} />, color: 'hover:border-[#3178C6]/60' },
    { name: 'Node', fullName: 'Node.js', icon: <NodeIcon size={18} />, color: 'hover:border-[#539E43]/60' },
    { name: 'Docker', icon: <DockerIcon size={18} />, color: 'hover:border-[#2496ED]/60' },
    { name: 'AWS', icon: <AwsIcon size={18} />, color: 'hover:border-[#FF9900]/60' },
    { name: 'Git', icon: <GitIcon size={18} />, color: 'hover:border-[#F05032]/60' },
    { name: 'PostgreSQL', icon: <PostgresIcon size={18} />, color: 'hover:border-[#336791]/60' },
    { name: 'MongoDB', icon: <MongoIcon size={18} />, color: 'hover:border-[#47A248]/60' },
    { name: 'Python', icon: <PythonIcon size={18} />, color: 'hover:border-[#3776AB]/60' },
    { name: 'Tailwind CSS', icon: <TailwindIcon size={18} />, color: 'hover:border-[#06B6D4]/60' },
    { name: 'Vite', icon: <ViteIcon size={18} />, color: 'hover:border-[#646CFF]/60' },
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#0B0B0B] overflow-hidden">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 subtle-dot-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Arsenal"
          title="Engineered With Modern, Battle-Tested Technologies"
          subtitle="A comprehensive toolkit structured across frontend interfaces, resilient distributed backends, database architectures, and core software engineering."
        />

        {/* Primary Stack Quick-Scan Showcase */}
        <motion.div
          variants={fadeUp(0.1, 0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#262626] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">
                Executive Tech Summary
              </span>
              <h3 className="text-lg sm:text-xl font-medium text-white">
                Core Stack • Fast Visual Scan
              </h3>
            </div>
            <span className="text-xs font-mono text-[#888888] flex items-center gap-1.5 self-start md:self-auto">
              <Sparkles size={13} className="text-[#D4AF37]" /> Production Tested & Optimized
            </span>
          </div>

          {/* Quick-Scan Micro-Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {primaryScanStack.slice(0, 6).map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.04, y: -2 }}
                className={`p-3.5 rounded-2xl bg-[#181818] border border-[#2A2A2A] flex items-center gap-3 shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.12)] transition-all duration-300 ${item.color} group`}
              >
                <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <span className="block text-xs font-mono font-medium text-white group-hover:text-[#F5D77F] transition-colors">
                    {item.name}
                  </span>
                  {item.fullName && (
                    <span className="block text-[10px] font-mono text-[#777777]">
                      {item.fullName}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Categorized Skills Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              variants={fadeUp(0.1 * catIdx, 0.6)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#D4AF37]/40 shadow-lg hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.08)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#2C2C2C] flex items-center justify-center group-hover:border-[#D4AF37]/50 group-hover:scale-105 transition-all duration-300">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white group-hover:text-[#F5D77F] transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#8E8E8E] leading-relaxed mb-6 font-light">
                  {category.description}
                </p>

                {/* Skills Pills Matrix */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const techIcon = getTechIcon(skill.name, 13);

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.04, y: -1 }}
                        transition={{ duration: 0.15 }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono tracking-tight transition-all duration-200 cursor-default ${
                          skill.highlight
                            ? 'bg-[#1C1C1C] border border-[#333333] text-white hover:border-[#D4AF37]/60 hover:text-[#F5D77F] hover:shadow-[0_0_12px_rgba(212,175,55,0.15)]'
                            : 'bg-[#161616] border border-[#242424] text-[#A0A0A0] hover:text-white hover:border-[#383838]'
                        }`}
                      >
                        {techIcon ? (
                          <span className="shrink-0">{techIcon}</span>
                        ) : skill.highlight ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        ) : null}
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 border-t border-[#1F1F1F] flex items-center justify-between text-[11px] font-mono text-[#666666]">
                <span>{category.skills.length} Competencies</span>
                <span className="text-[#D4AF37]/60 flex items-center gap-1">
                  <Sparkles size={11} /> Verified
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

