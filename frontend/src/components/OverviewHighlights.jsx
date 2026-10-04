import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Boxes, Layers, ArrowRight, Sparkles, CheckCircle2, FileText, Check } from 'lucide-react';
import { Badge } from './common/Badge';
import { CORE_15_FEATURES } from '../data/projectData';

export function OverviewHighlights() {
  const highlights = [
    {
      id: 'pipeline',
      step: '01',
      title: 'Architecture & Pipeline',
      subtitle: 'Computer Vision & Biometrics Flow',
      desc: 'From optical camera capture to 468 dense landmark coordinates and geometric proportion estimation.',
      icon: Cpu,
      badge: 'Vision Engine',
      badgeVariant: 'olive',
      path: '/pipeline',
      buttonText: 'Explore Architecture',
      points: [
        '468 Dense landmark topology',
        'Interpupillary distance (PD) estimation',
        'Parametric nasal bridge alignment'
      ],
      borderColor: 'hover:border-[#7E8F6A]',
      glowColor: 'group-hover:shadow-[0_8px_30px_rgba(126,143,106,0.18)]'
    },
    {
      id: 'fitting',
      step: '02',
      title: '3D Fitting Studio',
      subtitle: 'Spatial Alignment & Reference',
      desc: 'Interactive 3D spatial viewport with real-time anatomical anchoring and calibrated millimeter tolerances.',
      icon: Boxes,
      badge: '3D Spatial',
      badgeVariant: 'sage',
      path: '/fitting',
      buttonText: 'Open 3D Studio',
      points: [
        'Anatomical head bust spatial model',
        'Calibrated mm guides for width & bridge',
        'Toggleable laser scan & landmark nodes'
      ],
      borderColor: 'hover:border-[#7E8F6A]',
      glowColor: 'group-hover:shadow-[0_8px_30px_rgba(126,143,106,0.18)]'
    },
    {
      id: 'comparison',
      step: '03',
      title: 'Frame Comparison & 3D Try-On',
      subtitle: 'Ergonomics & Live Try-On',
      desc: 'Compare candidate eyewear frames side-by-side with interactive 3D model try-on, bridge pressure, and slip risk.',
      icon: Layers,
      badge: '3D Try-On',
      badgeVariant: 'sand',
      path: '/comparison',
      buttonText: 'View Comparison Matrix',
      points: [
        '0–100 Objective geometric fit score',
        'Interactive 3D head bust try-on',
        'Bridge pressure & pinch risk detection'
      ],
      borderColor: 'hover:border-[#7E8F6A]',
      glowColor: 'group-hover:shadow-[0_8px_30px_rgba(126,143,106,0.18)]'
    },
    {
      id: 'report',
      step: '04',
      title: 'Fitting Report & Custom Variants',
      subtitle: '5 Pillars & Universal Morphs',
      desc: 'Unified report combining measurements, frame specs, fit score, comfort score, universal-to-personalized variants & lens intelligence.',
      icon: FileText,
      badge: 'Report & Variants',
      badgeVariant: 'olive',
      path: '/report',
      buttonText: 'View Fitting Report',
      points: [
        'Measurements, frame, fit score together',
        'Universal Frame → Personalized variants',
        'Advanced optical Lens Intelligence'
      ],
      borderColor: 'hover:border-[#7E8F6A]',
      glowColor: 'group-hover:shadow-[0_8px_30px_rgba(126,143,106,0.18)]'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#F7F5EE] border-t border-[#CAD8C5] overflow-hidden transition-colors duration-300">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#CAD8C5]/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Badge icon={Sparkles} variant="olive">
              CORE SYSTEM PILLARS
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F2818] leading-tight font-display"
          >
            Explore the{' '}
            <span className="text-gradient-olive inline-block">
              Core Modules
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm md:text-base text-[#526049] font-normal leading-relaxed"
          >
            Select any module to inspect the deep-dive technical architecture, interactive 3D fitting canvas, multi-frame ergonomic matrix, or consolidated fitting report.
          </motion.p>
        </div>

        {/* 4 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group rounded-3xl glass-panel border border-[#CAD8C5] bg-[#FAF8F3]/90 ${item.borderColor} ${item.glowColor} p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden`}
              >
                {/* Card Top Pill & Step */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <Badge icon={Icon} variant={item.badgeVariant}>
                      {item.badge}
                    </Badge>
                    <span className="font-mono text-xs font-bold text-[#7E8F6A]">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#1F2818] mb-1.5 font-display group-hover:text-[#607742] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#607742] mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#526049] leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-3 border-t border-[#CAD8C5]/70 mb-6">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs font-mono text-[#1F2818]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#607742] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link - Dark Olive Button */}
                <Link
                  to={item.path}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#3E4D2A] hover:bg-[#26311A] text-[#FAF8F3] font-semibold text-xs font-mono tracking-wide transition-all duration-300 shadow-md hover:shadow-lg group/btn"
                >
                  <span>{item.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* 15 Feature Grid Bar */}
        <div className="mt-16 rounded-3xl p-6 sm:p-8 bg-[#FAF8F3] border border-[#CAD8C5] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#CAD8C5]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#607742]" />
              <h4 className="text-sm font-bold font-mono text-[#1F2818] uppercase tracking-wider">
                Full 15-Pillar Feature Intelligence Matrix
              </h4>
            </div>
            <span className="text-xs font-mono text-[#7E8F6A]">
              15 End-to-End Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CORE_15_FEATURES.map((feat) => (
              <div
                key={feat.id}
                className="p-3 rounded-xl bg-[#F7F5EE] border border-[#CAD8C5]/60 flex items-start gap-2.5 transition-colors hover:border-[#7E8F6A]"
              >
                <div className="w-6 h-6 rounded-md bg-[#3E4D2A] text-[#FAF8F3] text-[11px] font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {feat.id}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-[#1F2818]">{feat.title}</span>
                    <span className="text-[9px] font-mono text-[#7E8F6A] uppercase px-1.5 py-0.5 rounded bg-[#CAD8C5]/40">{feat.category}</span>
                  </div>
                  <p className="text-[11px] text-[#526049] leading-snug mt-0.5">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}