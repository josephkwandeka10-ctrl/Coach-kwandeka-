import React from 'react';
import { ShieldCheck, ArrowRight, Bot, Flame, Trophy, Activity, CheckCircle2 } from 'lucide-react';
import { COACH_INFO } from '../data/coachingData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAIChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAIChat }) => {
  return (
    <section className="relative bg-[#0F0F0F] text-[#F5F5F5] overflow-hidden py-16 lg:py-24 border-b border-[#1A1A1A]">
      
      {/* Background Decorative Large Outlined Text */}
      <div className="absolute -bottom-10 -left-10 text-[200px] sm:text-[280px] font-display font-black text-outline pointer-events-none leading-none select-none z-0 opacity-40 hidden md:block">
        COACH
      </div>

      {/* Gold Glow Radial */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-[#D4AF37]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Artistic Badge */}
            <div className="inline-block px-3.5 py-1.5 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.25em] font-bold bg-[#D4AF37]/5">
              Executive Physical & Mindset Performance
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display leading-[0.88] text-white">
                Unlock the <br />
                <span className="italic font-light text-[#D4AF37]">Unseen</span> <br />
                Potential.
              </h1>
              <p className="font-body text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
                Specialized athletic conditioning and metabolic strategy for high-impact leaders and visionaries seeking to align biological drive with physical mastery. Directed by <strong className="text-white font-semibold">Coach Joseph Kwandeka</strong>.
              </p>
            </div>

            {/* Core highlight points */}
            <div className="grid sm:grid-cols-2 gap-3 text-xs uppercase tracking-wider font-body text-gray-300 pt-1">
              {[
                "Periodized Strength Architecture",
                "Metabolic & Macro Precision",
                "1-on-1 High-Performance Audits",
                "Mindset & Discipline Systemization"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#1A1A1A]/80 border border-gray-800 p-3">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] shrink-0"></span>
                  <span className="font-medium text-gray-300">{point}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#D4AF37] text-black px-8 py-4 font-body font-bold uppercase text-xs tracking-[0.2em] hover:bg-white transition-colors flex items-center gap-3"
              >
                <span>Book Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAIChat}
                className="flex items-center gap-3 px-6 py-4 border border-gray-700 bg-[#1A1A1A] text-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37] font-body text-xs uppercase tracking-[0.2em] font-bold transition-colors"
              >
                <Bot className="w-4 h-4 text-[#D4AF37]" />
                <span>Consult Coach AI</span>
              </button>
            </div>

            {/* Key Stats Bar */}
            <div className="pt-8 border-t border-gray-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {COACH_INFO.stats.map((stat, idx) => (
                <div key={idx} className="bg-[#1A1A1A] p-4 border border-gray-800">
                  <div className="text-3xl font-display font-bold text-[#D4AF37]">{stat.value}</div>
                  <div className="text-[10px] text-gray-400 font-body uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column Artistic Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Artistic Frame Outer Container */}
            <div className="relative w-full max-w-md bg-[#1A1A1A] border border-gray-800 p-4">
              <div className="flex justify-between items-start pb-3 border-b border-gray-800 text-xs font-body">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Phase 01 / Alignment</span>
                <span className="font-display text-2xl italic text-[#D4AF37]">01</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative my-4 border border-gray-800 overflow-hidden group">
                <img
                  src={COACH_INFO.heroImage}
                  alt={COACH_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover object-top filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/30 to-transparent opacity-90" />

                {/* Overlaid Coach Title */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#1A1A1A]/90 backdrop-blur-md border border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{COACH_INFO.name}</h3>
                      <p className="text-[10px] text-[#D4AF37] font-body uppercase tracking-widest">Master Strength & Performance Strategist</p>
                    </div>
                    <div className="w-8 h-8 border border-[#D4AF37]/50 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                      <Trophy className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#0F0F0F]/90 border border-gray-800 text-[10px] font-body uppercase tracking-widest font-bold text-gray-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Verified Master Coach</span>
                </div>
              </div>

              {/* Decorative Accent Strip */}
              <div className="pt-2 flex justify-between items-center text-[10px] font-body uppercase tracking-widest text-gray-500">
                <span>Methodology 2026</span>
                <span className="text-[#D4AF37]">Indestructible Mindset</span>
              </div>

              {/* Gold Geometric Overlay */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 border-r-2 border-b-2 border-[#D4AF37]/40 pointer-events-none" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
