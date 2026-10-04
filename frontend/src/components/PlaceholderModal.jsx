import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, LogIn, UserPlus, ScanFace, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export function PlaceholderModal({ isOpen, onClose, modalType }) {
  if (!isOpen) return null;

  const modalConfig = {
    login: {
      title: "User Authentication — Project Phase",
      badge: "Account Gateway",
      icon: LogIn,
      desc: "User login and session management will be connected in the upcoming application release to save personalized fit profiles and historical comparisons.",
      actionText: "Acknowledge & Continue Overview",
      note: "Authentication is scheduled for Phase 2."
    },
    signup: {
      title: "Create User Profile — Project Phase",
      badge: "Registration Gateway",
      icon: UserPlus,
      desc: "New profile registration will allow saving custom facial measurement estimates and favorite frame styles.",
      actionText: "Acknowledge & Continue Overview",
      note: "Registration is scheduled for Phase 2."
    },
    analysis: {
      title: "Interactive Fit Analysis Engine",
      badge: "Analysis Gateway",
      icon: ScanFace,
      desc: "The live optical camera capture and 468-point MediaPipe landmark engine will activate in the next development phase.",
      actionText: "Return to Project Overview",
      note: "Camera analysis & MediaPipe pipeline will activate in Phase 2."
    },
    fitting3d: {
      title: "3D Spatial Fitting Engine",
      badge: "3D Viewport",
      icon: Sparkles,
      desc: "Full 6-DoF 3D spatial alignment with automated bridge anchoring and CAD model selection will be enabled in the application fitting module.",
      actionText: "Return to Overview",
      note: "WebGL / R3F frame fitting engine ready for Phase 2 integration."
    }
  };

  const current = modalConfig[modalType] || modalConfig.analysis;
  const IconComponent = current.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative w-full max-w-lg bg-[#FAF8F3] border-2 border-[#CAD8C5] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden transition-colors duration-300"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#CAD8C5]/40 rounded-full blur-2xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#526049] hover:text-[#1F2818] rounded-xl bg-[#E9E4CF]/50 hover:bg-[#CAD8C5]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#607742] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#3E4D2A] font-semibold">
              {current.badge}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#CAD8C5]/40 border border-[#7E8F6A]/40 flex items-center justify-center text-[#3E4D2A]">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1F2818] leading-snug">{current.title}</h3>
              <p className="text-xs text-[#526049] font-mono">{PROJECT_INFO.name} • Phase 1 Overview</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#E9E4CF]/30 border border-[#CAD8C5] text-sm text-[#526049] leading-relaxed mb-6">
            {current.desc}
          </div>

          <div className="p-3 rounded-xl bg-[#CAD8C5]/30 border border-[#7E8F6A]/30 text-xs text-[#3E4D2A] flex items-center gap-2 mb-6 font-mono">
            <Info className="w-4 h-4 text-[#607742] flex-shrink-0" />
            <span>{current.note}</span>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-xl bg-[#3E4D2A] hover:bg-[#26311A] text-[#FAF8F3] font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>{current.actionText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
