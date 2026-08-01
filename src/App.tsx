import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Calculator } from './components/Calculator';
import { DailyTracker } from './components/DailyTracker';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CoachAIChat } from './components/CoachAIChat';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string | undefined>();

  const handleOpenBooking = (programId?: string) => {
    setSelectedProgramId(programId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased selection:bg-amber-400 selection:text-zinc-950">
      
      {/* Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenAIChat={() => setIsAIChatOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenAIChat={() => setIsAIChatOpen(true)}
        />
        
        <About />

        <Programs
          onSelectProgram={(progId) => handleOpenBooking(progId)}
        />

        <Calculator
          onSelectProgram={(progId) => handleOpenBooking(progId)}
        />

        <DailyTracker />

        <Testimonials />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CoachAIChat
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProgramId={selectedProgramId}
      />

    </div>
  );
}
