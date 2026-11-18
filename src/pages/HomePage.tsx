import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { CertificationsSection } from '../sections/CertificationsSection';
import { ContactSection } from '../sections/ContactSection';
import { ResumeModal } from '../components/common/ResumeModal';
import { ProjectModal } from '../components/project/ProjectModal';
import { MouseSpotlight } from '../components/common/MouseSpotlight';
import type { Project } from '../types';
import { PROJECTS } from '../constants/portfolioData';

export const HomePage: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Check URL hash for modal triggers or project details
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#resume' || hash === '#resume-modal') {
        setResumeOpen(true);
      } else if (hash.startsWith('#project-')) {
        const slug = hash.replace('#project-', '');
        const matched = PROJECTS.find(
          (p) => p.slug === slug || p.id === slug || (slug === 'smartcampus-plus' && p.slug === 'smartcampus-360')
        );
        if (matched) setSelectedProject(matched);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-white selection:bg-[#D4AF37]/20 selection:text-[#F5D77F] overflow-x-hidden">
      {/* Luxury Ambient Mouse Spotlight Follower */}
      <MouseSpotlight />

      {/* Glassmorphic Sticky Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Luxury Portfolio Flow */}
      <main>
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <CertificationsSection />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* In-App Interactive Modals */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
