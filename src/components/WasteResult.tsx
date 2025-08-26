// components/WasteResult.tsx
import React from 'react';
import { CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { WasteResult as WasteResultType, WasteArticles } from '@/types/waste';

interface WasteResultProps {
  result: WasteResultType;
  wasteArticles: WasteArticles;
  onReset: () => void;
  onNavigateToArticle: (url: string) => void;
}

const WasteResult: React.FC<WasteResultProps> = ({ 
  result, 
  wasteArticles, 
  onReset, 
  onNavigateToArticle 
}) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Hasil Deteksi: ${result.type}`,
        text: `Saya baru saja mengidentifikasi ${result.type} dengan akurasi ${Math.round(result.confidence * 100)}% menggunakan ByeSampah!`,
        url: window.location.href
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="w-8 h-8 text-green-500" />
        <h2 className="text-2xl font-bold text-gray-900">Hasil Klasifikasi</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Result Card */}
        <div className="space-y-6">
          <div className={`bg-gradient-to-r ${result.color} rounded-2xl p-6 text-white`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{result.icon}</span>
              <div>
                <h3 className="text-2xl font-bold">{result.type}</h3>
                <p className="text-blue-100">Akurasi: {Math.round(result.confidence * 100)}%</p>
              </div>
            </div>
            <p className="text-blue-50">{result.description}</p>
          </div>

          {result.economicValue && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                💰 Nilai Ekonomi
              </h4>
              <p className="text-amber-700">{result.economicValue}</p>
            </div>
          )}
        </div>

        {/* Recommendations */}
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            Rekomendasi Pengelolaan
          </h4>
          <div className="space-y-3">
            {result.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-600 font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Article */}
      {wasteArticles[result.category] && (
        <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            📚 Artikel Terkait
          </h4>
          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-semibold text-gray-800 mb-1">
                {wasteArticles[result.category].title}
              </h5>
              <p className="text-gray-600 text-sm">
                {wasteArticles[result.category].description}
              </p>
            </div>
            <button 
              onClick={() => onNavigateToArticle(wasteArticles[result.category].url)}
              className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-2 ml-4"
            >
              Baca Artikel
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100">
        <button
          onClick={onReset}
          className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
        >
          Analisis Gambar Lain
        </button>
        <button 
          onClick={handleShare}
          className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors"
        >
          Bagikan Hasil
        </button>
      </div>
    </div>
  );
};

export default WasteResult;