import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, FileText, Sparkles, Boxes, Eye } from 'lucide-react';
import { FittingReportSection } from '../components/FittingReportSection';
import { PersonalizedVariantSection } from '../components/PersonalizedVariantSection';
import { LensIntelligenceSection } from '../components/LensIntelligenceSection';
import { Badge } from '../components/common/Badge';

export function FittingReportPage({ onOpenModal }) {
  return (
    <div className="pt-24 pb-20 bg-[#F7F5EE] transition-colors duration-300 min-h-screen">
      {/* Page Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#3E4D2A] hover:text-[#FAF8F3] text-[#3E4D2A] border border-[#CAD8C5] hover:border-[#3E4D2A] text-xs font-mono transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Overview</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-[#526049]">
            <Link to="/" className="hover:text-[#3E4D2A]">Overview</Link>
            <span>/</span>
            <span className="text-[#3E4D2A] font-semibold">Fitting Report & Intelligence</span>
          </div>
        </div>

        <div className="max-w-3xl">
          <Badge icon={FileText} variant="olive" className="mb-3">
            CONSOLIDATED BIOMETRIC DOSSIER
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2818] tracking-tight mb-4 font-display">
            Fitting Report & Customization
          </h1>
          <p className="text-sm sm:text-base text-[#526049] leading-relaxed">
            Inspect all five dimensions of your ergonomic evaluation together: facial measurements, frame details, 0–100 fit score, comfort estimation, and personalized variant adaptations.
          </p>
        </div>
      </div>

      {/* Feature 11: Consolidated Fitting Report */}
      <FittingReportSection onAction={() => onOpenModal && onOpenModal('analysis')} />

      {/* Features 12 & 13: Universal Frame to Personalized Variant Engine */}
      <PersonalizedVariantSection onAction={() => onOpenModal && onOpenModal('fitting3d')} />

      {/* Feature 15: Lens Intelligence */}
      <LensIntelligenceSection onAction={() => onOpenModal && onOpenModal('analysis')} />

      {/* Bottom Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#CAD8C5] mt-16">
        <Link
          to="/comparison"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#526049] hover:text-[#3E4D2A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Frame Comparison & 3D Try-On</span>
        </Link>

        <Link
          to="/privacy"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3E4D2A] hover:bg-[#26311A] text-[#FAF8F3] font-bold text-xs sm:text-sm font-mono tracking-wide transition-all shadow-md hover:shadow-lg"
        >
          <span>Next: Privacy & Governance</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
