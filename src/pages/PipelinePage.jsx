import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Cpu, Sparkles, Boxes } from 'lucide-react';
import { SolutionSection } from '../components/SolutionSection';
import { WorkflowSection } from '../components/WorkflowSection';
import { Badge } from '../components/common/Badge';

export function PipelinePage() {
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
            <span className="text-[#3E4D2A] font-semibold">Architecture & Pipeline</span>
          </div>
        </div>

        <div className="max-w-3xl">
          <Badge icon={Cpu} variant="olive" className="mb-3">
            TECHNICAL ARCHITECTURE & FLOW
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2818] tracking-tight mb-4 font-display">
            AI Pipeline & Computational Workflow
          </h1>
          <p className="text-sm sm:text-base text-[#526049] leading-relaxed">
            Explore how OPTIFIT 3D transforms standard optical camera feeds into 468 dense landmark vectors, computes facial proportion metrics, and drives parametric eyewear ergonomics.
          </p>
        </div>
      </div>

      {/* Embedded Deep-Dive Sections */}
      <SolutionSection />
      <WorkflowSection />

      {/* Bottom Navigation between modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#CAD8C5] mt-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#526049] hover:text-[#3E4D2A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Main Overview</span>
        </Link>

        <Link
          to="/fitting"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3E4D2A] hover:bg-[#26311A] text-[#FAF8F3] font-bold text-xs sm:text-sm font-mono tracking-wide transition-all shadow-md hover:shadow-lg"
        >
          <span>Next: 3D Fitting Studio</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}