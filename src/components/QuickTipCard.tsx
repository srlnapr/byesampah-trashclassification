// components/suggestions/QuickTipCard.tsx
import React from 'react';
import { QuickTip } from '../../types/suggestions';

interface QuickTipCardProps {
  tip: QuickTip;
  onClick?: () => void;
}

export const QuickTipCard: React.FC<QuickTipCardProps> = ({ 
  tip, 
  onClick 
}) => {
  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="text-center">
        <div className="text-4xl mb-4">{tip.icon}</div>
        <h3 className="font-semibold text-gray-900 mb-3">{tip.title}</h3>
        <span className={`inline-block px-3 py-2 rounded-full text-sm font-medium ${tip.color}`}>
          {tip.tip}
        </span>
        
        {/* Waste Type Badge */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            Jenis Sampah: <span className="font-medium text-gray-700 capitalize">{tip.wasteType}</span>
          </span>
        </div>
      </div>
    </div>
  );
};