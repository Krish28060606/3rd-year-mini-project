import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { PipelinePage } from './pages/PipelinePage';
import { FittingStudioPage } from './pages/FittingStudioPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { FittingReportPage } from './pages/FittingReportPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { Navbar } from './components/Navbar';
import { PlaceholderModal } from './components/PlaceholderModal';
import { ThemeProvider } from './context/ThemeContext';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  const [modalType, setModalType] = useState(null);

  const handleOpenModal = (type) => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EE] text-[#1F2818] flex flex-col selection:bg-[#CAD8C5] selection:text-[#1F2818] transition-colors duration-300">
      <ScrollToTop />
      {/* Persistent Navigation Bar across all pages */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Routed Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Overview onOpenModal={handleOpenModal} />} />
          <Route path="/pipeline" element={<PipelinePage />} />
          <Route path="/fitting" element={<FittingStudioPage onExplore3D={() => handleOpenModal('fitting3d')} />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/report" element={<FittingReportPage onOpenModal={handleOpenModal} />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>

      {/* Global Interactive Modal */}
      <PlaceholderModal
        isOpen={!!modalType}
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

