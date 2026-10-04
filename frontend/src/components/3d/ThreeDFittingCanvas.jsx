import React, { useState, Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import headBustImg from '../../assets/head-bust-model.png';
import { useTheme } from '../../context/ThemeContext';
import { RotateCw, Sparkles, Layers, Sliders, Ruler, Eye, ArrowRight, Scan } from 'lucide-react';

function HeadModel({ color }) {
  const { scene } = useGLTF('/optifit_3d_face_glasses.glb');
  
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material = child.material.clone();
          child.material.color.set(color || '#ffffff');
        }
      });
    }
  }, [scene, color]);

  return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />;
}

export function ThreeDFittingCanvas({ onExplore3D }) {
  const [showScanLines, setShowScanLines] = useState(true);
  const [showLandmarkNodes, setShowLandmarkNodes] = useState(true);
  const [modelColor, setModelColor] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="w-full rounded-3xl glass-panel border border-[#CAD8C5] bg-[#FAF8F3] overflow-hidden relative shadow-lg flex flex-col transition-colors duration-300">
      <div className="p-4 border-b border-[#CAD8C5] flex flex-wrap items-center justify-between gap-3 bg-[#FAF8F3]/90 backdrop-blur-md z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#607742] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#1F2818] font-bold">
            3D SPATIAL FITTING ENGINE PREVIEW
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowScanLines(!showScanLines)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all font-medium ${
              showScanLines
                ? 'bg-[#3E4D2A] text-[#FAF8F3] shadow-sm'
                : 'bg-white text-[#526049] border border-[#CAD8C5] hover:border-[#7E8F6A]'
            }`}
          >
            {showScanLines ? 'Scan Grid: Active' : 'Scan Grid: Off'}
          </button>
          <button
            onClick={() => setShowLandmarkNodes(!showLandmarkNodes)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all font-medium ${
              showLandmarkNodes
                ? 'bg-[#3E4D2A] text-[#FAF8F3] shadow-sm'
                : 'bg-white text-[#526049] border border-[#CAD8C5] hover:border-[#7E8F6A]'
            }`}
          >
            {showLandmarkNodes ? 'Landmarks: Visible' : 'Landmarks: Hidden'}
          </button>
        </div>
      </div>

      <div className="min-h-[460px] sm:min-h-[520px] w-full relative flex items-center justify-center p-6 sm:p-10 bg-[#FAF8F3]/60 overflow-hidden">
        
        <div className="relative max-w-[420px] w-full flex items-center justify-center">
          
          <div className="w-full h-[460px] rounded-2xl overflow-hidden shadow-2xl bg-[#1F2818] border border-white/20">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full cursor-grab active:cursor-grabbing">
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <Suspense fallback={
                <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color="#607742" wireframe />
                </mesh>
              }>
                <HeadModel color={modelColor} />
                <Environment preset="city" />
                <OrbitControls 
                  enableZoom={false} 
                  enablePan={false}
                  minPolarAngle={Math.PI / 3} 
                  maxPolarAngle={Math.PI / 1.5}
                  minAzimuthAngle={-Math.PI / 4}
                  maxAzimuthAngle={Math.PI / 4}
                />
              </Suspense>
            </Canvas>
          </div>

          {showScanLines && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl opacity-40 mix-blend-screen">
              <div className="w-full h-28 bg-gradient-to-b from-transparent via-[#7E8F6A]/50 to-transparent animate-scan" />
            </div>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 glass-panel px-4 py-2 rounded-full border border-white/10 z-30 shadow-lg bg-[#FAF8F3]/90">
            <span className="text-[10px] font-mono font-bold text-[#3E4D2A] mr-2">TINT</span>
            <button onClick={() => setModelColor(null)} className="w-5 h-5 rounded-full bg-white border border-[#1F2818]/20 hover:scale-110 transition-transform shadow-sm" />
            <button onClick={() => setModelColor('#C3AF83')} className="w-5 h-5 rounded-full bg-[#C3AF83] hover:scale-110 transition-transform shadow-sm" />
            <button onClick={() => setModelColor('#607742')} className="w-5 h-5 rounded-full bg-[#607742] hover:scale-110 transition-transform shadow-sm" />
            <button onClick={() => setModelColor('#3b82f6')} className="w-5 h-5 rounded-full bg-blue-500 hover:scale-110 transition-transform shadow-sm" />
          </div>

          {showLandmarkNodes && (
            <>
              <div className="absolute top-[36%] left-[34%] w-3 h-3 rounded-full border border-[#607742] bg-[#607742]/50 animate-ping pointer-events-none" />
              <div className="absolute top-[36%] left-[34%] w-2 h-2 rounded-full bg-[#607742] pointer-events-none shadow-[0_0_8px_#607742]" />

              <div className="absolute top-[35%] left-[54%] w-3 h-3 rounded-full border border-[#607742] bg-[#607742]/50 animate-ping pointer-events-none" />
              <div className="absolute top-[35%] left-[54%] w-2 h-2 rounded-full bg-[#607742] pointer-events-none shadow-[0_0_8px_#607742]" />

              <div className="absolute top-[38%] left-[44%] w-2.5 h-2.5 rounded-full bg-[#3E4D2A] pointer-events-none shadow-[0_0_8px_#3E4D2A]" />
            </>
          )}
        </div>

        <div className="absolute top-6 left-6 z-10">
          <div className="bg-[#FAF8F3]/95 px-3 py-1.5 rounded-xl border border-[#CAD8C5] text-[11px] font-mono text-[#1F2818] shadow-sm">
            <span className="text-[#607742] font-semibold">FRAME WIDTH:</span> 138mm
          </div>
        </div>

        <div className="absolute top-6 right-6 z-10">
          <div className="bg-[#FAF8F3]/95 px-3 py-1.5 rounded-xl border border-[#CAD8C5] text-[11px] font-mono text-[#1F2818] shadow-sm">
            <span className="text-[#607742] font-semibold">BRIDGE:</span> 18mm
          </div>
        </div>

        <div className="absolute bottom-6 left-6 z-10">
          <div className="bg-[#FAF8F3]/95 px-3 py-1.5 rounded-xl border border-[#CAD8C5] text-[11px] font-mono text-[#1F2818] shadow-sm">
            <span className="text-[#607742] font-semibold">EYE ALIGNMENT:</span> 99%
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-10">
          <div className="bg-[#FAF8F3]/95 px-3 py-1.5 rounded-xl border border-[#CAD8C5] text-[11px] font-mono text-[#1F2818] shadow-sm">
            <span className="text-[#607742] font-semibold">TEMPLE:</span> 142mm
          </div>
        </div>

        <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden md:block z-10">
          <div className="bg-[#FAF8F3]/95 px-3 py-1.5 rounded-xl border border-[#CAD8C5] text-[11px] font-mono text-[#1F2818] shadow-sm">
            <span className="text-[#607742] font-semibold">LENS AREA:</span> 52 × 41mm
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 bg-[#E9E4CF]/40 border-t border-[#CAD8C5] flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-300">
        <div className="flex items-center gap-2 text-xs font-mono text-[#526049]">
          <Sparkles className="w-4 h-4 text-[#607742]" />
          <span>Calibrated against anatomical head bust geometry and landmark contours</span>
        </div>

        <button
          onClick={onExplore3D}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#3E4D2A] hover:bg-[#26311A] text-[#FAF8F3] font-bold text-xs font-mono tracking-wide transition-all shadow-md hover:shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>EXPLORE 3D FITTING</span>
        </button>
      </div>
    </div>
  );
}
