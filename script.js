// Scroll to section function - Enhanced
window.scrollToSection = function(sectionId) {
    console.log('Attempting to scroll to:', sectionId); // Debug log
    const targetSection = document.getElementById(sectionId);
    console.log('Target section found:', targetSection); // Debug log
    
    if (targetSection) {
        // Calculate offset for navbar
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight;
        
        // Smooth scroll to target
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
        
        // Update active nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
        
        console.log('Scroll completed!'); // Debug log
    } else {
        console.error('Section not found:', sectionId); // Debug log
    }
};

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isActive = hamburger.classList.contains('active');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Enhanced body scroll management
    if (!isActive) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    } else {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
    
    // Add visual feedback
    hamburger.style.transform = isActive ? 'scale(1)' : 'scale(1.1)';
    setTimeout(() => {
        hamburger.style.transform = 'scale(1)';
    }, 150);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }
    }
});

// Handle escape key for mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active nav link highlighting
function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);

// Hero projects button - Better approach
document.addEventListener('DOMContentLoaded', function() {
    const heroProjectsBtn = document.getElementById('hero-projects-btn');
    console.log('Hero button found:', heroProjectsBtn); // Debug log
    
    if (heroProjectsBtn) {
        heroProjectsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Hero button clicked!'); // Debug log
            scrollToSection('projects');
        });
    }
});

// Enhanced smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Add loading state to clicked link
            const clickedLink = this;
            if (clickedLink.classList.contains('nav-link')) {
                navLinks.forEach(link => link.classList.remove('loading'));
                clickedLink.classList.add('loading');
                
                // Enhanced loading timeout with smooth transition
                setTimeout(() => {
                    clickedLink.classList.remove('loading');
                }, 800);
            }
            
            // Calculate navbar offset for accurate positioning
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            // Smooth scroll with easing
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Enhanced mobile menu close with transition
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                // Add visual feedback for mobile nav close
                setTimeout(() => {
                    document.body.style.overflow = '';
                }, 300);
            }
        }
    });
});

// Initialize active nav link on page load
setActiveNavLink();

// Modal functionality
const openModalBtn = document.getElementById('openContactModal');
const closeModalBtn = document.getElementById('closeContactModal');
const modal = document.getElementById('contactModal');

if (openModalBtn && closeModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Form step functionality
let currentStep = 1;
const totalSteps = 3;

window.nextStep = function() {
    if (currentStep < totalSteps) {
        // Validate current step
        const currentStepEl = document.querySelector(`[data-step="${currentStep}"]`);
        const requiredInputs = currentStepEl.querySelectorAll('[required]');
        let isValid = true;

        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ef4444';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });

        if (isValid) {
            document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');
            currentStep++;
            document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
        }
    }
};

window.prevStep = function() {
    if (currentStep > 1) {
        document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');
        currentStep--;
        document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
    }
};

// KVKK Modal functionality
const kvkkModal = document.getElementById('kvkkModal');
const closeKvkkBtn = document.getElementById('closeKvkkModal');
const kvkkCheckbox = document.getElementById('kvkkConsent');

window.openKvkkModal = function() {
    if (kvkkModal) {
        kvkkModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

if (closeKvkkBtn) {
    closeKvkkBtn.addEventListener('click', () => {
        kvkkModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

if (kvkkModal) {
    kvkkModal.addEventListener('click', (e) => {
        if (e.target === kvkkModal) {
            kvkkModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

window.acceptKvkk = function() {
    if (kvkkCheckbox) {
        kvkkCheckbox.checked = true;
        kvkkModal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Show success message
        showNotification('✅ KVKK onayınız alındı. Kişisel bilgilerinizi güvenle paylaşabilirsiniz.', 'success');
    }
};

window.declineKvkk = function() {
    if (kvkkCheckbox) {
        kvkkCheckbox.checked = false;
        kvkkModal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Show info message and clear personal info fields
        showNotification('ℹ️ KVKK onayı reddedildi. Sadece proje açıklamanızı yazarak talebinizi iletebilirsiniz.', 'info');
        
        // Clear personal info fields
        const personalFields = ['name', 'email', 'phone', 'company'];
        personalFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.value = '';
                field.disabled = true;
            }
        });
    }
};

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// KVKK Modal Functions
window.openKvkkModal = function() {
    const kvkkModal = document.getElementById('kvkkModal');
    if (kvkkModal) {
        kvkkModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeKvkkModal = function() {
    const kvkkModal = document.getElementById('kvkkModal');
    if (kvkkModal) {
        kvkkModal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.acceptKvkk = function() {
    const kvkkConsent = document.getElementById('kvkkConsent');
    if (kvkkConsent) {
        kvkkConsent.checked = true;
        // Enable personal fields
        const personalFields = ['name', 'email', 'phone', 'company'];
        personalFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.disabled = false;
            }
        });
    }
    closeKvkkModal();
};

window.declineKvkk = function() {
    const kvkkConsent = document.getElementById('kvkkConsent');
    if (kvkkConsent) {
        kvkkConsent.checked = false;
        // Keep personal fields disabled and clear them
        const personalFields = ['name', 'email', 'phone', 'company'];
        personalFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.value = '';
                field.disabled = true;
            }
        });
    }
    closeKvkkModal();
};

// KVKK Modal close button  
const kvkkCloseBtn = document.getElementById('closeKvkkModal');
if (kvkkCloseBtn) {
    kvkkCloseBtn.addEventListener('click', closeKvkkModal);
}

// Watch checkbox changes
if (kvkkCheckbox) {
    kvkkCheckbox.addEventListener('change', function() {
        const personalFields = ['name', 'email', 'phone', 'company'];
        
        if (this.checked) {
            personalFields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (field) {
                    field.disabled = false;
                }
            });
        } else {
            personalFields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (field) {
                    field.value = '';
                    field.disabled = true;
                }
            });
        }
    });
}

// Details dropdown functionality
window.toggleDetails = function() {
    const detailsContent = document.getElementById('detailsContent');
    const detailsToggle = document.querySelector('.details-toggle');
    
    if (detailsContent && detailsToggle) {
        if (detailsContent.classList.contains('active')) {
            detailsContent.classList.remove('active');
            detailsToggle.classList.remove('active');
        } else {
            detailsContent.classList.add('active');
            detailsToggle.classList.add('active');
        }
    }
};

// Contact form handling with Formspree
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
        submitBtn.disabled = true;
        
        // Collect form data
        const formData = new FormData();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const company = document.getElementById('company').value;
        const category = document.getElementById('category').value;
        const budget = document.getElementById('budget').value;
        const timeline = document.getElementById('timeline').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create email content
        let emailContent = `Yeni Proje Talebi\n\n`;
        
        if (name) emailContent += `Ad Soyad: ${name}\n`;
        if (email) emailContent += `E-posta: ${email}\n`;
        if (phone) emailContent += `Telefon: ${phone}\n`;
        if (company) emailContent += `Şirket: ${company}\n`;
        if (category) emailContent += `Kategori: ${category}\n`;
        if (budget) emailContent += `Bütçe: ${budget}\n`;
        if (timeline) emailContent += `Süre: ${timeline}\n`;
        if (subject) emailContent += `Konu: ${subject}\n`;
        
        emailContent += `\nProje Açıklaması:\n${message}`;
        
        formData.append('email', 'wupaniyazilim@gmail.com');
        formData.append('subject', subject || 'Yeni Proje Talebi');
        formData.append('message', emailContent);
        
        // Send email using Formspree
        const FORMSPREE_ID = 'mzzgdzzr'; // Formspree form ID
        
        fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Gönderildi!';
                submitBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
                
                // Clear form
                contactForm.reset();
                currentStep = 1;
                document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
                document.querySelector('[data-step="1"]').classList.add('active');
                
                // Show success notification
                showNotification('✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.', 'success');
                
                // Close modal
                modal.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Hata!';
            submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            
            showNotification('❌ Mesaj gönderilemedi. Lütfen doğrudan e-posta ile iletişime geçin.', 'error');
        })
        .finally(() => {
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        });

    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .about-content, .contact-content, .tech-card, .criteria-card');
    animatedElements.forEach(el => {
        if (el) {
            observer.observe(el);
        }
    });
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification('🎉 Konami code aktivated! You found the easter egg!', 'success');
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 3000);
        konamiCode = [];
    }
});

// Console message
console.log(`
🍋 Limnio - Emre Akyol
👨‍💻 Web Developer & Mobile App Creator

Thanks for checking the console! 
If you're a developer too, let's connect!

📧 wupaniyazilim@gmail.com
🔗 https://linkedin.com/in/emre-akyol-a5667b274
🐙 https://github.com/Wupani
`);

// ============================
// MULTILINGUAL SUPPORT SYSTEM
// ============================

// Translation data
const translations = {
    tr: {
        // Navigation
        'nav.home': 'Ana Sayfa',
        'nav.projects': 'Projelerim',
        'nav.about': 'Hakkımda',
        'nav.technologies': 'Teknolojiler',
        'nav.contact': 'İletişim',
        
        // Hero Section
        'hero.subtitle': 'Basit fikirlerle güçlü deneyimler',
        'hero.cta': 'Projelerim',
        
        // Sections
        'sections.projects': 'Projelerim',
        'sections.about': 'Hakkımda',
        'sections.technologies': 'Teknolojiler & Yazılım Dilleri',
        'sections.technologies.subtitle': 'Kullandığım teknolojiler ve yazılım dilleri hakkında detaylı bilgiler',
        'sections.contact': 'İletişim',
        
        // Projects
        'project.lilyum.title': 'Lilyum Sayacı',
        'project.lilyum.description': 'Zarif ve kullanıcı dostu geri sayım uygulaması. Önemli etkinlikleriniz için stile geri sayım yapın.',
        'project.hr.title': 'HR Portal',
        'project.hr.description': 'Kapsamlı İnsan Kaynakları CRM uygulaması. Çalışan yönetimi, işe alım süreçleri ve performans takibi için geliştirilmiş modern web uygulaması.',
        'project.coming.title': 'Yakında...',
        'project.coming.description': 'Yeni projeler geliştirme aşamasında. Takipte kalın!',
        
        // About
        'about.greeting': 'Merhaba Ben <span class="highlight">Emre Akyol</span> 👋',
        'about.intro': '<strong>Limnio</strong> markası altında, hayatı kolaylaştıran mobil uygulamalar ve web çözümleri geliştiriyorum. Karmaşık problemleri basit, zarif ve kullanıcı dostu çözümlere dönüştürmekte uzmanım.',
        'about.mission': '<i class="fas fa-quote-left"></i> Teknoloji sadece bir araç, asıl önemli olan insanların hayatına dokunmak ve onlara değer katmaktır. <i class="fas fa-quote-right"></i>',
        
        // Contact
        'contact.title': 'Benimle İletişime Geçin',
        'contact.description': 'Projelerim hakkında sorularınız veya iş birliği önerileriniz için bana ulaşabilirsiniz.',
        'contact.cta': 'Proje Talebi Oluştur',
        'contact.cta.title': '🚀 Projenizi Hayata Geçirelim!',
        'contact.cta.desc': 'Fikirlerinizi gerçeğe dönüştürmek için hemen iletişime geçin. Size özel çözümler sunmak için buradayım.',
        'contact.cta.feature1': 'Hızlı Çözüm',
        'contact.cta.feature2': 'Kaliteli Kod',
        'contact.cta.feature3': 'Uzun Vadeli Destek',
        
        // About Details
        'about.details.toggle': 'Daha Fazla Bilgi',
        'about.basic.title': 'Temel Bilgiler',
        'about.basic.location.label': 'Konum',
        'about.basic.location.value': 'Türkiye, Denizli',
        'about.basic.experience.label': 'Deneyim',
        'about.basic.experience.value': '3+ Yıl Aktif Geliştirme',
        'about.basic.languages.label': 'Diller',
        'about.basic.languages.value': 'Türkçe (Ana dil), İngilizce (İyi)',
        
        // About Expertise
        'about.expertise.title': 'Uzmanlık Alanlarım',
        'about.expertise.mobile.title': 'Mobil Uygulama Geliştirme',
        'about.expertise.mobile.desc': 'Native Android uygulamalar, React Native ve Flutter ile cross-platform çözümler',
        'about.expertise.web.title': 'Web Geliştirme',
        'about.expertise.web.desc': 'Modern web uygulamaları, responsive tasarım ve Google Apps Script entegrasyonları',
        'about.expertise.design.title': 'UI/UX Tasarım',
        'about.expertise.design.desc': 'Kullanıcı merkezli tasarım, minimalist arayüzler ve modern tasarım prensipleri',
        'about.expertise.integration.title': 'Sistem Entegrasyonu',
        'about.expertise.integration.desc': 'API geliştirme, veritabanı tasarımı ve üçüncü taraf sistem entegrasyonları',
        
        // About Journey & Values
        'about.journey.title': 'Gelişim Yolculuğum',
        'about.values.title': 'Çalışma Değerlerim',
        'about.philosophy.title': 'Çalışma Felsefem',
        
        // About Connect
        'about.connect.title': 'Benimle Bağlantı Kurun',
        'about.connect.desc': 'Projeleriniz, fikirleriniz veya sadece merhaba demek için bana ulaşabilirsiniz!',
        'about.social.email': 'E-posta',
        
        // About Stats
        'about.stats.projects': 'Tamamlanan Proje',
        'about.stats.clients': 'Memnun Müşteri',
        'about.stats.experience': 'Yıllık Deneyim',
        'about.stats.satisfaction': 'Müşteri Memnuniyeti',
        
        // About Timeline
        'about.timeline.2020.title': 'Yazılıma İlk Adım',
        'about.timeline.2020.desc': 'Programlama dünyasına giriş ve temel dilleri öğrenme süreci. Python ve Java ile başladım.',
        'about.timeline.2022.title': 'Mobil Geliştirme',
        'about.timeline.2022.desc': 'Android geliştirme alanında uzmanlaşmaya başladım. İlk uygulamalarımı yayınladım.',
        'about.timeline.2024.title': 'Limnio Markası',
        'about.timeline.2024.desc': 'Kendi markamı kurdum ve profesyonel hizmet vermeye başladım. İlk müşterilerimle çalıştım.',
        'about.timeline.2025.title': 'Yeni Hedefler',
        'about.timeline.2025.desc': 'Daha büyük projeler, uluslararası müşteri portföyü ve yeni teknolojilere odaklanma.',
        
        // About Values Details
        'about.values.quality.title': 'Kalite Odaklı',
        'about.values.quality.desc': 'Her kod satırında mükemmeliyeti hedeflerim. Test-driven development yaklaşımı benimserim.',
        'about.values.collaboration.title': 'İşbirliği',
        'about.values.collaboration.desc': 'Müşterilerimle yakın çalışarak en iyi sonucu elde ederim. Şeffaf iletişim önceliğimdir.',
        'about.values.speed.title': 'Hızlı Çözüm',
        'about.values.speed.desc': 'Zamanında teslim etmek en önemli önceliklerimden. Agile metodoloji kullanırım.',
        'about.values.learning.title': 'Sürekli Öğrenme',
        'about.values.learning.desc': 'Teknolojideki gelişmeleri yakından takip ederim. Her gün yeni bir şey öğrenirim.',
        'about.values.creativity.title': 'Yaratıcılık',
        'about.values.creativity.desc': 'Her projede yenilikçi çözümler üretirim. Out-of-the-box düşünmeyi severim.',
        'about.values.reliability.title': 'Güvenilirlik',
        'about.values.reliability.desc': 'Sözümü tutmak ve şeffaf olmak temel prensibim. Uzun vadeli ilişkiler kurarım.',
        
        // About Philosophy
        'about.philosophy.point1': 'Her proje benzersizdir ve özel yaklaşım gerektirir',
        'about.philosophy.point2': 'Kullanıcı deneyimi her zaman teknik karmaşıklıktan önemlidir',
        'about.philosophy.point3': 'Temiz, okunabilir kod yazarak gelecekteki geliştiricilere saygı gösteririm',
        'about.philosophy.point4': 'Sürekli öğrenme ve kendini geliştirme başarının anahtarıdır',
        
        // Footer
        'footer.copyright': '© 2025 Limnio - Emre Akyol. Tüm hakları saklıdır.',
        
        // Technology Categories
        'tech.category.core': 'Core Programlama Dilleri',
        'tech.category.frontend': 'Frontend Frameworks & UI',
        'tech.category.backend': 'Backend Technologies & APIs',
        'tech.category.mobile': 'Mobile Development',
        'tech.category.database': 'Database & Storage Solutions',
        'tech.category.devops': 'DevOps & Development Tools',
        'tech.category.design': 'Design & Creative Tools',
        
        // Technology Summary
        'tech.summary.title': 'Teknoloji Seçim Kriterlerim',
        'tech.criteria.reliability.title': 'Güvenilirlik',
        'tech.criteria.reliability.desc': 'Uzun vadeli destek ve stabilite',
        'tech.criteria.community.title': 'Topluluk Desteği',
        'tech.criteria.community.desc': 'Aktif geliştirici topluluğu',
        'tech.criteria.performance.title': 'Performans',
        'tech.criteria.performance.desc': 'Hızlı ve verimli çözümler',
        'tech.criteria.learning.title': 'Öğrenme Kolaylığı',
        'tech.criteria.learning.desc': 'Anlaşılır ve mantıklı syntax',
        
        // Technology Card Common Terms
        'tech.reliability.prefix': 'Güvenilirlik:',
        'tech.purpose.title': 'Kullanım Amacı',
        'tech.why.title': 'Neden Tercih Ediyorum',
        'tech.projects.title': 'Projelerimde Kullanımı',
        
        // Technology Card Content - JavaScript
        'tech.js.purpose': 'Full-stack web geliştirme, SPA uygulamaları, API geliştirme ve mobil uygulamalar',
        'tech.js.projects': 'Web uygulamaları, REST API\'lar, gerçek zamanlı uygulamalar, otomasyon araçları',
        
        // Technology Card Content - Python
        'tech.python.purpose': 'Backend geliştirme, veri bilimi, otomasyon, AI/ML ve web scraping',
        'tech.python.projects': 'Backend API\'lar, veri analizi, otomasyon scriptleri, ML modelleri',
        
        // Technology Card Content - Java/Kotlin
        'tech.java.purpose': 'Android geliştirme, kurumsal uygulamalar, backend hizmetleri',
        'tech.java.projects': 'Native Android uygulamaları, REST API\'lar, kurumsal sistemler',
        
        // Technology Card Content - PHP
        'tech.php.projects': 'Dinamik web siteleri, CMS platformları, e-ticaret çözümleri',
        
        // Technology Card Content - C#
        'tech.csharp.purpose': 'Masaüstü uygulamaları, web API\'lar, Unity ile oyun geliştirme',
        'tech.csharp.projects': 'Masaüstü uygulamaları, web API\'lar, Unity oyunları, Windows servisleri',
        
        // Technology Card Content - Swift/Dart
        'tech.swift.projects': 'iOS uygulamaları, cross-platform mobil uygulamalar'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'nav.technologies': 'Technologies',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.subtitle': 'Simple ideas, powerful experiences',
        'hero.cta': 'My Projects',
        
        // Sections
        'sections.projects': 'My Projects',
        'sections.about': 'About Me',
        'sections.technologies': 'Technologies & Programming Languages',
        'sections.technologies.subtitle': 'Detailed information about the technologies and programming languages I use',
        'sections.contact': 'Contact',
        
        // Projects
        'project.lilyum.title': 'Lilyum Counter',
        'project.lilyum.description': 'Elegant and user-friendly countdown application. Stylish countdown for your important events.',
        'project.hr.title': 'HR Portal',
        'project.hr.description': 'Comprehensive Human Resources CRM application. Modern web application developed for employee management, recruitment processes and performance tracking.',
        'project.coming.title': 'Coming Soon...',
        'project.coming.description': 'New projects are under development. Stay tuned!',
        
        // About
        'about.greeting': 'Hello, I\'m <span class="highlight">Emre Akyol</span> 👋',
        'about.intro': 'Under the <strong>Limnio</strong> brand, I develop mobile applications and web solutions that make life easier. I specialize in transforming complex problems into simple, elegant and user-friendly solutions.',
        'about.mission': '<i class="fas fa-quote-left"></i> Technology is just a tool, what really matters is touching people\'s lives and adding value to them. <i class="fas fa-quote-right"></i>',
        
        // Contact
        'contact.title': 'Get In Touch',
        'contact.description': 'You can reach me for questions about my projects or collaboration suggestions.',
        'contact.cta': 'Create Project Request',
        'contact.cta.title': '🚀 Let\'s Bring Your Project to Life!',
        'contact.cta.desc': 'Get in touch immediately to turn your ideas into reality. I\'m here to provide you with customized solutions.',
        'contact.cta.feature1': 'Fast Solution',
        'contact.cta.feature2': 'Quality Code',
        'contact.cta.feature3': 'Long-term Support',
        
        // About Details
        'about.details.toggle': 'More Information',
        'about.basic.title': 'Basic Information',
        'about.basic.location.label': 'Location',
        'about.basic.location.value': 'Turkey, Denizli',
        'about.basic.experience.label': 'Experience',
        'about.basic.experience.value': '3+ Years Active Development',
        'about.basic.languages.label': 'Languages',
        'about.basic.languages.value': 'Turkish (Native), English (Good)',
        
        // About Expertise
        'about.expertise.title': 'My Areas of Expertise',
        'about.expertise.mobile.title': 'Mobile Application Development',
        'about.expertise.mobile.desc': 'Native Android applications, cross-platform solutions with React Native and Flutter',
        'about.expertise.web.title': 'Web Development',
        'about.expertise.web.desc': 'Modern web applications, responsive design and Google Apps Script integrations',
        'about.expertise.design.title': 'UI/UX Design',
        'about.expertise.design.desc': 'User-centered design, minimalist interfaces and modern design principles',
        'about.expertise.integration.title': 'System Integration',
        'about.expertise.integration.desc': 'API development, database design and third-party system integrations',
        
        // About Journey & Values
        'about.journey.title': 'My Development Journey',
        'about.values.title': 'My Work Values',
        'about.philosophy.title': 'My Work Philosophy',
        
        // About Connect
        'about.connect.title': 'Connect With Me',
        'about.connect.desc': 'You can reach me for your projects, ideas or just to say hello!',
        'about.social.email': 'Email',
        
        // About Stats
        'about.stats.projects': 'Completed Projects',
        'about.stats.clients': 'Happy Clients',
        'about.stats.experience': 'Years Experience',
        'about.stats.satisfaction': 'Client Satisfaction',
        
        // About Timeline
        'about.timeline.2020.title': 'First Step into Programming',
        'about.timeline.2020.desc': 'Introduction to the programming world and learning basic languages. Started with Python and Java.',
        'about.timeline.2022.title': 'Mobile Development',
        'about.timeline.2022.desc': 'Started specializing in Android development. Published my first applications.',
        'about.timeline.2024.title': 'Limnio Brand',
        'about.timeline.2024.desc': 'Established my own brand and started providing professional services. Worked with my first clients.',
        'about.timeline.2025.title': 'New Goals',
        'about.timeline.2025.desc': 'Bigger projects, international client portfolio and focus on new technologies.',
        
        // About Values Details
        'about.values.quality.title': 'Quality Focused',
        'about.values.quality.desc': 'I aim for perfection in every line of code. I adopt a test-driven development approach.',
        'about.values.collaboration.title': 'Collaboration',
        'about.values.collaboration.desc': 'I achieve the best results by working closely with my clients. Transparent communication is my priority.',
        'about.values.speed.title': 'Fast Solution',
        'about.values.speed.desc': 'Delivering on time is one of my most important priorities. I use agile methodology.',
        'about.values.learning.title': 'Continuous Learning',
        'about.values.learning.desc': 'I closely follow developments in technology. I learn something new every day.',
        'about.values.creativity.title': 'Creativity',
        'about.values.creativity.desc': 'I produce innovative solutions in every project. I love thinking out-of-the-box.',
        'about.values.reliability.title': 'Reliability',
        'about.values.reliability.desc': 'Keeping my word and being transparent is my basic principle. I build long-term relationships.',
        
        // About Philosophy
        'about.philosophy.point1': 'Every project is unique and requires a special approach',
        'about.philosophy.point2': 'User experience is always more important than technical complexity',
        'about.philosophy.point3': 'I respect future developers by writing clean, readable code',
        'about.philosophy.point4': 'Continuous learning and self-improvement is the key to success',
        
        // Footer
        'footer.copyright': '© 2025 Limnio - Emre Akyol. All rights reserved.',
        
        // Technology Categories
        'tech.category.core': 'Core Programming Languages',
        'tech.category.frontend': 'Frontend Frameworks & UI',
        'tech.category.backend': 'Backend Technologies & APIs',
        'tech.category.mobile': 'Mobile Development',
        'tech.category.database': 'Database & Storage Solutions',
        'tech.category.devops': 'DevOps & Development Tools',
        'tech.category.design': 'Design & Creative Tools',
        
        // Technology Summary
        'tech.summary.title': 'My Technology Selection Criteria',
        'tech.criteria.reliability.title': 'Reliability',
        'tech.criteria.reliability.desc': 'Long-term support and stability',
        'tech.criteria.community.title': 'Community Support',
        'tech.criteria.community.desc': 'Active developer community',
        'tech.criteria.performance.title': 'Performance',
        'tech.criteria.performance.desc': 'Fast and efficient solutions',
        'tech.criteria.learning.title': 'Ease of Learning',
        'tech.criteria.learning.desc': 'Clear and logical syntax',
        
        // Technology Card Common Terms
        'tech.reliability.prefix': 'Reliability:',
        'tech.purpose.title': 'Purpose of Use',
        'tech.why.title': 'Why I Choose It',
        'tech.projects.title': 'Usage in My Projects',
        
        // Technology Card Content - JavaScript
        'tech.js.purpose': 'Full-stack web development, SPA applications, API development and mobile applications',
        'tech.js.projects': 'Web applications, REST APIs, real-time applications, automation tools',
        
        // Technology Card Content - Python
        'tech.python.purpose': 'Backend development, data science, automation, AI/ML and web scraping',
        'tech.python.projects': 'Backend APIs, data analysis, automation scripts, ML models',
        
        // Technology Card Content - Java/Kotlin
        'tech.java.purpose': 'Android development, enterprise applications, backend services',
        'tech.java.projects': 'Native Android applications, REST APIs, enterprise systems',
        
        // Technology Card Content - PHP
        'tech.php.projects': 'Dynamic websites, CMS platforms, e-commerce solutions',
        
        // Technology Card Content - C#
        'tech.csharp.purpose': 'Desktop applications, web APIs, Unity game development',
        'tech.csharp.projects': 'Desktop applications, web APIs, Unity games, Windows services',
        
        // Technology Card Content - Swift/Dart
        'tech.swift.projects': 'iOS applications, cross-platform mobile applications'
    }
};

// Current language
let currentLanguage = localStorage.getItem('preferred-language') || 'tr';

// Language switching functionality
function initLanguageSystem() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Set initial language
    setLanguage(currentLanguage);
    
    // Add click handlers
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    localStorage.setItem('preferred-language', lang);
    
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translations[lang][key]) {
            // Check if translation contains HTML
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update technology card common terms
    document.querySelectorAll('.reliability-text').forEach(element => {
        const percentage = element.textContent.match(/\d+%/);
        if (percentage) {
            element.textContent = `${translations[lang]['tech.reliability.prefix']} ${percentage[0]}`;
        }
    });
    
    document.querySelectorAll('.tech-purpose h5').forEach(element => {
        if (element.innerHTML.includes('fa-bullseye')) {
            element.innerHTML = `<i class="fas fa-bullseye"></i> ${translations[lang]['tech.purpose.title']}`;
        }
    });
    
    document.querySelectorAll('.tech-why h5').forEach(element => {
        if (element.innerHTML.includes('fa-lightbulb')) {
            element.innerHTML = `<i class="fas fa-lightbulb"></i> ${translations[lang]['tech.why.title']}`;
        }
    });
    
    document.querySelectorAll('.tech-projects h5').forEach(element => {
        if (element.innerHTML.includes('fa-code')) {
            element.innerHTML = `<i class="fas fa-code"></i> ${translations[lang]['tech.projects.title']}`;
        }
    });
    
    // Update specific technology card content
    updateTechCardContent(lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Show language change notification
    const langName = lang === 'tr' ? 'Türkçe' : 'English';
    showNotification(`🌐 ${lang === 'tr' ? 'Dil değiştirildi: ' + langName : 'Language changed: ' + langName}`, 'info');
}

// Function to update technology card content
function updateTechCardContent(lang) {
    // JavaScript & TypeScript card
    const jsCard = Array.from(document.querySelectorAll('.tech-card h4')).find(h4 => h4.textContent.includes('JavaScript'));
    if (jsCard) {
        const jsCardContainer = jsCard.closest('.tech-card');
        const jsPurpose = jsCardContainer.querySelector('.tech-purpose p');
        const jsProjects = jsCardContainer.querySelector('.tech-projects p');
        
        if (jsPurpose && translations[lang]['tech.js.purpose']) {
            jsPurpose.textContent = translations[lang]['tech.js.purpose'];
        }
        if (jsProjects && translations[lang]['tech.js.projects']) {
            jsProjects.textContent = translations[lang]['tech.js.projects'];
        }
    }
    
    // Python card
    const pythonCard = Array.from(document.querySelectorAll('.tech-card h4')).find(h4 => h4.textContent.includes('Python'));
    if (pythonCard) {
        const pythonCardContainer = pythonCard.closest('.tech-card');
        const pythonPurpose = pythonCardContainer.querySelector('.tech-purpose p');
        const pythonProjects = pythonCardContainer.querySelector('.tech-projects p');
        
        if (pythonPurpose && translations[lang]['tech.python.purpose']) {
            pythonPurpose.textContent = translations[lang]['tech.python.purpose'];
        }
        if (pythonProjects && translations[lang]['tech.python.projects']) {
            pythonProjects.textContent = translations[lang]['tech.python.projects'];
        }
    }
    
    // Java & Kotlin card
    const javaCard = Array.from(document.querySelectorAll('.tech-card h4')).find(h4 => h4.textContent.includes('Java'));
    if (javaCard) {
        const javaCardContainer = javaCard.closest('.tech-card');
        const javaPurpose = javaCardContainer.querySelector('.tech-purpose p');
        const javaProjects = javaCardContainer.querySelector('.tech-projects p');
        
        if (javaPurpose && translations[lang]['tech.java.purpose']) {
            javaPurpose.textContent = translations[lang]['tech.java.purpose'];
        }
        if (javaProjects && translations[lang]['tech.java.projects']) {
            javaProjects.textContent = translations[lang]['tech.java.projects'];
        }
    }
    
    // PHP card
    const phpCard = Array.from(document.querySelectorAll('.tech-card h4')).find(h4 => h4.textContent.includes('PHP'));
    if (phpCard) {
        const phpCardContainer = phpCard.closest('.tech-card');
        const phpProjects = phpCardContainer.querySelector('.tech-projects p');
        
        if (phpProjects && translations[lang]['tech.php.projects']) {
            phpProjects.textContent = translations[lang]['tech.php.projects'];
        }
    }
    
    // C# & .NET card
    const csharpCard = Array.from(document.querySelectorAll('.tech-card h4')).find(h4 => h4.textContent.includes('C#'));
    if (csharpCard) {
        const csharpCardContainer = csharpCard.closest('.tech-card');
        const csharpPurpose = csharpCardContainer.querySelector('.tech-purpose p');
        const csharpProjects = csharpCardContainer.querySelector('.tech-projects p');
        
        if (csharpPurpose && translations[lang]['tech.csharp.purpose']) {
            csharpPurpose.textContent = translations[lang]['tech.csharp.purpose'];
        }
        if (csharpProjects && translations[lang]['tech.csharp.projects']) {
            csharpProjects.textContent = translations[lang]['tech.csharp.projects'];
        }
    }
    
    // Swift & Dart card
    const swiftCard = Array.from(document.querySelectorAll('.tech-card h4')).find(h4 => h4.textContent.includes('Swift'));
    if (swiftCard) {
        const swiftCardContainer = swiftCard.closest('.tech-card');
        const swiftProjects = swiftCardContainer.querySelector('.tech-projects p');
        
        if (swiftProjects && translations[lang]['tech.swift.projects']) {
            swiftProjects.textContent = translations[lang]['tech.swift.projects'];
        }
    }
}

// Initialize language system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSystem();
}); 