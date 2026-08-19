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
                  {category.skills.map((skill) => (
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
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      )}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
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
