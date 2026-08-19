import React from 'react';

interface BadgeProps {
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

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </span>
  );
};
