import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImg from '../../assets/luxury-hero.jpg';

export function DashboardHero({ onStartTryOn, onGetRecommendations }) {
  const navigate = useNavigate();

  const handleTryOn = () => {
    if (onStartTryOn) {
      onStartTryOn();
    } else {
      navigate('/fitting');
    }
  };

  const handleRecommendations = () => {
    if (onGetRecommendations) {
      onGetRecommendations();
    } else {
      const el = document.getElementById('recommended-frames');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-3xl overflow-hidden min-h-[360px] group shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-shadow duration-500"
    >
      {/* Background Hero Image */}
      <img
        src={heroImg}
        alt="Luxury Eyewear Campaign"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="absolute bottom-0 left-0 p-8 sm:p-10 text-white z-10">
        {/* Small Mono Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-mono tracking-wider mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#CAD8C5] animate-pulse" />
          <span>NEW COLLECTION 2026</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold max-w-lg leading-tight font-display drop-shadow-sm">
          Your perfect frame is closer than you think.
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-white/80 mt-3 max-w-md leading-relaxed">
          AI-powered facial analysis + 3D virtual try-on.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <button
            type="button"
            onClick={handleTryOn}
            className="bg-white text-[#1F2818] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#E9E4CF] hover:scale-105 active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
          >
            Start Virtual Try-On &rarr;
          </button>
          <button
            type="button"
            onClick={handleRecommendations}
            className="border border-white/40 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer backdrop-blur-sm shadow-sm"
          >
            Get AI Recommendations
          </button>
        </div>
      </div>
    </motion.div>
  );
}
