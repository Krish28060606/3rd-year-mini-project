import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Layers, Sparkles, ShieldCheck } from 'lucide-react';
import { ComparisonSection } from '../components/ComparisonSection';
import { Badge } from '../components/common/Badge';

export function ComparisonPage() {
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
            <span className="text-[#3E4D2A] font-semibold">Frame Comparison</span>
          </div>
        </div>

        <div className="max-w-3xl">
          <Badge icon={Layers} variant="sand" className="mb-3">
            ERGONOMIC TOLERANCE MATRIX
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2818] tracking-tight mb-4 font-display">
            Frame Comparison & Intelligence
          </h1>
          <p className="text-sm sm:text-base text-[#526049] leading-relaxed">
            Go beyond simple visual preview. Cross-evaluate frame geometry, bridge pressure risk, and slippage tolerances across distinct candidate styles.
          </p>
        </div>
      </div>

      {/* Main Comparison Section */}
      <ComparisonSection />

      {/* Bottom Navigation between modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#CAD8C5] mt-16">
        <Link
          to="/fitting"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#526049] hover:text-[#3E4D2A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: 3D Fitting Studio</span>
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