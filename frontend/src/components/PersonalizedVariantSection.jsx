import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Boxes, ArrowRight, Sliders, CheckCircle2, Sparkles, RefreshCw, Layers } from 'lucide-react';
import { SectionHeader } from './common/SectionHeader';
import { Badge } from './common/Badge';
import { UNIVERSAL_VARIANTS_DATA } from '../data/projectData';

export function PersonalizedVariantSection({ onAction }) {
  const [selectedVariantId, setSelectedVariantId] = useState(UNIVERSAL_VARIANTS_DATA.variants[0].id);
  const baseFrame = UNIVERSAL_VARIANTS_DATA.baseFrame;
  const activeVariant = UNIVERSAL_VARIANTS_DATA.variants.find(v => v.id === selectedVariantId) || UNIVERSAL_VARIANTS_DATA.variants[0];

  return (
    <section id="universal-to-personalized" className="py-20 md:py-28 relative bg-[#F7F5EE] border-t border-[#CAD8C5] overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-[#CAD8C5]/25 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="PARAMETRIC ADAPTATION ENGINE"
          badgeIcon={Boxes}
          badgeVariant="olive"
          title="Universal Frame"
          highlight="Personalized Variant"
          description="Take one standard industrial base frame and automatically generate tailored variants customized to individual nasal bridges, facial widths, and progressive optical corridors."
        />

        {/* Morphing Interactive Canvas */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Base Universal Frame Anchor (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[#FAF8F3] border border-[#CAD8C5] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="sage">ORIGINAL BASE CAD</Badge>
                <span className="text-[11px] font-mono text-[#7E8F6A]">1.0 Universal</span>
              </div>

              <h4 className="text-xl font-bold text-[#1F2818] mb-2 font-display">
                {baseFrame.name}
              </h4>
              <p className="text-xs text-[#526049] leading-relaxed mb-6 font-mono">
                {baseFrame.description}
              </p>

              {/* Base Specs Table */}
              <div className="space-y-2.5 text-xs font-mono border-t border-[#CAD8C5]/70 pt-4">
                <div className="flex justify-between py-1 border-b border-[#CAD8C5]/40">
                  <span className="text-[#526049]">Standard Width:</span>
                  <span className="text-[#1F2818] font-semibold">{baseFrame.specs.frameWidth}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#CAD8C5]/40">
                  <span className="text-[#526049]">Standard Bridge:</span>
                  <span className="text-[#1F2818] font-semibold">{baseFrame.specs.bridgeWidth}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#CAD8C5]/40">
                  <span className="text-[#526049]">Pantoscopic Tilt:</span>
                  <span className="text-[#1F2818] font-semibold">{baseFrame.specs.pantoscopicAngle}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#CAD8C5]/40">
                  <span className="text-[#526049]">Standard Temples:</span>
                  <span className="text-[#1F2818] font-semibold">{baseFrame.specs.templeLength}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#526049]">Nose Pad Splay:</span>
                  <span className="text-[#1F2818] font-semibold">{baseFrame.specs.nosePadSplay}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-[#E9E4CF]/50 border border-[#CAD8C5] text-xs font-mono text-[#526049]">
              <span className="text-[#3E4D2A] font-semibold block mb-1">Standard Population Fit:</span>
              <span>{baseFrame.fitStatus}</span>
            </div>
          </motion.div>

          {/* Right: Interactive Tailored Variant Morpher (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#FAF8F3] border-2 border-[#CAD8C5] shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#607742]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#3E4D2A] font-bold">
                    SELECT PERSONALIZED MORPH TARGET
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#607742] bg-[#CAD8C5]/60 px-2.5 py-1 rounded-full">
                  Fit Score: {activeVariant.fitScore}/100
                </span>
              </div>

              {/* 3 Variant Selector Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
                {UNIVERSAL_VARIANTS_DATA.variants.map((variant) => {
                  const isSelected = selectedVariantId === variant.id;
                  return (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariantId(variant.id)}
                      className={`p-3 rounded-2xl text-left border transition-all text-xs font-mono ${
                        isSelected
                          ? 'bg-[#3E4D2A] text-[#FAF8F3] border-[#26311A] shadow-md'
                          : 'bg-white text-[#526049] border-[#CAD8C5] hover:border-[#7E8F6A]'
                      }`}
                    >
                      <span className="block font-bold text-xs mb-1">
                        {variant.name.split(':')[0]}
                      </span>
                      <span className={`text-[10px] block opacity-90 ${isSelected ? 'text-[#C3AF83]' : 'text-[#7E8F6A]'}`}>
                        {variant.tag}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Morph Details */}
              <div className="p-5 rounded-2xl bg-white border border-[#CAD8C5] mb-6">
                <h4 className="text-base font-bold text-[#1F2818] mb-2 font-display">
                  {activeVariant.name}
                </h4>
                <p className="text-xs text-[#526049] leading-relaxed mb-4">
                  {activeVariant.description}
                </p>

                {/* Millimeter Deltas Grid */}
                <div className="pt-4 border-t border-[#CAD8C5]/70 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeVariant.deltas.map((delta, dIdx) => (
                    <div key={dIdx} className="p-3 rounded-xl bg-[#F7F5EE] border border-[#CAD8C5]/60">
                      <span className="text-[10px] font-mono text-[#7E8F6A] block">{delta.label}</span>
                      <span className="text-xs font-mono font-bold text-[#3E4D2A] block my-0.5">{delta.change}</span>
                      <span className="text-[11px] font-mono text-[#1F2818] font-semibold">{delta.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ergonomic Indicators */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono mb-6">
                <div className="p-3 rounded-xl bg-[#E9E4CF]/50 border border-[#CAD8C5] flex items-center justify-between">
                  <span className="text-[#526049]">Bridge Pinch Risk:</span>
                  <span className="text-[#607742] font-bold">{activeVariant.bridgePressure}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#E9E4CF]/50 border border-[#CAD8C5] flex items-center justify-between">
                  <span className="text-[#526049]">Slippage Tolerance:</span>
                  <span className="text-[#3E4D2A] font-bold">{activeVariant.slipRisk}</span>
                </div>
              </div>
            </div>

            {/* Dark Action Button */}
            <button
              onClick={() => onAction && onAction(activeVariant.id)}
              className="btn-dark-olive w-full py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <span>INSPECT THIS PERSONALIZED VARIANT IN 3D</span>
              <ArrowRight className="w-4 h-4 text-[#C3AF83]" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
