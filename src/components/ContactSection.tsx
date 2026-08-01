import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, ChevronUp, CheckCircle, Instagram, Linkedin, Youtube } from 'lucide-react';
import { COACH_INFO, FAQS } from '../data/coachingData';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0F0F0F] text-[#F5F5F5] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ Section */}
        <div id="faq" className="mb-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-block px-3.5 py-1 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.25em] font-bold bg-[#D4AF37]/5">
              Protocol Diagnostics & Details
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight uppercase">
              Frequently Asked <span className="italic font-light text-[#D4AF37]">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#1A1A1A] border border-gray-800 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left font-display font-bold text-base flex items-center justify-between text-white hover:text-[#D4AF37] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 font-body text-xs text-gray-300 leading-relaxed border-t border-gray-800/60 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Form & Studio Info */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-body text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.25em] block">Direct Contact</span>
              <h3 className="font-display text-3xl font-black text-white uppercase">Initiate Consultation</h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed">
                Inquire directly regarding Coach Kwandeka's hybrid coaching, corporate wellness programs, or specialized biomechanical assessments.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-[#1A1A1A] p-5 border border-gray-800">
                <div className="w-10 h-10 border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-body text-[10px] text-gray-400 font-bold uppercase tracking-widest">Direct Email</div>
                  <a href={`mailto:${COACH_INFO.email}`} className="font-body text-xs font-bold text-white hover:text-[#D4AF37] transition-colors uppercase tracking-wider">
                    {COACH_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#1A1A1A] p-5 border border-gray-800">
                <div className="w-10 h-10 border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-body text-[10px] text-gray-400 font-bold uppercase tracking-widest">WhatsApp / Telephone</div>
                  <a href={`tel:${COACH_INFO.phone}`} className="font-body text-xs font-bold text-white hover:text-[#D4AF37] transition-colors uppercase tracking-wider">
                    {COACH_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#1A1A1A] p-5 border border-gray-800">
                <div className="w-10 h-10 border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-body text-[10px] text-gray-400 font-bold uppercase tracking-widest">Headquarters Studio</div>
                  <div className="font-body text-xs font-bold text-white uppercase tracking-wider">{COACH_INFO.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">Follow Protocol Updates</div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-3 bg-[#1A1A1A] hover:bg-[#D4AF37] hover:text-black text-gray-300 border border-gray-800 transition-all"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#1A1A1A] hover:bg-[#D4AF37] hover:text-black text-gray-300 border border-gray-800 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#1A1A1A] hover:bg-[#D4AF37] hover:text-black text-gray-300 border border-gray-800 transition-all"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#1A1A1A] border border-gray-800 p-8 space-y-6">
            <h4 className="font-display font-bold text-xl text-white uppercase tracking-wider">Send Direct Message</h4>
            
            {submitted ? (
              <div className="p-8 bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-center space-y-3">
                <CheckCircle className="w-8 h-8 text-[#D4AF37] mx-auto" />
                <h5 className="font-display font-bold text-white text-lg uppercase">Transmission Received</h5>
                <p className="font-body text-xs text-gray-300">
                  Coach Kwandeka or lead coaching staff will respond within 12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitMessage} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Joseph Kwandeka"
                      className="w-full bg-[#0F0F0F] border border-gray-800 text-white p-3 font-body text-xs uppercase tracking-wider focus:border-[#D4AF37] outline-none"
                    />
                  </div>
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
                </div>

                <div>
                  <label className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Message / Inquiry</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Outline your current conditioning, primary goal, or timeline..."
                    className="w-full bg-[#0F0F0F] border border-gray-800 text-white p-3 font-body text-xs uppercase tracking-wider focus:border-[#D4AF37] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#D4AF37] hover:bg-white text-black font-body font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
