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
  X
} from 'lucide-react';

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
  mobileOpen = false,
  setMobileOpen,
}) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: 'User', email: 'user@optifit.ai' });

  // Read stored user on mount and sync if changed
  useEffect(() => {
    try {
      const stored = localStorage.getItem('optifit_user');
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
      localStorage.removeItem('optifit_user');
      localStorage.removeItem('optifit_token');
    } catch (err) {
      console.error('Logout error:', err);
    }
    navigate('/');
  };

  const handleSelectTab = (tabId) => {
    if (setActiveTab) {
      setActiveTab(tabId);
    }
    if (setMobileOpen) {
      setMobileOpen(false);
    }
  };

  const isItemActive = (item) => {
    if (!activeTab) return item.id === 'dashboard';
    const current = String(activeTab).toLowerCase();
    const targetId = item.id.toLowerCase();
    const targetLabel = item.label.toLowerCase();
    return (
      current === targetId ||
      current === targetLabel ||
      current.replace(/[\s-_]/g, '') === targetId.replace(/[\s-_]/g, '') ||
      current.replace(/[\s-_]/g, '') === targetLabel.replace(/[\s-_]/g, '')
    );
  };

  // Reusable navigation and profile content
  const renderSidebarContent = (isMobile = false) => (
    <div className="flex flex-col justify-between h-full w-full">
      {/* Top Section: Logo & Navigation */}
      <div className="flex flex-col gap-6">
        {/* Brand Header */}
        <div className="flex items-center justify-between px-2 pt-1">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#3E4D2A] text-[#FAF8F3] flex items-center justify-center shadow-sm">
              <Glasses className="w-5 h-5 text-[#FAF8F3]" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg text-[#1F2818] tracking-tight">
                OptiFit 3D
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider rounded-md bg-[#607742]/15 text-[#3E4D2A] border border-[#607742]/30">
                AI
              </span>
            </div>
          </div>

          {/* Close button for mobile */}
          {isMobile && (
            <button
              type="button"
              onClick={() => setMobileOpen?.(false)}
              aria-label="Close sidebar"
              className="p-1.5 rounded-xl text-[#526049] hover:text-[#1F2818] hover:bg-[#E9E4CF]/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation list */}
        <nav className="flex flex-col gap-1" aria-label="Sidebar navigation">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isItemActive(item);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-left ${
                  active
                    ? 'bg-[#3E4D2A] text-[#FAF8F3] shadow-sm'
                    : 'text-[#526049] hover:bg-[#E9E4CF]/60 hover:text-[#1F2818]'
                }`}
              >
                <Icon
                  className={`w-4 h-4 flex-shrink-0 transition-colors ${
                    active ? 'text-[#FAF8F3]' : 'text-[#526049]'
                  }`}
                />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: User Profile Chip */}
      <div className="pt-3 border-t border-[#CAD8C5]/70 flex items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#CAD8C5] text-[#3E4D2A] font-semibold text-xs flex items-center justify-center uppercase font-mono shadow-inner">
              {user.name.charAt(0) || 'U'}
            </div>
            {/* Small green online dot */}
            <span
              className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#607742] border-2 border-[#FAF8F3]"
              title="Online"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-[#1F2818] truncate leading-tight">
              {user.name}
            </p>
            <p className="text-[11px] text-[#526049] truncate font-mono leading-tight mt-0.5">
              {user.email}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          title="Log Out"
          aria-label="Log Out"
          className="p-2 rounded-xl text-[#526049] hover:text-[#26311A] hover:bg-[#E9E4CF]/80 transition-colors flex-shrink-0"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (hidden on mobile, flex on lg+) */}
      <aside className="hidden lg:flex fixed left-0 top-0 w-[260px] h-screen bg-[#FAF8F3] border-r border-[#CAD8C5] flex-col justify-between p-4 z-30">
        {renderSidebarContent(false)}
      </aside>

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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-in sidebar overlay */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-[270px] max-w-[85vw] h-full bg-[#FAF8F3] border-r border-[#CAD8C5] flex flex-col justify-between p-4 shadow-2xl z-10"
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
