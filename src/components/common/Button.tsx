import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold-outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  as = 'button',
  href,
  target,
  rel,
  download,
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wider gap-1.5',
    md: 'px-5 py-2.5 text-sm tracking-wide gap-2',
    lg: 'px-7 py-3.5 text-base tracking-wide gap-2.5 font-medium',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:brightness-105 border border-[#F5D77F]/40',
    secondary:
      'bg-[#181818] text-white hover:text-[#F5D77F] border border-[#242424] hover:border-[#D4AF37]/50 shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.1)]',
    outline:
      'bg-transparent text-white border border-[#333333] hover:border-white/60 hover:bg-white/5',
    'gold-outline':
      'bg-transparent text-[#F5D77F] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]',
    ghost:
      'bg-transparent text-[#A0A0A0] hover:text-white hover:bg-[#181818]/60',
  };

  const baseStyles =
    'relative inline-flex items-center justify-center rounded-lg font-sans transition-all duration-300 select-none cursor-pointer overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed';

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { y: 0, scale: 0.98 },
    transition: { duration: 0.2, ease: 'easeOut' as const },
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...(motionProps as any)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
};
