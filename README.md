# 🍋 Limnio Portfolio Website

> **Basit fikirlerle güçlü deneyimler** - Emre Akyol'un resmi portfolyo web sitesi

## 🏷️ **INTELLECTUAL PROPERTY NOTICE**

**⚖️ Bu proje tamamen Emre Akyol'un orijinal çalışmasıdır.**  
📄 **Detaylı sahiplik beyanı:** [LIMNIO_PROJECT_OWNERSHIP.md](./LIMNIO_PROJECT_OWNERSHIP.md)  
📅 **İlk commit:** 6 Haziran 2025, 09:49:41 +0300  
🔐 **Fikir sahibi:** Emre Akyol (wupaniyazilim@gmail.com)

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://wupani.github.io/limnio-website/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🚀 Canlı Demo

**[wupani.github.io/limnio-website](https://wupani.github.io/limnio-website/)**

## 📱 Hakkında

Limnio, yazılım geliştirme çözümleri sunan **Emre Akyol**'un kişisel portfolyo web sitesidir. Mobil uygulamalardan web platformlarına, desktop çözümlerinden otomasyon sistemlerine kadar geniş bir yelpazede hizmet vermektedir. Modern tasarım prensiplerine dayanan bu site, profesyonel bir geliştirici profili ve kapsamlı yasal uyumluluk sunar.

### ✨ Ana Özellikler

- **🎨 Modern Brand Identity**: Limnio'nun limon temalı brand kimliği
- **🌓 Dark/Light Mode**: Otomatik kayıt ile tema değiştirme
- **📱 Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **⚡ Performance Optimized**: Lazy loading ve optimizasyonlar
- **🎭 Advanced Animations**: Scroll-based animasyonlar
- **🌐 Multi-language**: Türkçe/İngilizce dil desteği
- **🔐 KVKK Uyumlu**: Türkiye veri koruma yasalarına uygun
- **🛡️ Security Reports**: Her proje için detaylı güvenlik bilgileri
- **🎯 Modern CTA Button**: Optimized hero button with smooth interactions
- **📋 Comprehensive Footer**: 5 kategoride 25+ yasal doküman ve link
- **🏢 Professional Branding**: "Yazılım Geliştirme Stüdyosu" tanımı
- **📱 Contact Forms**: KVKK uyumlu çok aşamalı iletişim formları

### 🎯 Sergilenen Projeler

1. **🌸 Lilyum Counter** - Zarif sayaç uygulaması (Android, Material Design)
2. **📄 CV Builder** - Türkçe CV oluşturucu (React, GitHub Pages)
3. **💪 GymDesk** - Spor salonu yönetim sistemi (Electron + React)
4. **👥 HR Portal** - İnsan kaynakları CRM sistemi (Google Apps Script)

## 🛠️ Teknolojiler

### Frontend
- **HTML5** - Semantic markup with accessibility
- **CSS3** - Modern styling, CSS Grid, Flexbox, Custom Properties
- **JavaScript (ES6+)** - Modular architecture with performance optimizations
- **Inter & JetBrains Mono** - Professional typography system
- **Font Awesome** - Comprehensive icon library

### Modern Features
- **CSS Custom Properties** - Comprehensive design system
- **IntersectionObserver API** - Performance-optimized scroll animations
- **localStorage** - Theme persistence
- **Lazy Loading** - Image optimization
- **RequestAnimationFrame** - Smooth animations

### Design System
- **Color Theme**: Lemon yellow (#eab308) primary with green/orange accents
- **Typography Scale**: Responsive font sizing with Inter font family
- **Spacing System**: Consistent spacing scale (4px base)
- **Z-index System**: Organized layering system

### Deployment
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - Otomatik deployment workflow
- **Custom Domain Ready** - CNAME dosyası ile hazır

## 📂 Proje Yapısı

```
limnio-website/
├── index.html              # Ana sayfa (2500+ lines)
├── style.css               # Stil dosyası (6150+ lines, 120KB)
├── script.js               # JavaScript (2800+ lines, 115KB)
├── profile-photo.jpg       # Profil fotoğrafı (103KB)
├── CNAME                   # Custom domain configuration
├── LICENSE                 # MIT License
├── .gitignore              # Git ignore rules
├── README.md               # Bu dosya
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions workflow
```

### 🔥 Yeni Özellikler (v1.3)

- **📋 Complete Legal Footer**: 5 kategoride kapsamlı footer sistemi
  - Site Kullanımı (Genel Koşullar, Kullanım Şartları, Site Haritası, Erişilebilirlik)
  - Veri Politikamız (Aydınlatma Metni, KVKK, Bilgi Güvenliği, Çerez, Veri Saklama)
  - Yardım (Soru/Öneriler, SSS, Teknik Destek, Proje Süreci)
  - Hakkımızda (Profil, Projeler, Sertifikalar, İletişim, Kariyer, Basın Kiti)
  - Sosyal Medya (GitHub, LinkedIn, Instagram, E-posta)

- **🏢 Updated Branding**: "Yazılım Geliştirme Stüdyosu" → Geniş hizmet yelpazesi
- **🍋 Logo Visibility Fix**: Footer'da limon ikonu görünürlük sorunu çözüldü
- **📝 Detailed Content**: Her footer linki için kapsamlı, profesyonel içerik
- **⚖️ KVKK Compliance**: Tam Türkiye yasal uyumluluk (25+ doküman)
- **🎨 Modern Typography**: Inter font ailesi ile gelişmiş tipografi

## 🔧 Kurulum & Geliştirme

### Yerel Geliştirme
```bash
# Repository'yi klonlayın
git clone https://github.com/Wupani/limnio-website.git

# Proje dizinine gidin
cd limnio-website

# Basit HTTP server başlatın
python3 -m http.server 8000

# Tarayıcıda açın: http://localhost:8000
```

### GitHub Pages Deployment
```bash
# Değişikliklerinizi commit edin
git add .
git commit -m "feat: Update content"

# GitHub'a push edin
git push origin main

# GitHub Actions otomatik olarak deploy edecek
```

## 🎨 Tasarım Sistemi

### Brand Colors
```css
/* Primary Brand Colors */
--primary: #eab308;        /* Lemon yellow - main brand */
--secondary: #22c55e;      /* Fresh green - leaf accent */
--accent: #f97316;         /* Orange - CTA highlights */
--security: #3b82f6;       /* Blue - security elements */
--tertiary: #06b6d4;       /* Cyan - tech emphasis */

/* Modern Hero Button */
--hero-primary: #3b82f6;   /* Blue gradient start */
--hero-secondary: #6366f1; /* Blue gradient end */

/* Dark Mode Support */
--surface: #1f2937;        /* Dark surfaces */
--surface-variant: #374151; /* Card backgrounds */
```

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive Sizing**: Fluid typography with clamp()

### Animations
- **Scroll Animations**: IntersectionObserver based
- **Hover Effects**: Brand-specific shadow systems
- **Theme Transitions**: Smooth color transitions
- **Performance**: Hardware acceleration enabled

### UI Components
- **Hero Button**: Modern blue gradient with subtle hover effects
- **Security Buttons**: Certificate icon with blue styling
- **Project Cards**: Consistent grid layout with responsive design
- **Modal System**: Comprehensive security reports for each project
- **Theme Toggle**: Smooth dark/light mode transitions

## 📱 Responsive Breakpoints

```css
/* Mobile First Design */
320px+    /* Small phones */
480px+    /* Large phones */  
768px+    /* Tablets */
1024px+   /* Small desktop */
1200px+   /* Large desktop */
1440px+   /* Extra large screens */
```

## ⚡ Performance Optimizations

### Core Optimizations
- **Lazy Loading**: Images and heavy content
- **Critical CSS**: Above-the-fold optimization
- **RequestAnimationFrame**: Smooth 60fps animations
- **Debounced Events**: Optimized scroll/resize handlers
- **CSS containment**: Layout and paint optimizations

### Lighthouse Scores
- **Performance**: 95+ (Mobile/Desktop)
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Loading Performance
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **First Input Delay**: <100ms

## 🌓 Dark Mode Implementation

### Features
- **System Preference Detection**: Respects OS theme
- **Manual Toggle**: Sun/Moon icon toggle button
- **Persistent Storage**: Theme choice saved in localStorage
- **Smooth Transitions**: 0.3s ease-in-out transitions
- **Comprehensive Coverage**: All UI elements themed

### Implementation
```javascript
// Theme system with localStorage persistence
const initThemeSystem = () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Auto-detection and manual override logic
};
```

## 🔐 Güvenlik & Gizlilik

- **KVKK Uyumlu**: Türk veri koruma yasalarına tam uyum
- **SSL Sertifikası**: GitHub Pages otomatik HTTPS
- **Form Güvenliği**: Formspree güvenli form işleme
- **No Tracking**: Kullanıcı takibi ve analitik yok
- **Content Security**: XSS koruması

## 📧 İletişim Formu

Web sitesindeki iletişim formu **Formspree** servisi kullanılarak çalışmaktadır:
- **Form ID**: `mzzgdzzr`
- **Hedef Email**: `wupaniyazilim@gmail.com`
- **KVKK Uyumlu**: Açık rıza beyanı ile
- **Spam Protection**: Honeypot ve validation

## 🎯 Google Play Store Entegrasyonu

Bu web sitesi özellikle **Google Play Store** geliştirici doğrulaması için tasarlanmıştır:

- ✅ **Developer Website**: Profesyonel geliştirici profili
- ✅ **App Showcase**: Tüm uygulamalar detaylı şekilde
- ✅ **Privacy Policy**: KVKK uyumlu gizlilik politikası
- ✅ **Contact Information**: Doğrulanabilir iletişim bilgileri
- ✅ **Professional Design**: Kurumsal görünüm ve kullanıcı deneyimi

## 🚀 Gelecek Planları

### ✅ v1.2 Tamamlanan Özellikler
- [x] **Security Reports**: Kapsamlı güvenlik modal sistemi
- [x] **Modern UI**: Hero buton optimizasyonu ve card layout iyileştirmeleri
- [x] **Enhanced Translations**: Tam çift dil desteği
- [x] **Project Showcase**: 4 proje ile genişletilmiş portfolyo

### 🎯 v1.3 Roadmap
- [ ] **Blog Section**: Teknik yazılar ve deneyimler
- [ ] **Case Studies**: Proje detay sayfaları
- [ ] **CV Download**: PDF CV indirme özelliği
- [ ] **Contact Form Enhancement**: Gelişmiş iletişim formu
- [ ] **Analytics Dashboard**: Ziyaretçi istatistikleri

### 🚀 v2.0 Long-term Goals
- [ ] **Admin Panel**: İçerik yönetim sistemi
- [ ] **PWA Support**: Progressive Web App özellikleri  
- [ ] **Multi-language**: Tam çok dil desteği (EN/TR/DE)
- [ ] **API Integration**: GitHub ve Google Play Store API'leri

### Performance Goals
- [x] **Modern Design**: ✅ Tamamlandı (mavi security butonları)
- [x] **Responsive Layout**: ✅ Tamamlandı (grid sistem)
- [ ] **Lighthouse 100**: Tüm kategorilerde mükemmel skor
- [ ] **Core Web Vitals**: Google'ın tüm metriklerinde yeşil
- [ ] **Bundle Size**: <100KB total bundle size

## 📄 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

### Commit Conventions
```
feat: new feature
fix: bug fix
docs: documentation update
style: formatting changes
refactor: code refactoring
perf: performance improvements
test: adding tests
```

## ⚖️ **INTELLECTUAL PROPERTY & OWNERSHIP**

### **🏷️ Project Ownership Declaration**
Bu proje **%100 Emre Akyol'un orijinal çalışmasıdır**. Tüm kod, tasarım, içerik ve "Limnio" marka elementi tamamen benim fikri mülkiyetimdir.

**📄 Resmi Sahiplik Beyanı:** [LIMNIO_PROJECT_OWNERSHIP.md](./LIMNIO_PROJECT_OWNERSHIP.md)

### **🔐 Verification Data**
- **İlk Commit:** 2025-06-06 09:49:41 +0300
- **Commit Hash:** `f1bc4a470bea98c3f762bf2413500e810f304e8a`
- **Total Commits:** 37+ (5 gün sürekli geliştirme)
- **Code Lines:** 10,000+ lines (100% original)
- **Author:** Emre Akyol <wupaniyazilim@gmail.com>

### **⚠️ Usage Rights**
- ✅ **Educational use** with proper attribution allowed
- ❌ **Commercial use** without permission prohibited
- ❌ **"Limnio" brand usage** strictly forbidden
- ❌ **Content copying** without attribution prohibited

**Unauthorized use may result in legal action.** 

---

## 📞 İletişim

**Emre Akyol (Limnio)** - Yazılım Geliştirici

- 📧 **Email**: wupaniyazilim@gmail.com
- 💼 **LinkedIn**: [Emre Akyol](https://linkedin.com/in/emre-akyol-a5667b274/)
- 🐙 **GitHub**: [@Wupani](https://github.com/Wupani)
- 📱 **Instagram**: [@limniodev](https://instagram.com/limniodev)
- 🌐 **Website**: [wupani.github.io/limnio-website](https://wupani.github.io/limnio-website/)

## 📊 Stats

![GitHub Repo stars](https://img.shields.io/github/stars/Wupani/limnio-website?style=social)
![GitHub forks](https://img.shields.io/github/forks/Wupani/limnio-website?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Wupani/limnio-website?style=social)

---

<div align="center">
  <img src="https://raw.githubusercontent.com/Wupani/limnio-website/main/profile-photo.jpg" alt="Emre Akyol" width="100" style="border-radius: 50%;">
  <br><br>
  <strong>Limnio</strong> - Basit fikirlerle güçlü deneyimler 🍋<br>
  <em>Modern web solutions with passion and precision</em>
</div>