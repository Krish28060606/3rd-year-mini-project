import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, CheckCircle2, Sparkles, Sun, ShieldCheck, Zap, Layers, ArrowRight } from 'lucide-react';
import { SectionHeader } from './common/SectionHeader';
import { Badge } from './common/Badge';
import { LENS_INTELLIGENCE_DATA } from '../data/projectData';

export function LensIntelligenceSection({ onAction }) {
  const [activeLensId, setActiveLensId] = useState(LENS_INTELLIGENCE_DATA[0].id);
  const activeLens = LENS_INTELLIGENCE_DATA.find(l => l.id === activeLensId) || LENS_INTELLIGENCE_DATA[0];

  return (
    <section id="lens-intelligence" className="py-20 md:py-28 relative bg-[#F7F5EE] border-t border-[#CAD8C5] overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-[#CAD8C5]/25 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="OPTICAL PERFORMANCE & COATINGS"
          badgeIcon={Eye}
          badgeVariant="olive"
          title="Intelligent"
          highlight="Lens Science"
          description="A proper fit is only half the decision. Explore how advanced optical coatings, UV400 filtration, and polarized crystal alignments integrate with your personalized frame dimensions."
        />

        {/* 5-Lens Selector Bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {LENS_INTELLIGENCE_DATA.map((lens) => {
            const isSelected = activeLensId === lens.id;
            return (
              <button
                key={lens.id}
                onClick={() => setActiveLensId(lens.id)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#3E4D2A] text-[#FAF8F3] border-[#26311A] shadow-lg scale-[1.02]'
                    : 'bg-[#FAF8F3] text-[#1F2818] border-[#CAD8C5] hover:border-[#7E8F6A]'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full block w-fit mb-2 ${
                    isSelected ? 'bg-[#CAD8C5]/40 text-[#FAF8F3]' : lens.badgeColor
                  }`}>
                    {lens.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold font-display leading-snug">
                    {lens.name}
                  </h4>
                </div>
                <div className={`mt-4 pt-2 border-t text-[10px] font-mono ${
                  isSelected ? 'border-white/20 text-[#CAD8C5]' : 'border-[#CAD8C5]/60 text-[#7E8F6A]'
                }`}>
                  Click to inspect
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Lens Deep Dive Panel */}
        <motion.div
          key={activeLens.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 rounded-3xl p-6 sm:p-10 bg-[#FAF8F3] border-2 border-[#CAD8C5] shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description & Specs (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="olive">{activeLens.tag}</Badge>
                <span className="text-xs font-mono text-[#7E8F6A]">Optical Treatment Grade</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2818] font-display mb-3">
                {activeLens.name}
              </h3>
              <p className="text-sm text-[#526049] leading-relaxed mb-6 font-normal">
                {activeLens.desc}
              </p>

              {/* Transmission & Glare Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-white border border-[#CAD8C5]">
                  <span className="text-xs font-mono text-[#7E8F6A] block mb-1">Light Transmission Rate</span>
                  <span className="text-base sm:text-lg font-bold font-mono text-[#1F2818]">{activeLens.transmission}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#CAD8C5]">
                  <span className="text-xs font-mono text-[#7E8F6A] block mb-1">Glare / Reflection Blocker</span>
                  <span className="text-base sm:text-lg font-bold font-mono text-[#607742]">{activeLens.glareCut}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#E9E4CF]/50 border border-[#CAD8C5] text-xs font-mono text-[#1F2818]">
                <span className="text-[#3E4D2A] font-bold block mb-1">Recommended Use Cases:</span>
                <span>{activeLens.useCase}</span>
              </div>
            </div>

            {/* Right Lens Simulation Visual Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-[#E9E4CF]/40 border border-[#CAD8C5]">
              <div className="relative w-44 h-44 rounded-full border-4 border-[#CAD8C5] flex items-center justify-center bg-gradient-to-tr from-[#CAD8C5]/40 via-white to-[#CAD8C5]/20 shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-radial-subtle opacity-70" />
                <Eye className="w-16 h-16 text-[#3E4D2A] drop-shadow-md z-10" />
                <div className="absolute bottom-3 text-[10px] font-mono font-bold text-[#3E4D2A] bg-white/90 px-2 py-0.5 rounded-full border border-[#CAD8C5]">
                  OPTICAL GRADE
                </div>
              </div>

              <span className="text-xs font-mono text-[#526049] text-center mt-4">
                Parametrically aligned to customer pupil coordinate ray
              </span>

              <button
                onClick={() => onAction && onAction(activeLens.id)}
                className="btn-dark-olive mt-6 w-full py-3 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <span>PAIR THIS LENS WITH 3D FIT</span>
                <ArrowRight className="w-4 h-4 text-[#C3AF83]" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
