import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Card } from './components/common/Card';
import { Badge } from './components/common/Badge';
import { Button } from './components/common/Button';
import { StatusIndicator } from './components/common/StatusIndicator';
import { measurementApi } from './services/measurementApi';
import { frameApi } from './services/frameApi';
import { useAnalysis, AnalysisProvider } from './context/AnalysisContext';
import { CheckCircle2, ShieldAlert, Cpu, Box, Database, Activity, Sparkles, Sliders, ChevronRight } from 'lucide-react';

function AppContent() {
  const [currentView, setCurrentView] = useState('landing');
  const [backendStatus, setBackendStatus] = useState({ online: false, message: 'Checking...' });
  const [catalogPreview, setCatalogPreview] = useState([]);
  const { measurements, selectedFrameId, setSelectedFrameId } = useAnalysis();

  useEffect(() => {
    // Phase 0 Communication Verification: Check Backend Health
    measurementApi.checkHealth()
      .then((res) => {
        setBackendStatus({
          online: res.success,
          message: `${res.message} (v${res.data?.version || '0.1.0'})`,
        });
      })
      .catch((err) => {
        setBackendStatus({
          online: false,
          message: `Backend offline or unreachable: ${err.message}`,
        });
      });

    // Fetch initial frame catalog for foundation preview
    frameApi.getAllFrames()
      .then((res) => {
        if (res.data) setCatalogPreview(res.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#090d16] text-slate-100 font-sans">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Phase 0 Architecture Status Banner */}
        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-950 border border-brand-800/50 text-brand-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-slate-200">System Architecture Foundation (Phase 0)</span>
                <Badge variant={backendStatus.online ? 'success' : 'warning'} size="sm">
                  {backendStatus.online ? 'API Linked' : 'Connecting API'}
                </Badge>
              </div>
              <p className="text-xs text-slate-400 font-mono">{backendStatus.message}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 self-end md:self-auto">
            <StatusIndicator status={backendStatus.online ? 'online' : 'offline'} />
          </div>
        </div>

        {/* Phase 0 Foundation Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Core Modules */}
          <Card className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-200 flex items-center gap-2 text-sm">
                <Activity className="w-4 h-4 text-brand-400" />
                Configured Backend Services
              </h3>
              <Badge variant="brand">Modular</Badge>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/80">
                <span>Computer Vision Service (MediaPipe)</span>
                <span className="font-mono text-emerald-400">Ready</span>
              </li>
              <li className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/80">
                <span>3D Fitting & Scale Engine</span>
                <span className="font-mono text-emerald-400">Ready</span>
              </li>
              <li className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/80">
                <span>Ergonomics & Comfort Calculator</span>
                <span className="font-mono text-emerald-400">Ready</span>
              </li>
              <li className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/80">
                <span>Centralized Eyewear Database</span>
                <span className="font-mono text-emerald-400">4 Items Loaded</span>
              </li>
            </ul>
          </Card>

          {/* Card 2: Centralized Eyewear Data */}
          <Card className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-200 flex items-center gap-2 text-sm">
                <Database className="w-4 h-4 text-cyan-400" />
                Eyewear Database Layer
              </h3>
              <Badge variant="neutral">{catalogPreview.length} Models</Badge>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {catalogPreview.map((f) => (
                <div
                  key={f.id}
                  onClick={() => setSelectedFrameId(f.id)}
                  className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                    selectedFrameId === f.id
                      ? 'border-brand-500/80 bg-brand-950/40 text-white'
                      : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between font-medium">
                    <span>{f.name}</span>
                    <span className="font-mono text-brand-300">{f.frameWidth}mm</span>
                  </div>
                  <div className="flex gap-2 text-[10px] text-slate-500 mt-1">
                    <span>Bridge: {f.bridgeWidth}mm</span>
                    <span>Mass: {f.weight}g</span>
                    <span>{f.material}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Card 3: Biometric Approximation Contract */}
          <Card className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-200 flex items-center gap-2 text-sm">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                Measurement Contract & Notice
              </h3>
              <Badge variant="warning">Estimated</Badge>
            </div>
            <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-900/40 text-xs text-amber-200/90 leading-relaxed space-y-2">
              <p className="font-medium">Webcam Measurement Notice:</p>
              <p className="text-[11px] text-slate-400">
                All measurements are designated as <strong>Estimated</strong> approximations derived from MediaPipe landmark geometry and heuristic calibrations. Not clinical or medical-grade.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase">Est. Face Width</div>
                <div className="text-slate-200 font-semibold">{measurements.faceWidth.valueMm} mm</div>
              </div>
              <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase">Est. Bridge Width</div>
                <div className="text-slate-200 font-semibold">{measurements.bridgeWidth.valueMm} mm</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Phase 0 Complete Banner */}
        <div className="p-6 rounded-2xl border border-brand-500/30 bg-gradient-to-r from-brand-950/40 via-slate-900 to-slate-950 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Phase 0 Foundation Ready
            </h2>
            <p className="text-xs text-slate-400 max-w-xl">
              Clean modular FastAPI architecture, structured Pydantic schemas, central eyewear repository, React + Vite + Tailwind + R3F stack, and API service communication verified.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="primary"
              size="md"
              icon={ChevronRight}
              onClick={() => alert("Phase 0 is complete. Waiting for your confirmation before starting Phase 1 (Landing Page).")}
            >
              Ready for Phase 1
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AnalysisProvider>
      <AppContent />
    </AnalysisProvider>
  );
}
