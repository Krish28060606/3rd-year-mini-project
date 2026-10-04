import React from 'react';
import { Hero } from '../components/Hero';
import { OverviewHighlights } from '../components/OverviewHighlights';
import { PersonalizedVariantSection } from '../components/PersonalizedVariantSection';
import { FinalCTA } from '../components/FinalCTA';

export function Overview({ onOpenModal }) {
  return (
    <div className="flex-1">
      {/* 1. Hero Section with Interactive 3D Model */}
      <Hero onStartAnalysis={() => onOpenModal('analysis')} />

      {/* 2. Core 4 Pillars & 15-Feature Matrix */}
      <OverviewHighlights />

      {/* 3. Interactive Universal Frame → Personalized Variant Showcase */}
      <PersonalizedVariantSection onAction={() => onOpenModal('fitting3d')} />

      {/* 4. Streamlined Final Call To Action */}
      <FinalCTA onOpenModal={onOpenModal} />
    </div>
  );
}
