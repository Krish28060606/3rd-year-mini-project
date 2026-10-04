import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './common/SectionHeader';
import { Badge } from './common/Badge';
import { COMPARISON_DEMO_FRAMES } from '../data/projectData';
import headBustImg from '../assets/head-bust-model.png';
import { Layers, ArrowRight, CheckCircle2, Sparkles, Glasses, Scan } from 'lucide-react';

export function ComparisonSection() {
  const [selectedFrameId, setSelectedFrameId] = useState(COMPARISON_DEMO_FRAMES[0].id);
  const currentFrame = COMPARISON_DEMO_FRAMES.find(f => f.id === selectedFrameId) || COMPARISON_DEMO_FRAMES[0];

  return (
    <section id="comparison" className="py-20 md:py-28 relative bg-[#F7F5EE] border-t border-[#CAD8C5] overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#CAD8C5]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="MULTI-FRAME MATRIX & 3D TRY-ON"
          badgeIcon={Layers}
          badgeVariant="olive"
          title="Compare Frames Beyond"
          highlight="Appearance"
          description="Evaluate and cross-compare physical frame metrics, bridge clearance, and comfort ratings across multiple candidate designs with real-time 3D model try-on."
        />

        {/* Feature 14: Interactive 3D Model Try-On Studio Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-3xl bg-[#FAF8F3] border-2 border-[#CAD8C5] shadow-xl p-6 sm:p-10 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
            {/* Left 3D Viewport */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center p-6 bg-[#E9E4CF]/30 rounded-2xl border border-[#CAD8C5] min-h-[360px]">
              <img
                src={headBustImg}
                alt="3D Head Bust Virtual Try-On"
                className="max-h-[340px] object-contain drop-shadow-[0_15px_30px_rgba(62,77,42,0.18)] rounded-xl"
              />

              {/* Dynamic Frame HUD Overlay Tag */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-[#FAF8F3]/95 px-3 py-1.5 rounded-xl border border-[#CAD8C5] text-xs font-mono shadow-sm">
                  <span className="text-[#607742] font-bold">3D TRY-ON ACTIVE:</span> {currentFrame.name}
                </div>
              </div>

              {/* Live Fit Score Pill */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-[#3E4D2A] text-[#FAF8F3] px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold shadow-sm">
                  Fit Score: {currentFrame.fitScore}/100
                </div>
              </div>

              {/* Bottom Clearance Metric */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono bg-[#FAF8F3]/90 backdrop-blur-md p-2.5 rounded-xl border border-[#CAD8C5]">
                <span className="text-[#526049]">Bridge Clearance: <strong className="text-[#1F2818]">{currentFrame.bridgeWidth}</strong></span>
                <span className="text-[#3E4D2A] font-semibold">{currentFrame.bridgePressure}</span>
              </div>
            </div>

            {/* Right Live Try-On Selector & Metrics */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="olive">LIVE CAD ANCHOR</Badge>
                  <span className="text-xs font-mono text-[#7E8F6A]">6-DoF Parametric Fit</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2818] font-display">
                  {currentFrame.name}
                </h3>
                <p className="text-xs font-mono text-[#607742] mt-1">
                  Style Geometry: {currentFrame.shape} • {currentFrame.faceCompatibility}
                </p>
              </div>

              {/* Quick Frame Switcher Buttons */}
              <div className="grid grid-cols-3 gap-2">
                {COMPARISON_DEMO_FRAMES.map((f, fIdx) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFrameId(f.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all border ${
                      selectedFrameId === f.id
                        ? 'bg-[#3E4D2A] text-[#FAF8F3] border-[#26311A] shadow-md'
                        : 'bg-white text-[#526049] border-[#CAD8C5] hover:border-[#7E8F6A]'
                    }`}
                  >
                    <span>Frame 0{fIdx + 1}</span>
                    <span className="block text-[10px] font-normal opacity-80">{f.fitScore}/100</span>
                  </button>
                ))}
              </div>

              {/* Live Technical Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono pt-2">
                <div className="p-2.5 rounded-xl bg-white border border-[#CAD8C5]">
                  <span className="text-[10px] text-[#7E8F6A] block">Frame Width</span>
                  <span className="font-bold text-[#1F2818]">{currentFrame.frameWidth}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#CAD8C5]">
                  <span className="text-[10px] text-[#7E8F6A] block">Bridge Width</span>
                  <span className="font-bold text-[#1F2818]">{currentFrame.bridgeWidth}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#CAD8C5]">
                  <span className="text-[10px] text-[#7E8F6A] block">Temple Length</span>
                  <span className="font-bold text-[#1F2818]">{currentFrame.templeLength}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#CAD8C5]">
                  <span className="text-[10px] text-[#7E8F6A] block">Slipping Risk</span>
                  <span className="font-bold text-[#3E4D2A]">{currentFrame.slippingRisk}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Frame Detailed Comparison Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPARISON_DEMO_FRAMES.map((frame, idx) => {
            const isSelected = selectedFrameId === frame.id;

            return (
              <motion.div
                key={frame.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setSelectedFrameId(frame.id)}
                className={`cursor-pointer rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between relative ${
                  isSelected
                    ? 'glass-panel border-2 border-[#3E4D2A] shadow-xl bg-[#FAF8F3] scale-[1.02]'
                    : 'glass-panel border border-[#CAD8C5] bg-[#FAF8F3]/80 hover:border-[#7E8F6A]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-[#7E8F6A] uppercase tracking-wider">
                      SAMPLE FRAME 0{idx + 1}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold font-mono text-[#1F2818]">{frame.fitScore}</span>
                      <span className="text-xs font-mono text-[#7E8F6A]">/100</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-[#1F2818] mb-1 font-display">{frame.name}</h4>
                  <p className="text-xs text-[#607742] font-mono mb-4">{frame.shape}</p>

                  <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-medium mb-6 ${frame.badgeColor}`}>
                    {frame.faceCompatibility}
                  </div>

                  {/* Attribute Specs Table */}
                  <div className="space-y-2 text-xs font-mono border-t border-[#CAD8C5]/70 pt-4">
                    <div className="flex justify-between py-1 border-b border-[#CAD8C5]/40">
                      <span className="text-[#526049]">Frame Width:</span>
                      <span className="text-[#1F2818] font-semibold">{frame.frameWidth}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#CAD8C5]/40">
                      <span className="text-[#526049]">Bridge Width:</span>
                      <span className="text-[#1F2818] font-semibold">{frame.bridgeWidth}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#CAD8C5]/40">
                      <span className="text-[#526049]">Lens Dim:</span>
                      <span className="text-[#1F2818] font-semibold">{frame.lensWidth} × {frame.lensHeight}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#CAD8C5]/40">
                      <span className="text-[#526049]">Temple Length:</span>
                      <span className="text-[#1F2818] font-semibold">{frame.templeLength}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#CAD8C5]/40">
                      <span className="text-[#526049]">Bridge Pressure:</span>
                      <span className="text-[#607742] font-semibold">{frame.bridgePressure}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#526049]">Slipping Risk:</span>
                      <span className="text-[#3E4D2A] font-semibold">{frame.slippingRisk}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#CAD8C5]/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#7E8F6A]">
                    {isSelected ? '✓ Currently in 3D Try-On' : 'Click to Try On in 3D'}
                  </span>
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#3E4D2A]' : 'text-[#7E8F6A]'}`}>
                    {isSelected ? 'ACTIVE' : 'SELECT'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
