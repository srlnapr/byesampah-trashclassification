import { WasteResult, WasteApiResponse, WasteApiPrediction } from "@/types/waste";

function mapToWasteResult(payload: WasteApiResponse): WasteResult {
  const p: WasteApiPrediction = payload?.prediction ?? (payload as WasteApiPrediction);

  const type =
    p?.predicted_label ??
    p?.predicted_class ??
    p?.label ??
    "Unknown";

  const category = (p?.category ?? type ?? "unknown").toLowerCase();

  return {
    type,
    confidence: Number(p?.confidence ?? p?.score ?? 0),
    description: p?.description ?? `Sampah terdeteksi sebagai ${type}.`,
    category,
    color: "from-emerald-500 to-green-500",
    icon: "♻️",
    recommendations:
      p?.recommendations ?? [
        "Pisahkan sesuai kategori.",
        "Bersihkan sebelum didaur ulang.",
        "Gunakan kembali bila memungkinkan.",
      ],
    economicValue: p?.economic_value != null ? String(p.economic_value) : undefined,
  };
}

export const classifyWaste = async (imageFile: File): Promise<WasteResult> => {
  if (!imageFile || !imageFile.type.startsWith("image/")) {
    throw new Error("File tidak valid. Pilih gambar (jpg/png).");
  }

  const formData = new FormData();
  formData.append("file", imageFile);

  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 25000);

  try {
    const res = await fetch(
      "https://serlinscript-trash-classsificer.hf.space/api/v1/predict",
      {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: formData,
        signal: controller.signal,
      }
    );
    clearTimeout(t);

    const data: WasteApiResponse = await res.json();

    if (!res.ok) {
      const msg =
        data?.message || data?.detail || `HTTP ${res.status} ${res.statusText}`;
      throw new Error(`Gagal menganalisis gambar: ${msg}`);
    }

    return mapToWasteResult(data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      if (err.name === "AbortError") {
        throw new Error("Koneksi ke server timeout. Coba lagi.");
      }
      throw new Error(err.message || "Terjadi kesalahan tak terduga.");
    }
    throw new Error("Terjadi kesalahan tak terduga.");
  } finally {
    clearTimeout(t);
  }
};
