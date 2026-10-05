import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Glasses } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { DashboardStats } from '../components/dashboard/DashboardStats';
import { DashboardHero } from '../components/dashboard/DashboardHero';
import { AIFaceInsights } from '../components/dashboard/AIFaceInsights';
import { RecommendedFrames } from '../components/dashboard/RecommendedFrames';
import { ThreeDStudioCard } from '../components/dashboard/ThreeDStudioCard';

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userName, setUserName] = useState('User');
  const { theme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('optifit_token');
    if (!token) {
      navigate('/');
      return;
    }
    try {
      const user = JSON.parse(localStorage.getItem('optifit_user') || '{}');
      setUserName(user.name || user.email?.split('@')[0] || 'User');
    } catch {
      setUserName('User');
    }
  }, [navigate]);

  const firstName = userName.split(' ')[0];

  // Dynamic greeting based on time of day
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EE] dark:bg-[#12170F] text-[#1F2818] dark:text-[#FAF8F3] flex relative overflow-x-hidden transition-colors duration-300">
      {/* Sidebar with interactive specs toggle, theme switch and hover shadows */}
      <DashboardSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Floating Specs Toggle Button when sidebar is collapsed (Desktop) */}
      <AnimatePresence>
        {!sidebarOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -25 }}
            transition={{ type: 'spring', damping: 20, stiffness: 280 }}
            className="hidden lg:block fixed top-6 left-6 z-40"
          >
            <button
              onClick={toggleSidebar}
              title="Click specs to open sidebar"
              className="w-12 h-12 rounded-2xl bg-[#3E4D2A] dark:bg-[#607742] text-[#FAF8F3] flex items-center justify-center shadow-[0_12px_32px_rgba(62,77,42,0.4)] hover:shadow-[0_16px_40px_rgba(62,77,42,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 border border-[#607742]/50 cursor-pointer group"
              aria-label="Open sidebar"
            >
              <Glasses className="w-6 h-6 text-[#FAF8F3] group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main
        className={`flex-1 min-h-screen transition-all duration-400 ease-in-out ${
          sidebarOpen ? 'lg:ml-[260px]' : 'lg:ml-0'
        }`}
      >
        {/* Mobile Header Bar */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-[#CAD8C5] dark:border-[#3E4D2A]/50 bg-[#FAF8F3]/90 dark:bg-[#182014]/90 backdrop-blur-md sticky top-0 z-30 shadow-sm">
          {/* Mobile specs button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="w-10 h-10 rounded-xl bg-[#3E4D2A] dark:bg-[#607742] text-[#FAF8F3] flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Open sidebar"
            title="Open sidebar"
          >
            <Glasses className="w-5 h-5 text-[#FAF8F3]" />
          </button>

          <span className="text-sm font-bold tracking-tight text-[#1F2818] dark:text-[#FAF8F3]">
            OptiFit 3D
          </span>

          <div className="w-9 h-9 rounded-full bg-[#3E4D2A] dark:bg-[#607742] flex items-center justify-center text-[#FAF8F3] text-xs font-bold shadow-sm">
            {firstName.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Dashboard Content Container */}
        <div className="p-4 sm:p-6 lg:p-8 max-w-[1240px] mx-auto space-y-6 sm:space-y-8">
          {/* Greeting Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F2818] dark:text-[#FAF8F3]">
              {greeting}, {firstName} 👋
            </h1>
            <p className="text-sm text-[#526049] dark:text-[#CAD8C5] mt-1.5 max-w-lg">
              Find the frame that fits your face, style and personality.
            </p>
          </motion.div>

          {/* Stats Row with hover elevation & shadows */}
          <DashboardStats />

          {/* Hero Campaign Card */}
          <DashboardHero />

          {/* Two Column: AI Face Insights + 3D Studio Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AIFaceInsights />
            <ThreeDStudioCard />
          </div>

          {/* Recommended Frames with full specs inspection drawer */}
          <div id="recommended-frames">
            <RecommendedFrames />
          </div>

          {/* Footer */}
          <div className="text-center py-8 text-xs font-mono text-[#7E8F6A] dark:text-[#CAD8C5]/60">
            OptiFit 3D • AI-Powered Custom Eyewear Ergonomics Engine • v1.0
          </div>
        </div>
      </main>
    </div>
  );
}
