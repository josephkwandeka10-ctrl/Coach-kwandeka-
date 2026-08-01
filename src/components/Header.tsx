import React, { useState } from 'react';
import { Dumbbell, Calendar, Bot, Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import { COACH_INFO } from '../data/coachingData';

interface HeaderProps {
  onOpenBooking: (programId?: string) => void;
  onOpenAIChat: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenAIChat }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Philosophy', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Macro Lab', href: '#calculator' },
    { label: 'Habits', href: '#tracker' },
    { label: 'Proof', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#1F1F1F] text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-[#D4AF37] bg-[#1A1A1A] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-xl tracking-tighter text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors">
                KWANDEKA.
              </span>
              <span className="text-[9px] font-body font-bold uppercase tracking-widest px-2 py-0.5 border border-[#D4AF37]/40 text-[#D4AF37] bg-[#D4AF37]/5 hidden sm:inline-block">
                EXECUTIVE
              </span>
            </div>
            <p className="text-[10px] text-gray-400 font-body uppercase tracking-wider">High Performance & Mindset</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-xs uppercase tracking-[0.2em] font-light text-gray-300 hover:text-[#D4AF37] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenAIChat}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-body font-semibold text-[#D4AF37] border border-[#D4AF37]/40 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 uppercase tracking-widest transition-all"
          >
            <Bot className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>Ask Coach AI</span>
          </button>

          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-6 py-2.5 text-xs font-body font-bold text-black bg-[#D4AF37] hover:bg-white uppercase tracking-widest transition-colors shadow-lg shadow-[#D4AF37]/10"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Session</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenAIChat}
            className="p-2 text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 sm:hidden"
            title="Ask Coach AI"
          >
            <Bot className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white bg-[#1A1A1A] border border-gray-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-b border-gray-800 px-6 pt-4 pb-6 space-y-4">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-body text-xs uppercase tracking-[0.2em] text-gray-300 hover:text-[#D4AF37] py-2.5 border-b border-gray-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIChat();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-body uppercase tracking-widest font-semibold text-[#D4AF37] border border-[#D4AF37]/40 bg-[#D4AF37]/10"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Ask Coach Kwandeka AI</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-body uppercase tracking-widest font-bold text-black bg-[#D4AF37] hover:bg-white transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Strategy Session</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
