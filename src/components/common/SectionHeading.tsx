import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <motion.div
      variants={fadeUp(0, 0.6)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`flex flex-col max-w-3xl mb-16 md:mb-20 ${alignmentClasses[align]} ${className}`}
    >
      {badge && (
        <div className="mb-4">
          <Badge variant="gold">{badge}</Badge>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-normal tracking-tight text-white leading-tight">
        {title}
      </h2>

      <div className="mt-4 mb-5 flex items-center gap-2">
        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
      </div>

      {subtitle && (
        <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed font-light font-sans max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
