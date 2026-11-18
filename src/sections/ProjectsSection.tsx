import React from 'react';
import { PROJECTS } from '../constants/portfolioData';
import type { Project } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectCard } from '../components/project/ProjectCard';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#0B0B0B] overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#D4AF37]/4 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering Works"
          title="Selected Architecture & Full-Stack Projects"
          subtitle="Production-grade SaaS platforms, academic management infrastructure, and AI-powered collaborative workspaces built with precision."
        />

        {/* Featured Projects Grid */}
        <div className={`grid grid-cols-1 ${PROJECTS.length % 2 === 0 ? 'md:grid-cols-2' : 'lg:grid-cols-3'} gap-8 items-stretch`}>
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
