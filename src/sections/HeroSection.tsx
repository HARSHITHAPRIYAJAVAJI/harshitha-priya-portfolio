import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Terminal,
  Cpu,
  Sparkles,
  User,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../constants/portfolioData';
import { Button } from '../components/common/Button';
import { ParticleCanvas } from '../components/common/ParticleCanvas';
import {
  GithubIcon,
  LinkedinIcon,
  ReactIcon,
  TypeScriptIcon,
  NodeIcon,
  DockerIcon,
  AwsIcon,
  GitIcon,
} from '../components/common/Icons';
import { fadeUp, fadeIn, fadeRight } from '../utils/animations';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'photo' | 'terminal'>('photo');

  const handleResumeDownload = () => {
    confetti({
      particleCount: 70,
      spread: 55,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F5D77F', '#FFFFFF'],
    });
    onOpenResume();
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const quickTechStack = [
    { name: 'React', icon: <ReactIcon size={16} />, color: 'hover:border-[#00D8FF]/50' },
    { name: 'TS', fullName: 'TypeScript', icon: <TypeScriptIcon size={16} />, color: 'hover:border-[#3178C6]/50' },
    { name: 'Node', fullName: 'Node.js', icon: <NodeIcon size={16} />, color: 'hover:border-[#539E43]/50' },
    { name: 'Docker', icon: <DockerIcon size={16} />, color: 'hover:border-[#2496ED]/50' },
    { name: 'AWS', icon: <AwsIcon size={16} />, color: 'hover:border-[#FF9900]/50' },
    { name: 'Git', icon: <GitIcon size={16} />, color: 'hover:border-[#F05032]/50' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#0B0B0B]"
    >
      {/* Dynamic Background Particle Canvas */}
      <ParticleCanvas />

      {/* Luxury Ambient Glow Orbs */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-[30rem] h-[30rem] rounded-full bg-[#D4AF37]/4 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Status Pill */}
            <motion.div
              variants={fadeUp(0.1, 0.6)}
              initial="hidden"
              animate="visible"
              className="mb-6 inline-flex items-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#262626] text-xs font-mono text-[#CCCCCC]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
                </span>
                <span className="text-[#A0A0A0]">Status:</span>
                <span className="text-[#F5D77F] font-medium">Available for Engineering Roles</span>
              </div>
            </motion.div>

            {/* Large Luxury Editorial Heading */}
            <motion.h1
              variants={fadeUp(0.2, 0.7)}
              initial="hidden"
              animate="visible"
              className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08] mb-4"
            >
              Harshitha <span className="gold-gradient-text italic font-serif">Priya</span>
            </motion.h1>

            {/* Subtitle & Tech Stack */}
            <motion.div
              variants={fadeUp(0.3, 0.7)}
              initial="hidden"
              animate="visible"
              className="space-y-1.5 mb-6"
            >
              <h2 className="text-xl sm:text-2xl font-light text-white tracking-wide">
                {PERSONAL_INFO.role}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#D4AF37] tracking-widest uppercase">
                {PERSONAL_INFO.techStackSubtitle}
              </p>
            </motion.div>

            {/* Professional Introduction */}
            <motion.p
              variants={fadeUp(0.4, 0.7)}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed font-light max-w-2xl mb-6"
            >
              {PERSONAL_INFO.shortBio}
            </motion.p>

            {/* Quick-Scan Core Tech Stack (Small Logos for Fast Scanning) */}
            <motion.div
              variants={fadeUp(0.45, 0.7)}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <span className="block text-[11px] font-mono text-[#888888] uppercase tracking-wider mb-2.5">
                Core Stack • Quick Scan
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {quickTechStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141414] border border-[#242424] text-xs font-mono text-[#E0E0E0] shadow-sm transition-all duration-300 cursor-default ${tech.color} hover:text-white hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]`}
                  >
                    <span className="shrink-0">{tech.icon}</span>
                    <span className="font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUp(0.5, 0.7)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-3.5 mb-10"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={17} />}
                onClick={() => handleScrollTo('projects')}
              >
                View Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={<Download size={17} />}
                onClick={handleResumeDownload}
              >
                Download Resume
              </Button>

              <div className="flex items-center gap-2 pl-2">
                <Button
                  as="a"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  variant="outline"
                  size="md"
                  icon={<GithubIcon size={16} />}
                  aria-label="GitHub"
                >
                  GitHub
                </Button>

                <Button
                  as="a"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  variant="outline"
                  size="md"
                  icon={<LinkedinIcon size={16} />}
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </Button>
              </div>
            </motion.div>

            {/* Quick Metrics Strip */}
            <motion.div
              variants={fadeIn(0.6, 0.8)}
              initial="hidden"
              animate="visible"
              className="pt-6 border-t border-[#1C1C1C] grid grid-cols-3 max-w-lg gap-4"
            >
              <div>
                <span className="block font-editorial text-2xl text-white">3+</span>
                <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider">
                  Internships
                </span>
              </div>
              <div>
                <span className="block font-editorial text-2xl text-[#F5D77F]">15+</span>
                <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider">
                  Shipped Projects
                </span>
              </div>
              <div>
                <span className="block font-editorial text-2xl text-white">99.8%</span>
                <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider">
                  Code Quality
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Visual Showcase with Harshitha's Photo & Interactive Terminal */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              variants={fadeRight(0.3, 0.8)}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-md"
            >
              {/* Outer Golden Aura Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#F5D77F]/10 blur-xl -z-10" />

              {/* View Toggle Tabs */}
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#141414] border border-[#262626]">
                  <button
                    onClick={() => setActiveTab('photo')}
                    className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                      activeTab === 'photo'
                        ? 'bg-[#1F1F1F] text-[#F5D77F] border border-[#D4AF37]/40 shadow-sm'
                        : 'text-[#888888] hover:text-white'
                    }`}
                  >
                    <User size={12} />
                    <span>Portrait</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                      activeTab === 'terminal'
                        ? 'bg-[#1F1F1F] text-[#F5D77F] border border-[#D4AF37]/40 shadow-sm'
                        : 'text-[#888888] hover:text-white'
                    }`}
                  >
                    <Terminal size={12} />
                    <span>Harshitha.tsx</span>
                  </button>
                </div>

                <span className="text-[10px] font-mono text-[#777777] flex items-center gap-1">
                  <Sparkles size={11} className="text-[#D4AF37]" /> Bangalore, India
                </span>
              </div>

              {/* Animated Tab Content */}
              <AnimatePresence mode="wait">
                {activeTab === 'photo' ? (
                  <motion.div
                    key="photo-card"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="relative rounded-3xl bg-[#141414] border border-[#282828] p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl overflow-hidden group"
                  >
                    {/* Top Gold Accent Line */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-90 z-20" />

                    {/* Image Container with Luxury Frame */}
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#222222]">
                      <img
                        src="/jhp.png"
                        alt="Harshitha Priya - Full-Stack Software Engineer"
                        className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-102 transition-transform duration-700"
                        loading="eager"
                      />

                      {/* Vignette Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

                      {/* Top-Right Floating Live Status Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#D4AF37]/40 text-[11px] font-mono text-[#F5D77F] flex items-center gap-1.5 shadow-lg"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#27C93F] animate-pulse" />
                        <span>Open to Work</span>
                      </motion.div>

                      {/* Top-Left Engineering Chip */}
                      <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-[#333333] text-[10px] font-mono text-[#CCCCCC] flex items-center gap-1">
                        <ShieldCheck size={12} className="text-[#D4AF37]" />
                        <span>SWE</span>
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2">
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="font-editorial text-2xl text-white font-normal leading-tight drop-shadow-md">
                              Harshitha Priya
                            </h3>
                            <p className="text-xs font-mono text-[#D4AF37] tracking-wider">
                              Full-Stack Engineer
                            </p>
                          </div>

                          <div className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-[#333333] text-[10px] font-mono text-[#E0E0E0] flex items-center gap-1">
                            <Zap size={11} className="text-[#D4AF37]" />
                            <span>15+ Projects</span>
                          </div>
                        </div>

                        {/* Quick Logo Strip Inside Photo */}
                        <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-1.5">
                          {quickTechStack.map((tech) => (
                            <div
                              key={tech.name}
                              title={tech.fullName || tech.name}
                              className="p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white hover:border-[#D4AF37]/60 hover:scale-110 transition-all cursor-pointer"
                            >
                              {tech.icon}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="terminal-card"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="relative rounded-2xl bg-[#141414] border border-[#262626] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden group"
                  >
                    {/* Subtle gold top border light */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

                    {/* Card Window Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#222222]">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                        <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                      </div>
                      <span className="font-mono text-xs text-[#777777] flex items-center gap-1.5">
                        <Terminal size={12} className="text-[#D4AF37]" /> Harshitha.tsx
                      </span>
                      <div className="w-12" />
                    </div>

                    {/* Animated Code Representation */}
                    <div className="space-y-3 font-mono text-xs leading-relaxed">
                      <div className="text-[#888888]">
                        <span className="text-[#D4AF37]">const</span> engineer = {'{'}
                      </div>
                      <div className="pl-4 text-[#CCCCCC]">
                        name: <span className="text-[#98C379]">'Harshitha Priya'</span>,
                      </div>
                      <div className="pl-4 text-[#CCCCCC]">
                        focus: <span className="text-[#98C379]">'Full-Stack Architecture'</span>,
                      </div>
                      <div className="pl-4 text-[#CCCCCC]">
                        stack: [
                        <span className="text-[#E5C07B]">'React'</span>,{' '}
                        <span className="text-[#E5C07B]">'TypeScript'</span>,{' '}
                        <span className="text-[#E5C07B]">'Node.js'</span>,{' '}
                        <span className="text-[#E5C07B]">'Docker'</span>,{' '}
                        <span className="text-[#E5C07B]">'AWS'</span>
                        ],
                      </div>
                      <div className="pl-4 text-[#CCCCCC]">
                        passions: [<span className="text-[#98C379]">'Clean Code'</span>,{' '}
                        <span className="text-[#98C379]">'AI Systems'</span>,{' '}
                        <span className="text-[#98C379]">'Luxury UX'</span>],
                      </div>
                      <div className="pl-4 text-[#CCCCCC]">
                        status: <span className="text-[#61AFEF]">'Open for Opportunities'</span>
                      </div>
                      <div className="text-[#888888]">{'}'};</div>
                    </div>

                    {/* Interactive Sub-widget: Live Architecture Node */}
                    <div className="mt-6 pt-4 border-t border-[#222222] space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#888888]">
                        <span className="flex items-center gap-1 text-[#D4AF37]">
                          <Cpu size={13} /> High-Throughput Engine
                        </span>
                        <span className="text-[#27C93F] flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#27C93F] animate-pulse" /> Active
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
                          <span className="block text-[10px] text-[#777777] uppercase font-mono">
                            Frontend Runtime
                          </span>
                          <span className="text-xs text-white font-medium">React 19 + TypeScript</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
                          <span className="block text-[10px] text-[#777777] uppercase font-mono">
                            Backend & Cloud
                          </span>
                          <span className="text-xs text-white font-medium">Node.js + Docker + AWS</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Aesthetic Badge */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -bottom-3 -right-3 px-3.5 py-1.5 rounded-xl bg-[#1C1C1C] border border-[#D4AF37]/40 shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center gap-2 text-xs font-mono text-[#F5D77F]"
                    >
                      <Sparkles size={13} className="text-[#D4AF37]" />
                      <span>Vercel / Apple Standard</span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

