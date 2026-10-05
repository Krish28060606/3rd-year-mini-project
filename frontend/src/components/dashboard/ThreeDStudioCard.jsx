import React from 'react';
import { motion } from 'framer-motion';
import { RotateCw, Glasses, Sliders, Box } from 'lucide-react';

export function ThreeDStudioCard({ onAction }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-3xl overflow-hidden bg-[#1C2317] border border-[#3E4D2A]/30 p-8 relative min-h-[300px] shadow-xl select-none"
    >
      {/* Subtle animated grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #7E8F6A 1px, transparent 1px), linear-gradient(to bottom, #7E8F6A 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#607742]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#3E4D2A]/15 blur-3xl pointer-events-none" />

      {/* Content z-10 relative */}
      <div className="z-10 relative flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
        {/* Left side */}
        <div className="flex-1 max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#26311A]/80 border border-[#3E4D2A]/40 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#607742] animate-pulse" />
            <Box className="w-3 h-3 text-[#7E8F6A]" />
            <span className="text-[10px] font-mono text-[#7E8F6A] uppercase tracking-widest font-semibold">
              SPATIAL ENGINE
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FAF8F3] mt-3 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Your 3D Fitting Studio
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-[#7E8F6A] mt-2 max-w-md leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
            Explore your precise facial geometry with our advanced 3D spatial fitting engine.
          </p>

          {/* 3 action buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => onAction?.('360_view')}
              className="px-4 py-2 rounded-xl text-xs font-mono font-medium border border-[#3E4D2A] text-[#CAD8C5] hover:bg-[#3E4D2A] hover:text-[#FAF8F3] transition-all flex items-center gap-2 shadow-sm active:scale-95 group"
            >
              <RotateCw className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
              <span>360° View</span>
            </button>

            <button
              type="button"
              onClick={() => onAction?.('change_frame')}
              className="px-4 py-2 rounded-xl text-xs font-mono font-medium border border-[#3E4D2A] text-[#CAD8C5] hover:bg-[#3E4D2A] hover:text-[#FAF8F3] transition-all flex items-center gap-2 shadow-sm active:scale-95 group"
            >
              <Glasses className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>Change Frame</span>
            </button>

            <button
              type="button"
              onClick={() => onAction?.('adjust_fit')}
              className="px-4 py-2 rounded-xl text-xs font-mono font-medium border border-[#3E4D2A] text-[#CAD8C5] hover:bg-[#3E4D2A] hover:text-[#FAF8F3] transition-all flex items-center gap-2 shadow-sm active:scale-95 group"
            >
              <Sliders className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
              <span>Adjust Fit</span>
            </button>
          </div>
        </div>

        {/* Right side: decorative 3D preview placeholder */}
        <div className="flex-shrink-0 relative flex items-center justify-center p-4">
          {/* Subtle spin animation for the outer ring border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
            className="w-[200px] h-[200px] rounded-full border border-[#3E4D2A]/40 border-dashed flex items-center justify-center shadow-lg"
          >
            {/* Inner static / counter-balanced core */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
              className="w-[160px] h-[160px] rounded-full border border-[#607742]/30 bg-[#26311A] flex items-center justify-center shadow-inner relative group cursor-pointer"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-[#607742]/10 to-transparent opacity-60" />
              <Glasses className="w-16 h-16 text-[#607742]/60 transition-transform duration-300 group-hover:scale-105" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
