import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Glasses, LogIn, UserPlus, Sparkles, LayoutDashboard } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check auth in sessionStorage
  const token = sessionStorage.getItem('optifit_token');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3.5 shadow-md bg-[#FAF8F3]/90 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl bg-[#E9E4CF] border border-[#CAD8C5] flex items-center justify-center text-[#3E4D2A] group-hover:scale-105 group-hover:border-[#7E8F6A] transition-all duration-300 shadow-sm">
            <Glasses className="w-5 h-5 text-[#3E4D2A]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-[#1F2818] text-lg font-display">
                {PROJECT_INFO.name}
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-[#CAD8C5] text-[#26311A] border border-[#7E8F6A]/40 rounded">
                AI
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#526049] hidden sm:block">
              {PROJECT_INFO.descriptor}
            </span>
          </div>
        </Link>

        {/* Clean Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {token ? (
            <Link
              to="/dashboard"
              className="btn-dark-olive inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#C3AF83]" />
              <span>Go to Dashboard</span>
            </Link>
          ) : (
            <>
              <button
                onClick={() => onOpenModal('login')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#3E4D2A] border border-[#3E4D2A]/60 bg-white/70 hover:bg-[#3E4D2A] hover:text-[#FAF8F3] transition-all cursor-pointer shadow-sm"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>

              <button
                onClick={() => onOpenModal('signup')}
                className="btn-dark-olive inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-bold text-xs tracking-wide hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm"
              >
                <UserPlus className="w-3.5 h-3.5 text-[#C3AF83]" />
                <span>Get Started</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
