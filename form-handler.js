// ========================================
// CONFIGURATION EMAILJS
// ========================================
const EMAILJS_CONFIG = {
    serviceID: 'service_8yodiwp',
    templateID: 'template_cd6n0sm',
    autoReplyTemplateID: 'template_fokk8zw',
    publicKey: 'xSY-ihREyXaJ9A584'
};

// Initialiser EmailJS
(function() {
    emailjs.init(EMAILJS_CONFIG.publicKey);
})();

// ========================================
// GESTION DU FORMULAIRE DE CONTACT
// ========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        const formData = new FormData(contactForm);
        const templateParams = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            form_type: 'Contact'
        };
        
        try {
            await emailjs.send(
                EMAILJS_CONFIG.serviceID,
                EMAILJS_CONFIG.templateID,
                templateParams
            );
            
            await emailjs.send(
                EMAILJS_CONFIG.serviceID,
                EMAILJS_CONFIG.autoReplyTemplateID,
                {
                    to_email: formData.get('email'),
                    to_name: formData.get('name')
                }
            );
            
            showSuccessMessage(contactForm, '✅ Message envoyé avec succès ! Nous vous répondrons rapidement.');
            contactForm.reset();
        } catch (error) {
            showErrorMessage(contactForm, '❌ Erreur lors de l\'envoi. Veuillez réessayer.');
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// ========================================
// GESTION DU FORMULAIRE D'AFFILIATION
// ========================================
const partnershipForm = document.querySelector('.partnership-form');
if (partnershipForm) {
    partnershipForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = partnershipForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
        submitBtn.disabled = true;
        
        const formData = new FormData(partnershipForm);
        const templateParams = {
            from_name: `${formData.get('name')} ${formData.get('firstname')}`,
            from_email: formData.get('email'),
            phone: formData.get('phone'),
            motivation: formData.get('motivation'),
            experience: formData.get('experience'),
            form_type: 'Affiliation'
        };
        
        try {
            await emailjs.send(
                EMAILJS_CONFIG.serviceID,
                EMAILJS_CONFIG.templateID,
                templateParams
            );
            
            await emailjs.send(
                EMAILJS_CONFIG.serviceID,
                EMAILJS_CONFIG.autoReplyTemplateID,
                {
                    to_email: formData.get('email'),
                    to_name: formData.get('name')
                }
            );
            
            showSuccessMessage(partnershipForm, '🎉 Candidature envoyée ! Nous reviendrons vers vous très bientôt.');
            partnershipForm.reset();
        } catch (error) {
            showErrorMessage(partnershipForm, '❌ Erreur lors de l\'envoi. Veuillez réessayer.');
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// ========================================
// GESTION DU FORMULAIRE D'AVIS
// ========================================
const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
    reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = reviewForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Publication...';
        submitBtn.disabled = true;
        
        const formData = new FormData(reviewForm);
        const rating = document.querySelector('input[name="rating"]:checked')?.value || '5';
        
        const templateParams = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            product: formData.get('product'),
            rating: rating,
            review_title: formData.get('title'),
            message: formData.get('comment'),
            form_type: 'Avis'
        };
        
        try {
            await emailjs.send(
                EMAILJS_CONFIG.serviceID,
                EMAILJS_CONFIG.templateID,
                templateParams
            );
            
            await emailjs.send(
                EMAILJS_CONFIG.serviceID,
                EMAILJS_CONFIG.autoReplyTemplateID,
                {
                    to_email: formData.get('email'),
                    to_name: formData.get('name')
                }
            );
            
            showSuccessMessage(reviewForm, '⭐ Merci pour votre avis ! Il sera publié après modération.');
            reviewForm.reset();
            const stars = document.querySelectorAll('.star-rating input');
            stars.forEach(star => star.checked = false);
        } catch (error) {
            showErrorMessage(reviewForm, '❌ Erreur lors de l\'envoi. Veuillez réessayer.');
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// ========================================
// GESTION DES FORMULAIRES NEWSLETTER
// ========================================
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const emailInput = form.querySelector('input[type="email"]');
        const originalBtnHTML = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        const templateParams = {
            from_email: emailInput.value,
            form_type: 'Newsletter',
            message: 'Nouvelle inscription à la newsletter'
        };
        
        try {
            await emailjs.send(
                EMAILJS_CONFIG.serviceID,
                EMAILJS_CONFIG.templateID,
                templateParams
            );
            
            await emailjs.send(
                EMAILJS_CONFIG.serviceID,
                EMAILJS_CONFIG.autoReplyTemplateID,
                {
                    to_email: emailInput.value,
                    to_name: 'Membre'
                }
            );
            
            showSuccessMessage(form, '✅ Inscription réussie !');
            form.reset();
        } catch (error) {
            showErrorMessage(form, '❌ Erreur. Réessayez.');
        } finally {
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnHTML;
                submitBtn.disabled = false;
            }, 2000);
        }
    });
});

// ========================================
// FONCTIONS UTILITAIRES
// ========================================
function showSuccessMessage(form, message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        margin-top: 1rem;
        animation: slideDown 0.3s ease;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        font-weight: 500;
    `;
    messageDiv.innerHTML = message;
    
    form.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

function showErrorMessage(form, message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        margin-top: 1rem;
        animation: shake 0.5s ease;
        box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
        font-weight: 500;
    `;
    messageDiv.innerHTML = message;
    
    form.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// Ajouter les animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);
