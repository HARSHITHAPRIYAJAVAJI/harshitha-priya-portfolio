import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';
import { CERTIFICATIONS } from '../constants/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { fadeUp, staggerContainer } from '../utils/animations';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-[#0E0E0E] overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 subtle-grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Credentials"
          title="Industry Certifications & Professional Accreditations"
          subtitle="Rigorous engineering and cloud certifications recognizing specialized expertise in full-stack architecture and AI systems."
        />

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              variants={fadeUp(0.1 * idx, 0.6)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative p-7 rounded-3xl bg-[#141414] border border-[#242424] hover:border-[#D4AF37]/45 shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.1)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header with Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#2B2B2B] flex items-center justify-center group-hover:border-[#D4AF37]/50 group-hover:scale-105 transition-all duration-300">
                    <Award size={20} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-xs font-mono text-[#D4AF37] flex items-center gap-1">
                    <Calendar size={12} /> {cert.issueDate}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider block mb-1">
                  {cert.issuer}
                </span>

                <h3 className="text-lg font-medium text-white group-hover:text-[#F5D77F] transition-colors leading-snug mb-3">
                  {cert.title}
                </h3>

                <p className="text-xs text-[#9E9E9E] font-light leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Skills covered */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[10px] font-mono bg-[#191919] border border-[#262626] text-[#BBBBBB] rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer with Verification link */}
              <div className="mt-6 pt-4 border-t border-[#202020] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#27C93F] font-mono text-[11px]">
                  <ShieldCheck size={14} />
                  <span>Verified Credential</span>
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[#A0A0A0] hover:text-[#F5D77F] transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
