import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../constants/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import { fadeLeft, fadeRight } from '../utils/animations';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#0E0E0E] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 subtle-grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Trajectory"
          title="Professional Experience & Industry Impact"
          subtitle="A track record of engineering scalable frontend architectures, high-throughput REST APIs, and automated business workflows."
        />

        {/* Vertical Luxury Timeline */}
        <div className="relative mt-12 md:mt-16">
          {/* Central Timeline Spine Line */}
          <div className="absolute top-2 bottom-6 left-4 sm:left-1/2 sm:-translate-x-1/2 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#333333] to-[#181818]" />

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#121212] border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F5D77F]" />
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop alternating */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Container */}
                  <motion.div
                    variants={isEven ? fadeRight(0.15, 0.7) : fadeLeft(0.15, 0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                      isEven ? 'sm:pr-6' : 'sm:pl-6'
                    }`}
                  >
                    <div className="relative p-6 sm:p-7 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#D4AF37]/45 shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.1)] transition-all duration-300 group">
                      {/* Top Ambient Glow */}
                      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono text-[#D4AF37] px-2.5 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center gap-1.5">
                          <Calendar size={12} /> {exp.duration}
                        </span>
                        <span className="text-[11px] font-mono text-[#777777] uppercase tracking-wider">
                          {exp.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-medium text-white group-hover:text-[#F5D77F] transition-colors mt-2">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-[#A0A0A0] mt-1 mb-4">
                        <span className="font-medium text-[#E0E0E0]">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-xs">
                          <MapPin size={12} className="text-[#888888]" /> {exp.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#B0B0B0] font-light leading-relaxed mb-4">
                        {exp.summary}
                      </p>

                      {/* Key Achievements Bullet points */}
                      <div className="space-y-2 mb-5">
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5 text-xs text-[#CCCCCC] leading-relaxed">
                            <CheckCircle2
                              size={14}
                              className="text-[#D4AF37] shrink-0 mt-0.5"
                            />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="pt-4 border-t border-[#202020] flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="tech">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
