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
      className={`rounded-2xl bg-white border border-[#CAD8C5]/50 p-6 shadow-sm ${className}`}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scan className="w-5 h-5 text-[#607742]" />
          <h2 className="text-lg font-bold text-[#1F2818]">AI Face Analysis</h2>
        </div>
        <span className="text-xs text-[#607742] font-mono">{updatedAt}</span>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mt-5">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label || index}
            variants={itemVariants}
            className="bg-[#FAF8F3] rounded-xl p-3.5 border border-[#E9E4CF] flex flex-col justify-between"
          >
            <span className="text-[11px] font-mono text-[#526049] uppercase tracking-wider">
              {metric.label}
            </span>
            <div className="text-xl font-bold text-[#1F2818] mt-1">
              {metric.value}
            </div>
            {metric.sub ? (
              <span className="text-[10px] text-[#607742] font-mono mt-0.5">
                {metric.sub}
              </span>
            ) : null}
          </motion.div>
        ))}
      </div>

      {/* Bottom Bar: Fit Score */}
      <motion.div
        variants={itemVariants}
        className="mt-5 p-4 bg-[#E9E4CF]/40 rounded-xl border border-[#CAD8C5] flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#607742]" />
          <span className="text-sm font-semibold text-[#1F2818]">Geometric Fit Score</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#3E4D2A]">{fitScore}</span>
          <span className="bg-[#CAD8C5] text-[#26311A] px-2 py-0.5 rounded-full text-[10px] font-bold">
            {fitStatus}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
