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