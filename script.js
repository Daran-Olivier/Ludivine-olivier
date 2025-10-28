// ========================================
// Configuration & Variables Globales
// ========================================
const gameState = {
  points: parseInt(localStorage.getItem("healthPoints")) || 0,
  badges: JSON.parse(localStorage.getItem("badges")) || [],
  level: parseInt(localStorage.getItem("userLevel")) || 1,
  exploredProducts: JSON.parse(localStorage.getItem("exploredProducts")) || [],
  downloadedPrograms:
    JSON.parse(localStorage.getItem("downloadedPrograms")) || [],
};

// ========================================
// Initialisation au chargement de la page
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  // Effet scroll header
  initHeaderScroll();

  // Menu mobile
  initMobileMenu();

  // Animations au scroll
  initScrollAnimations();

  // Initialiser les stats
  updateGameStats();
  updateGamificationBar();

  // Compteurs animés
  animateCounters();

  // Formulaires
  initForms();

  // Initialiser les fonctionnalités spécifiques selon la page
  const currentPage = window.location.pathname;

  if (currentPage.includes("index.html") || currentPage.endsWith("/")) {
    initHomePage();
  } else if (currentPage.includes("produits.html")) {
    initProductsPage();
  } else if (currentPage.includes("programmes.html")) {
    initProgramsPage();
  } else if (currentPage.includes("contact.html")) {
    initContactPage();
  }
});

// ========================================
// Effet Scroll Header
// ========================================
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });
}

// ========================================
// Menu Mobile
// ========================================
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Fermer le menu au clic sur un lien
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }
}

// ========================================
// Animations au Scroll
// ========================================
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Observer tous les éléments animables
  const animateElements = document.querySelectorAll(
    ".feature-card, .product-card, .testimonial-card, .program-card"
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// ========================================
// Système de Points & Gamification
// ========================================
function updateGameStats() {
  // Mettre à jour les compteurs dans la page
  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach((stat) => {
    if (
      stat.dataset.target === "0" &&
      stat.parentElement
        .querySelector(".stat-label")
        .textContent.includes("Points")
    ) {
      stat.textContent = gameState.points;
    } else if (
      stat.dataset.target === "0" &&
      stat.parentElement
        .querySelector(".stat-label")
        .textContent.includes("Badges")
    ) {
      stat.textContent = gameState.badges.length;
    } else if (
      stat.dataset.target === "1" &&
      stat.parentElement
        .querySelector(".stat-label")
        .textContent.includes("Niveau")
    ) {
      stat.textContent = gameState.level;
    }
  });
  // Calculer et afficher le niveau
  gameState.level = Math.floor(gameState.points / 100) + 1;
  localStorage.setItem("userLevel", gameState.level);
  updateGamificationBar();
}

function updateGamificationBar() {
  // Points
  const pointsEl = document.getElementById("userPoints");
  if (pointsEl) pointsEl.textContent = gameState.points;
  // Badges
  const badgesEl = document.getElementById("userBadges");
  if (badgesEl) badgesEl.textContent = gameState.badges.length;
  // Niveau
  const levelEl = document.getElementById("userLevel");
  if (levelEl) levelEl.textContent = gameState.level;
  // Barre de niveau
  const barFill = document.getElementById("levelBarFill");
  if (barFill) {
    let percent = ((gameState.points % 100) / 100) * 100;
    barFill.style.width = percent + "%";
  }
}

function addPoints(amount, reason) {
  gameState.points += amount;
  localStorage.setItem("healthPoints", gameState.points);
  // Animation de gain de points
  showPointsNotification(amount, reason);
  showConfetti();
  // Vérifier les nouveaux badges
  checkBadges();
  // Mettre à jour l'affichage
  updateGameStats();
}

function showPointsNotification(points, reason) {
  const notification = document.createElement("div");
  notification.className = "points-notification";
  notification.innerHTML = `
        <i class="fas fa-star"></i>
        <span>+${points} Points !</span>
        <small>${reason}</small>
    `;
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #2ECC71, #27AE60);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.5s ease, fadeOut 0.5s ease 2.5s;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function checkBadges() {
  const badges = [
    {
      id: "explorer",
      name: "Explorateur",
      condition: () => gameState.exploredProducts.length >= 5,
      points: 50,
    },
    {
      id: "master",
      name: "Maître de la Nutrition",
      condition: () => gameState.exploredProducts.length >= 15,
      points: 100,
    },
    {
      id: "dedicated",
      name: "Dévoué",
      condition: () => gameState.downloadedPrograms.length >= 2,
      points: 75,
    },
    {
      id: "champion",
      name: "Champion",
      condition: () => gameState.points >= 500,
      points: 150,
    },
  ];

  badges.forEach((badge) => {
    if (badge.condition() && !gameState.badges.includes(badge.id)) {
      gameState.badges.push(badge.id);
      localStorage.setItem("badges", JSON.stringify(gameState.badges));
      showBadgeUnlocked(badge);
    }
  });
}

function showBadgeUnlocked(badge) {
  const notification = document.createElement("div");
  notification.className = "badge-notification";
  notification.innerHTML = `
        <div style="font-size: 3rem;">🏆</div>
        <h3>Nouveau Badge Débloqué !</h3>
        <p>${badge.name}</p>
        <small>+${badge.points} points bonus</small>
    `;
  notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #F39C12, #F8B739);
        color: white;
        padding: 2rem;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        z-index: 10001;
        text-align: center;
        animation: bounceIn 0.6s ease;
    `;

  document.body.appendChild(notification);

  addPoints(badge.points, `Badge: ${badge.name}`);

  setTimeout(() => {
    notification.style.animation = "fadeOut 0.5s ease";
    setTimeout(() => notification.remove(), 500);
  }, 4000);
}

// ========================================
// Compteurs Animés
// ========================================
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target =
      parseInt(counter.dataset.target) || parseInt(counter.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    // Observer pour démarrer l'animation au scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && counter.textContent === "0") {
          updateCounter();
          observer.unobserve(counter);
        }
      });
    });

    observer.observe(counter);
  });
}

// ========================================
// Page Produits
// ========================================
function initProductsPage() {
  // Filtres de catégories
  const filterTabs = document.querySelectorAll(".filter-tab");
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const category = this.dataset.category;

      // Mettre à jour les tabs actifs
      filterTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // Filtrer les produits
      filterProducts(category);
    });
  });
}

function filterProducts(category) {
  const sections = document.querySelectorAll(".product-category");

  if (category === "all") {
    sections.forEach((section) => (section.style.display = "block"));
  } else {
    sections.forEach((section) => {
      const sectionId = section.id;
      section.style.display = sectionId === category ? "block" : "none";
    });
  }

  // Scroll vers la première section visible
  const firstVisible =
    document.querySelector('.product-category[style="display: block"]') ||
    document.querySelector(".product-category");
  if (firstVisible) {
    firstVisible.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function exploreProduct(productId, category) {
  const productKey = `${category}-${productId}`;

  if (!gameState.exploredProducts.includes(productKey)) {
    gameState.exploredProducts.push(productKey);
    localStorage.setItem(
      "exploredProducts",
      JSON.stringify(gameState.exploredProducts)
    );
    addPoints(10, "Produit exploré");

    // Mettre à jour la progression de la catégorie
    updateCategoryProgress(category);
  }

  // Afficher le modal (à implémenter selon vos besoins)
  showProductModal(productId, category);
}

function updateCategoryProgress(category) {
  const categoryProducts = gameState.exploredProducts.filter((p) =>
    p.startsWith(category)
  );
  const categorySection = document.getElementById(category);

  if (categorySection) {
    const progressBar = categorySection.querySelector(
      ".progress-fill-category"
    );
    const progressText = categorySection.querySelector(".progress-text");

    // Nombre total de produits par catégorie (à ajuster)
    const totalProducts = {
      nutrition: 4, // ESS Café, ESS Chocolat, Mangue, Vanille
      care: 1, // 93
      drinks: 5, // Go to Sleep, Cool & Relax, Boost, Collagen, Digest
      elixirs: 3, // 62, 5, 42
      accessoires: 2,
    };

    const total = totalProducts[category] || 5;
    const explored = categoryProducts.length;
    const percentage = (explored / total) * 100;

    if (progressBar) {
      progressBar.style.width = percentage + "%";
    }

    if (progressText) {
      progressText.textContent = `${explored}/${total} produits découverts`;
    }
  }
}

function showProductModal(productId, category) {
  const modal = document.getElementById("productModal");
  if (!modal) return;

  // Ici vous pouvez personnaliser le contenu du modal selon le produit
  modal.classList.add("active");
  modal.style.display = "flex";

  // Fermer le modal
  const closeBtn = modal.querySelector(".close");
  if (closeBtn) {
    closeBtn.onclick = () => closeModal();
  }

  modal.onclick = (e) => {
    if (e.target === modal) {
      closeModal();
    }
  };
}

function closeModal() {
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.classList.remove("active");
    modal.style.display = "none";
  }
}

// ========================================
// Page Programmes
// ========================================
function initProgramsPage() {
  initProgramQuestionnaire();
  // initCalendar(); // Désactivé pour la nouvelle logique
  // Questionnaire fun pour programmes
  function initProgramQuestionnaire() {
    const form = document.getElementById("quizForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const objectif = form.objectif.value;
      const niveau = form.niveau.value;
      const activites = Array.from(
        form.querySelectorAll('input[name="activite"]:checked')
      ).map((a) => a.value);
      afficherProgrammes(objectif, niveau, activites);
    });
  }

  // Liste fictive des programmes (à adapter avec les vrais fichiers)
  const programmes = [
    {
      id: "perte-debutant-yoga",
      titre: "Programme Yoga Débutant - Perte de poids",
      description: "Un programme doux pour débuter le yoga et perdre du poids.",
      objectif: "perte",
      niveau: "debutant",
      activites: ["yoga"],
      fichier: "assets/programme-yoga-debutant.pdf",
    },
    {
      id: "muscle-avance-muscu",
      titre: "Programme Musculation Avancé",
      description:
        "Pour ceux qui veulent prendre du muscle avec des exercices avancés.",
      objectif: "muscle",
      niveau: "avance",
      activites: ["muscu"],
      fichier: "assets/programme-muscu-avance.pdf",
    },
    {
      id: "energie-intermediaire-cardio",
      titre: "Cardio Boost Intermédiaire",
      description: "Un programme cardio pour booster ton énergie.",
      objectif: "energie",
      niveau: "intermediaire",
      activites: ["cardio"],
      fichier: "assets/programme-cardio-inter.pdf",
    },
    {
      id: "detente-debutant-relax",
      titre: "Relaxation & Bien-être Débutant",
      description: "Pour se détendre et améliorer son bien-être.",
      objectif: "detente",
      niveau: "debutant",
      activites: ["relax"],
      fichier: "assets/programme-relax-debutant.pdf",
    },
  ];

  function afficherProgrammes(objectif, niveau, activites) {
    const zone = document.getElementById("resultat-programmes");
    zone.innerHTML = "";
    // Filtrer les programmes selon les réponses
    const filtres = programmes.filter(
      (p) =>
        p.objectif === objectif &&
        p.niveau === niveau &&
        p.activites.some((a) => activites.includes(a))
    );
    if (filtres.length === 0) {
      zone.innerHTML =
        "<p>Aucun programme ne correspond à tes réponses. Essaie d’autres options !</p>";
      return;
    }
    filtres.forEach((p) => {
      const card = document.createElement("div");
      card.className = "program-card";
      card.style =
        "background:#fff; border-radius:8px; box-shadow:0 2px 8px #ccc; margin-bottom:1em; padding:1em;";
      card.innerHTML = `<h3>${p.titre}</h3><p>${p.description}</p><a href="${p.fichier}" download style="color:#4A90E2;font-weight:bold;">Télécharger le programme</a>`;
      zone.appendChild(card);
    });
  }
}

// Quiz de personnalisation
let quizAnswers = {};
let currentQuizStep = 1;

function initQuiz() {
  const quizOptions = document.querySelectorAll(".quiz-option");
  quizOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const question = parseInt(
        this.closest(".quiz-question").dataset.question
      );
      selectAnswer(question, this.dataset.value);
    });
  });
}

function selectAnswer(questionNumber, value) {
  quizAnswers[questionNumber] = value;

  // Mettre à jour l'UI
  const currentQuestion = document.querySelector(
    `.quiz-question[data-question="${questionNumber}"]`
  );
  const options = currentQuestion.querySelectorAll(".quiz-option");
  options.forEach((opt) => opt.classList.remove("selected"));
  event.target.closest(".quiz-option").classList.add("selected");

  // Passer à la question suivante automatiquement
  setTimeout(() => {
    if (questionNumber < 3) {
      nextQuizStep();
    } else {
      showQuizResult();
    }
  }, 500);
}

function nextQuizStep() {
  currentQuizStep++;

  // Mettre à jour la progression
  const progress = (currentQuizStep / 3) * 100;
  document.getElementById("quizProgress").style.width = progress + "%";
  document.getElementById("currentQuestion").textContent = currentQuizStep;

  // Afficher la question suivante
  const questions = document.querySelectorAll(".quiz-question");
  questions.forEach((q) => q.classList.remove("active"));
  document
    .querySelector(`.quiz-question[data-question="${currentQuizStep}"]`)
    .classList.add("active");
}

function showQuizResult() {
  // Logique de recommandation basée sur les réponses
  let recommendedProgram = "sport"; // Par défaut

  if (quizAnswers[1] === "actifs") {
    recommendedProgram = "actifs";
  } else if (quizAnswers[1] === "seniors") {
    recommendedProgram = "seniors";
  } else if (quizAnswers[1] === "bodyfit") {
    recommendedProgram = "bodyfit";
  }

  // Afficher le résultat
  const resultDiv = document.getElementById("quizResult");
  const recommendedDiv = document.getElementById("recommendedProgram");
  const programCard = document.querySelector(
    `.program-card[data-program="${recommendedProgram}"]`
  );
  if (programCard) {
    recommendedDiv.innerHTML = programCard.innerHTML;
  }
  // Cacher les questions et afficher le résultat
  document
    .querySelectorAll(".quiz-question")
    .forEach((q) => q.classList.remove("active"));
  resultDiv.style.display = "block";
  showConfetti();
  // Scroll automatique vers le programme recommandé
  setTimeout(() => {
    const progSection = document.querySelector(".programs-section");
    if (progSection) {
      progSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 800);
}

function resetQuiz() {
  quizAnswers = {};
  currentQuizStep = 1;
  document.getElementById("quizProgress").style.width = "33.33%";
  document.getElementById("currentQuestion").textContent = "1";
  document.getElementById("quizResult").style.display = "none";
  document
    .querySelector('.quiz-question[data-question="1"]')
    .classList.add("active");
}

// Téléchargement de programmes
function downloadProgram(programId) {
  if (!gameState.downloadedPrograms.includes(programId)) {
    gameState.downloadedPrograms.push(programId);
    localStorage.setItem(
      "downloadedPrograms",
      JSON.stringify(gameState.downloadedPrograms)
    );
    addPoints(25, "Programme téléchargé");
    showConfetti();
  }
  // Animation confettis gamification
  function showConfetti() {
    const confettiContainer = document.getElementById("confetti");
    if (!confettiContainer) return;
    confettiContainer.innerHTML = "";
    confettiContainer.style.display = "block";
    const colors = ["#FFD700", "#4A90E2", "#9B59B6", "#F39C12", "#2ECC71"];
    for (let i = 0; i < 24; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = Math.random() * 300 - 150 + "px";
      piece.style.top = Math.random() * 60 + "px";
      confettiContainer.appendChild(piece);
    }
    setTimeout(() => {
      confettiContainer.style.display = "none";
      confettiContainer.innerHTML = "";
    }, 1200);
  }
}

function previewProgram(programId) {
  const modal = document.getElementById("previewModal");
  if (!modal) return;

  // Personnaliser le contenu selon le programme
  const programData = {
    sport: {
      title: "Programme Sport",
      badge: "🏆 Performance",
      content: `
                <h3>Aperçu du Programme Sport</h3>
                <p>Ce programme complet de 30 jours vous aidera à optimiser vos performances sportives...</p>
                <ul>
                    <li>Plan nutritionnel pré/post entraînement</li>
                    <li>Supplémentation adaptée</li>
                    <li>Conseils de récupération</li>
                    <li>Suivi de progression</li>
                </ul>
            `,
    },
    // Ajouter les autres programmes...
  };

  const data = programData[programId] || programData["sport"];
  document.getElementById("previewTitle").textContent = data.title;
  document.getElementById("previewBadge").textContent = data.badge;
  document.getElementById("previewContent").innerHTML = data.content;

  modal.classList.add("active");
  modal.style.display = "flex";

  // Stocker l'ID pour le téléchargement
  modal.dataset.programId = programId;
}

function closePreview() {
  const modal = document.getElementById("previewModal");
  if (modal) {
    modal.classList.remove("active");
    modal.style.display = "none";
  }
}

function downloadFromPreview() {
  const modal = document.getElementById("previewModal");
  const programId = modal.dataset.programId;
  downloadProgram(programId);
  closePreview();
}

// ========================================
// Page Contact - Calendrier de RDV
// ========================================
function initContactPage() {
  initBookingCalendar();
}

let bookingStep = 1;
let bookingData = {
  consultationType: "",
  date: "",
  time: "",
  personalInfo: {},
};

function showBookingCalendar() {
  const section = document.getElementById("booking-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function initBookingCalendar() {
  // Générer le calendrier
  generateCalendar();
}

function generateCalendar() {
  const calendarGrid = document.getElementById("calendarGrid");
  if (!calendarGrid) return;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // Générer les jours du mois
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  let calendarHTML = '<div class="calendar-days">';

  // Jours de la semaine
  const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  dayNames.forEach((day) => {
    calendarHTML += `<div class="day-name">${day}</div>`;
  });

  // Jours vides avant le premier jour
  for (let i = 0; i < firstDay.getDay(); i++) {
    calendarHTML += '<div class="day empty"></div>';
  }

  // Jours du mois
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isToday = date.toDateString() === today.toDateString();
    const isPast = date < today;
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;

    let classes = "day";
    if (isToday) classes += " today";
    if (isPast) classes += " disabled";
    if (isWeekend) classes += " weekend";

    calendarHTML += `
            <div class="${classes}" onclick="selectDate('${date.toISOString()}')" ${
      isPast ? 'style="pointer-events:none;opacity:0.3;"' : ""
    }>
                ${day}
            </div>
        `;
  }

  calendarHTML += "</div>";
  calendarGrid.innerHTML = calendarHTML;
}

function changeMonth(direction) {
  // Implémenter la navigation entre les mois
}

function selectDate(dateString) {
  const date = new Date(dateString);
  bookingData.date = date.toLocaleDateString("fr-FR");

  // Générer les créneaux horaires disponibles
  generateTimeSlots(date);

  // Mettre en surbrillance la date sélectionnée
  document
    .querySelectorAll(".day")
    .forEach((d) => d.classList.remove("selected"));
  event.target.classList.add("selected");
}

function generateTimeSlots(date) {
  const slotsGrid = document.getElementById("slotsGrid");
  if (!slotsGrid) return;

  const slots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  let slotsHTML = "";
  slots.forEach((time) => {
    const isAvailable = Math.random() > 0.3; // Simulation de disponibilité
    slotsHTML += `
            <button class="time-slot ${
              isAvailable ? "available" : "unavailable"
            }"
                    ${
                      isAvailable
                        ? `onclick="selectTime('${time}')"`
                        : "disabled"
                    }>
                ${time}
                ${
                  !isAvailable
                    ? '<span class="unavailable-label">Complet</span>'
                    : ""
                }
            </button>
        `;
  });

  slotsGrid.innerHTML = slotsHTML;
}

function selectTime(time) {
  bookingData.time = time;

  // Mettre en surbrillance le créneau sélectionné
  document
    .querySelectorAll(".time-slot")
    .forEach((s) => s.classList.remove("selected"));
  event.target.classList.add("selected");

  // Activer le bouton suivant
  document.getElementById("nextBtn").disabled = false;
}

function selectConsultationType(type) {
  bookingData.consultationType = type;

  // Mettre en surbrillance le type sélectionné
  document
    .querySelectorAll(".consultation-card")
    .forEach((c) => c.classList.remove("selected"));
  event.target.closest(".consultation-card").classList.add("selected");

  // Passer à l'étape suivante après une courte pause
  setTimeout(() => nextStep(), 500);
}

function nextStep() {
  if (bookingStep < 4) {
    bookingStep++;
    updateBookingStep();
  }
}

function previousStep() {
  if (bookingStep > 1) {
    bookingStep--;
    updateBookingStep();
  }
}

function updateBookingStep() {
  // Mettre à jour les indicateurs d'étapes
  document.querySelectorAll(".step").forEach((step, index) => {
    if (index + 1 === bookingStep) {
      step.classList.add("active");
    } else if (index + 1 < bookingStep) {
      step.classList.add("completed");
      step.classList.remove("active");
    } else {
      step.classList.remove("active", "completed");
    }
  });

  // Afficher/masquer les sections
  document.querySelectorAll(".booking-step").forEach((section, index) => {
    section.classList.toggle("active", index + 1 === bookingStep);
  });

  // Gérer les boutons de navigation
  document.getElementById("prevBtn").style.display =
    bookingStep > 1 ? "inline-flex" : "none";
  document.getElementById("nextBtn").style.display =
    bookingStep < 4 ? "inline-flex" : "none";

  // Si étape 4 (confirmation), afficher le résumé
  if (bookingStep === 4) {
    showAppointmentSummary();
    addPoints(50, "Rendez-vous pris");
  }
}

function showAppointmentSummary() {
  const summaryDiv = document.getElementById("appointmentSummary");
  if (!summaryDiv) return;

  summaryDiv.innerHTML = `
        <div class="summary-item">
            <i class="fas fa-user-md"></i>
            <div>
                <strong>Type de consultation</strong>
                <p>${bookingData.consultationType || "Non spécifié"}</p>
            </div>
        </div>
        <div class="summary-item">
            <i class="fas fa-calendar"></i>
            <div>
                <strong>Date</strong>
                <p>${bookingData.date || "Non spécifiée"}</p>
            </div>
        </div>
        <div class="summary-item">
            <i class="fas fa-clock"></i>
            <div>
                <strong>Heure</strong>
                <p>${bookingData.time || "Non spécifiée"}</p>
            </div>
        </div>
    `;
}

function addToCalendar() {
  alert("Fonctionnalité à venir : Ajouter au calendrier");
}

function resetBooking() {
  bookingStep = 1;
  bookingData = {
    consultationType: "",
    date: "",
    time: "",
    personalInfo: {},
  };
  updateBookingStep();
}

// ========================================
// FAQ - Accordéon
// ========================================
function toggleFaq(element) {
  const faqItem = element.parentElement;
  const answer = faqItem.querySelector(".faq-answer");
  const icon = element.querySelector("i");

  // Fermer les autres FAQ
  document.querySelectorAll(".faq-item").forEach((item) => {
    if (item !== faqItem) {
      item.classList.remove("active");
      item.querySelector(".faq-answer").style.maxHeight = null;
      item.querySelector(".faq-question i").classList.remove("fa-chevron-up");
      item.querySelector(".faq-question i").classList.add("fa-chevron-down");
    }
  });

  // Toggle l'item actuel
  faqItem.classList.toggle("active");

  if (faqItem.classList.contains("active")) {
    answer.style.maxHeight = answer.scrollHeight + "px";
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  } else {
    answer.style.maxHeight = null;
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
}

// ========================================
// Formulaires
// ========================================
function initForms() {
  // Formulaire de contact
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }

  // Formulaire de réservation
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", handleBookingSubmit);
  }

  // Formulaire de partenariat
  const partnershipForm = document.querySelector(".partnership-form");
  if (partnershipForm) {
    partnershipForm.addEventListener("submit", handlePartnershipSubmit);
  }
}

function handleContactSubmit(e) {
  e.preventDefault();

  // Récupérer les données
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Afficher un message de succès
  showSuccessMessage(
    "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais."
  );

  // Réinitialiser le formulaire
  e.target.reset();

  // Ajouter des points
  addPoints(15, "Message envoyé");
}

function handleBookingSubmit(e) {
  e.preventDefault();

  // Récupérer les données
  const formData = new FormData(e.target);
  bookingData.personalInfo = Object.fromEntries(formData);

  // Passer à l'étape suivante
  nextStep();
}

function handlePartnershipSubmit(e) {
  e.preventDefault();

  // Récupérer les données
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Afficher un message de succès
  showSuccessMessage(
    "Votre candidature a été envoyée avec succès ! Nous vous contacterons sous 48h."
  );

  // Réinitialiser le formulaire
  e.target.reset();
}

function showSuccessMessage(message) {
  const notification = document.createElement("div");
  notification.className = "success-notification";
  notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #2ECC71, #27AE60);
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.5s ease, fadeOut 0.5s ease 4.5s;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// ========================================
// Page d'accueil
// ========================================
function initHomePage() {
  // Animer la barre de progression
  setTimeout(() => {
    const progressBar = document.querySelector(".progress-fill");
    if (progressBar) {
      const targetProgress = Math.min((gameState.points / 500) * 100, 100);
      progressBar.style.width = targetProgress + "%";
    }
  }, 500);
}

// ========================================
// Styles CSS additionnels pour les animations
// ========================================
const style = document.createElement("style");
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }

    @keyframes bounceIn {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.1);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }

    .quiz-option.selected {
        background: linear-gradient(135deg, #4A90E2, #357ABD) !important;
        color: white !important;
        transform: scale(1.05);
    }

    .consultation-card.selected {
        border: 3px solid #4A90E2;
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(74, 144, 226, 0.3);
    }

    .day.selected {
        background: linear-gradient(135deg, #4A90E2, #357ABD);
        color: white;
        font-weight: bold;
    }

    .time-slot.selected {
        background: linear-gradient(135deg, #2ECC71, #27AE60);
        color: white;
        font-weight: bold;
    }

    .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        padding: 0 1.5rem;
    }

    .faq-item.active .faq-answer {
        padding: 1rem 1.5rem;
    }
`;
document.head.appendChild(style);

// ========================================
// Utilitaires
// ========================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
