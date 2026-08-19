import React from 'react';
import { getTechIcon } from './Icons';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'muted' | 'outline' | 'tech';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className = '',
  icon,
}) => {
  const baseClasses =
    'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wide rounded-full transition-colors duration-300';

  const variants = {
    gold: 'bg-[#D4AF37]/10 text-[#F5D77F] border border-[#D4AF37]/30 shadow-[0_0_10px_rgba(212,175,55,0.08)]',
    muted: 'bg-[#181818] text-[#A0A0A0] border border-[#242424]',
    outline: 'bg-transparent text-white border border-[#333333]',
    tech: 'bg-[#141414] text-[#E0E0E0] border border-[#262626] font-mono text-[11px] hover:border-[#D4AF37]/40 hover:text-[#F5D77F]',
  };

  // If tech variant and no icon provided, auto-detect logo
  const resolvedIcon =
    icon || (variant === 'tech' && typeof children === 'string' ? getTechIcon(children, 14) : null);

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {resolvedIcon && <span className="inline-flex items-center shrink-0">{resolvedIcon}</span>}
      <span>{children}</span>
    </span>
  );
};

export interface TechBadgeProps {
  tech: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  tech,
  className = '',
  size = 'md',
}) => {
  const icon = getTechIcon(tech, size === 'lg' ? 18 : size === 'sm' ? 12 : 15);
  
  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-[10px] gap-1.5',
    md: 'px-3 py-1 text-xs gap-2',
    lg: 'px-3.5 py-1.5 text-sm gap-2.5',
  };

  return (
    <span
      className={`inline-flex items-center rounded-xl bg-[#141414] border border-[#262626] text-[#E8E8E8] font-mono hover:border-[#D4AF37]/50 hover:text-[#F5D77F] hover:shadow-[0_0_15px_rgba(212,175,55,0.12)] transition-all duration-300 group ${sizeClasses[size]} ${className}`}
    >
      {icon && <span className="shrink-0 group-hover:scale-110 transition-transform duration-300">{icon}</span>}
      <span className="font-medium tracking-tight">{tech}</span>
    </span>
  );
};

