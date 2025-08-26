// hooks/useSuggestions.ts
import { useState, useMemo } from 'react';
import { Suggestion, SuggestionCategory, WasteType } from '../types/suggestions';
import { suggestions } from '../data/suggestions';

export const useSuggestions = () => {
  const [activeCategory, setActiveCategory] = useState<SuggestionCategory>('all');
  const [selectedWasteType, setSelectedWasteType] = useState<WasteType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set());

  const filteredSuggestions = useMemo(() => {
    return suggestions.filter(suggestion => {
      const matchesCategory = activeCategory === 'all' || suggestion.category === activeCategory;
      const matchesWasteType = selectedWasteType === 'all' || suggestion.wasteType === selectedWasteType;
      const matchesSearch = 
        suggestion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        suggestion.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        suggestion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesWasteType && matchesSearch;
    });
  }, [activeCategory, selectedWasteType, searchQuery]);

  const featuredSuggestions = useMemo(() => {
    return suggestions.filter(s => s.featured);
  }, []);

  const toggleBookmark = (id: number) => {
    const newBookmarked = new Set(bookmarked);
    if (newBookmarked.has(id)) {
      newBookmarked.delete(id);
    } else {
      newBookmarked.add(id);
    }
    setBookmarked(newBookmarked);
  };

  return {
    // State
    activeCategory,
    selectedWasteType,
    searchQuery,
    bookmarked,
    
    // Computed
    filteredSuggestions,
    featuredSuggestions,
    
    // Actions
    setActiveCategory,
    setSelectedWasteType,
    setSearchQuery,
    toggleBookmark
  };
};