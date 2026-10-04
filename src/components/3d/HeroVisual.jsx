import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import headBustImg from '../../assets/head-bust-model.png';
import { useTheme } from '../../context/ThemeContext';
import { Scan, Sparkles, ShieldCheck, Activity, Eye, Sliders } from 'lucide-react';

export function HeroVisual() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D tilt interaction based on mouse movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] flex items-center justify-center cursor-pointer select-none perspective-1000"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-80" />
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* 3D Interactive Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: isHovered ? -6 : [0, -8, 0],
        }}
        transition={{
          y: isHovered ? { duration: 0.2 } : { repeat: Infinity, duration: 5, ease: "easeInOut" }
        }}
        className="relative z-10 w-full max-w-[420px] flex items-center justify-center"
      >
        {/* The Exact Reference 3D Head Bust Image */}
        <div className="relative rounded-3xl overflow-hidden p-2 flex items-center justify-center">
          <img
            src={headBustImg}
            alt="OPTIFIT 3D Wireframe Head Bust with Fitted Smart Eyewear"
            className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-2xl transition-transform duration-300 group-hover:scale-105"
          />

          {/* Interactive Laser Scanning Overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl opacity-40">
            <div className="w-full h-24 bg-gradient-to-b from-transparent via-[#7E8F6A]/25 to-transparent animate-scan" />
          </div>

          {/* Optical Pupil Landmark Reticles */}
          <div className="absolute top-[36%] left-[34%] w-3 h-3 rounded-full border border-[#607742] bg-[#607742]/40 animate-ping pointer-events-none" />
          <div className="absolute top-[36%] left-[34%] w-2 h-2 rounded-full bg-[#607742] pointer-events-none shadow-[0_0_8px_#607742]" />

          <div className="absolute top-[35%] left-[54%] w-3 h-3 rounded-full border border-[#607742] bg-[#607742]/40 animate-ping pointer-events-none" />
          <div className="absolute top-[35%] left-[54%] w-2 h-2 rounded-full bg-[#607742] pointer-events-none shadow-[0_0_8px_#607742]" />

          {/* Nasal Bridge Anchor */}
          <div className="absolute top-[38%] left-[44%] w-2 h-2 rounded-full bg-[#C3AF83] pointer-events-none shadow-[0_0_8px_#C3AF83]" />
        </div>

        {/* Spatial HUD Pin 1: FIT INTELLIGENCE (Top Left) */}
        <motion.div 
          style={{ transform: "translateZ(45px)" }}
          className="absolute -top-4 left-0 sm:-left-6 z-20"
        >
          <div className="glass-panel rounded-2xl p-3.5 border border-[#CAD8C5] shadow-md backdrop-blur-xl animate-float-slow">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#607742] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#3E4D2A] font-bold">
                FIT INTELLIGENCE
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold font-mono text-[#1F2818]">94</span>
              <span className="text-[10px] text-[#7E8F6A] font-mono">/100</span>
              <span className="text-[10px] text-[#607742] font-semibold font-mono ml-1">Optimal</span>
            </div>
            <div className="text-[10px] text-[#526049] font-mono mt-1 pt-1 border-t border-[#D8D3C3] flex justify-between gap-3">
              <span>Bridge: 18mm</span>
              <span className="text-[#3E4D2A] font-semibold">Zero Pinch</span>
            </div>
          </div>
        </motion.div>

        {/* Spatial HUD Pin 2: 3D FITTING (Top Right) */}
        <motion.div 
          style={{ transform: "translateZ(55px)" }}
          className="absolute top-6 -right-2 sm:-right-8 z-20"
        >
          <div className="glass-panel rounded-2xl p-3.5 border border-[#CAD8C5] shadow-md backdrop-blur-xl">
            <div className="flex items-center gap-1.5 mb-0.5 text-[#3E4D2A]">
              <Sparkles className="w-3.5 h-3.5 text-[#C3AF83]" />
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                3D FITTING
              </span>
            </div>
            <p className="text-xs font-semibold text-[#1F2818] font-display">
              Auto-Anchored CAD
            </p>
            <div className="text-[10px] font-mono text-[#526049] mt-1 flex items-center gap-2">
              <span>Prism Display</span>
              <span className="text-[#607742] font-semibold">Aligned</span>
            </div>
          </div>
        </motion.div>

        {/* Spatial HUD Pin 3: FACIAL GEOMETRY (Bottom Left) */}
        <motion.div 
          style={{ transform: "translateZ(40px)" }}
          className="absolute -bottom-4 left-2 sm:-left-4 z-20"
        >
          <div className="glass-panel rounded-2xl p-3.5 border border-[#CAD8C5] shadow-md backdrop-blur-xl">
            <div className="flex items-center gap-1.5 mb-0.5 text-[#3E4D2A]">
              <Scan className="w-3.5 h-3.5 text-[#7E8F6A]" />
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                FACIAL GEOMETRY
              </span>
            </div>
            <p className="text-xs font-semibold text-[#1F2818] font-display">
              468 Dense Landmarks
            </p>
            <div className="text-[10px] font-mono text-[#526049] mt-1 flex items-center gap-3">
              <span>PD: 64.2mm</span>
              <span className="text-[#607742] font-semibold">Tilt: 8.5°</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Interactive Micro-hint */}
      <div className="absolute bottom-2 right-4 hidden sm:block z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-[#D8D3C3] text-[#526049] text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-[#C3AF83]" />
          <span>Interactive 3D: Move mouse to tilt perspective</span>
        </div>
      </div>
    </div>
  );
}
