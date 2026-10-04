import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, LogIn, UserPlus, Glasses, CheckCircle2 } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export function FinalCTA({ onOpenModal }) {
  return (
    <section className="py-20 md:py-28 relative bg-[#F7F5EE] border-t border-[#CAD8C5] overflow-hidden transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#CAD8C5]/40 via-[#C3AF83]/30 to-[#CAD8C5]/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-[#FAF8F3] border-2 border-[#CAD8C5] shadow-xl overflow-hidden text-center flex flex-col items-center"
        >
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CAD8C5]/40 border border-[#7E8F6A]/40 text-[#3E4D2A] text-xs font-mono mb-6">
            <Glasses className="w-4 h-4 text-[#607742]" />
            <span>AI-POWERED EYEWEAR FITTING INTELLIGENCE</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2818] tracking-tight leading-tight max-w-2xl mb-6 font-display">
            Ready to Explore{' '}
            <span className="text-gradient-olive">
              Your Fit?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#526049] max-w-xl mb-10 leading-relaxed font-normal">
            Experience the next step beyond virtual try-on with facial geometry, 3D fitting and fit intelligence.
          </p>

          {/* 3 Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={() => onOpenModal('login')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#3E4D2A] hover:text-[#FAF8F3] text-[#3E4D2A] border-2 border-[#3E4D2A] font-semibold text-xs sm:text-sm font-mono tracking-wide transition-all duration-300 shadow-sm"
            >
              <LogIn className="w-4 h-4" />
              <span>LOGIN</span>
            </button>

            <button
              onClick={() => onOpenModal('signup')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#3E4D2A] hover:text-[#FAF8F3] text-[#3E4D2A] border-2 border-[#3E4D2A] font-semibold text-xs sm:text-sm font-mono tracking-wide transition-all duration-300 shadow-sm"
            >
              <UserPlus className="w-4 h-4" />
              <span>SIGN UP</span>
            </button>

            <button
              onClick={() => onOpenModal('analysis')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#3E4D2A] hover:bg-[#26311A] text-[#FAF8F3] font-bold text-xs sm:text-sm font-mono tracking-wide transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>START ANALYSIS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Bottom Trust Chips */}
          <div className="mt-10 pt-8 border-t border-[#CAD8C5] w-full flex flex-wrap items-center justify-center gap-6 text-xs text-[#526049] font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#607742]" />
              Computer Vision Driven
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#607742]" />
              3D Spatial Mesh Anchoring
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#607742]" />
              Academic Research Prototype
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
