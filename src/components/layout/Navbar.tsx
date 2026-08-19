import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../../constants/portfolioData';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Button } from '../common/Button';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
  const activeSection = useActiveSection(sectionIds, 120);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#resume') {
      e.preventDefault();
      onOpenResume();
      setMobileMenuOpen(false);
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-[#242424]/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] group-hover:border-[#D4AF37]/60 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
              <span className="font-editorial text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#FFF6D6] via-[#D4AF37] to-[#AA820A]">
                HP
              </span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_6px_#D4AF37]" />
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-medium tracking-wide text-white group-hover:text-[#F5D77F] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-[#888888] tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-[#121212]/70 border border-[#242424]/70 backdrop-blur-md shadow-inner">
            {NAV_ITEMS.filter((item) => !item.isButton).map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wider rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#A0A0A0] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#1E1E1E] border border-[#D4AF37]/40 rounded-full -z-10 shadow-[0_0_10px_rgba(212,175,55,0.12)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="gold-outline"
              size="sm"
              icon={<FileText size={14} />}
              onClick={onOpenResume}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#181818] border border-[#242424] text-[#A0A0A0] hover:text-white hover:border-[#D4AF37]/40 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-30 bg-[#0F0F0F]/95 backdrop-blur-2xl border-b border-[#242424] px-6 py-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => {
                if (item.isButton) return null;
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#181818] text-[#F5D77F] border border-[#D4AF37]/30'
                        : 'text-[#A0A0A0] hover:text-white hover:bg-[#141414]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={14} className="opacity-40" />
                  </a>
                );
              })}

              <div className="pt-3 border-t border-[#222222]">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  icon={<FileText size={16} />}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                >
                  View Full Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
