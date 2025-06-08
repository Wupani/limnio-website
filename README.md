# 🍋 Limnio Portfolio Website

> **Basit fikirlerle güçlü deneyimler** - Emre Akyol'un resmi portfolyo web sitesi

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://wupani.github.io/limnio-website/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🚀 Canlı Demo

**[wupani.github.io/limnio-website](https://wupani.github.io/limnio-website/)**

## 📱 Hakkında

Limnio, kullanıcı dostu mobil uygulamalar ve web çözümleri geliştiren **Emre Akyol**'un kişisel portfolyo web sitesidir. Modern tasarım prensiplerine dayanan bu site, üç ana projeyi sergiler ve profesyonel bir geliştirici profili sunar.

### ✨ Ana Özellikler

- **🎨 Modern Brand Identity**: Limnio'nun limon temalı brand kimliği
- **🌓 Dark/Light Mode**: Otomatik kayıt ile tema değiştirme
- **📱 Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **⚡ Performance Optimized**: Lazy loading ve optimizasyonlar
- **🎭 Advanced Animations**: Scroll-based animasyonlar
- **🌐 Multi-language**: Türkçe/İngilizce dil desteği
- **🔐 KVKV Uyumlu**: Türkiye veri koruma yasalarına uygun

### 🎯 Sergilenen Projeler

1. **Lilyum Counter** - Modern sayaç uygulaması (React Native)
2. **HR Portal** - İnsan kaynakları yönetim sistemi (Next.js)
3. **GymDesk** - Spor salonu yönetim sistemi (Electron + React)

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
├── index.html              # Ana sayfa (1840+ lines)
├── style.css               # Stil dosyası (2500+ lines, 50KB)
├── script.js               # JavaScript (1800+ lines, 75KB)
├── profile-photo.jpg       # Profil fotoğrafı
├── CNAME                   # Custom domain configuration
├── LICENSE                 # MIT License
├── .gitignore              # Git ignore rules
├── README.md               # Bu dosya
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions workflow
```

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
--tertiary: #06b6d4;       /* Cyan - tech emphasis */

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

### v2.0 Roadmap
- [ ] **Blog Section**: Teknik yazılar ve deneyimler
- [ ] **Case Studies**: Proje detay sayfaları
- [ ] **Admin Panel**: İçerik yönetim sistemi
- [ ] **PWA Support**: Progressive Web App özellikleri
- [ ] **Multi-language**: Tam çok dil desteği

### Performance Goals
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