export interface Program {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  format: '1-on-1 Hybrid' | 'Online Blueprint' | 'In-Person Studio' | 'Executive';
  price: string;
  badge?: string;
  description: string;
  features: string[];
  targetAudience: string;
  image: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  age: number;
  quote: string;
  result: string;
  rating: number;
  programName: string;
  image: string;
  durationWeeks: number;
}

export interface BookingRequest {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  programId: string;
  goal: string;
  preferredDate: string;
  preferredTime: string;
  fitnessLevel: string;
  notes?: string;
  status: 'Pending' | 'Confirmed';
  createdAt: string;
}

export interface HabitItem {
  id: string;
  text: string;
  category: 'nutrition' | 'workout' | 'mindset' | 'recovery';
  completed: boolean;
  streak: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'coach';
  text: string;
  timestamp: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
