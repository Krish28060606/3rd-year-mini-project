import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { PipelinePage } from './pages/PipelinePage';
import { FittingStudioPage } from './pages/FittingStudioPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { FittingReportPage } from './pages/FittingReportPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { DashboardPage } from './pages/DashboardPage';
import { Navbar } from './components/Navbar';
import { PlaceholderModal } from './components/PlaceholderModal';
import { AuthModal } from './components/AuthModal';
import { ThemeProvider } from './context/ThemeContext';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Protected Route Guard
function ProtectedRoute({ children, onOpenModal }) {
  const token = sessionStorage.getItem('optifit_token');
  if (!token) {
    // If not logged in, redirect to landing page and optionally prompt login
    return <Navigate to="/" replace />;
  }
  return children;
}

// Public Route Guard (Don't let logged in user go back to overview page)
function PublicOnlyRoute({ children }) {
  const token = sessionStorage.getItem('optifit_token');
  if (token) {
    // Already logged in in this session -> forward directly to dashboard
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}

function MainLayout() {
  const [modalType, setModalType] = useState(null);
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  const handleOpenModal = (type) => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EE] text-[#1F2818] flex flex-col selection:bg-[#CAD8C5] selection:text-[#1F2818] transition-colors duration-300">
      <ScrollToTop />
      {/* Persistent Navigation Bar across all public pages, hidden on dashboard which has its own sidebar */}
      {!isDashboard && <Navbar onOpenModal={handleOpenModal} />}

      {/* Routed Page Content */}
      <main className="flex-1">
        <Routes>
          {/* Once logged in, user cannot re-enter the overview page */}
          <Route 
            path="/" 
            element={
              <PublicOnlyRoute>
                <Overview onOpenModal={handleOpenModal} />
              </PublicOnlyRoute>
            } 
          />
          {/* Protected Dashboard */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute onOpenModal={handleOpenModal}>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          {/* Internal studio & comparison modules */}
          <Route path="/pipeline" element={<PipelinePage />} />
          <Route path="/fitting" element={<FittingStudioPage onExplore3D={() => handleOpenModal('fitting3d')} />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/report" element={<FittingReportPage onOpenModal={handleOpenModal} />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>

      {/* Interactive Auth Modal */}
      <AuthModal
        isOpen={modalType === 'login' || modalType === 'signup'}
        initialView={modalType === 'login' ? 'login' : 'signup'}
        onClose={handleCloseModal}
      />

      {/* Global Interactive Modal for other placeholders */}
      <PlaceholderModal
        isOpen={!!modalType && modalType !== 'login' && modalType !== 'signup'}
        modalType={modalType}
        onClose={handleCloseModal}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
