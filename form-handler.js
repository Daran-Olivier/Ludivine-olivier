// ========================================
// CONFIGURATION - À PERSONNALISER
// ========================================
// Inscrivez-vous sur https://formspree.io (gratuit)
// Remplacez 'YOUR_FORM_ID' par votre ID Formspree

const FORMSPREE_CONFIG = {
    contact: 'https://formspree.io/f/mdkwrapg', // Pour le formulaire de contact
    newsletter: 'https://formspree.io/f/manpgqlj', // Pour les newsletters
    affiliation: 'https://formspree.io/f/xqayvegl', // Pour l'affiliation
    review: 'https://formspree.io/f/xzzjldkk' // Pour les avis
};

// ========================================
// GESTION DU FORMULAIRE DE CONTACT
// ========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        // Animation de chargement
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        const formData = new FormData(contactForm);
        const data = {
            nom: formData.get('name'),
            email: formData.get('email'),
            telephone: formData.get('phone'),
            sujet: formData.get('subject'),
            message: formData.get('message'),
            _subject: `Nouveau message de ${formData.get('name')}`,
            _replyto: formData.get('email')
        };
        
        try {
            const response = await fetch(FORMSPREE_CONFIG.contact, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                showSuccessMessage(contactForm, '✅ Message envoyé avec succès ! Nous vous répondrons rapidement.');
                contactForm.reset();
            } else {
                throw new Error('Erreur serveur');
            }
        } catch (error) {
            showErrorMessage(contactForm, '❌ Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement.');
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
        const data = {
            nom: formData.get('name'),
            prenom: formData.get('firstname'),
            email: formData.get('email'),
            telephone: formData.get('phone'),
            motivation: formData.get('motivation'),
            experience: formData.get('experience'),
            _subject: `Nouvelle demande d'affiliation - ${formData.get('name')} ${formData.get('firstname')}`,
            _replyto: formData.get('email')
        };
        
        try {
            const response = await fetch(FORMSPREE_CONFIG.affiliation, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                showSuccessMessage(partnershipForm, '🎉 Candidature envoyée ! Nous reviendrons vers vous très bientôt.');
                partnershipForm.reset();
            } else {
                throw new Error('Erreur serveur');
            }
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
        
        const data = {
            nom: formData.get('name'),
            email: formData.get('email'),
            produit: formData.get('product'),
            note: rating,
            titre: formData.get('title'),
            commentaire: formData.get('comment'),
            _subject: `Nouvel avis - ${rating}★ - ${formData.get('name')}`,
            _replyto: formData.get('email')
        };
        
        try {
            const response = await fetch(FORMSPREE_CONFIG.review, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                showSuccessMessage(reviewForm, '⭐ Merci pour votre avis ! Il sera publié après modération.');
                reviewForm.reset();
                // Réinitialiser les étoiles
                const stars = document.querySelectorAll('.star-rating input');
                stars.forEach(star => star.checked = false);
            } else {
                throw new Error('Erreur serveur');
            }
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
        
        const data = {
            email: emailInput.value,
            _subject: 'Nouvelle inscription à la newsletter',
            source: 'Newsletter footer'
        };
        
        try {
            const response = await fetch(FORMSPREE_CONFIG.newsletter, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                showSuccessMessage(form, '✅ Inscription réussie !');
                form.reset();
            } else {
                throw new Error('Erreur serveur');
            }
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
