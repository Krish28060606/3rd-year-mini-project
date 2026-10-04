import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Boxes, Sparkles, Layers } from 'lucide-react';
import { ThreeDFittingCanvas } from '../components/3d/ThreeDFittingCanvas';
import { Badge } from '../components/common/Badge';

export function FittingStudioPage({ onExplore3D }) {
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
            <span className="text-[#3E4D2A] font-semibold">3D Fitting Studio</span>
          </div>
        </div>

        <div className="max-w-3xl">
          <Badge icon={Boxes} variant="sage" className="mb-3">
            SPATIAL ANCHORING & FIT VISUALIZER
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2818] tracking-tight mb-4 font-display">
            3D Spatial Fitting Studio
          </h1>
          <p className="text-sm sm:text-base text-[#526049] leading-relaxed">
            Interact with the calibrated spatial reference model. Toggle optical scan lines, landmark nodes, and inspect real-time dimensional clearances anchored to facial anatomy.
          </p>
        </div>
      </div>

      {/* Main Interactive 3D Canvas Viewport */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ThreeDFittingCanvas onExplore3D={onExplore3D} />
      </div>

      {/* Technical Feature Specs Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel rounded-2xl p-6 border border-[#CAD8C5] bg-[#FAF8F3] shadow-sm">
          <h4 className="text-sm font-bold font-mono text-[#3E4D2A] uppercase tracking-wider mb-2">
            Nasal Bridge Plane
          </h4>
          <p className="text-xs text-[#526049] leading-relaxed">
            Anchors the eyewear bridge directly against the 3D nasal crest to prevent high clamping pressure and slippage.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-6 border border-[#CAD8C5] bg-[#FAF8F3] shadow-sm">
          <h4 className="text-sm font-bold font-mono text-[#607742] uppercase tracking-wider mb-2">
            Interpupillary Ray
          </h4>
          <p className="text-xs text-[#526049] leading-relaxed">
            Validates optical pupil centration against the optical center of candidate lenses for optimal visual acuity.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-6 border border-[#CAD8C5] bg-[#FAF8F3] shadow-sm">
          <h4 className="text-sm font-bold font-mono text-[#7E8F6A] uppercase tracking-wider mb-2">
            Temporal Clearance
          </h4>
          <p className="text-xs text-[#526049] leading-relaxed">
            Measures lateral distance across zygomatic arches to eliminate painful temple bowing and side head pinch.
          </p>
        </div>
      </div>

      {/* Bottom Navigation between modules */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#CAD8C5] mt-16">
        <Link
          to="/pipeline"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#526049] hover:text-[#3E4D2A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Architecture & Pipeline</span>
        </Link>

        <Link
          to="/comparison"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3E4D2A] hover:bg-[#26311A] text-[#FAF8F3] font-bold text-xs sm:text-sm font-mono tracking-wide transition-all shadow-md hover:shadow-lg"
        >
          <span>Next: Frame Comparison Matrix</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}