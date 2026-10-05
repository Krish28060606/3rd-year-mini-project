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
              delay: index * 0.1,
              ease: 'easeOut',
            }}
            className="bg-white rounded-2xl border border-[#CAD8C5]/50 p-5 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-3xl font-bold text-[#1F2818] font-display">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-[#526049] uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
              <div className="w-8 h-8 rounded-xl bg-[#E9E4CF]/60 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-[#607742]" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
