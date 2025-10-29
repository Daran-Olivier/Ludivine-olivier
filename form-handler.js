// ========================================
// CONFIGURATION EMAILJS
// ========================================
const EMAILJS_CONFIG = {
  serviceID: "service_8yodiwp",
  templateID: "template_cd6n0sm", // Template de réception (auto-réponse configurée dans le dashboard)
  publicKey: "xSY-ihREyXaJ9A584",
};

// Initialiser EmailJS
(function () {
  emailjs.init(EMAILJS_CONFIG.publicKey);
})();

// ========================================
// GESTION DU FORMULAIRE DE CONTACT
// ========================================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  // Utiliser capture:true pour s'exécuter AVANT script.js
  contactForm.addEventListener(
    "submit",
    async (e) => {
      e.preventDefault();
      e.stopImmediatePropagation(); // CRITIQUE: Empêcher script.js d'interférer

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;

      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);
      const templateParams = {
        from_name: formData.get("nom"),
        from_email: formData.get("email"),
        phone: formData.get("tel"),
        age: formData.get("age") || "Non renseigné",
        objectifs: formData.getAll("objectifs").join(", ") || "Non renseigné",
        message: formData.get("message") || "Demande de contact",
        choix_contact: formData.get("choixContact") || "message",
        rdv_date: formData.get("rdvDate") || "Non renseigné",
        rdv_time: formData.get("rdvTime") || "Non renseigné",
        form_type: "Contact",
      };

      try {
        // Envoi simple via EmailJS (auto-réponse gérée dans le dashboard)
        await emailjs.send(
          EMAILJS_CONFIG.serviceID,
          EMAILJS_CONFIG.templateID,
          templateParams
        );

        showFormSuccessMessage(
          contactForm,
          "✅ Message envoyé avec succès ! Vous recevrez une confirmation par email."
        );
        contactForm.reset();
      } catch (error) {
        console.error("❌ Erreur lors de l'envoi:", error);
        showFormErrorMessage(
          contactForm,
          "❌ Erreur lors de l'envoi. Veuillez réessayer."
        );
      } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }
    },
    { capture: true }
  ); // S'exécute AVANT script.js grâce à capture phase
}

// ========================================
// GESTION DU FORMULAIRE D'AFFILIATION
// ========================================
const partnershipForm = document.querySelector(".partnership-form");
if (partnershipForm) {
  partnershipForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = partnershipForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
    submitBtn.disabled = true;

    const formData = new FormData(partnershipForm);
    const templateParams = {
      from_name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      from_email: formData.get("email"),
      phone: formData.get("phone"),
      age: formData.get("age") || "Non renseigné",
      motivation: formData.get("motivation"),
      newsletter: formData.get("newsletter") ? "Oui" : "Non",
      form_type: "Affiliation",
    };

    try {
      // Envoi simple via EmailJS (auto-réponse gérée dans le dashboard)
      await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        templateParams
      );

      showFormSuccessMessage(
        partnershipForm,
        "🎉 Candidature envoyée ! Vous recevrez une confirmation par email."
      );
      partnershipForm.reset();
    } catch (error) {
      showFormErrorMessage(
        partnershipForm,
        "❌ Erreur lors de l'envoi. Veuillez réessayer."
      );
    } finally {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

// ========================================
// GESTION DU FORMULAIRE D'AVIS
// ========================================
const reviewForm = document.getElementById("reviewForm");
if (reviewForm) {
  reviewForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = reviewForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Publication...';
    submitBtn.disabled = true;

    const formData = new FormData(reviewForm);
    const rating =
      document.querySelector('input[name="rating"]:checked')?.value || "5";

    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      product: formData.get("product"),
      rating: rating,
      review_title: formData.get("title"),
      message: formData.get("comment"),
      form_type: "Avis",
    };

    try {
      // Envoi simple via EmailJS (auto-réponse gérée dans le dashboard)
      await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        templateParams
      );

      showFormSuccessMessage(
        reviewForm,
        "⭐ Merci pour votre avis ! Vous recevrez une confirmation par email."
      );
      reviewForm.reset();
      const stars = document.querySelectorAll(".star-rating input");
      stars.forEach((star) => (star.checked = false));
    } catch (error) {
      showFormErrorMessage(
        reviewForm,
        "❌ Erreur lors de l'envoi. Veuillez réessayer."
      );
    } finally {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

// ========================================
// GESTION DES FORMULAIRES NEWSLETTER
// ========================================
const newsletterForms = document.querySelectorAll(".newsletter-form");
newsletterForms.forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const emailInput = form.querySelector('input[type="email"]');
    const originalBtnHTML = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    const templateParams = {
      from_email: emailInput.value,
      form_type: "Newsletter",
      message: "Nouvelle inscription à la newsletter",
    };

    try {
      // Envoi simple via EmailJS (auto-réponse gérée dans le dashboard)
      await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        templateParams
      );

      showFormSuccessMessage(
        form,
        "✅ Inscription réussie ! Vous recevrez une confirmation par email."
      );
      form.reset();
    } catch (error) {
      showFormErrorMessage(form, "❌ Erreur. Réessayez.");
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
function showFormSuccessMessage(form, message) {
  const messageDiv = document.createElement("div");
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
    messageDiv.style.animation = "slideUp 0.3s ease";
    setTimeout(() => messageDiv.remove(), 300);
  }, 5000);
}

function showFormErrorMessage(form, message) {
  const messageDiv = document.createElement("div");
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
    messageDiv.style.animation = "slideUp 0.3s ease";
    setTimeout(() => messageDiv.remove(), 300);
  }, 5000);
}

// Ajouter les animations CSS
const formHandlerStyles = document.createElement("style");
formHandlerStyles.textContent = `
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
document.head.appendChild(formHandlerStyles);
