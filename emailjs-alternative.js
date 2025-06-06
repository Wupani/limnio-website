// EmailJS Alternative Implementation
// Bu dosyayı kullanmak için:
// 1. HTML'de EmailJS CDN'ini ekleyin: <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
// 2. emailjs.com'da hesap oluşturun
// 3. Gmail service'ini bağlayın
// 4. Template oluşturun

// EmailJS Configuration
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
    SERVICE_ID: 'YOUR_SERVICE_ID',
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID'
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// Contact form handling with EmailJS
function sendEmailWithEmailJS(formData) {
    const templateParams = {
        from_name: formData.get('name') || 'Anonim',
        from_email: formData.get('email') || 'belirtilmemiş',
        phone: formData.get('phone') || 'belirtilmemiş',
        company: formData.get('company') || 'belirtilmemiş',
        category: formData.get('category'),
        budget: formData.get('budget') || 'belirtilmemiş',
        timeline: formData.get('timeline') || 'belirtilmemiş',
        subject: formData.get('subject') || 'Yeni Proje Talebi',
        message: formData.get('message'),
        to_email: 'wupaniyazilim@gmail.com'
    };

    return emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
    );
}

// Usage in main script.js:
/*
// Replace the Formspree code with:
sendEmailWithEmailJS(formData)
    .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        // Success handling...
    })
    .catch(error => {
        console.log('FAILED...', error);
        // Error handling...
    });
*/ 