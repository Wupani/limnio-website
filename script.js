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
    // Add both click and touchend events for better mobile support
    const handleNavigation = function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Close mobile menu first if open
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
            }
            
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
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navbarHeight;
            
            // Smooth scroll with easing
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    // Add event listeners for both click and touch events
    anchor.addEventListener('click', handleNavigation);
    anchor.addEventListener('touchend', handleNavigation);
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
        'project.gymdesk.title': 'GymDesk',
        'project.gymdesk.description': 'Modern spor salonu yönetim sistemi. Üye yönetimi, ödeme takibi, antrenman programları ve vücut ölçümleri için geliştirilmiş cross-platform desktop uygulaması.',
        'project.gymdesk.github': 'GitHub\'da Görüntüle',
        'project.gymdesk.download': 'İndir v1.0.0',
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
        'tech.js.why': [
            'Evrensel dil - hem frontend hem backend geliştirme',
            'TypeScript ile güçlü tip güvenliği',
            'Geniş ekosistem ve NPM paket desteği',
            'Modern ES6+ özellikleri ve asenkron programlama'
        ],
        
        // Technology Card Content - Python
        'tech.python.purpose': 'Backend geliştirme, veri bilimi, otomasyon, AI/ML ve web scraping',
        'tech.python.projects': 'Backend API\'lar, veri analizi, otomasyon scriptleri, ML modelleri',
        'tech.python.why': [
            'Temiz ve okunabilir söz dizimi',
            'Kapsamlı kütüphaneler (Django, Flask, Pandas)',
            'Hızlı prototipleme için mükemmel',
            'Güçlü veri bilimi ekosistemi'
        ],
        
        // Technology Card Content - Java/Kotlin
        'tech.java.purpose': 'Android geliştirme, kurumsal uygulamalar, backend hizmetleri',
        'tech.java.projects': 'Native Android uygulamaları, REST API\'lar, kurumsal sistemler',
        'tech.java.why': [
            'Android\'in resmi dili (Kotlin)',
            'Kurumsal seviye güvenilirlik',
            'Güçlü tip güvenliği ve performans',
            'Olgun ekosistem ve Spring framework'
        ],
        
        // Technology Card Content - PHP
        'tech.php.projects': 'Dinamik web siteleri, CMS platformları, e-ticaret çözümleri',
        'tech.php.why': [
            'Web geliştirme için optimize edilmiş',
            'Laravel ve Symfony framework\'leri',
            'Kolay dağıtım ve hosting',
            'WordPress ile içerik yönetimi'
        ],
        
        // Technology Card Content - C#
        'tech.csharp.purpose': 'Masaüstü uygulamaları, web API\'lar, Unity ile oyun geliştirme',
        'tech.csharp.projects': 'Masaüstü uygulamaları, web API\'lar, Unity oyunları, Windows servisleri',
        'tech.csharp.why': [
            'Güçlü tip sistemi ve OOP desteği',
            'Visual Studio ile mükemmel araç desteği',
            'Cross-platform .NET Core',
            'Unity oyun geliştirme için ideal'
        ],
        
        // Technology Card Content - Swift/Dart
        'tech.swift.projects': 'iOS uygulamaları, cross-platform mobil uygulamalar',
        'tech.swift.why': [
            'Native iOS performansı (Swift)',
            'Mobil için tek kod tabanı (Flutter/Dart)',
            'Modern dil özellikleri',
            'Büyüyen ekosistem'
        ],
        
        // Frontend Frameworks - React
        'tech.react.purpose': 'Modern SPA geliştirme, server-side rendering, statik site oluşturma',
        'tech.react.projects': 'Dashboard uygulamaları, e-ticaret siteleri, portfolyo web siteleri',
        'tech.react.why': [
            'Bileşen tabanlı mimari',
            'Büyük ekosistem ve topluluk',
            'Virtual DOM performansı',
            'Next.js ile SEO optimizasyonu'
        ],
        
        // Frontend Frameworks - Vue.js
        'tech.vue.purpose': 'Progressive web uygulamaları, hızlı prototipleme, hafif SPA\'lar',
        'tech.vue.projects': 'İnteraktif web uygulamaları, admin panelleri, prototipler',
        'tech.vue.why': [
            'Kolay öğrenme eğrisi',
            'Mükemmel dokümantasyon',
            'İki yönlü veri bağlama',
            'Nuxt.js için server-side rendering'
        ],
        
        // Frontend Frameworks - Angular
        'tech.angular.purpose': 'Kurumsal uygulamalar, büyük ölçekli SPA\'lar, PWA\'lar',
        'tech.angular.projects': 'Kurumsal dashboard\'lar, karmaşık iş uygulamaları',
        'tech.angular.why': [
            'Tam özellikli framework',
            'Varsayılan TypeScript desteği',
            'Bağımlılık enjeksiyonu',
            'Google\'ın kurumsal desteği'
        ],
        
        // Frontend Frameworks - CSS
        'tech.css.purpose': 'Responsive tasarım, bileşen stillendirme, hızlı UI geliştirme',
        'tech.css.projects': 'Responsive layoutlar, bileşen kütüphaneleri, tasarım sistemleri',
        'tech.css.why': [
            'Bootstrap - hızlı prototipleme',
            'Tailwind CSS - utility-first yaklaşımı',
            'SASS/SCSS - güçlü ön işleme',
            'CSS Grid ve Flexbox uzmanı'
        ],
        
        // Backend Technologies - Node.js
        'tech.node.purpose': 'RESTful API\'lar, gerçek zamanlı uygulamalar, mikroservisler, backend hizmetleri',
        'tech.node.projects': 'REST API\'lar, sohbet uygulamaları, dosya yükleme servisleri',
        'tech.node.why': [
            'Her yerde JavaScript - full-stack geliştirme',
            'Non-blocking I/O performansı',
            'NPM ekosistemi',
            'Gerçek zamanlı uygulamalar için mükemmel'
        ],
        
        // Backend Technologies - PHP Frameworks
        'tech.phpfw.purpose': 'Laravel web applications, WordPress customization, e-commerce',
        'tech.phpfw.projects': 'CMS platformları, e-ticaret siteleri, özel WordPress temaları',
        'tech.phpfw.why': [
            'Laravel\'in zarif söz dizimi',
            'Dahili ORM (Eloquent)',
            'Kolay dağıtım',
            'WordPress esnekliği'
        ],
        
        // Backend Technologies - Django/Flask
        'tech.django.purpose': 'Robust web applications, APIs, admin panels, data-driven apps',
        'tech.django.projects': 'Veri dashboard\'ları, admin sistemleri, ML model API\'ları',
        'tech.django.why': [
            'Django\'nun "piller dahil" yaklaşımı',
            'Flask\'ın mikroframework esnekliği',
            'Güçlü güvenlik özellikleri',
            'Veri bilimi entegrasyonu için mükemmel'
        ],
        
        // Backend Technologies - Google Apps Script
        'tech.gas.purpose': 'Rapid web apps, Google Workspace automation, no-cost hosting',
        'tech.gas.projects': 'İş otomasyonu, form işleyicileri, veri toplayıcıları',
        'tech.gas.why': [
            'Sıfır altyapı maliyeti',
            'Sorunsuz Google servisleri entegrasyonu',
            'Anında dağıtım',
            'MVP\'ler için mükemmel'
        ],
        
        // Mobile Development - Native Android
        'tech.android.purpose': 'Yüksek performanslı Android uygulamaları, donanım entegrasyonu, Play Store uygulamaları',
        'tech.android.projects': 'Utility uygulamaları, iş uygulamaları, yayınlanmış Play Store uygulamaları',
        'tech.android.why': [
            'Maksimum performans ve platform özellikleri',
            'Kotlin modern dil avantajları',
            'Android API\'larına doğrudan erişim',
            'Material Design implementasyonu'
        ],
        
        // Mobile Development - Flutter
        'tech.flutter.purpose': 'Cross-platform mobil uygulamalar, iOS/Android için tek kod tabanı',
        'tech.flutter.projects': 'Cross-platform iş uygulamaları, startup MVP\'leri',
        'tech.flutter.why': [
            'Tek kod tabanı, çoklu platform',
            'Dart dil verimliliği',
            'Google\'ın desteği ve sponsorluğu',
            'Hot reload geliştirme hızı'
        ],
        
        // Mobile Development - React Native
        'tech.reactnative.purpose': 'JavaScript tabanlı mobil uygulamalar, hızlı prototipleme, takım aşinalığı',
        'tech.reactnative.projects': 'Prototip mobil uygulamalar, takım projeleri',
        'tech.reactnative.why': [
            'React bilgisi yeniden kullanımı',
            'Büyük topluluk ve kütüphaneler',
            'Facebook\'un desteği',
            'Web ile kod paylaşımı'
        ],
        
        // Mobile Development - iOS
        'tech.ios.purpose': 'Native iOS uygulamaları, App Store yayıncılığı, iOS\'a özel özellikler',
        'tech.ios.projects': 'iOS yardımcı uygulamalar, premium mobil çözümler',
        'tech.ios.why': [
            'Swift modern dil',
            'Premium iOS kullanıcı deneyimi',
            'Xcode geliştirme ortamı',
            'iOS ekosistem entegrasyonu'
        ],
        
        // Database & Storage - SQL
        'tech.sql.purpose': 'MySQL, PostgreSQL, SQLite for structured data storage',
        'tech.sql.projects': 'Kullanıcı yönetimi, ürün katalogları, finansal veriler',
        'tech.sql.why': [
            'ACID uyumluluğu ve veri bütünlüğü',
            'Karmaşık sorgular ve ilişkiler',
            'Olgun ekosistem',
            'Performans optimizasyonu'
        ],
        
        // Database & Storage - NoSQL
        'tech.nosql.purpose': 'MongoDB, Firebase Firestore for flexible document storage',
        'tech.nosql.projects': 'İçerik yönetimi, gerçek zamanlı veri, mobil uygulama backend\'leri',
        'tech.nosql.why': [
            'Şema esnekliği',
            'Hızlı geliştirme',
            'Yatay ölçeklenebilirlik',
            'JSON benzeri belgeler'
        ],
        
        // Database & Storage - Firebase
        'tech.firebase.purpose': 'Komple mobil/web backend, kimlik doğrulama, gerçek zamanlı veritabanı',
        'tech.firebase.projects': 'Mobil uygulama backend\'leri, gerçek zamanlı uygulamalar, kullanıcı kimlik doğrulama',
        'tech.firebase.why': [
            'Komple BaaS çözümü',
            'Gerçek zamanlı senkronizasyon',
            'Kolay kimlik doğrulama',
            'Google altyapısı'
        ],
        
        // DevOps & Tools - Git
        'tech.git.purpose': 'Versiyon kontrolü, işbirlikli geliştirme, CI/CD, proje yönetimi',
        'tech.git.projects': 'Tüm proje versiyon kontrolü, takım işbirliği, otomatik dağıtımlar',
        'tech.git.why': [
            'Endüstri standardı versiyon kontrolü',
            'Branching ve merging stratejileri',
            'GitHub Actions CI/CD',
            'Açık kaynak işbirliği'
        ],
        
        // Design & Creative Tools - Figma
        'tech.figma.purpose': 'UI/UX tasarım, prototipleme, tasarım sistemleri, takım işbirliği',
        'tech.figma.projects': 'Uygulama maketleri, web sitesi tasarımları, kullanıcı akış diyagramları',
        'tech.figma.why': [
            'Gerçek zamanlı işbirliği',
            'Bileşen tabanlı tasarım sistemleri',
            'İnteraktif prototipleme',
            'Geliştirici teslim araçları'
        ],
        
        // Design & Creative Tools - Adobe
        'tech.adobe.purpose': 'Photoshop, Illustrator, XD ile grafik tasarım, ikonlar, markalaşma',
        'tech.adobe.projects': 'Logo tasarımı, uygulama ikonları, pazarlama materyalleri',
        'tech.adobe.why': [
            'Endüstri standardı araçlar',
            'Gelişmiş görüntü düzenleme',
            'Vektör grafik oluşturma',
            'Profesyonel tasarım yetenekleri'
        ],
        
        // Design & Creative Tools - Unity
        'tech.unity.purpose': '2D/3D oyun geliştirme, interaktif uygulamalar, AR/VR deneyimleri',
        'tech.unity.projects': 'Mobil oyunlar, interaktif demolar, eğitim uygulamaları',
        'tech.unity.why': [
            'Cross-platform oyun dağıtımı',
            'Görsel betik oluşturma seçenekleri',
            'Asset store ekosistemi',
            'C# programlama entegrasyonu'
        ]
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
        'project.gymdesk.title': 'GymDesk',
        'project.gymdesk.description': 'Modern gym management system. Cross-platform desktop application developed for member management, payment tracking, workout programs and body measurements.',
        'project.gymdesk.github': 'View on GitHub',
        'project.gymdesk.download': 'Download v1.0.0',
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
        'tech.js.why': [
            'Universal language - both frontend and backend development',
            'Strong type safety with TypeScript',
            'Extensive ecosystem and NPM package support',
            'Modern ES6+ features and asynchronous programming'
        ],
        
        // Technology Card Content - Python
        'tech.python.purpose': 'Backend development, data science, automation, AI/ML and web scraping',
        'tech.python.projects': 'Backend APIs, data analysis, automation scripts, ML models',
        'tech.python.why': [
            'Clean and readable syntax',
            'Comprehensive libraries (Django, Flask, Pandas)',
            'Perfect for rapid prototyping',
            'Strong data science ecosystem'
        ],
        
        // Technology Card Content - Java/Kotlin
        'tech.java.purpose': 'Android development, enterprise applications, backend services',
        'tech.java.projects': 'Native Android applications, REST APIs, enterprise systems',
        'tech.java.why': [
            'Official language of Android (Kotlin)',
            'Enterprise-level reliability',
            'Strong type safety and performance',
            'Mature ecosystem and Spring framework'
        ],
        
        // Technology Card Content - PHP
        'tech.php.projects': 'Dynamic websites, CMS platforms, e-commerce solutions',
        'tech.php.why': [
            'Optimized for web development',
            'Laravel and Symfony frameworks',
            'Easy deployment and hosting',
            'Content management with WordPress'
        ],
        
        // Technology Card Content - C#
        'tech.csharp.purpose': 'Desktop applications, web APIs, Unity game development',
        'tech.csharp.projects': 'Desktop applications, web APIs, Unity games, Windows services',
        'tech.csharp.why': [
            'Strong type system and OOP support',
            'Excellent tooling with Visual Studio',
            'Cross-platform .NET Core',
            'Ideal for Unity game development'
        ],
        
        // Technology Card Content - Swift/Dart
        'tech.swift.projects': 'iOS applications, cross-platform mobile applications',
        'tech.swift.why': [
            'Native iOS performance (Swift)',
            'Single codebase for mobile (Flutter/Dart)',
            'Modern language features',
            'Growing ecosystem'
        ],
        
        // Frontend Frameworks - React
        'tech.react.purpose': 'Modern SPA development, server-side rendering, static site generation',
        'tech.react.projects': 'Dashboard applications, e-commerce sites, portfolio websites',
        'tech.react.why': [
            'Component-based architecture',
            'Large ecosystem and community',
            'Virtual DOM performance',
            'SEO optimization with Next.js'
        ],
        
        // Frontend Frameworks - Vue.js
        'tech.vue.purpose': 'Progressive web applications, rapid prototyping, lightweight SPAs',
        'tech.vue.projects': 'Interactive web applications, admin panels, prototypes',
        'tech.vue.why': [
            'Easy learning curve',
            'Excellent documentation',
            'Two-way data binding',
            'Server-side rendering with Nuxt.js'
        ],
        
        // Frontend Frameworks - Angular
        'tech.angular.purpose': 'Enterprise applications, large-scale SPAs, PWAs',
        'tech.angular.projects': 'Enterprise dashboards, complex business applications',
        'tech.angular.why': [
            'Full-featured framework',
            'Default TypeScript support',
            'Dependency injection',
            'Google enterprise support'
        ],
        
        // Frontend Frameworks - CSS
        'tech.css.purpose': 'Responsive design, component styling, rapid UI development',
        'tech.css.projects': 'Responsive layouts, component libraries, design systems',
        'tech.css.why': [
            'Bootstrap - rapid prototyping',
            'Tailwind CSS - utility-first approach',
            'SASS/SCSS - powerful preprocessing',
            'CSS Grid and Flexbox expert'
        ],
        
        // Backend Technologies - Node.js
        'tech.node.purpose': 'RESTful APIs, real-time applications, microservices, backend services',
        'tech.node.projects': 'REST APIs, chat applications, file upload services',
        'tech.node.why': [
            'JavaScript everywhere - full-stack development',
            'Non-blocking I/O performance',
            'NPM ecosystem',
            'Perfect for real-time applications'
        ],
        
        // Backend Technologies - PHP Frameworks
        'tech.phpfw.purpose': 'Laravel web applications, WordPress customization, e-commerce',
        'tech.phpfw.projects': 'CMS platforms, e-commerce sites, custom WordPress themes',
        'tech.phpfw.why': [
            'Laravel elegant syntax',
            'Built-in ORM (Eloquent)',
            'Easy deployment',
            'WordPress flexibility'
        ],
        
        // Backend Technologies - Django/Flask
        'tech.django.purpose': 'Robust web applications, APIs, admin panels, data-driven apps',
        'tech.django.projects': 'Data dashboards, admin systems, ML model APIs',
        'tech.django.why': [
            'Django "batteries included" approach',
            'Flask microframework flexibility',
            'Strong security features',
            'Perfect for data science integration'
        ],
        
        // Backend Technologies - Google Apps Script
        'tech.gas.purpose': 'Rapid web apps, Google Workspace automation, no-cost hosting',
        'tech.gas.projects': 'Business automation, form handlers, data collectors',
        'tech.gas.why': [
            'Zero infrastructure cost',
            'Seamless Google services integration',
            'Instant deployment',
            'Perfect for MVPs'
        ],
        
        // Mobile Development - Native Android
        'tech.android.purpose': 'High-performance Android applications, hardware integration, Play Store apps',
        'tech.android.projects': 'Utility applications, business apps, published Play Store applications',
        'tech.android.why': [
            'Maximum performance and platform features',
            'Kotlin modern language advantages',
            'Direct access to Android APIs',
            'Material Design implementation'
        ],
        
        // Mobile Development - Flutter
        'tech.flutter.purpose': 'Cross-platform mobile applications, single codebase for iOS/Android',
        'tech.flutter.projects': 'Cross-platform business applications, startup MVPs',
        'tech.flutter.why': [
            'Single codebase, multiple platforms',
            'Dart language efficiency',
            'Google support and sponsorship',
            'Hot reload development speed'
        ],
        
        // Mobile Development - React Native
        'tech.reactnative.purpose': 'JavaScript-based mobile applications, rapid prototyping, team familiarity',
        'tech.reactnative.projects': 'Prototype mobile applications, team projects',
        'tech.reactnative.why': [
            'React knowledge reusability',
            'Large community and libraries',
            'Facebook support',
            'Code sharing with web'
        ],
        
        // Mobile Development - iOS
        'tech.ios.purpose': 'Native iOS applications, App Store publishing, iOS-specific features',
        'tech.ios.projects': 'iOS utility apps, premium mobile solutions',
        'tech.ios.why': [
            'Swift modern language',
            'Premium iOS user experience',
            'Xcode development environment',
            'iOS ecosystem integration'
        ],
        
        // Database & Storage - SQL
        'tech.sql.purpose': 'MySQL, PostgreSQL, SQLite for structured data storage',
        'tech.sql.projects': 'User management, product catalogs, financial data',
        'tech.sql.why': [
            'ACID compliance and data integrity',
            'Complex queries and relationships',
            'Mature ecosystem',
            'Performance optimization'
        ],
        
        // Database & Storage - NoSQL
        'tech.nosql.purpose': 'MongoDB, Firebase Firestore for flexible document storage',
        'tech.nosql.projects': 'Content management, real-time data, mobile app backends',
        'tech.nosql.why': [
            'Schema flexibility',
            'Rapid development',
            'Horizontal scalability',
            'JSON-like documents'
        ],
        
        // Database & Storage - Firebase
        'tech.firebase.purpose': 'Complete mobile/web backend, authentication, real-time database',
        'tech.firebase.projects': 'Mobile app backends, real-time applications, user authentication',
        'tech.firebase.why': [
            'Complete BaaS solution',
            'Real-time synchronization',
            'Easy authentication',
            'Google infrastructure'
        ],
        
        // DevOps & Tools - Git
        'tech.git.purpose': 'Version control, collaborative development, CI/CD, project management',
        'tech.git.projects': 'All project version control, team collaboration, automated deployments',
        'tech.git.why': [
            'Industry standard version control',
            'Branching and merging strategies',
            'GitHub Actions CI/CD',
            'Open source collaboration'
        ],
        
        // Design & Creative Tools - Figma
        'tech.figma.purpose': 'UI/UX design, prototyping, design systems, team collaboration',
        'tech.figma.projects': 'App mockups, website designs, user flow diagrams',
        'tech.figma.why': [
            'Real-time collaboration',
            'Component-based design systems',
            'Interactive prototyping',
            'Developer handoff tools'
        ],
        
        // Design & Creative Tools - Adobe
        'tech.adobe.purpose': 'Photoshop, Illustrator, XD for graphic design, icons, branding',
        'tech.adobe.projects': 'Logo design, app icons, marketing materials',
        'tech.adobe.why': [
            'Industry standard tools',
            'Advanced image editing',
            'Vector graphics creation',
            'Professional design capabilities'
        ],
        
        // Design & Creative Tools - Unity
        'tech.unity.purpose': '2D/3D game development, interactive applications, AR/VR experiences',
        'tech.unity.projects': 'Mobile games, interactive demos, educational applications',
        'tech.unity.why': [
            'Cross-platform game deployment',
            'Visual scripting options',
            'Asset store ecosystem',
            'C# programming integration'
        ]
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
        
        // Update why list
        const jsWhyList = jsCardContainer.querySelector('.tech-why ul');
        if (jsWhyList && translations[lang]['tech.js.why']) {
            const listItems = jsWhyList.querySelectorAll('li');
            translations[lang]['tech.js.why'].forEach((text, index) => {
                if (listItems[index]) {
                    listItems[index].textContent = text;
                }
            });
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
        
        // Update why list
        const pythonWhyList = pythonCardContainer.querySelector('.tech-why ul');
        if (pythonWhyList && translations[lang]['tech.python.why']) {
            const listItems = pythonWhyList.querySelectorAll('li');
            translations[lang]['tech.python.why'].forEach((text, index) => {
                if (listItems[index]) {
                    listItems[index].textContent = text;
                }
            });
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
        
        // Update why list
        const javaWhyList = javaCardContainer.querySelector('.tech-why ul');
        if (javaWhyList && translations[lang]['tech.java.why']) {
            const listItems = javaWhyList.querySelectorAll('li');
            translations[lang]['tech.java.why'].forEach((text, index) => {
                if (listItems[index]) {
                    listItems[index].textContent = text;
                }
            });
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
        
        // Update why list
        const phpWhyList = phpCardContainer.querySelector('.tech-why ul');
        if (phpWhyList && translations[lang]['tech.php.why']) {
            const listItems = phpWhyList.querySelectorAll('li');
            translations[lang]['tech.php.why'].forEach((text, index) => {
                if (listItems[index]) {
                    listItems[index].textContent = text;
                }
            });
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
        
        // Update why list
        const csharpWhyList = csharpCardContainer.querySelector('.tech-why ul');
        if (csharpWhyList && translations[lang]['tech.csharp.why']) {
            const listItems = csharpWhyList.querySelectorAll('li');
            translations[lang]['tech.csharp.why'].forEach((text, index) => {
                if (listItems[index]) {
                    listItems[index].textContent = text;
                }
            });
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
        
                // Update why list
        const swiftWhyList = swiftCardContainer.querySelector('.tech-why ul');
        if (swiftWhyList && translations[lang]['tech.swift.why']) {
            const listItems = swiftWhyList.querySelectorAll('li');
            translations[lang]['tech.swift.why'].forEach((text, index) => {
                if (listItems[index]) {
                    listItems[index].textContent = text;
                }
            });
        }
      }
      
      // Update Frontend Framework cards
      updateCardByTitle('React & Next.js', 'tech.react', lang);
      updateCardByTitle('Vue.js & Nuxt', 'tech.vue', lang);
      updateCardByTitle('Angular', 'tech.angular', lang);
      updateCardByTitle('CSS Frameworks', 'tech.css', lang);
      
      // Update Backend Technology cards
      updateCardByTitle('Node.js & Express', 'tech.node', lang);
      updateCardByTitle('PHP Frameworks', 'tech.phpfw', lang);
      updateCardByTitle('Django & Flask', 'tech.django', lang);
      updateCardByTitle('Google Apps Script', 'tech.gas', lang);
      
      // Update Mobile Development cards
      updateCardByTitle('Native Android', 'tech.android', lang);
      updateCardByTitle('Flutter', 'tech.flutter', lang);
      updateCardByTitle('React Native', 'tech.reactnative', lang);
      updateCardByTitle('iOS Development', 'tech.ios', lang);
      
      // Update Database & Storage cards
      updateCardByTitle('SQL Databases', 'tech.sql', lang);
      updateCardByTitle('NoSQL Databases', 'tech.nosql', lang);
      updateCardByTitle('Firebase Platform', 'tech.firebase', lang);
      
      // Update DevOps & Tools cards
      updateCardByTitle('Git & GitHub', 'tech.git', lang);
      
      // Update Design & Creative Tools cards
      updateCardByTitle('Figma & Design', 'tech.figma', lang);
      updateCardByTitle('Adobe Creative Suite', 'tech.adobe', lang);
      updateCardByTitle('Unity & Game Dev', 'tech.unity', lang);
  }
  
  // Helper function to update cards by title
  function updateCardByTitle(cardTitle, techKey, lang) {
      const cardHeaders = document.querySelectorAll('.tech-card .tech-name h4');
      let targetCard = null;
      
      cardHeaders.forEach(header => {
          if (header.textContent.trim() === cardTitle) {
              targetCard = header.closest('.tech-card');
              return;
          }
      });
      
      if (!targetCard) return;
      
      // Update purpose
      const purposeP = targetCard.querySelector('.tech-purpose p');
      if (purposeP && translations[lang][techKey + '.purpose']) {
          purposeP.textContent = translations[lang][techKey + '.purpose'];
      }
      
      // Update projects
      const projectsP = targetCard.querySelector('.tech-projects p');
      if (projectsP && translations[lang][techKey + '.projects']) {
          projectsP.textContent = translations[lang][techKey + '.projects'];
      }
      
      // Update why list
      const whyList = targetCard.querySelector('.tech-why ul');
      if (whyList && translations[lang][techKey + '.why']) {
          const listItems = whyList.querySelectorAll('li');
          translations[lang][techKey + '.why'].forEach((text, index) => {
              if (listItems[index]) {
                  listItems[index].textContent = text;
              }
          });
      }
  }

// Dark Mode Functionality
function initThemeSystem() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Add smooth transition animation
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }
}

// Performance Optimization - Lazy Loading Images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Enhanced Animations
function initEnhancedAnimations() {
    // Improved scroll animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                animateOnScrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.project-card, .tech-card, .criteria-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        animateOnScrollObserver.observe(el);
    });
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Optimize scrolling performance
    let ticking = false;
    
    function updateScrollPosition() {
        const scrollTop = window.pageYOffset;
        const navbar = document.querySelector('.navbar');
        
        if (navbar) {
            if (scrollTop > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Handle resize logic here
            setActiveNavLink();
        }, 250);
    });
}

// SCROLL PROGRESS BAR
function initScrollProgressBar() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = Math.min(scrolled, 100) + '%';
        });
    }
}

// LOADING SCREEN
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    if (loadingScreen) {
        // Simulate loading time
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            
            // Remove loading screen completely after animation
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                
                // Start other animations after loading
                initScrollAnimations();
            }, 800);
        }, 3000);
    }
}

// CUSTOM CURSOR
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');
    
    if (cursor && cursorFollower && window.innerWidth > 768) {
        let isMoving = false;
        
        // Mouse move event
        document.addEventListener('mousemove', (e) => {
            if (!isMoving) {
                requestAnimationFrame(() => {
                    cursor.style.left = e.clientX + 'px';
                    cursor.style.top = e.clientY + 'px';
                    
                    cursorFollower.style.left = e.clientX + 'px';
                    cursorFollower.style.top = e.clientY + 'px';
                    
                    isMoving = false;
                });
                isMoving = true;
            }
        });
        
        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .tech-card, .nav-link, .hero-btn, .theme-toggle, .lang-btn');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorFollower.classList.add('hover');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorFollower.classList.remove('hover');
            });
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorFollower.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            cursorFollower.style.opacity = '1';
        });
    }
}

// SMOOTH SCROLL ANIMATIONS
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered delay for multiple elements
                const siblings = Array.from(entry.target.parentNode.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
        });
    }, observerOptions);
    
    // Observe all animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ENHANCED INTERACTIONS
function initEnhancedInteractions() {
    // Add ripple effect to buttons
    document.querySelectorAll('.hero-btn, .project-btn, .theme-toggle').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    if (!document.getElementById('ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize all systems when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSystem();
    initThemeSystem();
    initLazyLoading();
    initEnhancedAnimations();
    initPerformanceOptimizations();
    
    // Initialize new features
    initScrollProgressBar();
    initLoadingScreen();
    initCustomCursor();
    initEnhancedInteractions();
    
    // Start animations after a delay (will be triggered by loading screen completion)
    setTimeout(() => {
        if (!document.getElementById('loadingScreen') || 
            document.getElementById('loadingScreen').style.display === 'none') {
            initScrollAnimations();
        }
    }, 100);
}); 