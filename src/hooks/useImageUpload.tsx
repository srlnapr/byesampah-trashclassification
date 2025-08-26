// hooks/useImageUpload.ts
import { useState, useCallback } from 'react';
import { WasteResult } from '../types/waste';
import { classifyWaste } from '../services/wasteApi';

export const useImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<WasteResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      setError(null);
      setResult(null);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setError('Mohon pilih file gambar yang valid (JPG, PNG, WebP)');
    }
  }, []);

  const analyzeImage = async () => {
    if (!selectedImage) {
      setError('Mohon pilih gambar terlebih dahulu');
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    
    try {
      const analysisResult = await classifyWaste(selectedImage);
      setResult(analysisResult);
    } catch (err) {
      setError('Terjadi kesalahan saat menganalisis gambar. Silakan coba lagi.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetDetection = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setResult(null);
    setError(null);
  };

  return {
    selectedImage,
    imagePreview,
    isAnalyzing,
    result,
    error,
    handleFileSelect,
    analyzeImage,
    resetDetection
  };
};