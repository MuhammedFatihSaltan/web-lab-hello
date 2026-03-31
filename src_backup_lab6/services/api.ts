// services/api.ts
// Default export + Named export örüntüsü
// Async/await ve Fetch API kullanımı
// Hata yönetimi: try/catch/finally

import type { Project } from "../types/project";

// Named export: API base URL sabiti
export const BASE_URL = "/data/projects.json";

// --- TEMEL FETCH ---
// Named export: async fonksiyon — projeleri çeker
export async function fetchProjects(): Promise<Project[]> {
  // 1. HTTP istek gönder
  const response = await fetch(BASE_URL);

  // 2. HTTP durumunu kontrol et
  if (!response.ok) {
    throw new Error(
      `HTTP Hata: ${response.status}`
    );
  }

  // 3. JSON'a dönüştür
  const data: Project[] = await response.json();
  return data;
}

// Hata yönetimli versiyon (Bölüm 5 — Error Handling)
export async function loadProjects(): Promise<Project[]> {
  try {
    // Hata oluşabilecek kod
    const response = await fetch(
      "/data/projects.json"
    );

    if (!response.ok) {
      throw new Error(
        `Sunucu hatası: ${response.status}`
      );
    }

    const projects = await response.json();
    return projects;

  } catch (error) {
    // Hata yakalanır ve işlenir
    if (error instanceof TypeError) {
      // Ağ hatası (fetch başarısız)
      console.error("Ağ bağlantısı yok:", error);
    } else {
      console.error("Bilinmeyen hata:", error);
    }
    return []; // Boş dizi dön (fallback)

  } finally {
    // Her durumda çalışır (başarılı veya hatalı)
    console.log("Yükleme işlemi tamamlandı.");
  }
}

// Default export: ApiClient sınıfı
export default class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async getProjects(): Promise<Project[]> {
    return loadProjects();
  }

  // Generic metod örneği
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP Hata: ${response.status}`);
    }
    return response.json() as Promise<T>;
  }
}
