// lib/suggestions-utils.ts
import { DifficultyLevel, ImpactLevel } from '../types/suggestions';

export const getDifficultyColor = (difficulty: DifficultyLevel): string => {
  switch (difficulty) {
    case 'Mudah': return 'text-green-600 bg-green-100';
    case 'Sedang': return 'text-yellow-600 bg-yellow-100';
    case 'Sulit': return 'text-red-600 bg-red-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};

export const getImpactColor = (impact: ImpactLevel): string => {
  switch (impact) {
    case 'Sangat Tinggi': return 'text-green-600 bg-green-100';
    case 'Tinggi': return 'text-emerald-600 bg-emerald-100';
    case 'Sedang': return 'text-blue-600 bg-blue-100';
    case 'Rendah': return 'text-gray-600 bg-gray-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};

export const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
};

export const getDifficultyIcon = (difficulty: DifficultyLevel): string => {
  switch (difficulty) {
    case 'Mudah': return '🟢';
    case 'Sedang': return '🟡';
    case 'Sulit': return '🔴';
    default: return '⚪';
  }
};

export const getImpactIcon = (impact: ImpactLevel): string => {
  switch (impact) {
    case 'Sangat Tinggi': return '🌟';
    case 'Tinggi': return '⭐';
    case 'Sedang': return '✨';
    case 'Rendah': return '💫';
    default: return '💫';
  }
};