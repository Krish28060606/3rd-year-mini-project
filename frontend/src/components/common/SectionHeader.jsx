import React from 'react';
import { Badge } from './Badge';

export const SectionHeader = ({
  tag,
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`space-y-2 ${centered ? 'text-center' : ''} ${className}`}>
      {tag && (
        <Badge variant="brand" size="sm">
          {tag}
        </Badge>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
