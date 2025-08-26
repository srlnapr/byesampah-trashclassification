import { LucideIcon } from "lucide-react";

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
  image: string;   // emoji atau url gambar
  color: string;   // Tailwind gradient class
  featured?: boolean;
}

export interface QuickTip {
  title: string;
  tip: string;
  icon: string;      // emoji atau path svg
  color: string;     // warna bg / tailwind class
  wasteType: WasteType;
}

export interface Category {
  id: SuggestionCategory;
  name: string;
  icon: LucideIcon;  // ✅ pakai LucideIcon bukan any
}

export interface WasteTypeInfo {
  id: WasteType;
  name: string;
  icon: string;      // bisa emoji atau url
  color: string;     // tailwind class
}

export type SuggestionCategory =
  | "all"
  | "home"
  | "office"
  | "community"
  | "business";

export type WasteType =
  | "plastic"
  | "organic"
  | "paper"
  | "glass"
  | "metal"
  | "cardboard";

export type DifficultyLevel = "Mudah" | "Sedang" | "Sulit";

export type ImpactLevel = "Rendah" | "Sedang" | "Tinggi" | "Sangat Tinggi";
