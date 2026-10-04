import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './common/SectionHeader';
import { SYSTEM_WORKFLOW } from '../data/projectData';
import { Cpu, ChevronRight, Sparkles } from 'lucide-react';

export function WorkflowSection() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative bg-[#F7F5EE] border-t border-[#CAD8C5] overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#CAD8C5]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="SYSTEM EXECUTION FLOW"
          badgeIcon={Cpu}
          badgeVariant="olive"
          title="How the System"
          highlight="Works."
          description="An end-to-end technical breakdown of the 8 distinct computational stages executed during every fitting session."
        />

        {/* 8-Step Interactive Flow */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SYSTEM_WORKFLOW.map((item, idx) => {
            const isSelected = selectedStep === idx;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                onClick={() => setSelectedStep(idx)}
                className={`cursor-pointer rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between relative group ${
                  isSelected
                    ? 'bg-[#FAF8F3] border-2 border-[#3E4D2A] shadow-md scale-[1.02]'
                    : 'bg-[#FAF8F3]/70 border border-[#CAD8C5] hover:border-[#7E8F6A]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold ${
                      isSelected ? 'bg-[#3E4D2A] text-[#FAF8F3]' : 'bg-[#CAD8C5]/40 text-[#526049]'
                    }`}>
                      STEP {item.step}
                    </span>
                    <span className="text-[10px] font-mono text-[#7E8F6A] uppercase">
                      Stage {idx + 1}/8
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#1F2818] mb-2 font-display">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#526049] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#CAD8C5]/70">
                  <span className="text-[10px] font-mono text-[#607742] font-semibold block">
                    {item.techDetail}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Summary Banner */}
        <div className="mt-8 p-6 rounded-3xl bg-[#FAF8F3] border border-[#CAD8C5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#526049] shadow-sm">
          <div className="flex items-center gap-2 text-[#1F2818]">
            <span className="w-2 h-2 rounded-full bg-[#607742] animate-pulse" />
            <span>Active Step Selected: {SYSTEM_WORKFLOW[selectedStep].name}</span>
          </div>
          <span className="text-[#3E4D2A] font-semibold">
            {SYSTEM_WORKFLOW[selectedStep].techDetail}
          </span>
        </div>
      </div>
    </section>
  );
}
