import React from 'react';
import { Glasses, Activity, Compass, Layers, ShieldCheck, Box } from 'lucide-react';
import { Button } from '../common/Button';

export const Navbar = ({ currentView, onNavigate }) => {
  const navItems = [
    { id: 'landing', label: 'Home', icon: Compass },
    { id: 'tryon', label: '3D Try-On & Fit', icon: Box },
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'catalog', label: 'Eyewear Catalog', icon: Glasses },
    { id: 'compare', label: 'Comparison', icon: Layers },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div 
          onClick={() => onNavigate('landing')} 
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <Glasses className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-white">OptiFit</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-brand-900/80 text-brand-400 font-mono font-semibold">3D</span>
            </div>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Facial Mesh & Ergonomics</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-800/90 text-brand-400 border border-slate-700/80 shadow-inner'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="primary"
            onClick={() => onNavigate('tryon')}
            icon={Glasses}
          >
            Start Analysis
          </Button>
        </div>
      </div>
    </header>
  );
};
