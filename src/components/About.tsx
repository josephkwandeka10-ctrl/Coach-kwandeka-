import React from 'react';
import { Brain, Dumbbell, Utensils, Zap, Award, Target, Check, HeartPulse } from 'lucide-react';
import { COACH_INFO } from '../data/coachingData';

const pillarIcons = {
  Brain,
  Dumbbell,
  Utensils,
  Zap,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0F0F0F] text-[#F5F5F5] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3.5 py-1 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.25em] font-bold bg-[#D4AF37]/5">
            Methodology & Philosophy
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight uppercase">
            Meet <span className="italic font-light text-[#D4AF37]">Coach Kwandeka</span>
          </h2>
          <p className="text-gray-400 font-body text-base sm:text-lg leading-relaxed italic">
            "{COACH_INFO.bio}"
          </p>
        </div>

        {/* The 4 Pillars Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COACH_INFO.pillars.map((pillar, index) => {
            const IconComponent = pillarIcons[pillar.icon as keyof typeof pillarIcons] || HeartPulse;
            return (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-gray-800 p-8 hover:border-[#D4AF37] transition-all group relative"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 border border-[#D4AF37]/40 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="font-display italic text-2xl text-gray-700 group-hover:text-[#D4AF37] transition-colors">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-body text-xs text-gray-400 leading-relaxed uppercase tracking-wider">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Credentials & Why Coach Kwandeka Box */}
        <div className="mt-16 bg-[#1A1A1A] border border-gray-800 p-8 lg:p-12 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-body text-[#D4AF37] uppercase tracking-[0.25em] font-bold">The Strategic Advantage</span>
                <h3 className="text-3xl font-display font-bold text-white">Why Work With Coach Kwandeka?</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">
                  Fitness isn't about arbitrary exhaustion or restrictive extreme protocols. It's about designing an elite biological system that elevates your cognitive focus, sharpens physical stamina, and produces sustainable power.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "No generic templates — 100% custom programming",
                  "Periodized progressive strength architecture",
                  "Direct executive-level 1-on-1 accountability",
                  "Flexible macro nutrition with zero restriction",
                  "Biomechanical alignment & injury resilience",
                  "Mental fortitude systems to eliminate burnout"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 border border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs font-body uppercase tracking-wider text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0F0F0F] p-6 border border-gray-800 space-y-4">
              <h4 className="font-body font-bold text-[#D4AF37] text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Coach Specialization Audit</span>
              </h4>
              
              <ul className="space-y-3 text-xs font-body">
                <li className="flex justify-between items-center py-2.5 border-b border-gray-800">
                  <span className="text-gray-300">Strength & Conditioning</span>
                  <span className="text-[#D4AF37] font-bold uppercase tracking-wider">CSCS Certified</span>
                </li>
                <li className="flex justify-between items-center py-2.5 border-b border-gray-800">
                  <span className="text-gray-300">Precision Macro Nutrition</span>
                  <span className="text-[#D4AF37] font-bold uppercase tracking-wider">Level 2 Specialist</span>
                </li>
                <li className="flex justify-between items-center py-2.5 border-b border-gray-800">
                  <span className="text-gray-300">Functional Mobility & Rehab</span>
                  <span className="text-[#D4AF37] font-bold uppercase tracking-wider">FMS Practitioner</span>
                </li>
                <li className="flex justify-between items-center py-2.5">
                  <span className="text-gray-300">Executive Mindset Performance</span>
                  <span className="text-[#D4AF37] font-bold uppercase tracking-wider">12+ Yrs Master Coach</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
