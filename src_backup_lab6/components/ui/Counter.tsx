import { useState } from "react";
import Button from "./Button";

/**
 * LAB-6 Image 8: useState ile State Yönetimi Örneği
 * Bu bileşen React'te durum yönetimini ve dinamik güncellemeleri öğretir.
 */
function Counter() {
  // [mevcut deger, guncelleme fonksiyonu]
  // useState(0): baslangic degeri 0
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center gap-4 max-w-xs mx-auto mb-12">
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest italic">
        LAB-6: useState Deneyimi
      </h3>
      
      <div className="flex items-center gap-6">
        <Button
          onClick={() => setCount(count - 1)}
          variant="outline"
          className="w-12 h-12 rounded-full border-red-200 text-red-500 hover:bg-red-50 hover:border-red-500 transition-colors"
        >
          <span className="text-2xl font-bold">−</span>
        </Button>

        <div className="text-center min-w-[60px]">
          <span className="text-4xl font-black text-gray-900 dark:text-white tabular-nums">
            {count}
          </span>
          <p className="text-[10px] text-gray-400 font-medium uppercase mt-1">
            Sayaç Değeri
          </p>
        </div>

        <Button
          onClick={() => setCount(prev => prev + 1)}
          variant="outline"
          className="w-12 h-12 rounded-full border-green-200 text-green-500 hover:bg-green-50 hover:border-green-500 transition-colors"
        >
          <span className="text-2xl font-bold">+</span>
        </Button>
      </div>

      <p className="text-xs text-gray-400 text-center italic">
        Not: Bu bileşen LAB-6 state yönetimi kurallarını (immutability & functional updates) test etmek içindir.
      </p>
    </div>
  );
}

export default Counter;
