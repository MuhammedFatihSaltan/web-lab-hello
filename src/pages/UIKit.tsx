import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import Alert from "../components/Alert";

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 pb-24 transition-colors duration-200">
      
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          UI Kit
        </h1>

        {/* --- BUTTONS --- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white dark:border-gray-800">
            Buttons
          </h2>
          
          <div className="space-y-4">
            {/* Varyant 1: Renkler */}
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Temel Varyantlar (Kullanım: Ana eylemler, ikincil eylemler, hata/silme işlemleri, sade butonlar)</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            {/* Varyant 2: Boyutlar */}
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Boyut Seçenekleri (Kullanım: Dar alanlar, standart alanlar, vurgulanması gereken ana call-to-action'lar)</p>
              <div className="flex flex-wrap items-end gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* Varyant 3: Disabled */}
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Disabled (Kullanım: Form beklenirken veya yetki yokken)</p>
              <div className="flex flex-wrap items-end gap-3">
                <Button variant="primary" disabled>Disabled Primary</Button>
              </div>
            </div>
          </div>
        </section>

        {/* --- INPUTS --- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white dark:border-gray-800">
            Inputs
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Varyant 4: Normal */}
            <div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Normal Input (Standart veri girişi)</p>
               <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />
            </div>

            {/* Varyant 5: Hatalı */}
            <div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Hatalı Input (Doğrulama başarısız olduğunda)</p>
               <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur" defaultValue="Geçersiz veri" />
            </div>

            {/* Varyant 6: Help Text */}
            <div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Yardım Metinli (Kullanıcıya format ipucu verirken)</p>
               <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" placeholder="ad@mail.com" />
            </div>

            {/* Varyant 7: Disabled */}
            <div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Devre Dışı (Sadece okunabilir veya kilitli veriler)</p>
               <Input id="ui-dis" label="Disabled" disabled value="Düzenlenemez" />
            </div>
          </div>
        </section>

        {/* --- CARDS --- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white dark:border-gray-800">
            Cards
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Varyant 8: Elevated */}
            <div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Elevated (Gövde üzerinde yüzen ögeler içi)</p>
               <Card variant="elevated" title="Elevated Card">
                 Gölge ile yükseltilmiş, tıklandığında/dokunulduğunda derinlik algısı yaratan kart.
               </Card>
            </div>

            {/* Varyant 9: Outlined */}
             <div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Outlined (Daha sade ve ayrıştırıcı listeler için)</p>
               <Card variant="outlined" title="Outlined Card">
                 Kenarlık ile çevrili, arka plandan hafifçe ayrılan sade kart tasarımı.
               </Card>
            </div>

            {/* Varyant 10: Filled */}
             <div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Filled (Hafif gri vurgulu, içerik odaklı)</p>
               <Card variant="filled" title="Filled Card">
                 Arka planı hafif gri ile doldurulmuş, göz yormayan bilgi kutusu.
               </Card>
            </div>
          </div>
        </section>

        {/* --- ALERTS --- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white dark:border-gray-800">
            Alerts
          </h2>
          
          <div className="space-y-4">
             {/* Varyant 11: Info */}
             <div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Info (Bağlamsal veya genel bilgilendirme)</p>
               <Alert variant="info" title="Bilgi">Sistem güncellendi. Yeni özellikleri keşfedin.</Alert>
             </div>

             {/* Varyant 12: Success */}
             <div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Success (İşlem başarı doğruluk mesajı)</p>
               <Alert variant="success" title="Başarılı">Ayarlarınız kaydedildi!</Alert>
             </div>

             {/* Varyant 13: Warning */}
             <div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Warning (Dikkat gerektiren eylem öncesi)</p>
               <Alert variant="warning" title="Uyarı">Şifre süreniz dolmak üzere.</Alert>
             </div>

             {/* Varyant 14: Error */}
             <div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Error (Kritik hata bildirimi ve kapatılabilir)</p>
               <Alert variant="error" title="Hata" dismissible>Bağlantı kesildi. Tekrar sağlanamıyor.</Alert>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
}
