// utils/helpers.ts
// Bölüm 9: Generics (Temel Düzey)

// --- Generic fonksiyon ---
// T bir "tip parametresi" — çağrıldığında gerçek tipe dönüşür
export function getFirst<T>(arr: T[]): T {
  return arr[0];
}

// Kullanım örnekleri:
// const num = getFirst([1, 2, 3]);       // num: number (T = number)
// const str = getFirst(["a", "b", "c"]); // str: string (T = string)
// const project = getFirst(projects);     // project: Project (T = Project)

// --- Generic ile kısıtlama (extends) ---
// T en az 'id' alanına sahip olmalı
export function findById<T extends { id: number }>(
  items: T[],
  id: number
): T | undefined {
  return items.find(item => item.id === id);
}

// Kullanım:
// const project = findById(projects, 3);  // Çalışır: Project'te id var
// const str = findById(["a", "b"], 1);    // HATA: string[] 'id' alanına sahip değil

// --- Generic interface ---
// API yanıtı için generic tip
export interface ApiResponse<T> {
  data: T;
  total: number;
  page: number;
}

// Kullanım:
// type ProjectsResponse = ApiResponse<Project[]>;
// // { data: Project[], total: number, page: number }
// type UserResponse = ApiResponse<User>;
// // { data: User, total: number, page: number }
