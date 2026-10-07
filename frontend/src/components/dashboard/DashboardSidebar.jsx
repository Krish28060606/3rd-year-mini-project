import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  ScanFace,
  Sparkles,
  Glasses,
  Scan,
  Box,
  Heart,
  Settings,
  LogOut,
  X,
  ChevronLeft,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'try-on', label: 'Virtual Try-On', icon: ScanFace },
  { id: 'recommendations', label: 'AI Recommendations', icon: Sparkles },
  { id: 'frames', label: 'My Frames', icon: Glasses },
  { id: 'analysis', label: 'Face Analysis', icon: Scan },
  { id: 'studio', label: '3D Studio', icon: Box },
  { id: 'favorites', label: 'Favorites', icon: Heart },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function DashboardSidebar({
  activeTab = 'dashboard',
  setActiveTab,
  isOpen = true,
  onToggle,
  mobileOpen = false,
  setMobileOpen,
}) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [user, setUser] = useState({ name: 'User', email: 'user@optifit.ai' });

  // Read stored user on mount
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('optifit_user') || localStorage.getItem('optifit_user');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object') {
          setUser({
            name: parsed.name || parsed.username || 'User',
            email: parsed.email || 'user@optifit.ai',
          });
        }
      }
    } catch {
      setUser({ name: 'User', email: 'user@optifit.ai' });
    }
  }, []);

  const handleLogout = () => {
    try {
      sessionStorage.removeItem('optifit_user');
      sessionStorage.removeItem('optifit_token');
      localStorage.removeItem('optifit_user');
      localStorage.removeItem('optifit_token');
    } catch (err) {
      console.error('Logout error:', err);
    }
    navigate('/');
  };

  const handleSelectTab = (tabId) => {
    if (setActiveTab) setActiveTab(tabId);
    if (setMobileOpen) setMobileOpen(false);

    // Deep navigation for relevant tabs
    if (tabId === 'try-on' || tabId === 'studio') {
      navigate('/fitting');
    } else if (tabId === 'analysis') {
      navigate('/pipeline');
    } else if (tabId === 'recommendations' || tabId === 'frames') {
      const el = document.getElementById('recommended-frames');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'dashboard') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isItemActive = (item) => {
    if (!activeTab) return item.id === 'dashboard';
    return String(activeTab).toLowerCase() === item.id.toLowerCase();
  };

  // Reusable navigation and profile content
  const renderSidebarContent = (isMobile = false) => (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Top Section: Logo & Navigation */}
      <div className="flex flex-col gap-5">
        {/* Brand Header with Interactive Specs Button */}
        <div className="flex items-center justify-between px-2 pt-1">
          <div className="flex items-center gap-2.5">
            {/* The Specs button that toggles the sidebar */}
            <button
              type="button"
              onClick={onToggle}
              title={isOpen ? 'Collapse sidebar' : 'Open sidebar'}
              className="w-10 h-10 rounded-2xl bg-[#3E4D2A] text-[#FAF8F3] flex items-center justify-center shadow-md hover:shadow-[0_8px_20px_rgba(62,77,42,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
            >
              <Glasses className="w-5 h-5 text-[#FAF8F3] group-hover:rotate-12 transition-transform duration-300" />
            </button>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg text-[#1F2818] dark:text-[#FAF8F3] tracking-tight">
                OptiFit 3D
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider rounded-md bg-[#607742]/15 text-[#3E4D2A] dark:text-[#CAD8C5] border border-[#607742]/30 shadow-xs">
                AI
              </span>
            </div>
          </div>

          {/* Close/Toggle button */}
          {isMobile ? (
            <button
              type="button"
              onClick={() => setMobileOpen?.(false)}
              aria-label="Close sidebar"
              className="p-2 rounded-xl text-[#526049] hover:text-[#1F2818] dark:text-[#CAD8C5] dark:hover:text-white hover:bg-white dark:hover:bg-[#26311A] hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onToggle}
              title="Collapse sidebar"
              className="p-1.5 rounded-xl text-[#526049] hover:text-[#1F2818] dark:text-[#CAD8C5] dark:hover:text-white hover:bg-white dark:hover:bg-[#26311A] hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Navigation list with rich hover shadows */}
        <nav className="flex flex-col gap-1" aria-label="Sidebar navigation">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isItemActive(item);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectTab(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 text-left border cursor-pointer ${
                  active
                    ? 'bg-[#3E4D2A] text-[#FAF8F3] border-[#3E4D2A] shadow-[0_8px_20px_rgba(62,77,42,0.25)] font-semibold translate-x-1'
                    : 'text-[#526049] dark:text-[#CAD8C5] border-transparent hover:border-[#CAD8C5]/70 dark:hover:border-[#3E4D2A] hover:bg-white dark:hover:bg-[#26311A] hover:text-[#1F2818] dark:hover:text-[#FAF8F3] hover:shadow-[0_8px_22px_rgba(62,77,42,0.12)] hover:-translate-y-0.5 hover:translate-x-1'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                    active
                      ? 'bg-white/20 text-[#FAF8F3]'
                      : 'text-[#526049] dark:text-[#CAD8C5] group-hover:text-[#3E4D2A]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: Theme Toggle & User Profile Chip */}
      <div className="flex flex-col gap-3 pt-3 border-t border-[#CAD8C5]/70 dark:border-[#3E4D2A]/60">
        {/* Interactive Theme Toggle Switch */}
        <div className="flex items-center justify-between px-2 py-1.5 rounded-xl bg-white/60 dark:bg-[#26311A]/60 border border-[#CAD8C5]/60 dark:border-[#3E4D2A]/60 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono text-[#526049] dark:text-[#CAD8C5]">
            {isDark ? (
              <Moon className="w-3.5 h-3.5 text-[#C3AF83]" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-[#EAB308]" />
            )}
            <span className="font-medium">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
            className="w-11 h-6 rounded-full bg-[#CAD8C5] dark:bg-[#3E4D2A] p-0.5 transition-colors duration-300 relative cursor-pointer shadow-inner focus:outline-none"
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center ${
                isDark ? 'ml-auto text-[#1F2818]' : 'mr-auto text-[#607742]'
              }`}
            >
              {isDark ? (
                <Moon className="w-3 h-3 text-[#3E4D2A]" />
              ) : (
                <Sun className="w-3 h-3 text-[#EAB308]" />
              )}
            </motion.div>
          </button>
        </div>

        {/* User Profile Chip */}
        <div className="flex items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-2.5 min-w-0 p-1.5 rounded-xl hover:bg-white dark:hover:bg-[#26311A] hover:shadow-[0_8px_20px_rgba(62,77,42,0.12)] border border-transparent hover:border-[#CAD8C5]/60 transition-all duration-300 flex-1">
            <div className="relative flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-[#CAD8C5] text-[#3E4D2A] font-semibold text-xs flex items-center justify-center uppercase font-mono shadow-inner border border-white">
                {user.name.charAt(0) || 'U'}
              </div>
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#607742] border-2 border-[#FAF8F3] dark:border-[#1F2818] shadow-xs"
                title="Online"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-[#1F2818] dark:text-[#FAF8F3] truncate leading-tight">
                {user.name}
              </p>
              <p className="text-[11px] text-[#526049] dark:text-[#CAD8C5] truncate font-mono leading-tight mt-0.5">
                {user.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            title="Log Out"
            aria-label="Log Out"
            className="p-2 rounded-xl text-[#526049] dark:text-[#CAD8C5] hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 hover:shadow-md transition-all duration-200 flex-shrink-0 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar with smooth slide animation and floating shadow */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -280, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -280, opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            className="hidden lg:flex fixed left-0 top-0 w-[260px] h-screen bg-[#FAF8F3]/95 dark:bg-[#182014]/95 backdrop-blur-xl border-r border-[#CAD8C5] dark:border-[#3E4D2A]/50 flex-col justify-between p-4 z-40 shadow-[0_15px_45px_rgba(31,40,24,0.12)]"
          >
            {renderSidebarContent(false)}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen?.(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-in sidebar overlay with deep shadow */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-[275px] max-w-[85vw] h-full bg-[#FAF8F3] dark:bg-[#182014] border-r border-[#CAD8C5] dark:border-[#3E4D2A] flex flex-col justify-between p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] z-10"
              aria-label="Mobile navigation"
            >
              {renderSidebarContent(true)}
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
