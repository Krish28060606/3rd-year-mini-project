import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import { PrivacySection } from '../components/PrivacySection';
import { Badge } from '../components/common/Badge';

export function PrivacyPage() {
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
            <span className="text-[#3E4D2A] font-semibold">Privacy & Governance</span>
          </div>
        </div>

        <div className="max-w-3xl">
          <Badge icon={ShieldCheck} variant="olive" className="mb-3">
            RESPONSIBLE AI ARCHITECTURE
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2818] tracking-tight mb-4 font-display">
            Privacy, Ethics & Data Principles
          </h1>
          <p className="text-sm sm:text-base text-[#526049] leading-relaxed">
            OPTIFIT 3D is engineered as a client-side, privacy-first computer vision research prototype. Review our transparency standards and ephemeral computation guarantees.
          </p>
        </div>
      </div>

      {/* Main Privacy Section */}
      <PrivacySection />

      {/* Bottom Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex items-center justify-between border-t border-[#CAD8C5] mt-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#526049] hover:text-[#3E4D2A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Main Overview</span>
        </Link>
      </div>
    </div>
  );
}