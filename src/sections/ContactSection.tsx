import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Download,
  Copy,
  Check,
  Send,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../constants/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { useClipboard } from '../hooks/useClipboard';
import { fadeUp } from '../utils/animations';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const { isCopied, copy } = useClipboard();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Simulate luxury API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F5D77F', '#FFFFFF', '#AA820A'],
      });
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0B0B0B] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-96 bg-[#D4AF37]/5 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Initiate Conversation"
          title="Let's Build Something Exceptional Together"
          subtitle="Open to full-stack engineering opportunities, high-impact consulting projects, and technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Communication & Channels */}
          <motion.div
            variants={fadeUp(0.1, 0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Direct Contact Box */}
            <div className="p-8 rounded-3xl bg-[#141414] border border-[#242424] shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block mb-2">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-medium text-white mb-2">
                  Get In Touch Directly
                </h3>
                <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
                  Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub. I typically respond promptly.
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="p-4 rounded-2xl bg-[#181818] border border-[#262626] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-[#202020] flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#D4AF37]" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-[#777777] uppercase block">
                      Email Address
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-white select-all">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copy(PERSONAL_INFO.email, 'email')}
                  className="p-2.5 rounded-xl bg-[#222222] border border-[#2D2D2D] text-[#CCCCCC] hover:text-[#F5D77F] hover:border-[#D4AF37]/50 transition-all shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {isCopied('email') ? (
                    <Check size={16} className="text-[#27C93F]" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Copy / Direct Phone Box */}
              <div className="p-4 rounded-2xl bg-[#181818] border border-[#262626] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-[#202020] flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#D4AF37]" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-[#777777] uppercase block">
                      Direct Contact / Phone
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-[#F5D77F] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-[#222222] border border-[#2D2D2D] text-[#CCCCCC] hover:text-[#F5D77F] hover:border-[#D4AF37]/50 transition-all shrink-0 cursor-pointer"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {isCopied('phone') ? (
                    <Check size={16} className="text-[#27C93F]" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Channel Quick Links */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#181818] border border-[#262626] hover:border-[#0077B5]/50 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#202020] flex items-center justify-center text-[#A0A0A0] group-hover:text-[#0077B5] transition-colors">
                    <LinkedinIcon size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#777777] uppercase block">
                      Network
                    </span>
                    <span className="text-xs font-medium text-white group-hover:text-[#0077B5]">
                      LinkedIn
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#181818] border border-[#262626] hover:border-white/40 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#202020] flex items-center justify-center text-[#A0A0A0] group-hover:text-white transition-colors">
                    <GithubIcon size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#777777] uppercase block">
                      Source
                    </span>
                    <span className="text-xs font-medium text-white group-hover:text-white">
                      GitHub
                    </span>
                  </div>
                </a>
              </div>

              {/* Resume Download CTA */}
              <div className="pt-2">
                <Button
                  variant="gold-outline"
                  size="md"
                  className="w-full justify-center"
                  icon={<Download size={16} />}
                  onClick={onOpenResume}
                >
                  Download Formal Resume
                </Button>
              </div>
            </div>

            {/* Availability status badge */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-[#242424] flex items-center gap-3 text-xs text-[#A0A0A0]">
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27C93F] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#27C93F]" />
              </div>
              <span className="leading-relaxed">
                Currently based in Bangalore • Open to worldwide remote & relocation opportunities.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Luxury Contact Form */}
          <motion.div
            variants={fadeUp(0.2, 0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-[#242424] shadow-2xl relative overflow-hidden">
              <h3 className="text-xl font-medium text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#999999] font-light mb-8">
                Whether you have an inquiry, an engineering role, or a technical discussion in mind, fill out the form below.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#F5D77F]">
                    <Check size={28} />
                  </div>
                  <h4 className="text-lg font-medium text-white">Message Transmitted</h4>
                  <p className="text-xs text-[#A0A0A0] max-w-sm mx-auto">
                    Thank you for reaching out. Your message has been recorded and I will respond to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2A2A2A] text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. elena@techfirm.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2A2A2A] text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider block">
                      Subject / Opportunity Type
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Senior Frontend Engineer Role / Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2A2A2A] text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider block">
                      Project or Role Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your technical requirements, project timeline, or team context..."
                      className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2A2A2A] text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                      icon={isSubmitting ? <Sparkles size={16} className="animate-spin" /> : <Send size={16} />}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Transmitting Message...' : 'Transmit Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
