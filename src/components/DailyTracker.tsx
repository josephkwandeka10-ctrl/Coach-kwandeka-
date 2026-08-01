import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, Droplet, Dumbbell, Flame, Trophy, Plus, RefreshCw, Zap } from 'lucide-react';
import { HabitItem } from '../types';

const INITIAL_HABITS: HabitItem[] = [
  { id: '1', text: 'Drink 3.5L Water', category: 'hydration' as any, completed: false, streak: 5 },
  { id: '2', text: 'Hit Daily Protein Target (160g+)', category: 'nutrition', completed: false, streak: 8 },
  { id: '3', text: 'Complete 45-Min Strength Workout', category: 'workout', completed: false, streak: 12 },
  { id: '4', text: 'Reach 8,000+ Daily Steps', category: 'workout', completed: false, streak: 4 },
  { id: '5', text: '10 Mins Mobility & Posture Stretch', category: 'recovery', completed: false, streak: 6 },
  { id: '6', text: '10 Mins Mindset Journaling or Reading', category: 'mindset', completed: false, streak: 15 }
];

export const DailyTracker: React.FC = () => {
  const [habits, setHabits] = useState<HabitItem[]>(() => {
    const saved = localStorage.getItem('coach_kwandeka_habits');
    return saved ? JSON.parse(saved) : INITIAL_HABITS;
  });

  const [waterGlasses, setWaterGlasses] = useState<number>(() => {
    const saved = localStorage.getItem('coach_kwandeka_water');
    return saved ? Number(saved) : 4;
  });

  const [streakCount, setStreakCount] = useState<number>(() => {
    const saved = localStorage.getItem('coach_kwandeka_streak');
    return saved ? Number(saved) : 7;
  });

  useEffect(() => {
    localStorage.setItem('coach_kwandeka_habits', JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem('coach_kwandeka_water', waterGlasses.toString());
  }, [waterGlasses]);

  useEffect(() => {
    localStorage.setItem('coach_kwandeka_streak', streakCount.toString());
  }, [streakCount]);

  const toggleHabit = (id: string) => {
    setHabits(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextCompleted = !item.completed;
          return {
            ...item,
            completed: nextCompleted,
            streak: nextCompleted ? item.streak + 1 : Math.max(0, item.streak - 1)
          };
        }
        return item;
      })
    );
  };

  const completedCount = habits.filter(h => h.completed).length;
  const progressPercent = Math.round((completedCount / habits.length) * 100);

  const resetDaily = () => {
    setHabits(prev => prev.map(h => ({ ...h, completed: false })));
    setWaterGlasses(0);
  };

  return (
    <section id="tracker" className="py-24 bg-[#0F0F0F] text-[#F5F5F5] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="inline-block px-3.5 py-1 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.25em] font-bold bg-[#D4AF37]/5">
              Daily Protocol & Discipline
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight uppercase">
              Daily <span className="italic font-light text-[#D4AF37]">Habit Matrix</span>
            </h2>
            <p className="text-gray-400 font-body text-sm max-w-xl">
              Consistency is built through daily execution. Track your hydration, training sessions, and cognitive protocols.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#1A1A1A] border border-gray-800 px-5 py-3 flex items-center gap-3">
              <Flame className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              <div>
                <div className="font-body text-[9px] text-gray-400 uppercase tracking-widest">Execution Streak</div>
                <div className="font-display text-base font-bold text-[#D4AF37]">{streakCount} Days Active</div>
              </div>
            </div>

            <button
              onClick={resetDaily}
              className="p-3 bg-[#1A1A1A] hover:bg-[#222222] border border-gray-800 text-gray-400 hover:text-white transition-colors"
              title="Reset for new day"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Checklist */}
          <div className="lg:col-span-8 bg-[#1A1A1A] border border-gray-800 p-8 space-y-6">
            
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center font-body text-xs">
                <span className="text-gray-400 font-bold uppercase tracking-wider">Protocol Completion</span>
                <span className="text-[#D4AF37] font-bold">{completedCount} of {habits.length} ({progressPercent}%)</span>
              </div>
              <div className="w-full bg-[#0F0F0F] h-2 border border-gray-800 p-0.5">
                <div
                  className="bg-[#D4AF37] h-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Habit Items list */}
            <div className="space-y-3">
              {habits.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleHabit(item.id)}
                  className={`p-4 border transition-all cursor-pointer flex items-center justify-between group ${
                    item.completed
                      ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-white'
                      : 'bg-[#0F0F0F] border-gray-800 text-gray-300 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <button className="text-[#D4AF37] focus:outline-none">
                      {item.completed ? (
                        <CheckSquare className="w-5 h-5 fill-[#D4AF37] text-black" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-600 group-hover:text-[#D4AF37] transition-colors" />
                      )}
                    </button>
                    <span className={`font-body text-xs uppercase tracking-wider ${item.completed ? 'line-through text-gray-500' : 'text-white font-medium'}`}>
                      {item.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-body text-xs text-gray-500 group-hover:text-[#D4AF37] transition-colors">
                    <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{item.streak}d streak</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Hydration & Motivation Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Water Tracker Card */}
            <div className="bg-[#1A1A1A] border border-gray-800 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="font-display font-bold text-white text-base">Hydration Log</h3>
                </div>
                <span className="font-body text-xs font-bold text-[#D4AF37]">{(waterGlasses * 0.4).toFixed(1)}L / 3.5L</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <button
                    key={num}
                    onClick={() => setWaterGlasses(num === waterGlasses ? num - 1 : num)}
                    className={`py-3 border font-body text-[10px] font-bold uppercase transition-all ${
                      num <= waterGlasses
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                        : 'bg-[#0F0F0F] border-gray-800 text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    0{num}
                  </button>
                ))}
              </div>

              <p className="font-body text-[10px] text-gray-500 uppercase tracking-wider italic">
                * Hydration increases nutrient transport and prevents cellular fatigue during intensive training.
              </p>
            </div>

            {/* Coach Quote Box */}
            <div className="bg-[#1A1A1A] border border-[#D4AF37]/40 p-6 space-y-3 relative">
              <div className="flex items-center gap-2 text-[#D4AF37] font-body font-bold text-[10px] uppercase tracking-[0.2em]">
                <Trophy className="w-4 h-4" />
                <span>Coach Kwandeka Maxim</span>
              </div>
              <blockquote className="font-display text-base text-gray-200 leading-relaxed italic">
                "Small discipline executed daily builds an unbreakable foundation. Don't negotiate with your goals when you wake up—execute the plan."
              </blockquote>
              <div className="font-body text-[10px] text-[#D4AF37] font-bold text-right uppercase tracking-widest">— Coach Joseph Kwandeka</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
