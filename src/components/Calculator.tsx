import React, { useState } from 'react';
import { Calculator as CalcIcon, Flame, PieChart, Sparkles, ArrowRight, Check } from 'lucide-react';

interface CalculatorProps {
  onSelectProgram: (programId: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onSelectProgram }) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(30);
  const [weight, setWeight] = useState<number>(75); // kg
  const [height, setHeight] = useState<number>(175); // cm
  const [activity, setActivity] = useState<number>(1.375); // activity multiplier
  const [goal, setGoal] = useState<'fat_loss' | 'recomp' | 'muscle_gain'>('recomp');

  // Convert weight to kg for formula
  const weightKg = unit === 'metric' ? weight : weight * 0.453592;
  const heightCm = unit === 'metric' ? height : height * 2.54;

  // Mifflin-St Jeor BMR
  const bmr = gender === 'male'
    ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
    : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  const tdee = Math.round(bmr * activity);

  // Target Calorie adjustment based on goal
  let targetCalories = tdee;
  if (goal === 'fat_loss') targetCalories = Math.round(tdee * 0.80); // 20% deficit
  if (goal === 'muscle_gain') targetCalories = Math.round(tdee * 1.15); // 15% surplus

  // Macro Calculation:
  // Protein: 2.2g per kg for recomp/muscle, 2.4g for fat loss
  const proteinGrams = Math.round(weightKg * (goal === 'fat_loss' ? 2.4 : 2.2));
  const proteinCalories = proteinGrams * 4;

  // Fat: 25% of total calories
  const fatCalories = Math.round(targetCalories * 0.25);
  const fatGrams = Math.round(fatCalories / 9);

  // Carbs: remaining calories
  const carbCalories = Math.max(0, targetCalories - proteinCalories - fatCalories);
  const carbGrams = Math.round(carbCalories / 4);

  const matchedProgramId = goal === 'fat_loss'
    ? 'transformation-blueprint'
    : goal === 'muscle_gain'
    ? 'elite-personal-coaching'
    : 'executive-stamina';

  return (
    <section id="calculator" className="py-24 bg-[#0F0F0F] text-[#F5F5F5] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.25em] font-bold bg-[#D4AF37]/5">
            Biological & Metabolic Calibration
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight uppercase">
            Metabolic <span className="italic font-light text-[#D4AF37]">& Macro Lab</span>
          </h2>
          <p className="text-gray-400 font-body text-sm sm:text-base">
            Quantify your daily Total Daily Energy Expenditure (TDEE) and optimal macro distribution calibrated to Coach Kwandeka's composition algorithms.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-[#1A1A1A] border border-gray-800 p-8 space-y-6">
            
            {/* Unit & Gender Toggles */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-body font-bold text-gray-400 uppercase tracking-[0.2em] block mb-2">Unit Standard</label>
                <div className="flex bg-[#0F0F0F] p-1 border border-gray-800">
                  <button
                    onClick={() => setUnit('metric')}
                    className={`flex-1 py-2 font-body text-xs font-bold uppercase tracking-wider transition-all ${
                      unit === 'metric' ? 'bg-[#D4AF37] text-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Metric (kg / cm)
                  </button>
                  <button
                    onClick={() => setUnit('imperial')}
                    className={`flex-1 py-2 font-body text-xs font-bold uppercase tracking-wider transition-all ${
                      unit === 'imperial' ? 'bg-[#D4AF37] text-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Imperial (lbs / in)
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-body font-bold text-gray-400 uppercase tracking-[0.2em] block mb-2">Biological Sex</label>
                <div className="flex bg-[#0F0F0F] p-1 border border-gray-800">
                  <button
                    onClick={() => setGender('male')}
                    className={`flex-1 py-2 font-body text-xs font-bold uppercase tracking-wider transition-all ${
                      gender === 'male' ? 'bg-[#D4AF37] text-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => setGender('female')}
                    className={`flex-1 py-2 font-body text-xs font-bold uppercase tracking-wider transition-all ${
                      gender === 'female' ? 'bg-[#D4AF37] text-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>
            </div>

            {/* Age, Weight, Height Sliders / Inputs */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between font-body text-xs">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Age</span>
                  <span className="text-[#D4AF37] font-bold">{age} yrs</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] bg-gray-800 h-1.5 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-body text-xs">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Weight</span>
                  <span className="text-[#D4AF37] font-bold">{weight} {unit === 'metric' ? 'kg' : 'lbs'}</span>
                </div>
                <input
                  type="range"
                  min={unit === 'metric' ? '40' : '90'}
                  max={unit === 'metric' ? '160' : '350'}
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] bg-gray-800 h-1.5 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-body text-xs">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Height</span>
                  <span className="text-[#D4AF37] font-bold">{height} {unit === 'metric' ? 'cm' : 'in'}</span>
                </div>
                <input
                  type="range"
                  min={unit === 'metric' ? '140' : '55'}
                  max={unit === 'metric' ? '220' : '88'}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] bg-gray-800 h-1.5 cursor-pointer"
                />
              </div>
            </div>

            {/* Activity Level Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-body font-bold text-gray-400 uppercase tracking-[0.2em] block">Daily Activity Standard</label>
              <select
                value={activity}
                onChange={(e) => setActivity(Number(e.target.value))}
                className="w-full bg-[#0F0F0F] border border-gray-800 text-white p-3 font-body text-xs uppercase tracking-wider focus:border-[#D4AF37] outline-none"
              >
                <option value={1.2}>Sedentary (Desk Job, Minimal Training)</option>
                <option value={1.375}>Lightly Active (1-3 Sessions / Week)</option>
                <option value={1.55}>Moderately Active (3-5 Sessions / Week)</option>
                <option value={1.725}>Very Active (6-7 Intense Sessions / Week)</option>
                <option value={1.9}>Extra Active (Competitive Athlete / Heavy Physical Activity)</option>
              </select>
            </div>

            {/* Primary Goal Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-body font-bold text-gray-400 uppercase tracking-[0.2em] block">Primary Target Strategy</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setGoal('fat_loss')}
                  className={`p-4 border text-left transition-all ${
                    goal === 'fat_loss'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white font-bold'
                      : 'border-gray-800 bg-[#0F0F0F] text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="font-body text-xs uppercase tracking-wider font-extrabold text-[#D4AF37]">Fat Loss</div>
                  <div className="font-body text-[10px] text-gray-400 uppercase tracking-widest mt-1">Deficit (-20%)</div>
                </button>

                <button
                  onClick={() => setGoal('recomp')}
                  className={`p-4 border text-left transition-all ${
                    goal === 'recomp'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white font-bold'
                      : 'border-gray-800 bg-[#0F0F0F] text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="font-body text-xs uppercase tracking-wider font-extrabold text-[#D4AF37]">Recomp</div>
                  <div className="font-body text-[10px] text-gray-400 uppercase tracking-widest mt-1">Maintenance</div>
                </button>

                <button
                  onClick={() => setGoal('muscle_gain')}
                  className={`p-4 border text-left transition-all ${
                    goal === 'muscle_gain'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white font-bold'
                      : 'border-gray-800 bg-[#0F0F0F] text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="font-body text-xs uppercase tracking-wider font-extrabold text-[#D4AF37]">Hypertrophy</div>
                  <div className="font-body text-[10px] text-gray-400 uppercase tracking-widest mt-1">Surplus (+15%)</div>
                </button>
              </div>
            </div>

          </div>

          {/* Calculated Output Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1A1A1A] border border-[#D4AF37]/60 p-8 space-y-6 relative">
              
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Metabolic Diagnostic</h3>
                  <p className="font-body text-[10px] text-gray-400 uppercase tracking-widest">Caloric & Macro Specification</p>
                </div>
                <div className="w-8 h-8 border border-[#D4AF37] bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Flame className="w-4 h-4" />
                </div>
              </div>

              {/* TDEE & Target Display */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0F0F0F] p-4 border border-gray-800">
                  <div className="font-body text-[10px] text-gray-400 uppercase tracking-widest">Baseline TDEE</div>
                  <div className="font-display text-3xl font-bold text-white mt-1">{tdee} <span className="font-body text-xs text-gray-500 font-normal">kcal</span></div>
                </div>

                <div className="bg-[#D4AF37]/10 p-4 border border-[#D4AF37]/40">
                  <div className="font-body text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest">Target Intake</div>
                  <div className="font-display text-3xl font-bold text-[#D4AF37] mt-1">{targetCalories} <span className="font-body text-xs text-[#D4AF37]/70 font-normal">kcal</span></div>
                </div>
              </div>

              {/* Macro Split Breakdown */}
              <div className="space-y-3 pt-2">
                <h4 className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Daily Macro Protocol</h4>
                
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-[#0F0F0F] p-3 border border-gray-800">
                    <div className="font-body text-[10px] uppercase font-bold text-[#D4AF37]">Protein</div>
                    <div className="font-display text-2xl font-bold text-white mt-0.5">{proteinGrams}g</div>
                    <div className="font-body text-[9px] text-gray-500">{proteinCalories} kcal</div>
                  </div>

                  <div className="bg-[#0F0F0F] p-3 border border-gray-800">
                    <div className="font-body text-[10px] uppercase font-bold text-gray-300">Carbs</div>
                    <div className="font-display text-2xl font-bold text-white mt-0.5">{carbGrams}g</div>
                    <div className="font-body text-[9px] text-gray-500">{carbCalories} kcal</div>
                  </div>

                  <div className="bg-[#0F0F0F] p-3 border border-gray-800">
                    <div className="font-body text-[10px] uppercase font-bold text-amber-200">Fats</div>
                    <div className="font-display text-2xl font-bold text-white mt-0.5">{fatGrams}g</div>
                    <div className="font-body text-[9px] text-gray-500">{fatCalories} kcal</div>
                  </div>
                </div>
              </div>

              {/* Coach Kwandeka Program Match */}
              <div className="p-5 bg-[#0F0F0F] border border-gray-800 space-y-3">
                <div className="flex items-center gap-2 font-body text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Optimal Coaching Protocol</span>
                </div>
                <p className="font-body text-xs text-gray-300 leading-relaxed">
                  To achieve your {goal.replace('_', ' ')} target with zero plateauing, Coach Kwandeka prescribes the <strong className="text-white">12-Week Transformation Blueprint</strong>.
                </p>
                <button
                  onClick={() => onSelectProgram(matchedProgramId)}
                  className="w-full py-3 px-4 bg-[#D4AF37] hover:bg-white text-black font-body font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Apply For Calibrated Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
