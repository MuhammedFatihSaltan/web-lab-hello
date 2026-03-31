// utils/format.ts
// Named export: tarih ve para birimi biçimlendirme fonksiyonları

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("tr-TR");
};

export const formatCurrency = (amount: number): string => {
  return `${amount.toLocaleString("tr-TR")} TL`;
};
