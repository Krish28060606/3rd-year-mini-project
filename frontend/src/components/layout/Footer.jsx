import React from 'react';
import { ShieldCheck, Cpu, Code2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10 mt-20 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-1 text-center md:text-left">
          <p className="font-semibold text-slate-300">OptiFit 3D Engine — B.Tech Capstone & Engineering Portfolio</p>
          <p className="text-slate-500">Non-medical estimated geometry calculation system using MediaPipe Face Mesh & Three.js.</p>
        </div>

        <div className="flex items-center gap-6 text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-brand-400" />
            <span>FastAPI + OpenCV</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>React Three Fiber</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Privacy-First</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
