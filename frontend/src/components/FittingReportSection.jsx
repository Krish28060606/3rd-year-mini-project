import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Printer, 
  ArrowRight, 
  Sliders, 
  Eye, 
  Ruler, 
  Glasses, 
  Activity, 
  Award,
  Download
} from 'lucide-react';
import { SectionHeader } from './common/SectionHeader';
import { Badge } from './common/Badge';
import { SAMPLE_FITTING_REPORT } from '../data/projectData';

const iconMap = {
  Eye,
  Ruler,
  Glasses,
  Activity,
  Sliders
};

export function FittingReportSection({ onAction }) {
  const [activeTab, setActiveTab] = useState('full');
  const [isExported, setIsExported] = useState(false);
  const report = SAMPLE_FITTING_REPORT;

  const handleExport = () => {
    setIsExported(true);
    setTimeout(() => setIsExported(false), 2800);
    if (onAction) onAction();
  };

  return (
    <section id="fitting-report" className="py-20 md:py-28 relative bg-[#F7F5EE] border-t border-[#CAD8C5] overflow-hidden transition-colors duration-300">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-[#CAD8C5]/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="CONSOLIDATED BIOMETRIC INTELLIGENCE"
          badgeIcon={FileText}
          badgeVariant="olive"
          title="Comprehensive"
          highlight="Fitting Report"
          description="Synthesizes client facial measurements, frame engineering specs, 0–100 geometric fit score, comfort indicators, and actionable recommendations into a single unified report."
        />

        {/* Master Report Canvas Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl bg-[#FAF8F3] border-2 border-[#CAD8C5] p-6 sm:p-10 shadow-xl relative overflow-hidden"
        >
          {/* Top Report Header / Status Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#CAD8C5] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge icon={Award} variant="olive">
                  VERIFIED GEOMETRIC EVALUATION
                </Badge>
                <span className="text-xs font-mono text-[#7E8F6A]">
                  DOC ID: {report.reportId}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2818] font-display">
                Anatomical Fit Dossier — {report.clientName}
              </h3>
              <p className="text-xs font-mono text-[#526049] mt-1">
                Evaluated Face Geometry: <span className="text-[#3E4D2A] font-semibold">{report.faceShape}</span> • Timestamp: {report.timestamp}
              </p>
            </div>

            {/* Dark Action Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleExport}
                className="btn-dark-olive inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold tracking-wide transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                {isExported ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#CAD8C5]" />
                    <span>REPORT GENERATED</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#C3AF83]" />
                    <span>EXPORT FITTING REPORT</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 5-Pillar Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            
            {/* Column 1: Measurements & Frame Details (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* 1. Facial Measurements Pillar */}
              <div className="rounded-2xl p-6 bg-white/80 border border-[#CAD8C5] shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#CAD8C5]/50 flex items-center justify-center text-[#3E4D2A]">
                      <Ruler className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold font-mono text-[#1F2818] uppercase tracking-wider">
                      1. Facial Geometry Measurements
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[#607742] font-semibold">5 Key Ratios</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {report.measurements.map((m) => {
                    const Icon = iconMap[m.icon] || Ruler;
                    return (
                      <div key={m.label} className="p-3 rounded-xl bg-[#F7F5EE] border border-[#CAD8C5]/60 flex items-start gap-3">
                        <Icon className="w-4 h-4 text-[#607742] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-mono text-[#7E8F6A] block">{m.label}</span>
                          <span className="text-sm font-bold font-mono text-[#1F2818]">{m.value}</span>
                          <span className="text-[10px] font-mono text-[#3E4D2A] block mt-0.5 font-medium">{m.status}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. Frame Details Pillar */}
              <div className="rounded-2xl p-6 bg-white/80 border border-[#CAD8C5] shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#CAD8C5]/50 flex items-center justify-center text-[#3E4D2A]">
                      <Glasses className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold font-mono text-[#1F2818] uppercase tracking-wider">
                      2. Evaluated Frame Specifications
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[#3E4D2A] font-semibold">Titanium CAD</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[#F7F5EE] border border-[#CAD8C5]/60">
                    <span className="text-[10px] text-[#7E8F6A] block">Model</span>
                    <span className="text-[#1F2818] font-bold">{report.frameDetails.name}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F7F5EE] border border-[#CAD8C5]/60">
                    <span className="text-[10px] text-[#7E8F6A] block">Dimensions</span>
                    <span className="text-[#1F2818] font-bold">{report.frameDetails.dimensions}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F7F5EE] border border-[#CAD8C5]/60">
                    <span className="text-[10px] text-[#7E8F6A] block">Total Weight</span>
                    <span className="text-[#607742] font-bold">{report.frameDetails.weight}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F7F5EE] border border-[#CAD8C5]/60 sm:col-span-2">
                    <span className="text-[10px] text-[#7E8F6A] block">Frame Composition</span>
                    <span className="text-[#1F2818] font-semibold">{report.frameDetails.shape}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F7F5EE] border border-[#CAD8C5]/60">
                    <span className="text-[10px] text-[#7E8F6A] block">Color Finish</span>
                    <span className="text-[#3E4D2A] font-semibold">{report.frameDetails.colorway}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Column 2: Fit Score, Comfort & Recommendations (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* 3. Overall Fit Score & Sub-Vectors */}
              <div className="rounded-2xl p-6 bg-white/80 border border-[#CAD8C5] shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold font-mono text-[#1F2818] uppercase tracking-wider">
                    3. Geometric Fit Score
                  </h4>
                  <span className="text-xs font-mono text-[#607742] font-semibold">{report.fitScore.rating}</span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-extrabold font-mono text-[#1F2818]">{report.fitScore.overall}</span>
                  <span className="text-sm font-mono text-[#7E8F6A]">/ 100</span>
                  <span className="ml-auto px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#CAD8C5]/60 text-[#26311A]">
                    OPTIMAL MATCH
                  </span>
                </div>

                {/* Sub-breakdowns */}
                <div className="space-y-2.5 pt-3 border-t border-[#CAD8C5]/70">
                  {report.fitScore.breakdown.map((b) => (
                    <div key={b.category}>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-[#526049]">{b.category}</span>
                        <span className="text-[#1F2818] font-bold">{b.score}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#E9E4CF]">
                        <div 
                          className="h-1.5 rounded-full bg-[#3E4D2A]"
                          style={{ width: `${b.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Comfort Estimation Indicators */}
              <div className="rounded-2xl p-6 bg-white/80 border border-[#CAD8C5] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-4 h-4 text-[#607742]" />
                  <h4 className="text-sm font-bold font-mono text-[#1F2818] uppercase tracking-wider">
                    4. Comfort & Pressure Estimation
                  </h4>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-[#CAD8C5]/50">
                    <span className="text-[#526049]">Bridge Clamping Pressure:</span>
                    <span className="text-[#607742] font-semibold">{report.comfortEstimation.bridgePressure}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#CAD8C5]/50">
                    <span className="text-[#526049]">Slipping / Drop Risk:</span>
                    <span className="text-[#3E4D2A] font-semibold">{report.comfortEstimation.slippingRisk}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#CAD8C5]/50">
                    <span className="text-[#526049]">Temporal Ear Stem Bite:</span>
                    <span className="text-[#607742] font-semibold">{report.comfortEstimation.earStemTension}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#526049]">Load Balance:</span>
                    <span className="text-[#1F2818] font-semibold">{report.comfortEstimation.weightDistribution}</span>
                  </div>
                </div>
              </div>

              {/* 5. Personalized Recommendations */}
              <div className="rounded-2xl p-6 bg-[#E9E4CF]/50 border border-[#CAD8C5] shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#607742]" />
                  <h4 className="text-sm font-bold font-mono text-[#1F2818] uppercase tracking-wider">
                    5. Personalized Recommendations
                  </h4>
                </div>
                <div className="space-y-2 text-xs font-mono text-[#1F2818]">
                  {report.recommendations.map((rec, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#607742] flex-shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Footer Note */}
          <div className="mt-8 pt-6 border-t border-[#CAD8C5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7E8F6A]">
            <span>OPTIFIT 3D Biometric Engine • Approximate Geometric Analysis</span>
            <span>All 5 Pillars Generated Simultaneously</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
