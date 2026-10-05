import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Sparkles } from 'lucide-react';

const defaultMetrics = [
  { label: 'Face Shape', value: 'Oval', sub: '98% confidence' },
  { label: 'Face Width', value: '142 mm' },
  { label: 'Eye Distance', value: '64 mm' },
  { label: 'Nose Bridge', value: '18 mm' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function AIFaceInsights({
  metrics = defaultMetrics,
  fitScore = '94%',
  fitStatus = 'Optimal',
  updatedAt = 'Updated today',
  className = '',
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`rounded-2xl bg-white dark:bg-[#1A2216] border border-[#CAD8C5]/60 dark:border-[#3E4D2A]/60 p-6 shadow-sm hover:shadow-[0_16px_35px_rgba(62,77,42,0.16)] transition-all duration-300 ${className}`}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scan className="w-5 h-5 text-[#607742] dark:text-[#CAD8C5]" />
          <h2 className="text-lg font-bold text-[#1F2818] dark:text-[#FAF8F3]">AI Face Analysis</h2>
        </div>
        <span className="text-xs text-[#607742] dark:text-[#CAD8C5] font-mono">{updatedAt}</span>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mt-5">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label || index}
            variants={itemVariants}
            className="bg-[#FAF8F3] dark:bg-[#26311A]/60 rounded-xl p-3.5 border border-[#E9E4CF] dark:border-[#3E4D2A]/60 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xs transition-transform"
          >
            <span className="text-[11px] font-mono text-[#526049] dark:text-[#CAD8C5] uppercase tracking-wider">
              {metric.label}
            </span>
            <div className="text-xl font-bold text-[#1F2818] dark:text-[#FAF8F3] mt-1 font-display">
              {metric.value}
            </div>
            {metric.sub ? (
              <span className="text-[10px] text-[#607742] dark:text-[#C3AF83] font-mono mt-0.5">
                {metric.sub}
              </span>
            ) : null}
          </motion.div>
        ))}
      </div>

      {/* Bottom Bar: Fit Score */}
      <motion.div
        variants={itemVariants}
        className="mt-5 p-4 bg-[#E9E4CF]/40 dark:bg-[#26311A] rounded-xl border border-[#CAD8C5] dark:border-[#3E4D2A] flex items-center justify-between shadow-xs"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#607742] dark:text-[#CAD8C5]" />
          <span className="text-xs font-mono font-semibold text-[#1F2818] dark:text-[#FAF8F3] uppercase tracking-wider">
            Geometric Fit Score
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#3E4D2A] dark:text-[#CAD8C5] font-mono">
            {fitScore}
          </span>
          <span className="bg-[#CAD8C5] dark:bg-[#3E4D2A] text-[#26311A] dark:text-[#FAF8F3] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
            {fitStatus}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
