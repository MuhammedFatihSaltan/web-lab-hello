import { useState, useEffect } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import UIKit from "./pages/UIKit";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [showUIKit, setShowUIKit] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 text-gray-900 dark:text-gray-100 flex flex-col font-sans relative">
      
      {/* Dev Toggle Bar */}
      <div className="absolute top-4 right-20 z-50">
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={() => setShowUIKit(!showUIKit)}
        >
          {showUIKit ? "Portföyü Görüntüle" : "UI Kit Görüntüle"}
        </Button>
      </div>

      {/* Tema Değiştirme Butonu (Sabit) */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-gray-500"
        aria-label="Tema Değiştir"
      >
        <span className="dark:hidden text-xl" aria-hidden="true">&#9790;</span>
        <span className="hidden dark:inline text-xl" aria-hidden="true">&#9728;</span>
      </button>

      {showUIKit ? (
        <UIKit />
      ) : (
        <>
          {/* Header ve Navigasyon */}
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
            Ana İçeriğe Atla
          </a>
          <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
              <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                Muhammed Fatih Saltan
              </h1>
              <nav aria-label="Ana navigasyon">
                <ul className="flex flex-wrap gap-2 justify-center">
                  <li>
                    <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors font-medium">Hakkımda</a>
                  </li>
                  <li>
                    <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors font-medium">Projelerim</a>
                  </li>
                  <li>
                    <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors font-medium">İletişim</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <main id="main-content" className="flex-1 w-full max-w-6xl mx-auto flex flex-col items-center">
            
            {/* Hakkımda Bölümü */}
            <section id="hakkimda" className="py-16 px-4 w-full">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                <figure className="shrink-0">
                  <img
                    src="/profil.jpg"
                    alt="Muhammed Fatih Saltan vesikalık fotoğrafı"
                    className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/150/1E3A8A/FFFFFF?text=MF";
                    }}
                  />
                </figure>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Hakkımda
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                    Merhaba! Ben Muhammed Fatih Saltan, Bilgisayar Mühendisliği öğrencisiyim. Modern web teknolojileriyle kullanıcı dostu arayüzler ve uygulamalar oluşturuyorum.
                  </p>
                  <ul className="flex flex-wrap justify-center md:justify-start gap-2" aria-label="Kullanılan Teknolojiler">
                    <li className="bg-blue-800 dark:bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">React</li>
                    <li className="bg-blue-800 dark:bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">TypeScript</li>
                    <li className="bg-blue-800 dark:bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</li>
                    <li className="bg-blue-800 dark:bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">HTML5 & CSS3</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projelerim Bölümü */}
            <section id="projeler" className="py-16 px-4 w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                  Projelerim
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card 
                    variant="elevated" 
                    title="E-Ticaret Sitesi" 
                    image="https://via.placeholder.com/400x200/2563EB/FFFFFF?text=E-Ticaret" 
                    imageAlt="E-Ticaret ana sayfa ekran görüntüsü"
                  >
                    React, TypeScript ve Tailwind ile geliştirilmiş modern e-ticaret platformu. Sepet yönetimi ve API entegrasyonu barındırır.
                  </Card>

                  <Card 
                    variant="elevated" 
                    title="Kişisel Blog" 
                    image="https://via.placeholder.com/400x200/7C3AED/FFFFFF?text=Blog" 
                    imageAlt="Blog sayfası ekran görüntüsü"
                  >
                    Next.js ile oluşturulmuş, içerik yönetim sistemi (CMS) entegreli SEO uyumlu kişisel blog uygulaması.
                  </Card>

                  <Card 
                    variant="elevated" 
                    title="Hava Durumu" 
                    image="https://via.placeholder.com/400x200/16A34A/FFFFFF?text=Weather+App" 
                    imageAlt="Hava durumu uygulaması arayüzü"
                  >
                    Açık hava durumu servisi kullanılarak konuma göre 5 günlük tahmin sunan interaktif React portalı.
                  </Card>
                </div>
              </div>
            </section>

            {/* İletişim Formu */}
            <section id="iletisim" className="py-16 px-4 w-full">
              <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-colors duration-200">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                  İletişim
                </h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <Input
                    id="name"
                    label="Ad Soyad"
                    placeholder="Örn: Muhammed F."
                    required
                  />
                  <Input
                    id="email"
                    type="email"
                    label="E-posta"
                    placeholder="ad@mail.com"
                    required
                  />
                  
                  <div className="space-y-1 w-full relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Size nasıl yardımcı olabilirim?"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none transition-colors"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" size="lg" type="submit" className="w-full">
                        Gönder
                    </Button>
                  </div>
                </form>
              </div>
            </section>

          </main>

          {/* Footer */}
          <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-8 px-4 text-gray-500 dark:text-gray-400 text-sm mt-auto transition-colors duration-200">
            <p className="mb-2">&copy; {new Date().getFullYear()} Muhammed Fatih Saltan. Tüm hakları saklıdır.</p>
            <p className="space-x-4">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg" aria-label="GitHub">
                GitHub
              </a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg" aria-label="LinkedIn">
                LinkedIn
              </a>
            </p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;