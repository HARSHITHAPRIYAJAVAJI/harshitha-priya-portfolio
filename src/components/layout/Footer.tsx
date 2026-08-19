import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO, NAV_ITEMS } from '../../constants/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080808] border-t border-[#1C1C1C] pt-16 pb-12 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#1C1C1C]">
          {/* Brand & Portrait */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <img src="/jhp.png" alt="Harshitha Priya" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-1">
                <span className="font-editorial text-2xl font-bold text-white">
                  {PERSONAL_INFO.name}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              </div>
              <p className="text-xs text-[#888888] font-light max-w-sm">
                {PERSONAL_INFO.role} • Available for Worldwide Remote & Relocation
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#999999] tracking-wider uppercase">
            {NAV_ITEMS.filter((i) => !i.isButton).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#F5D77F] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#141414] border border-[#222222] text-[#A0A0A0] hover:text-white hover:border-[#D4AF37]/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#141414] border border-[#222222] text-[#A0A0A0] hover:text-[#0077B5] hover:border-[#0077B5]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-[#141414] border border-[#222222] text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#141414] border border-[#222222] text-[#A0A0A0] hover:text-[#F5D77F] hover:border-[#D4AF37]/50 transition-colors group ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-4">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] flex items-center gap-1.5">
            Designed with precision & luxury aesthetics.
          </p>
        </div>
      </div>
    </footer>
  );
};
