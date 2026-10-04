import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './common/SectionHeader';
import { SOLUTION_PIPELINE } from '../data/projectData';
import { Sparkles, Camera, Cpu, Activity, Ruler, Boxes, Glasses, Award, ShieldCheck, ChevronRight } from 'lucide-react';

const iconMap = {
  Camera,
  Cpu,
  Activity,
  Ruler,
  Boxes,
  Glasses,
  Award,
  ShieldCheck,
  Sparkles
};

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 md:py-28 relative bg-[#F7F5EE] border-t border-[#CAD8C5] overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#CAD8C5]/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="THE OPTIFIT SOLUTION"
          badgeIcon={Sparkles}
          badgeVariant="olive"
          title="Introducing"
          highlight="OPTIFIT 3D."
          description="A complete integration of computer vision, facial geometry, and 3D CAD visualization engineered into a single intelligent fitting pipeline."
        />

        {/* 9-Step Conceptual Pipeline Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          {SOLUTION_PIPELINE.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="glass-panel rounded-3xl p-6 border border-[#CAD8C5] bg-[#FAF8F3]/90 hover:border-[#7E8F6A] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#CAD8C5]/30 border border-[#7E8F6A]/30 flex items-center justify-center text-[#3E4D2A] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#7E8F6A] group-hover:text-[#3E4D2A] transition-colors">
                      STAGE {item.step}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#1F2818] mb-1.5 tracking-wide font-display">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#526049] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#CAD8C5]/70 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#607742] font-medium">Step {idx + 1} of 9</span>
                  <span className="text-[#7E8F6A]">Pipeline Node</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
