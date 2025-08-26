// components/ImageUpload.tsx
import React, { useRef, useCallback } from 'react';
import { Upload, Camera, Loader2, AlertCircle } from 'lucide-react';

interface ImageUploadProps {
  selectedImage: File | null;
  imagePreview: string | null;
  isAnalyzing: boolean;
  error: string | null;
  onFileSelect: (file: File) => void;
  onAnalyze: () => void;
  onReset: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  selectedImage,
  imagePreview,
  isAnalyzing,
  error,
  onFileSelect,
  onAnalyze,
  onReset
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = React.useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Gambar Sampah</h2>
      
      <div
        className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
          dragOver 
            ? 'border-emerald-400 bg-emerald-50' 
            : 'border-gray-300 hover:border-emerald-400 hover:bg-emerald-50'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {imagePreview ? (
          <div className="space-y-4">
            <img 
              src={imagePreview} 
              alt="Preview" 
              className="max-w-md max-h-64 mx-auto rounded-lg shadow-md"
            />
            <div className="flex gap-4 justify-center">
              <button
                onClick={onAnalyze}
                disabled={isAnalyzing}
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Menganalisis...
                  </>
                ) : (
                  <>
                    <Camera className="w-5 h-5" />
                    Analisis Gambar
                  </>
                )}
              </button>
              <button
                onClick={onReset}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                Pilih Ulang
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Upload className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Upload atau Drop Gambar Sampah
            </h3>
            <p className="text-gray-500 mb-6">
              Drag & drop gambar ke sini atau klik tombol di bawah
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Pilih Gambar
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Format: JPG, PNG, WebP • Max: 5MB
            </p>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <span className="text-red-700">{error}</span>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;