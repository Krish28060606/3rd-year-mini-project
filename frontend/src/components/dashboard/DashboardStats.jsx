import React from 'react';
import { motion } from 'framer-motion';
import { Glasses, Eye, Heart, Sparkles } from 'lucide-react';

const STATS_DATA = [
  { value: '56', label: 'Frames Available', icon: Glasses },
  { value: '12', label: 'Frames Tried', icon: Eye },
  { value: '8', label: 'Saved Favorites', icon: Heart },
  { value: '94%', label: 'Best Fit Score', icon: Sparkles },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {STATS_DATA.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
              ease: 'easeOut',
            }}
            className="bg-white dark:bg-[#1A2216] rounded-2xl border border-[#CAD8C5]/60 dark:border-[#3E4D2A]/60 p-5 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-[0_16px_35px_rgba(62,77,42,0.18)] flex flex-col justify-between cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-3xl font-bold text-[#1F2818] dark:text-[#FAF8F3] font-display tracking-tight group-hover:text-[#3E4D2A] dark:group-hover:text-[#CAD8C5] transition-colors">
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono text-[#526049] dark:text-[#CAD8C5] uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#E9E4CF]/60 dark:bg-[#26311A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                <Icon className="w-4 h-4 text-[#607742] dark:text-[#CAD8C5]" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
