import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { PROJECTS } from '../constants/portfolioData';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { GithubIcon } from '../components/common/Icons';
import { Footer } from '../components/layout/Footer';
import { fadeUp } from '../utils/animations';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug || p.id === slug);
  const project = projectIndex !== -1 ? PROJECTS[projectIndex] : PROJECTS[0];

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-serif mb-4">Project Not Found</h1>
        <Button variant="gold-outline" onClick={() => navigate('/')}>
          Return to Portfolio
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#D4AF37]/20 selection:text-[#F5D77F] flex flex-col">
      {/* Top Floating Navbar Header */}
      <header className="sticky top-0 z-40 bg-[#0B0B0B]/85 backdrop-blur-xl border-b border-[#222222] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#A0A0A0] hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Main Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              variant="outline"
              size="sm"
              icon={<GithubIcon size={14} />}
            >
              Source Code
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
      </header>

      {/* Main Case Study Article */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
        {/* Title & Metadata Header */}
        <motion.div
          variants={fadeUp(0, 0.6)}
          initial="hidden"
          animate="visible"
          className="space-y-4 text-center md:text-left"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <Badge variant="gold" icon={<Sparkles size={12} />}>
              {project.category}
            </Badge>
            <span className="text-xs font-mono text-[#888888]">Architecture Case Study</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#F5D77F] font-light max-w-3xl">
            {project.tagline}
          </p>
        </motion.div>

        {/* Hero Visual Showcase */}
        <motion.div
          variants={fadeUp(0.1, 0.7)}
          initial="hidden"
          animate="visible"
          className="relative rounded-3xl overflow-hidden border border-[#242424] shadow-2xl h-80 sm:h-[420px] bg-[#121212]"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/20" />
        </motion.div>

        {/* Performance Metrics */}
        {project.metrics && (
          <motion.div
            variants={fadeUp(0.2, 0.7)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#141414] border border-[#242424]"
          >
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <span className="block font-editorial text-3xl sm:text-4xl text-white font-normal">
                  {m.value}
                </span>
                <span className="text-xs font-mono text-[#888888] uppercase tracking-wider mt-1.5 block">
                  {m.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Overview Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            <h2 className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">
              Executive Overview
            </h2>
          </div>
          <div className="text-base sm:text-lg text-[#CCCCCC] font-light leading-relaxed whitespace-pre-line bg-[#121212] p-8 rounded-3xl border border-[#222222]">
            {project.fullOverview}
          </div>
        </section>

        {/* Architectural Pillars */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            <h2 className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">
              System Architecture & Core Infrastructure
            </h2>
          </div>

          <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424] space-y-8">
            <p className="text-base text-[#CCCCCC] font-light leading-relaxed">
              {project.architecture.overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
              <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] space-y-2">
                <span className="text-[#D4AF37] block font-semibold text-sm">Frontend Engine</span>
                <span className="text-[#A0A0A0] leading-relaxed block">
                  {project.architecture.frontend}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] space-y-2">
                <span className="text-[#D4AF37] block font-semibold text-sm">Backend Services</span>
                <span className="text-[#A0A0A0] leading-relaxed block">
                  {project.architecture.backend}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] space-y-2">
                <span className="text-[#D4AF37] block font-semibold text-sm">Persistence Tier</span>
                <span className="text-[#A0A0A0] leading-relaxed block">
                  {project.architecture.database}
                </span>
              </div>
            </div>

            {project.architecture.diagramDescription && (
              <div className="p-5 rounded-2xl bg-[#0F0F0F] border border-[#242424] text-xs font-mono text-[#888888]">
                <strong className="text-[#F5D77F]">Pipeline Architecture:</strong>{' '}
                {project.architecture.diagramDescription}
              </div>
            )}

            <div>
              <span className="text-xs text-[#888888] font-mono block mb-3">Complete Stack:</span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="tech">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Set */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            <h2 className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">
              Engineered Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.features.map((feat) => (
              <div
                key={feat.title}
                className="p-6 rounded-2xl bg-[#141414] border border-[#242424] space-y-2.5"
              >
                <h3 className="text-base font-medium text-white flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0" />
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#999999] font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Challenges Solved */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            <h2 className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">
              Complex Engineering Challenges Solved
            </h2>
          </div>

          <div className="space-y-6">
            {project.challengesSolved.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#141414] border border-[#242424] space-y-4"
              >
                <div>
                  <span className="text-xs font-mono text-[#E57373] uppercase tracking-wider block font-medium">
                    Challenge {idx + 1}: Bottleneck / Failure Mode
                  </span>
                  <p className="text-base font-medium text-white mt-1">{item.problem}</p>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#81C784] uppercase tracking-wider block font-medium">
                    Engineered Solution
                  </span>
                  <p className="text-sm text-[#CCCCCC] font-light leading-relaxed mt-1">
                    {item.solution}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222222] flex items-center gap-2 text-xs font-mono text-[#F5D77F]">
                  <TrendingUp size={15} className="text-[#D4AF37]" />
                  <span>Impact: {item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next / Previous Project Navigation */}
        <div className="pt-12 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to={`/project/${prevProject.slug}`}
            className="group flex items-center gap-3 text-left p-4 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#D4AF37]/40 w-full sm:w-auto transition-colors"
          >
            <ArrowLeft size={18} className="text-[#D4AF37] group-hover:-translate-x-1 transition-transform" />
            <div>
              <span className="text-[10px] font-mono text-[#777777] uppercase block">
                Previous Project
              </span>
              <span className="text-sm font-medium text-white group-hover:text-[#F5D77F]">
                {prevProject.title}
              </span>
            </div>
          </Link>

          <Link
            to={`/project/${nextProject.slug}`}
            className="group flex items-center justify-end gap-3 text-right p-4 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#D4AF37]/40 w-full sm:w-auto transition-colors"
          >
            <div>
              <span className="text-[10px] font-mono text-[#777777] uppercase block">
                Next Project
              </span>
              <span className="text-sm font-medium text-white group-hover:text-[#F5D77F]">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight size={18} className="text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};
