// utils/projectHelpers.ts
// Uygulama-4: Yardımcı Fonksiyonlar (Filtreleme ve Sıralama)

import type {
  Project, Category, SortField, SortOrder
} from "../types/project";

// --- Arama filtresi ---
export function filterBySearch(
  projects: Project[],
  query: string
): Project[] {
  if (!query.trim()) return projects;

  const lower = query.toLowerCase();
  return projects.filter(p =>
    p.title.toLowerCase().includes(lower) ||
    p.description.toLowerCase().includes(lower) ||
    p.tech.some(t =>
      t.toLowerCase().includes(lower)
    )
  );
}

// --- Kategori filtresi ---
export function filterByCategory(
  projects: Project[],
  category: Category | "all"
): Project[] {
  if (category === "all") return projects;
  return projects.filter(
    p => p.category === category
  );
}

// --- Sıralama ---
export function sortProjects(
  projects: Project[],
  field: SortField,
  order: SortOrder
): Project[] {
  const sorted = [...projects].sort((a, b) => {
    if (field === "year") {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title, "tr");
  });

  return order === "desc"
    ? sorted.reverse()
    : sorted;
}

// --- Hepsini birleştir ---
export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | "all",
  sortField: SortField,
  sortOrder: SortOrder
): Project[] {
  let result = filterBySearch(projects, search);
  result = filterByCategory(result, category);
  return sortProjects(result, sortField, sortOrder);
}

// --- FilterState ile birleştir (Smart Component için) ---
import type { FilterState } from "../types/project";

export function filterProjects(
  projects: Project[],
  state: FilterState
): Project[] {
  return applyFilters(
    projects,
    state.search,
    state.category,
    state.sortField,
    state.sortOrder
  );
}
