import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Card = ({
  children,
  className = '',
  hoverEffect = false,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'rounded-xl glass-panel p-5 transition-colors',
          hoverEffect && 'glass-panel-hover',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
