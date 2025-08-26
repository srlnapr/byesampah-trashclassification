import { WasteResult } from "../types/waste";

function mapToWasteResult(payload: any): WasteResult {
  // Ambil data utama dari "prediction" kalau ada
  const p = payload?.prediction ?? payload;

  const type =
    p?.predicted_label ??
    p?.predicted_class ?? // ✅ sesuai response dari API
    p?.label ??
    "Unknown";

  const category = (p?.category ?? type ?? "unknown").toLowerCase();

  return {
    type,
    confidence: Number(p?.confidence ?? p?.score ?? 0),
    description: p?.description ?? `Sampah terdeteksi sebagai ${type}.`,
    category,
    color: "from-emerald-500 to-green-500", // bisa diganti dinamis kalau mau beda warna per kategori
    icon: "♻️",
    recommendations:
      p?.recommendations ?? [
        "Pisahkan sesuai kategori.",
        "Bersihkan sebelum didaur ulang.",
        "Gunakan kembali bila memungkinkan.",
      ],
    economicValue: p?.economic_value ?? null,
  };
}

export const classifyWaste = async (imageFile: File): Promise<WasteResult> => {
  if (!imageFile || !imageFile.type.startsWith("image/")) {
    throw new Error("File tidak valid. Pilih gambar (jpg/png).");
  }

  const formData = new FormData();
  formData.append("file", imageFile); // ✅ API hanya butuh 'file'

  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 25000); // 25s timeout

  try {
    const res = await fetch(
      "https://serlinscript-trash-classsificer.hf.space/api/v1/predict",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          // ❌ jangan set Content-Type manual, biar FormData otomatis
        },
        body: formData,
        signal: controller.signal,
      }
    );
    clearTimeout(t);

    const data = await res.json();

    if (!res.ok) {
      const msg =
        data?.message || data?.detail || `HTTP ${res.status} ${res.statusText}`;
      throw new Error(`Gagal menganalisis gambar: ${msg}`);
    }

    return mapToWasteResult(data);
  } catch (err: any) {
    if (err?.name === "AbortError") {
      throw new Error("Koneksi ke server timeout. Coba lagi.");
    }
    throw new Error(err?.message || "Terjadi kesalahan tak terduga.");
  } finally {
    clearTimeout(t);
  }
};
