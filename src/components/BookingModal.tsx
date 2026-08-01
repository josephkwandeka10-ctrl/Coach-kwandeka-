import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle2, Download, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { PROGRAMS } from '../data/coachingData';
import { BookingRequest } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialProgramId }) => {
  const [step, setStep] = useState<number>(1);
  const [programId, setProgramId] = useState<string>(initialProgramId || PROGRAMS[0].id);
  const [goal, setGoal] = useState<string>('Fat Loss & Muscle Building');
  const [preferredDate, setPreferredDate] = useState<string>(
    new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]
  );
  const [preferredTime, setPreferredTime] = useState<string>('10:00 AM');
  const [clientName, setClientName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [fitnessLevel, setFitnessLevel] = useState<string>('Intermediate');
  const [notes, setNotes] = useState<string>('');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRequest | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: BookingRequest = {
      id: `CK-${Math.floor(100000 + Math.random() * 900000)}`,
      clientName,
      email,
      phone,
      programId,
      goal,
      preferredDate,
      preferredTime,
      fitnessLevel,
      notes,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    // Save to local storage
    const existing = JSON.parse(localStorage.getItem('coach_kwandeka_bookings') || '[]');
    localStorage.setItem('coach_kwandeka_bookings', JSON.stringify([newBooking, ...existing]));

    setConfirmedBooking(newBooking);
    setStep(4);
  };

  const selectedProg = PROGRAMS.find(p => p.id === programId) || PROGRAMS[0];

  // Helper to generate downloadable .ics calendar file
  const downloadICS = () => {
    if (!confirmedBooking) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Coach Kwandeka//Coaching Consultation//EN
BEGIN:VEVENT
SUMMARY:Strategy Consultation with Coach Joseph Kwandeka
DESCRIPTION:1-on-1 Fitness Strategy Session for ${confirmedBooking.programId}. Goal: ${confirmedBooking.goal}
DTSTART:${confirmedBooking.preferredDate.replace(/-/g, '')}T100000Z
DTEND:${confirmedBooking.preferredDate.replace(/-/g, '')}T103000Z
LOCATION:Google Meet / Studio
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Coach_Kwandeka_Consultation_${confirmedBooking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#1A1A1A] border border-[#D4AF37]/60 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-[#0F0F0F] border-b border-gray-800 flex items-center justify-between">
          <div>
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Step 0{step} of 04</span>
            <h3 className="font-display font-bold text-white text-xl uppercase tracking-wider">
              {step === 4 ? 'Consultation Confirmed' : 'Book Strategy Consultation'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white bg-[#0F0F0F] hover:bg-gray-800 border border-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-8 overflow-y-auto flex-1 space-y-6">
          
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">
                  Select Coaching Track
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {PROGRAMS.map((prog) => (
                    <button
                      key={prog.id}
                      type="button"
                      onClick={() => setProgramId(prog.id)}
                      className={`p-4 border text-left transition-all flex items-center justify-between ${
                        programId === prog.id
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                          : 'border-gray-800 bg-[#0F0F0F] text-gray-400 hover:border-gray-700'
                      }`}
                    >
                      <div>
                        <div className="font-display font-bold text-base text-white">{prog.title}</div>
                        <div className="font-body text-xs text-gray-400 mt-0.5">{prog.format} • {prog.price}</div>
                      </div>
                      {programId === prog.id && <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">
                  Primary Transformation Target
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-[#0F0F0F] border border-gray-800 text-white p-3 font-body text-xs uppercase tracking-wider focus:border-[#D4AF37] outline-none"
                >
                  <option value="Fat Loss & Muscle Recomposition">Fat Loss & Muscle Recomposition</option>
                  <option value="Hyper-Efficient Strength & Power">Hyper-Efficient Strength & Power</option>
                  <option value="Executive Stamina & Energy">Executive Stamina & Energy</option>
                  <option value="Postural Correction & Athletic Mobility">Postural Correction & Athletic Mobility</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-4 px-6 bg-[#D4AF37] hover:bg-white text-black font-body font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
              >
                <span>Continue to Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">
                  Preferred Consultation Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-[#0F0F0F] border border-gray-800 text-white p-3 font-body text-xs uppercase tracking-wider focus:border-[#D4AF37] outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['09:00 AM', '10:30 AM', '02:00 PM', '04:30 PM', '06:00 PM', '07:30 PM'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setPreferredTime(t)}
                      className={`py-3 border font-body text-xs font-bold uppercase transition-all ${
                        preferredTime === t
                          ? 'bg-[#D4AF37] border-[#D4AF37] text-black'
                          : 'bg-[#0F0F0F] border-gray-800 text-gray-300 hover:border-gray-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3.5 px-4 bg-[#0F0F0F] hover:bg-gray-800 border border-gray-800 text-white font-body font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-[2] py-4 px-6 bg-[#D4AF37] hover:bg-white text-black font-body font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Client Information</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Joseph Kwandeka"
                  className="w-full bg-[#0F0F0F] border border-gray-800 text-white p-3 font-body text-xs uppercase tracking-wider focus:border-[#D4AF37] outline-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="joseph@example.com"
                    className="w-full bg-[#0F0F0F] border border-gray-800 text-white p-3 font-body text-xs uppercase tracking-wider focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+254 700 000 000"
                    className="w-full bg-[#0F0F0F] border border-gray-800 text-white p-3 font-body text-xs uppercase tracking-wider focus:border-[#D4AF37] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Training Experience</label>
                <select
                  value={fitnessLevel}
                  onChange={(e) => setFitnessLevel(e.target.value)}
                  className="w-full bg-[#0F0F0F] border border-gray-800 text-white p-3 font-body text-xs uppercase tracking-wider focus:border-[#D4AF37] outline-none"
                >
                  <option value="Beginner">Beginner (0-6 months training)</option>
                  <option value="Intermediate">Intermediate (1-3 years training)</option>
                  <option value="Advanced">Advanced (3+ years consistent lifting)</option>
                </select>
              </div>

              <div>
                <label className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Additional Context / Limitations</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Injuries, dietary requirements, or specific targets..."
                  className="w-full bg-[#0F0F0F] border border-gray-800 text-white p-3 font-body text-xs uppercase tracking-wider focus:border-[#D4AF37] outline-none resize-none"
                />
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-3.5 px-4 bg-[#0F0F0F] hover:bg-gray-800 border border-gray-800 text-white font-body font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="flex-[2] py-4 px-6 bg-[#D4AF37] hover:bg-white text-black font-body font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Confirm Consultation</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 4 && confirmedBooking && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-bold text-2xl text-white uppercase">Application Registered</h4>
                <p className="font-body text-xs text-gray-300 max-w-sm mx-auto">
                  Coach Kwandeka has received your consultation request. Confirmation sent to <strong className="text-[#D4AF37]">{confirmedBooking.email}</strong>.
                </p>
              </div>

              <div className="bg-[#0F0F0F] p-5 border border-gray-800 text-left space-y-2 font-body text-xs">
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span className="text-gray-400 uppercase tracking-widest text-[10px]">Reference ID:</span>
                  <span className="font-mono text-[#D4AF37] font-bold">{confirmedBooking.id}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span className="text-gray-400 uppercase tracking-widest text-[10px]">Track:</span>
                  <span className="font-bold text-white uppercase">{selectedProg.title}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span className="text-gray-400 uppercase tracking-widest text-[10px]">Scheduled:</span>
                  <span className="font-bold text-white uppercase">{confirmedBooking.preferredDate} at {confirmedBooking.preferredTime}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={downloadICS}
                  className="flex-1 py-3.5 px-4 bg-[#0F0F0F] hover:bg-gray-800 border border-[#D4AF37]/40 text-[#D4AF37] font-body font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Export .ICS Calendar</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3.5 px-4 bg-[#D4AF37] hover:bg-white text-black font-body font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Return to Site</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
