import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  ScanFace, 
  Boxes, 
  ShieldCheck, 
  Layers, 
  Sliders, 
  CheckCircle2, 
  Lock, 
  ChevronRight,
  Eye,
  Activity
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { HeroVisual } from '../components/3d/HeroVisual';
import { PROJECT_INFO } from '../data/projectData';

export function Overview({ onOpenModal }) {
  // If user scrolls to page, smooth look
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const corePillars = [
    {
      step: '01',
      title: 'Biometric Face Geometry',
      tagline: '468 Facial Landmarks',
      desc: 'Real-time optical mapping measures your face width, pupillary distance, and nasal bridge angle in milliseconds.',
      icon: ScanFace,
      metrics: ['Interpupillary PD', 'Zygomatic Arch', 'Nasal Crest Depth']
    },
    {
      step: '02',
      title: '3D Anatomical Anchoring',
      tagline: 'True-to-Scale Fit',
      desc: 'Frames automatically anchor to your 3D facial plane with calibrated millimeter tolerances, not loose 2D overlays.',
      icon: Boxes,
      metrics: ['Nasal Bridge Plane', 'Temple Clearance', 'Vertex Distance']
    },
    {
      step: '03',
      title: 'Fit & Comfort Intelligence',
      tagline: '0–100 Ergonomic Score',
      desc: 'Objective physics algorithms predict pressure hot-spots, slipping hazards, and temple pinching before you buy.',
      icon: ShieldCheck,
      metrics: ['Bridge Grip Factor', 'Pinch Detection', 'Weight Distribution']
    }
  ];

  return (
    <div className="flex-1 overflow-hidden bg-[#F7F5EE]">
      {/* ========================================================= */}
      {/* 1. HERO SECTION: Clean, Focused & Premium                 */}
      {/* ========================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid border-b border-[#CAD8C5]">
        {/* Soft atmospheric radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#CAD8C5]/30 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#C3AF83]/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E4CF] border border-[#CAD8C5] text-[#3E4D2A] text-xs font-mono mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#607742] animate-pulse" />
                <span className="font-bold tracking-wider uppercase">AI-POWERED EYEWEAR ERGONOMICS</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F2818] leading-[1.12] mb-6 font-display">
                Beyond Virtual Try-On.{' '}
                <span className="text-gradient-olive block mt-1">
                  Know Your Exact Fit.
                </span>
              </h1>

              {/* Concise Supporting Copy */}
              <p className="text-base sm:text-lg text-[#526049] font-normal leading-relaxed max-w-xl mb-8">
                OptiFit 3D transforms webcam video into precise 3D facial geometry. 
                We compute anatomical bridge clearances, temple pinch vectors, and personalized frame adaptations in real time.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <button
                  onClick={() => onOpenModal('signup')}
                  className="btn-dark-olive inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg"
                >
                  <span>GET STARTED FREE</span>
                  <ArrowRight className="w-4 h-4 text-[#C3AF83]" />
                </button>

                <button
                  onClick={() => onOpenModal('login')}
                  className="btn-outline-olive inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-sm transition-all cursor-pointer bg-white/70 shadow-sm"
                >
                  <Lock className="w-4 h-4" />
                  <span>SIGN IN TO PORTAL</span>
                </button>
              </div>

              {/* 3 Quick Benefit Metrics */}
              <div className="w-full pt-6 border-t border-[#D8D3C3] grid grid-cols-3 gap-4 text-left">
                <div>
                  <span className="text-2xl font-bold text-[#1F2818] font-display">468</span>
                  <p className="text-xs font-mono text-[#526049] mt-0.5">Biometric Nodes</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#1F2818] font-display">&lt; 1mm</span>
                  <p className="text-xs font-mono text-[#526049] mt-0.5">Anchor Tolerance</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#1F2818] font-display">100%</span>
                  <p className="text-xs font-mono text-[#526049] mt-0.5">Client-Side Privacy</p>
                </div>
              </div>
            </motion.div>

            {/* Right Visual (5 cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CORE PILLARS SECTION: Explain More With Less Text     */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 relative bg-[#FAF8F3] border-b border-[#CAD8C5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge icon={Sparkles} variant="olive" className="mb-4">
              HOW OPTIFIT 3D WORKS
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2818] tracking-tight font-display">
              Three Steps to <span className="text-gradient-olive">Perfect Ergonomics</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#526049] max-w-xl mx-auto leading-relaxed">
              Eliminate guessing. Our computational pipeline bridges raw computer vision with mechanical eyewear design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="rounded-3xl glass-panel bg-white/90 border border-[#CAD8C5] p-8 flex flex-col justify-between hover:border-[#7E8F6A] hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#E9E4CF] border border-[#CAD8C5] flex items-center justify-center text-[#3E4D2A] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#3E4D2A]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#7E8F6A] bg-[#CAD8C5]/30 px-3 py-1 rounded-full">
                        PHASE {pillar.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1F2818] mb-1 font-display group-hover:text-[#607742] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-[#607742] mb-3 font-semibold">
                      {pillar.tagline}
                    </p>
                    <p className="text-sm text-[#526049] leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Micro metric pills */}
                  <div className="pt-4 border-t border-[#CAD8C5]/50 flex flex-wrap gap-1.5">
                    {pillar.metrics.map((m, mIdx) => (
                      <span key={mIdx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#FAF8F3] border border-[#CAD8C5] text-[#1F2818]">
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FINAL CALL TO ACTION: Clean Portal Access              */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 relative bg-[#F7F5EE] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-10 sm:p-14 bg-[#FAF8F3] border-2 border-[#CAD8C5] shadow-xl flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E9E4CF] border border-[#CAD8C5] flex items-center justify-center text-[#3E4D2A] mb-5 shadow-sm">
              <Sparkles className="w-6 h-6 text-[#3E4D2A]" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2818] tracking-tight font-display mb-4">
              Enter Your Personal <span className="text-gradient-olive">Fitting Studio</span>
            </h2>

            <p className="text-sm sm:text-base text-[#526049] max-w-lg mb-8 leading-relaxed">
              Login to view real-time 3D models, compare custom tailored variants, and inspect your full biometric ergonomics report.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => onOpenModal('login')}
                className="w-full sm:w-auto btn-dark-olive px-8 py-3.5 rounded-2xl font-bold text-xs sm:text-sm font-mono tracking-wide transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                SIGN IN NOW
              </button>
              <button
                onClick={() => onOpenModal('signup')}
                className="w-full sm:w-auto btn-outline-olive px-8 py-3.5 rounded-2xl font-bold text-xs sm:text-sm font-mono tracking-wide transition-all cursor-pointer bg-white"
              >
                CREATE ACCOUNT
              </button>
            </div>

            <p className="text-[11px] font-mono text-[#7E8F6A] mt-6 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Session encrypted. Data clears automatically on browser close.</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
