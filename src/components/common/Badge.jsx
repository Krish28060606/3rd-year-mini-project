import React from 'react';

export function Badge({ children, icon: Icon, variant = 'cyan', className = '' }) {
  const variantStyles = {
    cyan: 'bg-[#CAD8C5]/50 text-[#3E4D2A] border-[#7E8F6A]/30',
    blue: 'bg-[#CAD8C5]/60 text-[#26311A] border-[#7E8F6A]/40',
    emerald: 'bg-[#CAD8C5]/50 text-[#3E4D2A] border-[#7E8F6A]/30',
    amber: 'bg-[#C3AF83]/30 text-[#26311A] border-[#C3AF83]/50',
    indigo: 'bg-[#CAD8C5]/50 text-[#3E4D2A] border-[#7E8F6A]/30',
    purple: 'bg-[#C3AF83]/25 text-[#3E4D2A] border-[#C3AF83]/40',
    slate: 'bg-[#E9E4CF] text-[#3E4D2A] border-[#D8D3C3]',
    sage: 'bg-[#CAD8C5]/60 text-[#26311A] border-[#7E8F6A]/40',
    sand: 'bg-[#C3AF83]/30 text-[#26311A] border-[#C3AF83]/50',
    olive: 'bg-[#607742]/15 text-[#3E4D2A] border-[#607742]/30',
    dark: 'bg-[#3E4D2A] text-[#FAF8F3] border-[#26311A]'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium tracking-wide uppercase rounded-full border backdrop-blur-md ${variantStyles[variant] || variantStyles.cyan} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}
