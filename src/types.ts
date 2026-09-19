export type EventType = 
  | "Wedding" 
  | "Birthday" 
  | "Corporate Event" 
  | "Product Launch" 
  | "Conference" 
  | "Anniversary" 
  | "Graduation" 
  | "Baby Shower" 
  | "Party" 
  | "Other";

export interface EventInputState {
  eventType: EventType;
  guests: number;
  budget: number;
  location: string;
  prompt: string;
}

export interface ColorSwatch {
  color: string;
  label: string;
}

export interface VisualCard {
  zone: string;
  title: string;
  desc: string;
  badgeColor: string;
  bgGradient: string;
  dotPatternColor: string;
}

export interface BudgetItem {
  name: string;
  ratio: number;
  color: string;
  desc: string;
  amount: number;
  percent: number;
}

export interface JourneyStep {
  phase: string;
  title: string;
  desc: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  desc?: string;
  tag?: string;
}

export interface RequirementCategory {
  icon: 'home' | 'utensils' | 'flower' | 'video' | 'volume' | 'shield';
  title: string;
  items: string[];
}

export interface ChecklistTask {
  id: string;
  text: string;
  done: boolean;
}

export interface ChecklistMilestone {
  id: string;
  category: string;
  tasks: ChecklistTask[];
}

export interface Blueprint {
  title: string;
  eventType: EventType;
  guests: number;
  budget: number;
  location: string;
  timestamp: string;
  tagline: string;
  description: string;
  creativeDirectionTitle: string;
  creativeDirectionDesc: string;
  themePaletteName: string;
  themeColors: ColorSwatch[];
  narrativeTitle: string;
  narrativeStory: string;
  atmosphericRating: string;
  visuals: VisualCard[];
  budgetCategories: BudgetItem[];
  targetBudget: number;
  estimatedCost: number;
  contingencyAmount: number;
  contingencyPercent: number;
  journey: JourneyStep[];
  preEventTimeline: TimelineItem[];
  dayFlowTimeline: TimelineItem[];
  requirements: RequirementCategory[];
}
