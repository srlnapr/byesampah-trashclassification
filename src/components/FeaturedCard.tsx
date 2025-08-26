// components/suggestions/FeaturedCard.tsx
import React from 'react';
import { Award, Heart, ArrowRight } from 'lucide-react';
import { Suggestion } from '@/types/suggestions';
import { getDifficultyColor, getImpactColor, formatNumber } from '@/lib/suggestions-utils';

interface FeaturedCardProps {
  suggestion: Suggestion;
  onStartSuggestion?: (id: number) => void;
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({
  suggestion,
  onStartSuggestion
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`bg-gradient-to-r ${suggestion.color} p-6 text-white`}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl">{suggestion.image}</span>
          <Award className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">{suggestion.title}</h3>
        <p className="text-white/90 text-sm">{suggestion.description}</p>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(suggestion.difficulty)}`}>
            {suggestion.difficulty}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(suggestion.impact)}`}>
            Impact {suggestion.impact}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span>⏱️ {suggestion.timeRequired}</span>
          <span>📋 {suggestion.steps} langkah</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{formatNumber(suggestion.likes)}</span>
          </div>
          <button 
            onClick={() => onStartSuggestion?.(suggestion.id)}
            className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-2"
          >
            Pelajari
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};