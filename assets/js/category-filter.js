// ========================================
// FILTRAGE DYNAMIQUE DES CATÉGORIES PRODUITS
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  // Vérifier si on est sur la page produits ou un template
  const isProductPage = window.location.pathname.includes("produits.html");
  const isTemplateProduct = document.querySelector(".product-template");

  if (!isProductPage && !isTemplateProduct) return;

  // Ordre des catégories (identique à produits.html)
  const categoryOrder = ["nutrition", "care", "drinks", "elixirs"];

  // Récupérer les liens de catégories dans le dropdown
  const categoryLinks = document.querySelectorAll(
    '.dropdown-menu a[href*="#"]'
  );

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Récupérer la catégorie cliquée depuis le href
      const href = this.getAttribute("href");
      const category = href.split("#")[1];

      if (!category) return;

      // Fermer le menu mobile si ouvert
      const navMenu = document.querySelector(".nav-menu");
      const hamburger = document.querySelector(".hamburger");
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        if (hamburger) {
          hamburger.classList.remove("active");
        }
      }

      // Si on est sur un template (pas de sections catégories), rediriger vers produits.html
      const categoryExists = document.getElementById(category);
      if (isTemplateProduct && !categoryExists) {
        // Rediriger vers la page produits avec le hash
        window.location.href = "produits.html#" + category;
        return;
      }

      // Filtrer les catégories (seulement sur produits.html)
      if (isProductPage) {
        filterCategories(category);
      }

      // Scroll vers la catégorie
      const targetSection = document.getElementById(category);
      if (targetSection) {
        setTimeout(() => {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    });
  });

  // Vérifier si on a un hash dans l'URL au chargement
  const hash = window.location.hash.slice(1);
  if (hash && categoryOrder.includes(hash)) {
    setTimeout(() => {
      filterCategories(hash);
    }, 500);
  }
});

function filterCategories(selectedCategory) {
  // Récupérer toutes les sections de catégories
  const allCategories = document.querySelectorAll(".product-category");

  if (allCategories.length === 0) return;

  // Masquer toutes les catégories sauf celle sélectionnée
  allCategories.forEach((section) => {
    const sectionId = section.getAttribute("id");

    if (sectionId === selectedCategory) {
      section.style.display = "block";
      section.style.opacity = "1";
      section.classList.add("active-category");
    } else {
      section.style.display = "none";
      section.classList.remove("active-category");
    }
  });
}
