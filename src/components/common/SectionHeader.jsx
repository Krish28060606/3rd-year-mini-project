import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './Badge';

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  badgeIcon,
  badgeVariant = 'cyan',
  align = 'center',
  className = ''
}) {
  const isCentered = align === 'center';

  return (
    <div className={`max-w-3xl ${isCentered ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Badge icon={badgeIcon} variant={badgeVariant}>
            {eyebrow}
          </Badge>
        </motion.div>
      )}

      <motion.h2 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F2818] leading-tight font-display"
      >
        {title}{' '}
        {highlight && (
          <span className="text-gradient-olive inline-block">
            {highlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm md:text-base text-[#526049] font-normal leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
