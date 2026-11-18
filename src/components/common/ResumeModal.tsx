import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Briefcase, Award, Code, Mail, Phone, MapPin, Globe, ExternalLink, Laptop } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES, CERTIFICATIONS, PROJECTS } from '../../constants/portfolioData';
import { Button } from './Button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#F5D77F', '#FFFFFF', '#AA820A'],
    });

    // Trigger standard print
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#121212] border border-[#262626] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col z-10 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#242424] bg-[#181818]/80 backdrop-blur-sm shrink-0">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-[#D4AF37] animate-pulse" />
              <h3 className="text-lg font-serif text-white font-medium">
                Curriculum Vitae • {PERSONAL_INFO.name}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="gold-outline"
                size="sm"
                icon={<Download size={14} />}
                onClick={handleDownload}
              >
                Save / Print PDF
              </Button>
              <button
                onClick={onClose}
                className="p-2 text-[#A0A0A0] hover:text-white hover:bg-[#242424] rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:bg-white print:text-black">
            {/* Top Identity Block */}
            <div className="border-b border-[#242424] pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-[#D4AF37] font-medium tracking-wide mt-1 text-sm sm:text-base">
                    {PERSONAL_INFO.role}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 text-xs text-[#A0A0A0] sm:text-right">
                  <span className="flex items-center gap-1.5 sm:justify-end">
                    <Mail size={13} className="text-[#D4AF37]" /> {PERSONAL_INFO.email}
                  </span>
                  <span className="flex items-center gap-1.5 sm:justify-end">
                    <Phone size={13} className="text-[#D4AF37]" /> {PERSONAL_INFO.phone}
                  </span>
                  <span className="flex items-center gap-1.5 sm:justify-end">
                    <MapPin size={13} className="text-[#D4AF37]" /> {PERSONAL_INFO.location}
                  </span>
                  <a
                    href="https://harshitha-priya-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:justify-end hover:text-[#F5D77F] transition-colors"
                  >
                    <ExternalLink size={13} className="text-[#D4AF37]" /> harshitha-priya-portfolio.vercel.app
                  </a>
                  <a
                    href="https://github.com/HARSHITHAPRIYAJAVAJI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:justify-end hover:text-[#F5D77F] transition-colors"
                  >
                    <Globe size={13} className="text-[#D4AF37]" /> github.com/HARSHITHAPRIYAJAVAJI
                  </a>
                </div>
              </div>

              <p className="text-sm text-[#CCCCCC] mt-4 leading-relaxed font-light">
                {PERSONAL_INFO.shortBio}
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={16} className="text-[#D4AF37]" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Professional Experience
                </h4>
              </div>

              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="relative pl-4 border-l border-[#262626]">
                    <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-[#D4AF37]" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h5 className="text-base font-medium text-white">{exp.role}</h5>
                      <span className="text-xs font-mono text-[#D4AF37]">{exp.duration}</span>
                    </div>
                    <p className="text-xs text-[#A0A0A0] mb-2">{exp.company} • {exp.location}</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-[#CCCCCC] leading-relaxed">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-mono bg-[#181818] border border-[#262626] text-[#A0A0A0] rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Laptop size={16} className="text-[#D4AF37]" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Featured Software Projects
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-3.5 bg-[#181818] border border-[#242424] rounded-lg space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="font-medium text-white text-xs sm:text-sm">{proj.title}</h5>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] shrink-0">
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-0.5"
                            title="Live Demo"
                          >
                            Demo <ExternalLink size={10} />
                          </a>
                        )}
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#A0A0A0] hover:text-white flex items-center gap-0.5"
                          title="GitHub Repository"
                        >
                          Code <Globe size={10} />
                        </a>
                      </div>
                    </div>
                    <p className="text-xs text-[#A0A0A0] font-light leading-relaxed line-clamp-2">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.techStack.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-1.5 py-0.5 text-[9px] font-mono bg-[#141414] border border-[#262626] text-[#999999] rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Grid */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code size={16} className="text-[#D4AF37]" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Technical Expertise
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title} className="p-3 bg-[#181818] border border-[#242424] rounded-lg">
                    <p className="text-xs font-medium text-[#F5D77F] mb-1.5">{cat.title}</p>
                    <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                      {cat.skills.map((s) => s.name).join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Education */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award size={16} className="text-[#D4AF37]" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Verified Honors & Certifications
                </h4>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-[#181818] border border-[#242424] rounded-lg text-xs"
                  >
                    <div>
                      <span className="font-medium text-white">{cert.title}</span>
                      <span className="text-[#A0A0A0] block sm:inline sm:ml-2">({cert.issuer})</span>
                    </div>
                    <span className="text-[#D4AF37] font-mono mt-1 sm:mt-0">{cert.issueDate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 border-t border-[#242424] bg-[#181818] flex items-center justify-between text-xs text-[#808080]">
            <span>Harshitha Priya • Verified Engineering Portfolio</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              Close Preview
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
