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

// ✅ Tipe response API (biar ga pakai any lagi)
export interface WasteApiPrediction {
  predicted_label?: string;
  predicted_class?: string;
  label?: string;
  category?: string;
  confidence?: number;
  score?: number;
  description?: string;
  recommendations?: string[];
  economic_value?: number | string | null;
}

export interface WasteApiResponse {
  prediction?: WasteApiPrediction;
  message?: string;
  detail?: string;
}
