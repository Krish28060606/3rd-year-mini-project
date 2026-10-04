import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './common/SectionHeader';
import { PRIVACY_PRINCIPLES } from '../data/projectData';
import { ShieldCheck, Lock, Cpu, FileText, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Lock,
  Cpu,
  FileText,
  ShieldCheck
};

export function PrivacySection() {
  return (
    <section id="privacy" className="py-20 md:py-28 relative bg-[#F7F5EE] border-t border-[#CAD8C5] overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#CAD8C5]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="RESPONSIBLE AI & PRIVACY"
          badgeIcon={ShieldCheck}
          badgeVariant="olive"
          title="Designed With"
          highlight="Responsible Use in Mind."
          description="Built from the ground up around explicit user consent, client-side ephemeral computation, and transparent scientific estimation."
        />

        {/* 4 Privacy Principles */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRIVACY_PRINCIPLES.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel rounded-3xl p-6 border border-[#CAD8C5] bg-[#FAF8F3]/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#CAD8C5]/30 border border-[#7E8F6A]/30 flex items-center justify-center text-[#3E4D2A] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#1F2818] mb-2 font-display">{item.title}</h4>
                  <p className="text-xs text-[#526049] leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#CAD8C5]/70 flex items-center gap-1.5 text-[11px] font-mono text-[#607742]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#607742]" />
                  <span>Verified Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Responsible Note */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FAF8F3] border border-[#CAD8C5] text-center max-w-3xl mx-auto text-xs font-mono text-[#526049] shadow-sm">
          Raw camera image buffers are processed ephemerally on the client-side device and are discarded immediately after coordinate landmark extraction.
        </div>
      </div>
    </section>
  );
}
