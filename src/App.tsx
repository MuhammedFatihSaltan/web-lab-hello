import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <h1 className="site-title">Ahmet Yılmaz</h1>
        <p>Web Geliştirici</p>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>

          <div className="about-content">
            <figure>
              <img
                src="https://via.placeholder.com/150"
                alt="Ahmet Yılmaz'ın profil fotoğrafı, mavi gömlekli, gülümseyen"
                width="150"
                height="150"
              />
              <figcaption>Ahmet Yılmaz - Web Geliştirici</figcaption>
            </figure>

            <div>
              <p>
                Merhaba! Ben Ahmet Yılmaz, Bilgisayar Mühendisliği öğrencisiyim.
                Modern web teknolojileri ve kullanıcı deneyimi tasarımına ilgi duyuyorum.
              </p>

              <h3>Kullandığım Teknolojiler</h3>
              <ul
                className="skill-tags"
                role="list"
                aria-label="Beceri etiketleri"
              >
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projelerim</h2>

          <div className="project-grid">
            <article className="project-card">
              <img
                src="https://via.placeholder.com/300x200"
                alt="E-ticaret sitesi ana sayfa ekran görüntüsü, ürün kartları ve arama çubuğu içeriyor"
                width="300"
                height="200"
              />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve TypeScript ile geliştirilmiş modern e-ticaret platformu.</p>
              <ul className="skill-tags" role="list" aria-label="E-Ticaret projesinde kullanılan teknolojiler">
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Kişisel blog sitesi ekran görüntüsü, makale listesi ve kenar çubuğu içeriyor"
                width="300"
                height="200"
              />
              <h3>Kişisel Blog</h3>
              <p>İçerik yönetim sistemi entegreli kişisel blog uygulaması.</p>
              <ul className="skill-tags" role="list" aria-label="Blog projesinde kullanılan teknolojiler">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>
              
              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
        
      </main>

      <footer>
        <p>&copy; 2025 Ahmet Yılmaz. Tüm hakları saklıdır.</p>
        <p>
          <a href="https://github.com/kullaniciadin" aria-label="GitHub profilimi yeni sekmede aç">GitHub</a> |  
          <a href="https://linkedin.com/in/kullaniciadin" aria-label="LinkedIn profilim">LinkedIn</a>
        </p>
      </footer>
    </>
  )
}

export default App