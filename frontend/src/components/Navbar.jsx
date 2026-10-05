import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Glasses, Menu, X, Sparkles, LogIn, UserPlus, Sun, Moon, LayoutDashboard } from 'lucide-react';
import { NAV_LINKS, PROJECT_INFO } from '../data/projectData';
import { useTheme } from '../context/ThemeContext';

export function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel py-3.5 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Descriptor */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-[#E9E4CF] border border-[#CAD8C5] flex items-center justify-center text-[#3E4D2A] group-hover:scale-105 group-hover:border-[#7E8F6A] transition-all duration-300 shadow-[0_4px_12px_rgba(62,77,42,0.12)]">
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

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-[#D8D3C3]">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#3E4D2A] text-[#FAF8F3] font-bold shadow-sm'
                      : 'text-[#526049] hover:text-[#1F2818] hover:bg-[#E9E4CF]/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {localStorage.getItem('optifit_token') && (
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#FAF8F3] bg-[#3E4D2A] hover:bg-[#26311A] transition-all shadow-sm cursor-pointer"
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-[#C3AF83]" />
                <span>Dashboard</span>
              </Link>
            )}

            <button
              onClick={() => onOpenModal('login')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-[#3E4D2A] border border-[#3E4D2A]/70 hover:bg-[#3E4D2A] hover:text-[#FAF8F3] transition-all cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login</span>
            </button>

            <button
              onClick={() => onOpenModal('signup')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-[#3E4D2A] border border-[#3E4D2A]/70 hover:bg-[#3E4D2A] hover:text-[#FAF8F3] transition-all cursor-pointer"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Sign Up</span>
            </button>

            {/* Dark Primary Button as requested */}
            <Link
              to="/fitting"
              className="btn-dark-olive relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C3AF83]" />
              <span>Start Analysis</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#3E4D2A] glass-panel"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] glass-panel border-b border-[#D8D3C3] p-6 z-30 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#3E4D2A] text-[#FAF8F3] font-bold'
                        : 'text-[#526049] hover:text-[#1F2818] hover:bg-[#E9E4CF]/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-[#D8D3C3] flex flex-col gap-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenModal('login'); }}
                    className="py-2.5 rounded-xl border border-[#3E4D2A] text-[#3E4D2A] hover:bg-[#3E4D2A] hover:text-[#FAF8F3] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Login</span>
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenModal('signup'); }}
                    className="py-2.5 rounded-xl border border-[#3E4D2A] text-[#3E4D2A] hover:bg-[#3E4D2A] hover:text-[#FAF8F3] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Sign Up</span>
                  </button>
                </div>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenModal('analysis'); }}
                  className="btn-dark-olive w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#C3AF83]" />
                  <span>Start Fit Analysis</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
