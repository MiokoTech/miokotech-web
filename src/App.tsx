import { useEffect, useState } from 'react'
import './App.css'

const translations = {
  id: {
    navFitur: 'Fitur',
    navCaraKerja: 'Cara Kerja',
    navFAQ: 'FAQ',
    navPricing: 'Akses',
    navBtn: 'Dapatkan Akses',
    heroBadge: 'Aplikasi Mod Manager Live TikTok Terbaik',
    heroTitle1: 'Bukan Sekadar Connector. Ini ',
    heroTitleHighlight: 'Installer & Manager.',
    heroDesc: 'Persiapkan sesi Live TikTok interaktif Anda dengan mudah. Aplikasi ini adalah manajer terpusat untuk menelusuri katalog game, memasang modifikasi secara instan, dan mengatur profil skenario permainan sebelum Anda mulai streaming.',
    heroBtnPrimary: 'Download App',
    heroBtnSecondary: 'Lihat Cara Kerja',
    featTitle: 'Kenapa MiokoTech ',
    featTitleHighlight: 'Berbeda?',
    featSub: 'Lebih dari sekadar jembatan API. Kami mengelola mod Anda secara native.',
    feat1Title: 'Katalog Game Bawaan',
    feat1Desc: 'Jelajahi berbagai game yang kompatibel langsung dari dalam aplikasi. Tidak perlu mencari mod secara manual di internet.',
    feat2Title: 'Auto-Installer',
    feat2Desc: 'Pilih game, pilih mod, klik install. Aplikasi secara otomatis menginjeksi mod ke direktori game Anda tanpa risiko rusak.',
    feat3Title: 'Manajemen Profil Kustom',
    feat3Desc: 'Kelola berbagai profil modifikasi untuk kebutuhan konten yang berbeda. Ganti pengaturan tingkat kesulitan dan skenario mod secara instan sebelum live.',
    wfTitle: 'Alur ',
    wfTitleHighlight: 'Sederhana',
    wf1Title: 'Download & Buka Aplikasi',
    wf1Desc: 'Setelah mendapatkan akses, cukup download aplikasi Mod Manager kami ke PC Anda. Login dengan aman dan sambungkan akun TikTok Anda.',
    wf2Title: 'Pilih Game & Mod',
    wf2Desc: 'Masuk ke menu Katalog. Pilih game yang ingin Anda mainkan (misal: GTA V). Beli atau klaim mod spesifik yang dirancang khusus untuk interaksi penonton.',
    wf3Title: 'Satu Klik Install & Mainkan!',
    wf3Desc: 'Klik "Install". Aplikasi kami akan menyiapkan file-file yang dibutuhkan ke folder game. Mulai Live Anda, jalankan game, dan saksikan kekacauan epik dari penonton Anda!',
    term1: '> Menghubungkan ke API Live... [OK]',
    term2: '> Mengunduh mod GTA V... [100%]',
    term3: '> Injeksi berhasil. Siap dimainkan!',
    faqTitle: 'Pertanyaan ',
    faqTitleHighlight: 'Umum',
    faqSub: 'Yang sering ditanyakan oleh calon pengguna.',
    faq1Q: 'Apakah menggunakan mod ini aman dari Banned?',
    faq1A: 'Sangat aman. Aplikasi ini beroperasi di mode Story/Offline dan secara otomatis memblokir akses ke mode Online (seperti GTA Online) untuk mencegah banned.',
    faq2Q: 'Apakah berat jika dijalankan bersamaan dengan OBS/TikTok Live Studio?',
    faq2A: 'Tidak. Mod Manager kami sangat ringan dan dioptimalkan agar tidak membebani CPU, sehingga performa game dan aplikasi streaming Anda tetap lancar.',
    faq3Q: 'Game apa saja yang didukung saat ini?',
    faq3A: 'Fokus utama kami saat ini adalah Grand Theft Auto V (GTA V) dengan berbagai skenario interaksi unik. Game lain akan ditambahkan dalam update mendatang.',
    prTitle: 'Mulai Petualangan ',
    prTitleHighlight: 'Anda',
    prSub: 'Dapatkan aplikasi manager sekarang dan mulai kelola mod live Anda.',
    prCardTitle: 'Akses Mod Manager',
    prCardPrice: 'Gratis',
    prFeat1: 'Aplikasi Mod Manager Desktop (Windows)',
    prFeat2: 'Akses ke Katalog Game & Mod',
    prFeat3: 'Auto-Installer untuk setiap pembelian Mod',
    prFeat4: 'Dukungan Update Prioritas',
    prFeat5: 'Anti-Leak & Lisensi Aman',
    prBtn: 'Install Sekarang',
    footerDesc: 'Disclaimer: MiokoTech adalah aplikasi pihak ketiga dan tidak berafiliasi secara resmi dengan Rockstar Games, Take-Two Interactive, ataupun TikTok.'
  },
  en: {
    navFitur: 'Features',
    navCaraKerja: 'Workflow',
    navFAQ: 'FAQ',
    navPricing: 'Access',
    navBtn: 'Get Access',
    heroBadge: 'The Ultimate TikTok Live Mod Manager',
    heroTitle1: 'Not Just a Connector. It\'s an ',
    heroTitleHighlight: 'Installer & Manager.',
    heroDesc: 'Prepare your interactive TikTok Live sessions effortlessly. This app is a centralized manager to browse game catalogs, install modifications instantly, and set up your gameplay scenario profiles before you start streaming.',
    heroBtnPrimary: 'Download App',
    heroBtnSecondary: 'See How it Works',
    featTitle: 'Why MiokoTech is ',
    featTitleHighlight: 'Different?',
    featSub: 'More than just an API bridge. We manage your mods natively.',
    feat1Title: 'Built-in Game Catalog',
    feat1Desc: 'Browse compatible games directly within the app. No need to manually search for mods on the internet.',
    feat2Title: 'Auto-Installer',
    feat2Desc: 'Select game, select mod, click install. The app automatically injects mods into your game directory safely.',
    feat3Title: 'Custom Profile Management',
    feat3Desc: 'Manage various mod profiles for different content needs. Switch difficulty settings and mod scenarios instantly before going live.',
    wfTitle: 'Simple ',
    wfTitleHighlight: 'Workflow',
    wf1Title: 'Download & Open App',
    wf1Desc: 'Download our Mod Manager to your PC. Log in securely and connect your TikTok account.',
    wf2Title: 'Select Game & Mod',
    wf2Desc: 'Go to the Catalog. Choose your game (e.g., GTA V). Claim or purchase specific mods designed for viewer interaction.',
    wf3Title: 'One-Click Install & Play!',
    wf3Desc: 'Click "Install". Our app sets up the required files. Start your Live, run the game, and watch the epic chaos unfold!',
    term1: '> Connecting to Live API... [OK]',
    term2: '> Downloading GTA V mod... [100%]',
    term3: '> Injection successful. Ready to play!',
    faqTitle: 'Frequently Asked ',
    faqTitleHighlight: 'Questions',
    faqSub: 'Common questions from our potential users.',
    faq1Q: 'Is using these mods safe from Bans?',
    faq1A: 'Absolutely. The app operates in Story/Offline mode and automatically blocks access to Online modes (like GTA Online) to prevent bans.',
    faq2Q: 'Is it heavy on the CPU when running with OBS/Live Studio?',
    faq2A: 'No. Our Mod Manager is highly optimized and lightweight, ensuring your game and streaming app performance stays smooth.',
    faq3Q: 'What games are currently supported?',
    faq3A: 'Our primary focus right now is Grand Theft Auto V (GTA V) with various unique interaction scenarios. More games will be added soon.',
    prTitle: 'Start Your ',
    prTitleHighlight: 'Adventure',
    prSub: 'Get the manager app now and start managing your live mods.',
    prCardTitle: 'Mod Manager Access',
    prCardPrice: 'Free',
    prFeat1: 'Desktop Mod Manager App (Windows)',
    prFeat2: 'Access to Game & Mod Catalog',
    prFeat3: 'Auto-Installer for every Mod',
    prFeat4: 'Priority Update Support',
    prFeat5: 'Anti-Leak & Secure License',
    prBtn: 'Install Now',
    footerDesc: 'Disclaimer: MiokoTech is a third-party application and is not officially affiliated with Rockstar Games, Take-Two Interactive, or TikTok.'
  }
};

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const t = translations[lang];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el);
    });

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <div className="mouse-glow"></div>
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      <div className="cyber-grid"></div>
      
      <nav className="navbar">
        <div className="nav-brand glitch" data-text="MiokoTech">Mioko<span className="text-gradient">Tech</span></div>
        <div className="nav-links">
          <a href="#features">{t.navFitur}</a>
          <a href="#workflow">{t.navCaraKerja}</a>
          <a href="#faq">{t.navFAQ}</a>
          <a href="#pricing">{t.navPricing}</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="lang-switcher">
            <button className={`lang-btn ${lang === 'id' ? 'active' : ''}`} onClick={() => setLang('id')}>ID</button>
            <span className="lang-sep">|</span>
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
          </div>
          <button className="nav-cta" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.navBtn}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content reveal">
            <div className="hero-badge">{t.heroBadge}</div>
            <h1>{t.heroTitle1} <span className="text-gradient glitch-text" data-text={t.heroTitleHighlight}>{t.heroTitleHighlight}</span></h1>
            <p>{t.heroDesc}</p>
            <div className="hero-buttons">
              <button className="btn-primary btn-shimmer" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>{t.heroBtnPrimary}</button>
              <button className="btn-secondary" onClick={() => document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' })}>{t.heroBtnSecondary}</button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <h2 className="section-title reveal">{t.featTitle} <span className="text-gradient">{t.featTitleHighlight}</span></h2>
          <p className="section-subtitle reveal">{t.featSub}</p>
          
          <div className="features-grid">
            <div className="feature-card glass-panel tilt-3d reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="feature-icon">🎮</div>
              <h3>{t.feat1Title}</h3>
              <p>{t.feat1Desc}</p>
            </div>
            <div className="feature-card glass-panel tilt-3d reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="feature-icon">⚡</div>
              <h3>{t.feat2Title}</h3>
              <p>{t.feat2Desc}</p>
            </div>
            <div className="feature-card glass-panel tilt-3d reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="feature-icon">🔥</div>
              <h3>{t.feat3Title}</h3>
              <p>{t.feat3Desc}</p>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="workflow">
          <div className="workflow-container">
            <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>{t.wfTitle} <span className="text-gradient">{t.wfTitleHighlight}</span></h2>
            
            <div className="workflow-step">
              <div className="step-content reveal-left">
                <span className="step-number">01</span>
                <h3>{t.wf1Title}</h3>
                <p>{t.wf1Desc}</p>
              </div>
              <div className="step-visual reveal-right">
                <div className="abstract-shape">APP</div>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-content reveal-right">
                <span className="step-number">02</span>
                <h3>{t.wf2Title}</h3>
                <p>{t.wf2Desc}</p>
              </div>
              <div className="step-visual reveal-left">
                <div className="abstract-shape shape-2">MOD</div>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-content reveal-left">
                <span className="step-number">03</span>
                <h3>{t.wf3Title}</h3>
                <p>{t.wf3Desc}</p>
              </div>
              <div className="step-visual reveal-right">
                <div className="abstract-shape shape-3"><span>PLAY</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq">
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>{t.faqTitle} <span className="text-gradient">{t.faqTitleHighlight}</span></h2>
          <p className="section-subtitle reveal" style={{ textAlign: 'center' }}>{t.faqSub}</p>

          <div className="faq-item reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="faq-question">{t.faq1Q}</div>
            <div className="faq-answer">{t.faq1A}</div>
          </div>
          <div className="faq-item reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="faq-question">{t.faq2Q}</div>
            <div className="faq-answer">{t.faq2A}</div>
          </div>
          <div className="faq-item reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="faq-question">{t.faq3Q}</div>
            <div className="faq-answer">{t.faq3A}</div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing">
          <h2 className="section-title reveal">{t.prTitle} <span className="text-gradient">{t.prTitleHighlight}</span></h2>
          <p className="section-subtitle reveal">{t.prSub}</p>
          
          <div className="pricing-card reveal">
            <div className="vip-badge">VIP ACCESS</div>
            <h3>{t.prCardTitle}</h3>
            <div className="price">{t.prCardPrice}</div>
            <ul className="pricing-features">
              <li>{t.prFeat1}</li>
              <li>{t.prFeat2}</li>
              <li>{t.prFeat3}</li>
              <li>{t.prFeat4}</li>
              <li>{t.prFeat5}</li>
            </ul>
            <a 
              href="https://github.com/miokotech/mod-manager/releases/latest" 
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-block btn-shimmer"
              style={{ textAlign: 'center', display: 'inline-block', boxSizing: 'border-box' }}
            >
              {t.prBtn}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-logo">Mioko<span className="text-gradient">Tech</span></div>
        <div className="footer-content">
          <div className="footer-disclaimer">
            <p>&copy; {new Date().getFullYear()} MiokoTech. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem', color: '#5a5a6a' }}>{t.footerDesc}</p>
          </div>
          <div className="footer-social">
            <a href="https://discord.gg/miokotech" target="_blank" rel="noreferrer" className="social-link" title="Discord">Discord</a>
            <a href="https://wa.me/6285720090912" target="_blank" rel="noreferrer" className="social-link" title="WhatsApp">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        title="Kembali ke atas"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  )
}

export default App
