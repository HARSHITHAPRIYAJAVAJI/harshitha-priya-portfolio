import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Zap,
  Brain,
  ShieldCheck,
} from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../constants/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import { fadeUp } from '../utils/animations';

export const AboutSection: React.FC = () => {
  const engineeringPillars = [
    {
      icon: <Code2 size={18} className="text-[#D4AF37]" />,
      title: 'Full-Stack Architecture',
      description:
        'Crafting resilient end-to-end architectures utilizing React, TypeScript, Node.js, and structured RESTful API designs.',
    },
    {
      icon: <Brain size={18} className="text-[#D4AF37]" />,
      title: 'AI & Modern Intelligence',
      description:
        'Deep passion for artificial intelligence integrations, vector search pipelines, and LLM orchestration for smart workflows.',
    },
    {
      icon: <Zap size={18} className="text-[#D4AF37]" />,
      title: 'Performance & Optimization',
      description:
        'Obsessed with sub-second page loads, minimal DOM footprint, optimized database indexing, and memory efficiency.',
    },
    {
      icon: <ShieldCheck size={18} className="text-[#D4AF37]" />,
      title: 'Clean Code & Engineering Rigor',
      description:
        'Writing maintainable, modular, and self-documenting code with SOLID principles and comprehensive automated testing.',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0E0E0E] overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 subtle-grid-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Philosophy"
          title="Architecting Scalable Systems With A Passion For Luxury Craftsmanship"
          subtitle="A disciplined full-stack engineer blending computer science rigor with the refined aesthetics of modern digital products."
        />

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Narrative Biography & Focus Areas */}
          <motion.div
            variants={fadeUp(0.1, 0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4 text-base sm:text-lg text-[#CCCCCC] font-light leading-relaxed">
              <p>
                Hello, I am <span className="text-white font-medium">{PERSONAL_INFO.name}</span>. I build robust, production-grade applications that operate smoothly under load while providing an intuitive, delightful user experience.
              </p>
              <p>
                My technical foundation spans across the entire stack: from composing modular component hierarchies with <span className="text-[#F5D77F] font-mono text-sm">React</span> and <span className="text-[#F5D77F] font-mono text-sm">TypeScript</span>, to designing fault-tolerant backend runtimes with <span className="text-[#F5D77F] font-mono text-sm">Node.js</span>, <span className="text-[#F5D77F] font-mono text-sm">Express</span>, and optimized databases like <span className="text-[#F5D77F] font-mono text-sm">PostgreSQL</span> and <span className="text-[#F5D77F] font-mono text-sm">MongoDB</span>.
              </p>
              <p>
                I hold a relentless commitment to clean software architecture, algorithmic problem solving, and proactive performance tuning. Whether tuning SQL join queries, setting up Redis caching layers, or orchestrating responsive Framer Motion micro-interactions, I treat code as a high-precision craft.
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="pt-4">
              <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-3">
                Core Competencies & Focus
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Full-Stack Development',
                  'Software Engineering',
                  'React',
                  'TypeScript',
                  'Node.js',
                  'REST APIs',
                  'Databases',
                  'AI & Machine Learning',
                  'Clean Code',
                  'Performance Optimization',
                  'Problem Solving',
                ].map((tag) => (
                  <Badge key={tag} variant="tech">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engineering Pillars & Live Stats */}
          <div className="lg:col-span-6 space-y-6">
            {/* 4 Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {engineeringPillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp(0.1 * idx, 0.6)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-5 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#D4AF37]/35 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1C1C1C] border border-[#2B2B2B] flex items-center justify-center mb-3 group-hover:border-[#D4AF37]/40 group-hover:scale-105 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-medium text-white mb-1.5 group-hover:text-[#F5D77F] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#999999] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Statistics Cards */}
            <motion.div
              variants={fadeUp(0.3, 0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-[#141414] border border-[#242424] shadow-lg"
            >
              <h4 className="text-xs font-mono text-[#888888] uppercase tracking-wider mb-6 text-center">
                Track Record & Industry Impact
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#222222]">
                {STATS.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`text-center ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-3' : ''}`}
                  >
                    <div className="font-editorial text-3xl font-normal text-white mb-1 flex items-baseline justify-center">
                      <span>{stat.value}</span>
                      <span className="text-[#D4AF37] font-sans text-xl ml-0.5">{stat.suffix}</span>
                    </div>
                    <p className="text-xs font-medium text-[#CCCCCC]">{stat.label}</p>
                    <p className="text-[10px] text-[#777777] mt-0.5 hidden sm:block">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
