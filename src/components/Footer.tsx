import React from 'react';
import { Dumbbell, ArrowUp } from 'lucide-react';
import { COACH_INFO } from '../data/coachingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0F0F] text-[#F5F5F5] border-t border-[#1A1A1A] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-gray-900">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-[#D4AF37] bg-[#D4AF37] flex items-center justify-center text-black font-black">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-black text-xl text-white tracking-wide">COACH KWANDEKA</span>
              <p className="font-body text-[10px] text-gray-400 uppercase tracking-widest">High Performance Fitness & Mindset Portal</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 font-body text-xs text-gray-400 font-bold uppercase tracking-wider">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#programs" className="hover:text-[#D4AF37] transition-colors">Programs</a>
            <a href="#calculator" className="hover:text-[#D4AF37] transition-colors">Calculator</a>
            <a href="#tracker" className="hover:text-[#D4AF37] transition-colors">Habit Tracker</a>
            <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-[#1A1A1A] hover:bg-[#D4AF37] hover:text-black border border-gray-800 text-gray-400 transition-all flex items-center gap-2 font-body text-xs font-bold uppercase tracking-wider"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-gray-500 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Coach Joseph Kwandeka. All rights reserved.</p>
          <p className="text-gray-500">
            Empowering strength, mindset & physical mastery worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};
