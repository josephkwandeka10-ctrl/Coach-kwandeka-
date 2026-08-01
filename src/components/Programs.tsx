import React, { useState } from 'react';
import { Clock, CheckCircle, ArrowRight, Sparkles, Filter, ChevronRight, Layers } from 'lucide-react';
import { PROGRAMS } from '../data/coachingData';
import { Program } from '../types';

interface ProgramsProps {
  onSelectProgram: (programId: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', '1-on-1 Hybrid', 'In-Person Studio', 'Executive', 'Online Blueprint'];

  const filteredPrograms = selectedCategory === 'All'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.format === selectedCategory);

  return (
    <section id="programs" className="py-24 bg-[#0F0F0F] text-[#F5F5F5] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="inline-block px-3.5 py-1 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.25em] font-bold bg-[#D4AF37]/5">
              Coaching Architecture
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight uppercase">
              Transformative <span className="italic font-light text-[#D4AF37]">Programs</span>
            </h2>
            <p className="text-gray-400 font-body text-sm sm:text-base max-w-xl">
              Choose the performance track calibrated specifically to your physical goals, schedule demands, and accountability standard.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#1A1A1A] p-2 border border-gray-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-body text-xs uppercase tracking-wider font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-black'
                    : 'text-gray-400 hover:text-white hover:bg-[#222222]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className={`relative bg-[#1A1A1A] border p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 ${
                program.popular
                  ? 'border-[#D4AF37] shadow-xl shadow-[#D4AF37]/5'
                  : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Popular Badge */}
              {program.badge && (
                <div className="absolute -top-3 right-8 px-4 py-1 bg-[#D4AF37] text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] shadow-md">
                  {program.badge}
                </div>
              )}

              <div className="space-y-6">
                
                {/* Header info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 font-body text-[11px] text-[#D4AF37] font-bold uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {program.duration}
                    </span>
                    <span>•</span>
                    <span>{program.format}</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white">{program.title}</h3>
                  <p className="text-xs text-gray-400 font-body uppercase tracking-wider">{program.subtitle}</p>
                </div>

                {/* Price block */}
                <div className="bg-[#0F0F0F] p-5 border border-gray-800 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-body uppercase tracking-widest">Investment</span>
                    <div className="text-3xl font-display font-bold text-white mt-0.5">{program.price}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 font-body uppercase tracking-widest">Intensity Standard</span>
                    <div className="text-xs font-body font-bold text-[#D4AF37] uppercase tracking-wider mt-1">{program.intensity}</div>
                  </div>
                </div>

                <p className="text-xs text-gray-300 font-body leading-relaxed">{program.description}</p>

                {/* Features list */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-[10px] font-body font-bold uppercase text-[#D4AF37] tracking-[0.2em]">Key Deliverables:</h4>
                  <ul className="space-y-2 text-xs font-body text-gray-300">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-8 border-t border-gray-800">
                <button
                  onClick={() => onSelectProgram(program.id)}
                  className={`w-full py-4 px-6 font-body font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all ${
                    program.popular
                      ? 'bg-[#D4AF37] hover:bg-white text-black'
                      : 'bg-[#222222] hover:bg-[#D4AF37] text-white hover:text-black border border-gray-700'
                  }`}
                >
                  <span>Apply For This Program</span>
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
