// types/waste.ts
export interface WasteResult {
  type: string;
  category: string;
  confidence: number;
  description: string;
  recommendations: string[];
  icon: string;
  color: string;
  economicValue?: string;
}

export interface WasteArticle {
  title: string;
  description: string;
  url: string;
}

export interface WasteArticles {
  [key: string]: WasteArticle;
}