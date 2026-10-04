import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './common/SectionHeader';
import { ThreeDFittingCanvas } from './3d/ThreeDFittingCanvas';
import { Boxes, Sparkles, Sliders } from 'lucide-react';

export function ThreeDPreview({ onExplore3D }) {
  return (
    <section id="3d-preview" className="py-20 md:py-28 relative bg-[#F8FAFC] dark:bg-[#07090E] border-t border-slate-200 dark:border-dark-border/60 overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="SPATIAL ALIGNMENT"
          badgeIcon={Boxes}
          badgeVariant="cyan"
          title="See the Difference in"
          highlight="3D."
          description="Directly observe how 3D eyewear models automatically anchor to your facial contours with calibrated millimeter guides."
        />

        {/* 3D Interactive Fitting Hub */}
        <div className="mt-16 max-w-5xl mx-auto">
          <ThreeDFittingCanvas onExplore3D={onExplore3D} />
        </div>
      </div>
    </section>
  );
}
