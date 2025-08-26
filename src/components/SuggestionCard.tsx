// components/suggestions/SuggestionCard.tsx
import React from 'react';
import { 
  Heart, 
  Share2, 
  Bookmark, 
  ArrowRight, 
  Target 
} from 'lucide-react';
import { Suggestion } from '@/types/suggestions';
import { getDifficultyColor, getImpactColor, formatNumber } from '@/lib/suggestions-utils';

interface SuggestionCardProps {
  suggestion: Suggestion;
  isBookmarked: boolean;
  onBookmark: (id: number) => void;
  onStartSuggestion?: (id: number) => void;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  suggestion,
  isBookmarked,
  onBookmark,
  onStartSuggestion
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className={`bg-gradient-to-r ${suggestion.color} p-6 text-white relative`}>
        <button
          onClick={() => onBookmark(suggestion.id)}
          className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          <Bookmark 
            className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} 
          />
        </button>
        <span className="text-4xl mb-4 block">{suggestion.image}</span>
        <h3 className="text-xl font-bold mb-2">{suggestion.title}</h3>
        <p className="text-white/90 text-sm">{suggestion.description}</p>
      </div>
      
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {suggestion.tags.slice(0, 3).map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
              #{tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex items-center gap-4 mb-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(suggestion.difficulty)}`}>
            {suggestion.difficulty}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(suggestion.impact)}`}>
            Impact {suggestion.impact}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Target className="w-4 h-4" />
              {suggestion.steps} langkah
            </span>
            <span>⏱️ {suggestion.timeRequired}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gray-500">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{formatNumber(suggestion.likes)}</span>
            </div>
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          <button 
            onClick={() => onStartSuggestion?.(suggestion.id)}
            className="bg-emerald-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-2"
          >
            Mulai
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};