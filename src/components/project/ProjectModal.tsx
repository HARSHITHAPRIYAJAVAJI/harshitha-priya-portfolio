import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
  ArrowLeft,
  Sparkles,
  Zap,
  TrendingUp,
} from 'lucide-react';
import type { Project } from '../../types';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-[#111111] border border-[#262626] rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col z-10 overflow-hidden"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222] bg-[#141414]/90 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              <Badge variant="gold" icon={<Sparkles size={12} />}>
                {project.category}
              </Badge>
              <h3 className="text-base sm:text-lg font-serif text-white font-medium truncate max-w-md">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                variant="outline"
                size="sm"
                icon={<GithubIcon size={14} />}
              >
                Code
              </Button>
              {project.liveUrl && (
                <Button
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  variant="primary"
                  size="sm"
                  icon={<ExternalLink size={14} />}
                >
                  Live Demo
                </Button>
              )}
              <button
                onClick={onClose}
                className="p-2 text-[#A0A0A0] hover:text-white hover:bg-[#242424] rounded-lg transition-colors ml-2"
                aria-label="Close project case study"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-12">
            {/* Hero Image Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-[#242424] bg-[#0E0E0E] h-72 sm:h-96">
              <img
                src={project.heroImage}
                alt={project.title}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/30" />
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-base text-[#F5D77F] font-light mt-1">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Performance & Scale Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#161616] border border-[#262626]">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <span className="block font-editorial text-2xl sm:text-3xl text-white">
                      {m.value}
                    </span>
                    <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider mt-1 block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Overview Section */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
                <Layers size={14} /> Comprehensive Overview
              </h4>
              <div className="text-sm sm:text-base text-[#CCCCCC] font-light leading-relaxed whitespace-pre-line">
                {project.fullOverview}
              </div>
            </div>

            {/* Key Features Breakdown */}
            <div className="space-y-6">
              <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 size={14} /> Core Architectural Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat) => (
                  <div
                    key={feat.title}
                    className="p-5 rounded-xl bg-[#161616] border border-[#242424] space-y-2"
                  >
                    <h5 className="text-sm font-medium text-white flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                      {feat.title}
                    </h5>
                    <p className="text-xs text-[#999999] font-light leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Architecture Breakdown */}
            <div className="space-y-6">
              <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
                <Cpu size={14} /> System Architecture & Tech Stack
              </h4>

              <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] space-y-6">
                <p className="text-sm text-[#CCCCCC] font-light">
                  {project.architecture.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B]">
                    <span className="text-[#D4AF37] block mb-1 font-semibold">Frontend Layer</span>
                    <span className="text-[#A0A0A0]">{project.architecture.frontend}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B]">
                    <span className="text-[#D4AF37] block mb-1 font-semibold">Backend Runtime</span>
                    <span className="text-[#A0A0A0]">{project.architecture.backend}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B]">
                    <span className="text-[#D4AF37] block mb-1 font-semibold">Data Persistence</span>
                    <span className="text-[#A0A0A0]">{project.architecture.database}</span>
                  </div>
                </div>

                {project.architecture.diagramDescription && (
                  <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#222222] text-xs font-mono text-[#888888]">
                    <strong className="text-[#F5D77F]">Pipeline Flow:</strong>{' '}
                    {project.architecture.diagramDescription}
                  </div>
                )}

                {/* Tech Stack Matrix */}
                <div className="pt-2">
                  <span className="text-xs text-[#888888] font-mono block mb-2">Technologies Used:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="tech">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Challenges Solved */}
            <div className="space-y-6">
              <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
                <Zap size={14} /> Complex Engineering Challenges Solved
              </h4>

              <div className="space-y-4">
                {project.challengesSolved.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#161616] border border-[#242424] space-y-3"
                  >
                    <div>
                      <span className="text-[11px] font-mono text-[#E57373] uppercase tracking-wider block">
                        Problem Statement
                      </span>
                      <p className="text-sm font-medium text-white mt-0.5">{item.problem}</p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-[#81C784] uppercase tracking-wider block">
                        Engineering Solution
                      </span>
                      <p className="text-xs sm:text-sm text-[#CCCCCC] font-light mt-0.5">
                        {item.solution}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#222222] flex items-center gap-2 text-xs font-mono text-[#F5D77F]">
                      <TrendingUp size={14} className="text-[#D4AF37]" />
                      <span>Measurable Impact: {item.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshots Gallery */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">
                  Interface & System Showcase
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.galleryImages.map((imgUrl, gIdx) => (
                    <div
                      key={gIdx}
                      className="rounded-xl overflow-hidden border border-[#242424] bg-[#141414] h-48 group"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.title} screenshot ${gIdx + 1}`}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 border-t border-[#222222] bg-[#141414] flex items-center justify-between shrink-0">
            <Button variant="ghost" size="sm" icon={<ArrowLeft size={14} />} onClick={onClose}>
              Back to Portfolio
            </Button>
            <div className="flex items-center gap-3">
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                variant="outline"
                size="sm"
                icon={<GithubIcon size={14} />}
              >
                View Repository
              </Button>
              {project.liveUrl && (
                <Button
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  variant="primary"
                  size="sm"
                  icon={<ExternalLink size={14} />}
                >
                  Launch App
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
