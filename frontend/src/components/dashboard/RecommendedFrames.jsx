import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, X, Sparkles, Sliders, CheckCircle2, Shield, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const FRAMES_DATA = [
  { 
    name: 'Aether Titanium', 
    type: 'Thin Metal', 
    price: '$240', 
    match: '98%', 
    color: '#8B8B8B',
    material: 'Aerospace Grade Titanium',
    weight: '14.2 grams',
    lensWidth: '52 mm',
    bridge: '18 mm',
    temple: '142 mm',
    description: 'Ultralight minimalist profile with precision laser-welded hinges and ergonomic nose pads.'
  },
  { 
    name: 'Lumina Crystal', 
    type: 'Transparent', 
    price: '$195', 
    match: '95%', 
    color: '#B5AFA4',
    material: 'Bio-Acetate Clear Glass',
    weight: '18.5 grams',
    lensWidth: '50 mm',
    bridge: '19 mm',
    temple: '145 mm',
    description: 'Modern translucent aesthetic crafted from sustainable organic acetate with anti-reflective coating.'
  },
  { 
    name: 'Monarch Obsidian', 
    type: 'Classic Black', 
    price: '$210', 
    match: '92%', 
    color: '#1F2818',
    material: 'High-Density Matte Acetate',
    weight: '21.0 grams',
    lensWidth: '53 mm',
    bridge: '17 mm',
    temple: '140 mm',
    description: 'Timeless bold silhouette featuring hand-beveled edges and signature 5-barrel German hinges.'
  },
  { 
    name: 'Sienna Tortoise', 
    type: 'Acetate', 
    price: '$225', 
    match: '90%', 
    color: '#8B5E3C',
    material: 'Custom Patterned Cellulose',
    weight: '19.8 grams',
    lensWidth: '51 mm',
    bridge: '18 mm',
    temple: '145 mm',
    description: 'Rich amber-flecked tortoise pattern hand-polished over three days for a warm bespoke luster.'
  },
  { 
    name: 'Vanguard Square', 
    type: 'Modern Matte', 
    price: '$185', 
    match: '88%', 
    color: '#3E4D2A',
    material: 'Milled Monel Alloy',
    weight: '17.0 grams',
    lensWidth: '54 mm',
    bridge: '16 mm',
    temple: '142 mm',
    description: 'Architectural sharp rectangular angles engineered to balance oval and round facial contours.'
  },
  { 
    name: 'Zephyr Aviator', 
    type: 'Polished Gold', 
    price: '$260', 
    match: '96%', 
    color: '#C3AF83',
    material: '18K Electroplated Gold Wire',
    weight: '15.6 grams',
    lensWidth: '55 mm',
    bridge: '15 mm',
    temple: '140 mm',
    description: 'Classic double-bridge aviator re-engineered with refined modern proportions and teardrop curves.'
  }
];

export function RecommendedFrames() {
  const [favorites, setFavorites] = useState(new Set());
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [selectedTint, setSelectedTint] = useState('original');

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
        <div>
          <h2 className="text-xl font-bold text-[#1F2818] tracking-tight">
            Recommended for You
          </h2>
          <p className="text-xs text-[#526049] font-mono mt-0.5">
            Click any frame to inspect specs and view biometric fit
          </p>
        </div>
        <button
          onClick={() => setSelectedFrame(FRAMES_DATA[0])}
          className="group inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#3E4D2A] hover:text-[#26311A] transition-colors cursor-pointer"
        >
          <span>Inspect Specs</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
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
              onClick={() => setSelectedFrame(frame)}
              className="min-w-[220px] max-w-[240px] flex-shrink-0 bg-white rounded-2xl border border-[#CAD8C5]/60 overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-[0_20px_45px_rgba(62,77,42,0.22)] hover:border-[#607742]/50 group cursor-pointer flex flex-col justify-between"
            >
              {/* Card top */}
              <div className="h-[160px] bg-[#F0EDE5] flex items-center justify-center relative overflow-hidden select-none group-hover:bg-[#EAE5D9] transition-colors duration-300">
                {/* Match pill (top-left) */}
                <div className="absolute top-3 left-3 z-10 bg-[#3E4D2A] text-[#FAF8F3] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm tracking-wide">
                  {frame.match} Match
                </div>

                {/* Heart button (top-right) */}
                <button
                  type="button"
                  onClick={(e) => toggleFavorite(e, frame.name)}
                  aria-label={`Save ${frame.name} to favorites`}
                  className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110 active:scale-95 cursor-pointer ${
                    isFavorite
                      ? 'bg-red-50 text-red-500 shadow-inner'
                      : 'text-[#1F2818]/60 hover:bg-red-50 hover:text-red-500'
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 transition-transform duration-150 ${
                      isFavorite ? 'fill-red-500 text-red-500' : ''
                    }`}
                  />
                </button>

                {/* Glasses Visual Wireframe */}
                <div
                  className="w-28 h-12 rounded-full border-2 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{ borderColor: frame.color }}
                >
                  <div
                    className="w-10 h-8 rounded-full border opacity-40 mr-1"
                    style={{ borderColor: frame.color }}
                  />
                  <div
                    className="w-2.5 h-[2px] opacity-80"
                    style={{ backgroundColor: frame.color }}
                  />
                  <div
                    className="w-10 h-8 rounded-full border opacity-40 ml-1"
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
                <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#CAD8C5]/30">
                  <span className="text-sm font-bold text-[#1F2818] font-mono">
                    {frame.price}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFrame(frame);
                    }}
                    className="text-xs font-semibold bg-[#3E4D2A] hover:bg-[#26311A] text-[#FAF8F3] px-3.5 py-1.5 rounded-lg hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-xs cursor-pointer"
                  >
                    Inspect
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Slide-out Interactive Specs Inspector Drawer */}
      <AnimatePresence>
        {selectedFrame && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFrame(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />

            {/* Specs Detail Sidebar Drawer with deep floating shadow */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="relative w-full max-w-md h-full bg-[#FAF8F3] border-l border-[#CAD8C5] shadow-[0_25px_60px_rgba(0,0,0,0.35)] z-10 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#CAD8C5]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#607742] animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#3E4D2A] font-bold">
                      Specs Calibration
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedFrame(null)}
                    className="p-2 rounded-xl text-[#526049] hover:text-[#1F2818] hover:bg-white hover:shadow-md transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Big Preview Area */}
                <div className="rounded-2xl bg-[#EAE5D9]/80 border border-[#CAD8C5] p-6 mb-6 flex flex-col items-center justify-center relative shadow-inner">
                  <div className="absolute top-3 left-3 bg-[#3E4D2A] text-[#FAF8F3] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {selectedFrame.match} Face Match
                  </div>

                  <div
                    className="w-44 h-20 rounded-full border-3 relative flex items-center justify-center my-6 transition-all duration-300 drop-shadow-md"
                    style={{ borderColor: selectedFrame.color }}
                  >
                    <div
                      className="w-16 h-14 rounded-full border opacity-50 mr-1.5"
                      style={{ borderColor: selectedFrame.color }}
                    />
                    <div
                      className="w-3.5 h-[3px] opacity-90"
                      style={{ backgroundColor: selectedFrame.color }}
                    />
                    <div
                      className="w-16 h-14 rounded-full border opacity-50 ml-1.5"
                      style={{ borderColor: selectedFrame.color }}
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#526049]">
                    <Sparkles className="w-3.5 h-3.5 text-[#607742]" />
                    <span>{selectedFrame.material}</span>
                  </div>
                </div>

                {/* Frame Title & Price */}
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-[#1F2818]">
                      {selectedFrame.name}
                    </h3>
                    <span className="text-xl font-bold text-[#3E4D2A] font-mono">
                      {selectedFrame.price}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#607742] mt-0.5">
                    {selectedFrame.type} • {selectedFrame.weight}
                  </p>
                  <p className="text-sm text-[#526049] leading-relaxed mt-2.5">
                    {selectedFrame.description}
                  </p>
                </div>

                {/* Biometric Dimensional Specs Grid */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold text-[#3E4D2A] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    Dimensional Specifications
                  </h4>
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="bg-white p-3 rounded-xl border border-[#CAD8C5] shadow-xs text-center">
                      <span className="text-[10px] font-mono text-[#526049] block uppercase">Lens Width</span>
                      <span className="text-sm font-bold font-mono text-[#1F2818] mt-1 block">{selectedFrame.lensWidth}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-[#CAD8C5] shadow-xs text-center">
                      <span className="text-[10px] font-mono text-[#526049] block uppercase">Bridge</span>
                      <span className="text-sm font-bold font-mono text-[#1F2818] mt-1 block">{selectedFrame.bridge}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-[#CAD8C5] shadow-xs text-center">
                      <span className="text-[10px] font-mono text-[#526049] block uppercase">Temple</span>
                      <span className="text-sm font-bold font-mono text-[#1F2818] mt-1 block">{selectedFrame.temple}</span>
                    </div>
                  </div>
                </div>

                {/* Ergonomic Fit Verification */}
                <div className="p-3.5 rounded-xl bg-[#CAD8C5]/30 border border-[#7E8F6A]/30 flex items-center gap-2.5 mb-6">
                  <CheckCircle2 className="w-4 h-4 text-[#607742] flex-shrink-0" />
                  <span className="text-xs text-[#3E4D2A] font-mono">
                    Calibrated for Oval face shape with zero bridge pressure hot-spots.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#CAD8C5] flex flex-col gap-2.5">
                <Link
                  to="/fitting"
                  onClick={() => setSelectedFrame(null)}
                  className="w-full py-3.5 rounded-xl bg-[#3E4D2A] hover:bg-[#26311A] text-[#FAF8F3] font-bold text-xs font-mono tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>LAUNCH 3D SPATIAL TRY-ON</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedFrame(null)}
                  className="w-full py-2.5 rounded-xl border border-[#CAD8C5] bg-white text-xs font-mono text-[#526049] hover:bg-[#E9E4CF]/60 transition-colors cursor-pointer"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
