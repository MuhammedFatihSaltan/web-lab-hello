export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 grid md:grid-cols-2 gap-12 items-center">
      <div className="bg-gray-100 dark:bg-gray-800 aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-black text-gray-300 dark:text-gray-700">
          Görsel Bekleniyor
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
          Kısaca <span className="text-blue-600">Hakkımda</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          Ben Muhammed Fatih Saltan, 21 yaşında tutkulu bir Web Geliştiriciyim. 
          React, Node.js ve modern web ekosistemleri üzerine uzmanlaşıyorum. 
          Amacım, teknoloji ve tasarımın mükemmel uyumunu yakalayan projeler üretmek.
        </p>
        <div className="flex gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
            <span className="text-2xl font-black text-blue-600 block">3+</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Yıl Deneyim</span>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
            <span className="text-2xl font-black text-blue-600 block">15+</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Başarılı Proje</span>
          </div>
        </div>
      </div>
    </section>
  );
}
