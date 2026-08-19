import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../types';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/Icons';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl bg-[#141414] border border-[#242424] hover:border-[#D4AF37]/45 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.12)] transition-all duration-500 overflow-hidden flex flex-col"
    >
      {/* Top Ambient Gold Border Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

      {/* Media / Visual Showcase Header */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#101010] border-b border-[#222222]">
        <img
          src={project.heroImage}
          alt={project.title}
          className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
          loading="lazy"
        />

        {/* Gradient Overlay for Editorial Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />

        {/* Category & Status Overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <Badge variant="gold" icon={<Sparkles size={11} />}>
            {project.category}
          </Badge>

          {project.metrics && project.metrics[0] && (
            <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#333333] text-[11px] font-mono text-[#F5D77F]">
              {project.metrics[0].label}: {project.metrics[0].value}
            </div>
          )}
        </div>

        {/* Title Tagline Floating */}
        <div className="absolute bottom-4 left-6 right-6 z-10">
          <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white drop-shadow-md">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#CCCCCC] font-light truncate mt-0.5">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div>
          {/* Description */}
          <p className="text-sm text-[#A0A0A0] leading-relaxed font-light mb-5">
            {project.description}
          </p>

          {/* Key Feature Bullets */}
          <div className="space-y-2 mb-6">
            {project.features.slice(0, 3).map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2 text-xs text-[#CCCCCC]">
                <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong className="font-medium text-white">{feat.title}:</strong>{' '}
                  {feat.description.slice(0, 75)}...
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-6 border-t border-[#202020] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#F5D77F] hover:text-white group/btn transition-colors cursor-pointer"
          >
            <span>View Architecture & Case Study</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              variant="outline"
              size="sm"
              icon={<GithubIcon size={14} />}
              aria-label={`GitHub Repository for ${project.title}`}
            >
              GitHub
            </Button>

            {project.liveUrl && (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                variant="gold-outline"
                size="sm"
                icon={<ExternalLink size={14} />}
                aria-label={`Live Demo for ${project.title}`}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
