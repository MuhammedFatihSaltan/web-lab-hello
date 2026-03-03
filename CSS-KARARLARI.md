# CSS Kararları

## 1. Breakpoint Seçimi

- **Neden 640px ve 1024px seçtim?**  
  640px ve 1024px değerleri, PDF föyde önerilen ve pratikte mobil–tablet–masaüstü ayrımı için sık kullanılan kırılım noktalarıdır. 640px altını tipik mobil telefonlar, 640–1024px aralığını tabletler, 1024px üzerini ise masaüstü ve dizüstü cihazlar temsil ediyor.

- **İçeriğim bu noktalarda nasıl değişiyor?**  
  Mobilde tüm içerik dikey ve tek sütunlu, odak metin ve form alanlarında. 640px üzerindeki tablet görünümünde “Hakkımda” bölümü yatay düzene geçiyor ve form butonu tam genişlikten çıkıyor. 1024px üzerindeki masaüstünde ana içerik genişliği sınırlandırılıyor ve proje kartları en az üç sütunlu bir grid hâline geliyor.

## 2. Layout Tercihleri

- **Header için neden Flexbox seçtim?**  
  Header içinde logo/site adı ve navigasyon öğeleri tek eksen (yatay) boyunca hizalanıyor ve küçük ekranda dikey yığına geçmesi gerekiyor. Bu, tek boyutlu hizalama problemi olduğu için Flexbox ile hem yatay dağılımı hem de mobildeki dikey düzeni yönetmek daha basit ve okunabilir.

- **Proje kartları için neden Grid seçtim?**  
  Proje kartları satır ve sütunlardan oluşan bir ızgara üzerinde yer alıyor; sütun sayısının ekran genişliğine göre artıp azalması gerekiyor. Bu iki boyutlu yerleşim ihtiyacı için CSS Grid, sütun sayısını ve boşlukları kontrol etmede Flexbox’a göre daha güçlü ve deklaratif bir çözüm sunuyor.

- **auto-fit mi auto-fill mi kullandım, neden?**  
  `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));` tanımında **auto-fit** kullandım. Böylece geniş ekranlarda boş sütunlar bırakmak yerine mevcut kartlar kalan alanı doldurup genişliyor; bu da görsel olarak daha dengeli ve esnek bir ızgara düzeni sağlıyor.

## 3. Design Tokens

- **Hangi renk paletini seçtim ve neden?**  
  Ana renk olarak mavi tonları (`--color-primary`, `--color-secondary`) kullandım; bu tonlar portföy siteleri için güven ve profesyonellik hissi veriyor. Arka plan ve yüzeyler için açık gri/beyaz, metin için koyu gri seçerek kontrastı artırdım ve okunabilirliği güçlendirdim.

- **Spacing skalasını nasıl belirledim?**  
  PDF’te verilen 4px tabanlı ölçeği (0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem) doğrudan kullandım. Bu ölçek, küçükten büyüğe mantıklı artışlarla bileşenler arasında tutarlı dikey ve yatay boşluklar oluşturmamı sağlıyor.

- **Fluid typography için clamp değerlerini nasıl ayarladım?**  
  Metin boyutlarında minimum değeri okunabilirliği bozmayacak (en az 1rem civarı), maksimum değeri ise masaüstünde çok büyümeyecek şekilde sınırlandırdım. Orta parametrede `rem + vw` karışımı kullanarak ekran genişledikçe yazıların akıcı biçimde büyümesini, ancak belirli bir üst sınırda durmasını sağladım.

## 4. Responsive Stratejiler

- **Mobile-first yaklaşımını nasıl uyguladım?**  
  Tüm temel stil kurallarını (tipografi, boşluklar, form ve kart yapıları) media query olmadan, yani mobil varsayılan kabul ederek yazdım. Daha sonra sadece tablet ve masaüstü için `@media (min-width: 640px)` ve `@media (min-width: 1024px)` blokları ile ek düzenlemeler ekledim.

- **Hangi elemanlar breakpoint’lerde değişiyor?**  
  640px üzerinde “Hakkımda” bölümü tek sütundan yatay düzene geçiyor, beceri etiketleri sola yaslanıyor ve form gönder butonu tam genişlikten çıkıyor. 1024px üzerinde `main` genişliği sınırlandırılıyor ve proje kartları grid’de en az üç sütunlu görünüme zorlanıyor.

- **Görsel boyutlarını nasıl yönettim?**  
  Tüm görsellere `max-width: 100%` vererek kapsayıcıdan taşmalarını engelledim. Proje kartı görsellerinde sabit yükseklik ve `object-fit: cover` kullanarak oran bozulmadan, kartların üst kısmında tutarlı ve doldurulmuş bir görünüm elde ettim; profil fotoğrafında ise `aspect-ratio: 1` ve tam yuvarlak border-radius ile dengeli bir avatar görünümü sağladım.

