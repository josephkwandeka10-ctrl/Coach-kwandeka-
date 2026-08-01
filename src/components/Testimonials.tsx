import React from 'react';
import { Star, Quote, CheckCircle2, TrendingUp, Trophy } from 'lucide-react';
import { TESTIMONIALS } from '../data/coachingData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0F0F0F] text-[#F5F5F5] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.25em] font-bold bg-[#D4AF37]/5">
            Verified Outcomes & Evidence
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight uppercase">
            Client <span className="italic font-light text-[#D4AF37]">Transformations</span>
          </h2>
          <p className="text-gray-400 font-body text-sm sm:text-base">
            Documented physical and metabolic evolution achieved by executives, athletes, and dedicated individuals under Coach Kwandeka's protocol.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1A1A1A] border border-gray-800 p-8 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all group relative"
            >
              <div className="space-y-6">
                
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gray-800 group-hover:text-[#D4AF37]/30 transition-colors" />
                </div>

                {/* Result Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] font-body text-xs font-bold uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{testimonial.result}</span>
                </div>

                {/* Quote Text */}
                <p className="font-display text-base text-gray-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="pt-6 mt-6 border-t border-gray-800 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.clientName}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 object-cover border border-[#D4AF37]"
                />
                <div>
                  <h4 className="font-display font-bold text-white text-base flex items-center gap-1.5">
                    <span>{testimonial.clientName}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  </h4>
                  <p className="font-body text-xs text-gray-400">{testimonial.role} • {testimonial.age} yrs</p>
                  <p className="font-body text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest mt-0.5">{testimonial.programName} ({testimonial.durationWeeks} Wks)</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="mt-16 text-center bg-[#1A1A1A] border border-gray-800 p-8 max-w-2xl mx-auto space-y-2">
          <div className="text-[#D4AF37] font-display font-bold text-2xl uppercase tracking-wider">98% Verified Program Success Rate</div>
          <p className="font-body text-xs text-gray-400 uppercase tracking-wider">
            Every client protocol features bi-weekly biomechanical review, custom macro adjustments, and direct communication access.
          </p>
        </div>

      </div>
    </section>
  );
};
