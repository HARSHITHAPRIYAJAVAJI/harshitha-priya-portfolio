import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Terminal,
  Cpu,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../constants/portfolioData';
import { Button } from '../components/common/Button';
import { ParticleCanvas } from '../components/common/ParticleCanvas';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { fadeUp, fadeIn, fadeRight } from '../utils/animations';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
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
              className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed font-light max-w-2xl mb-8"
            >
              {PERSONAL_INFO.shortBio}
            </motion.p>

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

          {/* Right Column: Premium Interactive Developer Architecture Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              variants={fadeRight(0.3, 0.8)}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-md"
            >
              {/* Luxury Glassmorphism Developer Card */}
              <div className="relative rounded-2xl bg-[#141414] border border-[#262626] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden group">
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
                    <span className="text-[#E5C07B]">'PostgreSQL'</span>
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
                        Backend Systems
                      </span>
                      <span className="text-xs text-white font-medium">Node.js + REST APIs</span>
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
