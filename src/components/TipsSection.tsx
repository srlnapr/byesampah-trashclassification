// components/TipsSection.tsx
import React from 'react';
import { Camera, CheckCircle, Recycle, Leaf } from 'lucide-react';

const TipsSection: React.FC = () => {
  const tips = [
    {
      icon: Camera,
      title: 'Foto yang Jelas',
      description: 'Pastikan gambar tidak buram dan memiliki pencahayaan yang cukup'
    },
    {
      icon: CheckCircle,
      title: 'Objek Utama',
      description: 'Fokuskan pada satu jenis sampah per foto untuk akurasi maksimal'
    },
    {
      icon: Recycle,
      title: 'Angle yang Tepat',
      description: 'Ambil foto dari berbagai sudut jika diperlukan'
    },
    {
      icon: Leaf,
      title: 'Background Bersih',
      description: 'Gunakan latar belakang yang kontras dan tidak ramai'
    }
  ];

  return (
    <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Tips untuk Hasil Terbaik</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-3">
            <tip.icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">{tip.title}</h4>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsSection;