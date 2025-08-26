// services/suggestions-service.ts
import { Suggestion, SuggestionCategory, WasteType } from '../types/suggestions';

// Mock API responses - replace with actual API calls
export interface SuggestionFilters {
  category?: SuggestionCategory;
  wasteType?: WasteType;
  difficulty?: string;
  impact?: string;
  search?: string;
  limit?: number;
  offset?: number;
}

export interface SuggestionsResponse {
  suggestions: Suggestion[];
  total: number;
  hasMore: boolean;
}

export class SuggestionsService {
  private static baseUrl = process.env.NEXT_PUBLIC_API_URL || '/api';

  // Get all suggestions with filters
  static async getSuggestions(filters: SuggestionFilters = {}): Promise<SuggestionsResponse> {
    try {
      const queryParams = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== 'all') {
          queryParams.append(key, value.toString());
        }
      });

      const response = await fetch(`${this.baseUrl}/suggestions?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      throw error;
    }
  }

  // Get featured suggestions
  static async getFeaturedSuggestions(): Promise<Suggestion[]> {
    try {
      const response = await fetch(`${this.baseUrl}/suggestions/featured`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch featured suggestions');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching featured suggestions:', error);
      throw error;
    }
  }

  // Get suggestion by ID
  static async getSuggestionById(id: number): Promise<Suggestion | null> {
    try {
      const response = await fetch(`${this.baseUrl}/suggestions/${id}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error('Failed to fetch suggestion');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching suggestion:', error);
      throw error;
    }
  }

  // Toggle bookmark
  static async toggleBookmark(suggestionId: number, userId?: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/suggestions/${suggestionId}/bookmark`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to toggle bookmark');
      }

      const result = await response.json();
      return result.bookmarked;
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      throw error;
    }
  }

  // Like suggestion
  static async likeSuggestion(suggestionId: number, userId?: string): Promise<number> {
    try {
      const response = await fetch(`${this.baseUrl}/suggestions/${suggestionId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to like suggestion');
      }

      const result = await response.json();
      return result.likes;
    } catch (error) {
      console.error('Error liking suggestion:', error);
      throw error;
    }
  }

  // Submit new suggestion
  static async submitSuggestion(suggestion: Omit<Suggestion, 'id' | 'likes'>): Promise<Suggestion> {
    try {
      const response = await fetch(`${this.baseUrl}/suggestions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(suggestion),
      });

      if (!response.ok) {
        throw new Error('Failed to submit suggestion');
      }

      return await response.json();
    } catch (error) {
      console.error('Error submitting suggestion:', error);
      throw error;
    }
  }

  // Get suggestions by waste type
  static async getSuggestionsByWasteType(wasteType: WasteType): Promise<Suggestion[]> {
    return this.getSuggestions({ wasteType }).then(response => response.suggestions);
  }

  // Get suggestions by category
  static async getSuggestionsByCategory(category: SuggestionCategory): Promise<Suggestion[]> {
    return this.getSuggestions({ category }).then(response => response.suggestions);
  }

  // Search suggestions
  static async searchSuggestions(query: string): Promise<Suggestion[]> {
    return this.getSuggestions({ search: query }).then(response => response.suggestions);
  }

  // Get user's bookmarked suggestions
  static async getUserBookmarks(userId: string): Promise<Suggestion[]> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${userId}/bookmarks`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch user bookmarks');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching user bookmarks:', error);
      throw error;
    }
  }

  // Get suggestion analytics
  static async getSuggestionAnalytics(suggestionId: number): Promise<{
    views: number;
    likes: number;
    bookmarks: number;
    completions: number;
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/suggestions/${suggestionId}/analytics`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch suggestion analytics');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching suggestion analytics:', error);
      throw error;
    }
  }

  // Track suggestion view
  static async trackView(suggestionId: number, userId?: string): Promise<void> {
    try {
      await fetch(`${this.baseUrl}/suggestions/${suggestionId}/view`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
    } catch (error) {
      console.error('Error tracking view:', error);
      // Don't throw error for analytics tracking
    }
  }

  // Mark suggestion as completed
  static async markCompleted(suggestionId: number, userId?: string): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/suggestions/${suggestionId}/complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to mark suggestion as completed');
      }
    } catch (error) {
      console.error('Error marking suggestion as completed:', error);
      throw error;
    }
  }
}