import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

const FRAMES_DATA = [
  { name: 'Aether Titanium', type: 'Thin Metal', price: '$240', match: '98%', color: '#8B8B8B' },
  { name: 'Lumina Crystal', type: 'Transparent', price: '$195', match: '95%', color: '#D4CFC4' },
  { name: 'Monarch Obsidian', type: 'Classic Black', price: '$210', match: '92%', color: '#1F2818' },
  { name: 'Sienna Tortoise', type: 'Acetate', price: '$225', match: '90%', color: '#8B5E3C' },
  { name: 'Vanguard Square', type: 'Modern Matte', price: '$185', match: '88%', color: '#3E4D2A' },
  { name: 'Zephyr Aviator', type: 'Polished Gold', price: '$260', match: '96%', color: '#C3AF83' }
];

export function RecommendedFrames() {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (e, frameName) => {
    e.stopPropagation();
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(frameName)) {
        next.delete(frameName);
      } else {
        next.add(frameName);
      }
      return next;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#1F2818] tracking-tight">
          Recommended for You
        </h2>
        <a
          href="#all-frames"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#3E4D2A] hover:text-[#26311A] transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Horizontal scrolling container */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FRAMES_DATA.map((frame, index) => {
          const isFavorite = favorites.has(frame.name);

          return (
            <motion.div
              key={frame.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="min-w-[220px] max-w-[240px] flex-shrink-0 bg-white rounded-2xl border border-[#CAD8C5]/50 overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md group cursor-pointer flex flex-col justify-between"
            >
              {/* Card top */}
              <div className="h-[160px] bg-[#F0EDE5] flex items-center justify-center relative overflow-hidden select-none">
                {/* Match pill (top-left) */}
                <div className="absolute top-3 left-3 z-10 bg-[#3E4D2A] text-[#FAF8F3] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm tracking-wide">
                  {frame.match} Match
                </div>

                {/* Heart button (top-right) */}
                <button
                  type="button"
                  onClick={(e) => toggleFavorite(e, frame.name)}
                  aria-label={`Save ${frame.name} to favorites`}
                  className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-sm ${
                    isFavorite
                      ? 'bg-red-50 text-red-500 shadow-inner'
                      : 'text-[#1F2818]/60 hover:bg-red-50 hover:text-red-500'
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 transition-transform duration-150 active:scale-90 ${
                      isFavorite ? 'fill-red-500 text-red-500' : ''
                    }`}
                  />
                </button>

                {/* Glasses Placeholder */}
                <div
                  className="w-28 h-12 rounded-full border-2 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm"
                  style={{ borderColor: frame.color }}
                >
                  {/* Subtle inner lens accents & bridge */}
                  <div
                    className="w-10 h-8 rounded-full border opacity-30 mr-1"
                    style={{ borderColor: frame.color }}
                  />
                  <div
                    className="w-2 h-[2px] opacity-70"
                    style={{ backgroundColor: frame.color }}
                  />
                  <div
                    className="w-10 h-8 rounded-full border opacity-30 ml-1"
                    style={{ borderColor: frame.color }}
                  />
                </div>
              </div>

              {/* Card bottom */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-sm font-bold text-[#1F2818] truncate group-hover:text-[#3E4D2A] transition-colors">
                    {frame.name}
                  </h3>
                  <p className="text-xs text-[#526049] font-mono mt-0.5">
                    {frame.type}
                  </p>
                </div>

                {/* Price + Try On row */}
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#CAD8C5]/20">
                  <span className="text-sm font-bold text-[#1F2818] font-mono">
                    {frame.price}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Try On handler
                    }}
                    className="text-xs font-medium bg-[#3E4D2A] text-[#FAF8F3] px-3 py-1.5 rounded-lg hover:bg-[#26311A] transition-all duration-200 shadow-sm active:scale-95"
                  >
                    Try On
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
