import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RotateCw, Glasses, Sliders, Box, ArrowRight } from 'lucide-react';

export function ThreeDStudioCard({ onAction }) {
  const navigate = useNavigate();

  const handleAction = (actionType) => {
    if (onAction) {
      onAction(actionType);
      return;
    }
    if (actionType === 'change_frame') {
      const el = document.getElementById('recommended-frames');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/fitting');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-3xl overflow-hidden bg-[#1C2317] border border-[#3E4D2A]/40 p-8 relative min-h-[300px] shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-shadow duration-300 select-none"
    >
      {/* Subtle animated grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #7E8F6A 1px, transparent 1px), linear-gradient(to bottom, #7E8F6A 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#607742]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#3E4D2A]/20 blur-3xl pointer-events-none" />

      {/* Content z-10 relative */}
      <div className="z-10 relative flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
        {/* Left side */}
        <div className="flex-1 max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#26311A]/80 border border-[#3E4D2A]/60 backdrop-blur-sm shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#607742] animate-pulse" />
            <Box className="w-3 h-3 text-[#7E8F6A]" />
            <span className="text-[10px] font-mono text-[#7E8F6A] uppercase tracking-widest font-semibold">
              SPATIAL ENGINE
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FAF8F3] mt-3 tracking-tight font-display">
            Your 3D Fitting Studio
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-[#7E8F6A] mt-2 max-w-md leading-relaxed">
            Explore your precise facial geometry with our advanced 3D spatial fitting engine.
          </p>

          {/* 3 action buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => handleAction('360_view')}
              className="px-4 py-2.5 rounded-xl text-xs font-mono font-medium border border-[#3E4D2A] text-[#CAD8C5] hover:bg-[#3E4D2A] hover:text-[#FAF8F3] transition-all flex items-center gap-2 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
              <span>360° View</span>
            </button>

            <button
              type="button"
              onClick={() => handleAction('change_frame')}
              className="px-4 py-2.5 rounded-xl text-xs font-mono font-medium border border-[#3E4D2A] text-[#CAD8C5] hover:bg-[#3E4D2A] hover:text-[#FAF8F3] transition-all flex items-center gap-2 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <Glasses className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>Change Frame</span>
            </button>

            <button
              type="button"
              onClick={() => handleAction('adjust_fit')}
              className="px-4 py-2.5 rounded-xl text-xs font-mono font-medium border border-[#3E4D2A] text-[#CAD8C5] hover:bg-[#3E4D2A] hover:text-[#FAF8F3] transition-all flex items-center gap-2 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
              <span>Adjust Fit</span>
            </button>
          </div>
        </div>

        {/* Right side: decorative 3D preview placeholder */}
        <div
          onClick={() => navigate('/fitting')}
          title="Click to launch 3D Studio"
          className="flex-shrink-0 relative flex items-center justify-center p-4 cursor-pointer group"
        >
          {/* Subtle spin animation for the outer ring border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
            className="w-[200px] h-[200px] rounded-full border border-[#3E4D2A]/50 border-dashed flex items-center justify-center shadow-lg group-hover:border-[#607742] transition-colors"
          >
            <div className="w-[170px] h-[170px] rounded-full border border-[#607742]/20 flex items-center justify-center">
              <div className="w-[140px] h-[140px] rounded-full bg-[#26311A]/80 border border-[#607742]/40 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <Glasses className="w-14 h-14 text-[#607742] group-hover:text-[#CAD8C5] transition-colors" />
              </div>
            </div>
          </motion.div>
          <div className="absolute bottom-2 text-[10px] font-mono text-[#7E8F6A] opacity-75 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
            <span>Launch Studio</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
