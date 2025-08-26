// components/suggestions/WasteTypeFilter.tsx
import React from 'react';
import { WasteType } from '@/types/suggestions';
import { wasteTypes } from '@/data/suggestions';

interface WasteTypeFilterProps {
  selectedWasteType: WasteType | 'all';
  onWasteTypeChange: (wasteType: WasteType | 'all') => void;
  className?: string;
}

export const WasteTypeFilter: React.FC<WasteTypeFilterProps> = ({
  selectedWasteType,
  onWasteTypeChange,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap gap-2 mb-6 ${className}`}>
      <button
        onClick={() => onWasteTypeChange('all')}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
          selectedWasteType === 'all'
            ? 'bg-emerald-500 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        🗂️ Semua Jenis
      </button>
      
      {wasteTypes.map((wasteType) => (
        <button
          key={wasteType.id}
          onClick={() => onWasteTypeChange(wasteType.id)}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
            selectedWasteType === wasteType.id
              ? 'bg-emerald-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {wasteType.icon} {wasteType.name}
        </button>
      ))}
    </div>
  );
};