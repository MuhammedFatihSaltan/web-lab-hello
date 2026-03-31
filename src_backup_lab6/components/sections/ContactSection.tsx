import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 text-center tracking-tighter">
          Haydi Bir Proje <span className="text-blue-600">Başlatalım</span>
        </h2>
        <p className="text-xl text-gray-500 mb-12 text-center max-w-xl mx-auto font-medium leading-relaxed">
          Sizin için en uygun çözümü bulmak üzere benimle iletişime geçin. 
          Görüşlerinizi, projelerinizi veya tekliflerinizi bekliyorum.
        </p>
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-xl p-8 transition-transform duration-500 hover:shadow-2xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
