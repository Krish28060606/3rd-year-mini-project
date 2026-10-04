import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Scan, Boxes, ShieldCheck, ChevronDown, Play } from 'lucide-react';
import { Badge } from './common/Badge';
import { HeroVisual } from './3d/HeroVisual';
import { PROJECT_INFO } from '../data/projectData';

export function Hero({ onStartAnalysis }) {
  return (
    <section id="overview" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-tech-grid">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CAD8C5]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#C3AF83]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content (7 cols on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Eyebrow Label */}
            <Badge icon={Sparkles} variant="sage" className="mb-6">
              {PROJECT_INFO.eyebrow}
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F2818] leading-[1.12] mb-6 font-display">
              Beyond Virtual Try-On{' '}
              <span className="text-gradient-olive block mt-1">
                Understand Your Fit
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#526049] font-normal leading-relaxed max-w-2xl mb-8">
              {PROJECT_INFO.heroSupporting}
            </p>

            {/* Action Buttons (Dark color for buttons) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onStartAnalysis}
                className="btn-dark-olive inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm tracking-wide hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>START ANALYSIS</span>
                <ArrowRight className="w-4 h-4 text-[#C3AF83] group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/pipeline"
                className="btn-outline-olive inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-sm transition-all shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>EXPLORE THE PROJECT</span>
              </Link>
            </div>

            {/* Technical Trust Chips */}
            <div className="w-full pt-6 border-t border-[#D8D3C3] flex flex-wrap items-center gap-6 text-xs text-[#526049]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#CAD8C5]/60 border border-[#7E8F6A]/40 flex items-center justify-center text-[#3E4D2A]">
                  <Scan className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-[#1F2818]">Facial Geometry</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#C3AF83]/30 border border-[#C3AF83]/60 flex items-center justify-center text-[#3E4D2A]">
                  <Boxes className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-[#1F2818]">3D Fitting</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#E9E4CF] border border-[#D8D3C3] flex items-center justify-center text-[#3E4D2A]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-[#1F2818]">Fit Intelligence</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual (5 cols on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
