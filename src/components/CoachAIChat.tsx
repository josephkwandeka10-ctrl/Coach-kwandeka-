import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, User, RefreshCw, Calendar, Flame } from 'lucide-react';
import { ChatMessage } from '../types';
import { COACH_INFO } from '../data/coachingData';

interface CoachAIChatProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

const PRESET_PROMPTS = [
  "What program is best for 15lbs fat loss?",
  "How much protein should I consume daily?",
  "Quick 20-min high-intensity workout routine",
  "How to break through a bench press plateau?"
];

export const CoachAIChat: React.FC<CoachAIChatProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'coach',
      text: "Peace and power! I am Coach Kwandeka's Virtual AI Performance Assistant. Ask me anything about fat loss, strength periodization, macro nutrition, or finding the right coaching program for your goals!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const historyPayload = messages.map(m => ({
        role: m.sender === 'user' ? 'user' : 'model',
        content: m.text
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          conversationHistory: historyPayload
        })
      });

      const data = await res.json();
      const replyText = data.reply || "Focus on consistency, progressive overload, and clean nutrition!";

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'coach',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'coach',
          text: "Coach Kwandeka AI rule #1: Stay consistent! (Error connecting to AI service, feel free to book a direct 1-on-1 strategy call below!)",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#1A1A1A] border border-[#D4AF37]/60 overflow-hidden flex flex-col h-[640px] max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 bg-[#0F0F0F] border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-[#D4AF37] p-0.5">
              <img
                src={COACH_INFO.avatarImage}
                alt="Coach Kwandeka AI"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-white text-base tracking-wide uppercase">Coach Kwandeka AI</h3>
                <span className="px-2 py-0.5 border border-[#D4AF37]/40 text-[#D4AF37] text-[9px] font-body font-bold uppercase tracking-widest">
                  GEMINI 3.6
                </span>
              </div>
              <p className="font-body text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
                <span>Active • Performance Advisor</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white bg-[#0F0F0F] hover:bg-gray-800 border border-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#0F0F0F]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center shrink-0 font-body font-bold text-xs ${
                  msg.sender === 'user'
                    ? 'bg-[#D4AF37] text-black border border-[#D4AF37]'
                    : 'bg-[#1A1A1A] text-[#D4AF37] border border-gray-800'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] p-4 font-body text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#D4AF37] text-black font-semibold'
                    : 'bg-[#1A1A1A] border border-gray-800 text-gray-200 space-y-2'
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
                <div
                  className={`text-[9px] mt-1 font-body uppercase tracking-widest ${
                    msg.sender === 'user' ? 'text-black/70 text-right' : 'text-gray-500'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1A1A1A] border border-gray-800 text-[#D4AF37] flex items-center justify-center animate-spin">
                <RefreshCw className="w-4 h-4" />
              </div>
              <div className="bg-[#1A1A1A] border border-gray-800 px-4 py-3 font-body text-xs text-[#D4AF37] uppercase tracking-wider">
                Coach Kwandeka AI processing query...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Preset Prompt Chips */}
        <div className="px-4 py-3 bg-[#1A1A1A] border-t border-gray-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
          {PRESET_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              disabled={loading}
              className="px-3 py-1.5 bg-[#0F0F0F] hover:bg-[#D4AF37] hover:text-black text-gray-300 font-body text-[10px] uppercase tracking-wider whitespace-nowrap transition-colors border border-gray-800"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Footer */}
        <div className="p-4 bg-[#0F0F0F] border-t border-gray-800 flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Formulate query for Coach Kwandeka AI..."
            className="flex-1 bg-[#1A1A1A] border border-gray-800 p-3 font-body text-xs text-white uppercase tracking-wider focus:outline-none focus:border-[#D4AF37]"
          />

          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="p-3 bg-[#D4AF37] hover:bg-white text-black font-bold disabled:opacity-50 transition-all"
          >
            <Send className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="p-3 bg-[#1A1A1A] hover:bg-gray-800 text-[#D4AF37] border border-gray-800 transition-all hidden sm:flex items-center gap-1.5 font-body text-xs font-bold uppercase tracking-wider"
            title="Book Strategy Call"
          >
            <Calendar className="w-4 h-4" />
            <span>Consultation</span>
          </button>
        </div>

      </div>
    </div>
  );
};
