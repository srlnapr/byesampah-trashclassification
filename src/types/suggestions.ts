// types/suggestions.ts
export interface Suggestion {
  id: number;
  category: SuggestionCategory;
  wasteType: WasteType;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  timeRequired: string;
  impact: ImpactLevel;
  steps: number;
  likes: number;
  tags: string[];
  image: string;
  color: string;
  featured?: boolean;
}

export interface QuickTip {
  title: string;
  tip: string;
  icon: string;
  color: string;
  wasteType: WasteType;
}

export interface Category {
  id: SuggestionCategory;
  name: string;
  icon: any; // Lucide React icon type
}

export interface WasteTypeInfo {
  id: WasteType;
  name: string;
  icon: string;
  color: string;
}

export type SuggestionCategory = 'all' | 'home' | 'office' | 'community' | 'business';

export type WasteType = 'plastic' | 'organic' | 'paper' | 'glass' | 'metal' | 'cardboard';

export type DifficultyLevel = 'Mudah' | 'Sedang' | 'Sulit';

export type ImpactLevel = 'Rendah' | 'Sedang' | 'Tinggi' | 'Sangat Tinggi';