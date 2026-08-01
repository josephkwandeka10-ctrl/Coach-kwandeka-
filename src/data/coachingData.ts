import { Program, Testimonial, FAQItem } from '../types';

import heroImg from '../assets/images/coach_kwandeka_hero_1785607630986.jpg';
import gymImg from '../assets/images/coach_kwandeka_gym_1785607642877.jpg';
import avatarImg from '../assets/images/coach_kwandeka_avatar_1785607653331.jpg';

export const COACH_INFO = {
  name: "Coach Joseph Kwandeka",
  title: "Elite High-Performance Fitness & Mindset Coach",
  bio: "Coach Joseph Kwandeka empowers ambitious professionals, athletes, and everyday individuals to break physical limits and engineer unsustainable habits into lifelong strength. With over 12 years of hands-on coaching, a background in exercise physiology and cognitive performance, Coach Kwandeka delivers data-driven training paired with unyielding accountability.",
  heroImage: heroImg,
  gymImage: gymImg,
  avatarImage: avatarImg,
  location: "Nairobi & Global Online Coaching",
  email: "josephkwandeka10@gmail.com",
  phone: "+254 700 000 000",
  socials: {
    instagram: "@coachkwandeka",
    linkedin: "Coach Joseph Kwandeka",
    youtube: "Coach Kwandeka Training",
  },
  stats: [
    { label: "Lives Transformed", value: "500+" },
    { label: "Coaching Experience", value: "12+ Yrs" },
    { label: "Client Success Rate", value: "98%" },
    { label: "Training Hours Logged", value: "45k+" }
  ],
  pillars: [
    {
      title: "Mindset Mastery",
      desc: "Reprogram limiting beliefs into mental resilience. Consistency beats motivation every single day.",
      icon: "Brain"
    },
    {
      title: "Athletic Conditioning",
      desc: "Build functional strength, hyper-efficient lean muscle, and injury-resistant joints.",
      icon: "Dumbbell"
    },
    {
      title: "Macro Precision",
      desc: "Zero-guesswork custom nutrition calibrated specifically to your metabolic profile and goals.",
      icon: "Utensils"
    },
    {
      title: "Habit Architecture",
      desc: "Systemize daily micro-wins so peak performance becomes your effortless default state.",
      icon: "Zap"
    }
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: "transformation-blueprint",
    title: "12-Week Body & Mind Transformation",
    subtitle: "Our flagship intensive program for dramatic body recomposition and mindset upgrade.",
    duration: "12 Weeks",
    intensity: "Intermediate",
    format: "1-on-1 Hybrid",
    price: "$499 / program",
    badge: "Most Popular",
    popular: true,
    description: "A complete 90-day physical and mental overhaul. Custom training periodization, macro-tracked meal plans, weekly 1-on-1 strategy calls, and daily habit tracking.",
    features: [
      "Custom 12-week progressive strength & cardio program",
      "Personalized macro & calorie meal structure",
      "Weekly 30-min 1-on-1 video call check-in",
      "24/7 direct WhatsApp access to Coach Kwandeka",
      "Form video breakdown & performance feedback",
      "Access to Client Mobile App & Habit Tracker"
    ],
    targetAudience: "Anyone looking to shed fat, build lean muscle, and build indestructible habits.",
    image: gymImg
  },
  {
    id: "elite-personal-coaching",
    title: "1-on-1 Private Fitness Coaching",
    subtitle: "Direct personal coaching with Coach Kwandeka for maximum accountability and precision.",
    duration: "Monthly / Flexible",
    intensity: "All Levels",
    format: "In-Person Studio",
    price: "$650 / month",
    badge: "High Touch",
    description: "Private hands-on training sessions combined with tailored lifestyle coaching. Every workout, rep, and recovery protocol is personally supervised.",
    features: [
      "3x weekly private coaching sessions",
      "Bi-weekly body composition scans (InBody)",
      "Posture & functional movement correction",
      "Personalized supplement guidance",
      "Priority schedule booking"
    ],
    targetAudience: "Individuals wanting maximum direct guidance, proper form mastery, and rapid results.",
    image: heroImg
  },
  {
    id: "executive-stamina",
    title: "Executive Health & Performance",
    subtitle: "Designed specifically for busy founders, executives, and high-volume professionals.",
    duration: "16 Weeks",
    intensity: "Intermediate",
    format: "Executive",
    price: "$899 / program",
    badge: "For Executives",
    description: "Time-optimized 30-45 minute workouts, travel-friendly training protocols, stress management tactics, and high-energy nutrition strategies.",
    features: [
      "Express 35-minute metabolic workouts",
      "Hotel & travel fitness routines (no equipment needed)",
      "Executive meal strategy for business dining",
      "Sleep quality & HRV optimization protocols",
      "Direct priority communication channel"
    ],
    targetAudience: "Busy leaders with limited time who need high ROI on their health and stamina.",
    image: gymImg
  },
  {
    id: "macro-nutrition-only",
    title: "Precision Macro & Nutrition Plan",
    subtitle: "Science-backed metabolic nutrition design for sustainable body goals.",
    duration: "6 Weeks",
    intensity: "All Levels",
    format: "Online Blueprint",
    price: "$199 / one-time",
    description: "Say goodbye to restrictive crash diets. Learn how to eat foods you love while reaching target fat loss or muscle building goals.",
    features: [
      "Custom TDEE & macro breakdown calculation",
      "Sample 7-day meal plan with recipe options",
      "Grocery list & eating-out cheat sheet",
      "Bi-weekly progress adjustments"
    ],
    targetAudience: "People with solid workout routines who need nutrition clarity to unlock results.",
    image: heroImg
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "David Ochieng",
    role: "Tech Lead & Entrepreneur",
    age: 34,
    quote: "Working with Coach Kwandeka changed my life. I went from chronic back fatigue and zero energy to dropping 18kg of fat while gaining noticeable strength. His accountability is unmatched!",
    result: "-18 kg Fat Loss & Increased Max Deadlift",
    rating: 5,
    programName: "12-Week Transformation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    durationWeeks: 12
  },
  {
    id: "2",
    clientName: "Sarah M.",
    role: "Corporate Finance Director",
    age: 29,
    quote: "As a busy executive, I never thought I had time for consistent workouts. Coach Kwandeka created a 40-minute program that fits seamlessly into my schedule. I'm stronger at 29 than I was at 20!",
    result: "Dropped 3 Dress Sizes & Doubled Stamina",
    rating: 5,
    programName: "Executive Health",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    durationWeeks: 16
  },
  {
    id: "3",
    clientName: "Marcus Vance",
    role: "Amateur Athlete",
    age: 26,
    quote: "Coach Joseph's athletic conditioning fixed my knee pain and boosted my vertical jump. He breaks down exercise science so clearly. Best investment I've made in myself.",
    result: "+6 inches Vertical Jump & Pain-Free Joints",
    rating: 5,
    programName: "1-on-1 Private Coaching",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    durationWeeks: 24
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Who is Coach Kwandeka's coaching suitable for?",
    answer: "Coach Kwandeka works with individuals at all fitness levels—from complete beginners needing structured guidance to experienced lifters and executives seeking body recomposition and peak performance.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "How does online coaching work compared to in-person sessions?",
    answer: "Online coaching delivers custom workout plans through our app, video movement assessments, macro coaching, and weekly 1-on-1 strategy video calls. You receive the exact same level of personal attention and accountability wherever you are in the world.",
    category: "Programs"
  },
  {
    id: "faq-3",
    question: "Do I need access to a commercial gym?",
    answer: "No! Coach Kwandeka can build your program for full gym setups, home dumbbell setups, or bodyweight/resistance band routines depending on your available equipment.",
    category: "Training"
  },
  {
    id: "faq-4",
    question: "Will I have to follow an extremely restrictive diet?",
    answer: "Never. Coach Kwandeka uses flexible macro nutrition. We calculate your exact energy needs so you can eat real, delicious food while reaching fat loss or muscle building goals.",
    category: "Nutrition"
  },
  {
    id: "faq-5",
    question: "How do I start working with Coach Kwandeka?",
    answer: "Click 'Book Free Consultation' on this page to schedule a 15-minute goal assessment call. Coach Kwandeka will discuss your objectives and help you choose the ideal program.",
    category: "Booking"
  }
];
