import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { DashboardStats } from '../components/dashboard/DashboardStats';
import { DashboardHero } from '../components/dashboard/DashboardHero';
import { AIFaceInsights } from '../components/dashboard/AIFaceInsights';
import { RecommendedFrames } from '../components/dashboard/RecommendedFrames';
import { ThreeDStudioCard } from '../components/dashboard/ThreeDStudioCard';

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userName, setUserName] = useState('User');
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

  // Get greeting based on time of day
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="min-h-screen bg-[#F7F5EE] flex">
      {/* Sidebar */}
      <DashboardSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-[260px] min-h-screen">
        {/* Mobile Header Bar */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-[#CAD8C5] bg-[#FAF8F3]/90 backdrop-blur-md sticky top-0 z-30">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-xl bg-[#E9E4CF]/50 text-[#3E4D2A] cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-sm font-bold text-[#1F2818]">OptiFit 3D</span>
          <div className="w-8 h-8 rounded-full bg-[#3E4D2A] flex items-center justify-center text-[#FAF8F3] text-xs font-bold">
            {firstName.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 lg:p-8 max-w-[1200px] mx-auto space-y-6 sm:space-y-8">
          {/* Greeting Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1F2818]">
              {greeting}, {firstName} 👋
            </h1>
            <p className="text-sm text-[#526049] mt-1.5 max-w-lg">
              Find the frame that fits your face, style and personality.
            </p>
          </motion.div>

          {/* Stats Row */}
          <DashboardStats />

          {/* Hero Campaign Card */}
          <DashboardHero />

          {/* Two Column: AI Insights + 3D Studio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AIFaceInsights />
            <ThreeDStudioCard />
          </div>

          {/* Recommended Frames */}
          <RecommendedFrames />

          {/* Footer */}
          <div className="text-center py-8 text-xs font-mono text-[#7E8F6A]">
            OptiFit 3D • AI-Powered Custom Eyewear Ergonomics Engine • v1.0
          </div>
        </div>
      </main>
    </div>
  );
}
