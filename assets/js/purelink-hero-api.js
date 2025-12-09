// Script d'intégration API pour les images hero (index.html et a-propos.html)

document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour charger l'image hero active pour une page
  async function loadHeroImage(page, imgElementId) {
    try {
      const response = await fetch(
        `${window.PURELINK_API_BASE}/api/hero-images.php?page=${page}`
      );
      if (!response.ok) {
        console.info(`API hero-images pas encore disponible pour ${page}`);
        return;
      }

      const data = await response.json();
      if (!data.success || !data.images || data.images.length === 0) {
        console.info(`Aucune image hero API trouvée pour ${page}`);
        return;
      }

      // Trouver l'image active ou prendre la première
      const activeImage =
        data.images.find((img) => img.is_active) || data.images[0];

      // Mettre à jour l'image dans le DOM
      const imgElement = document.getElementById(imgElementId);
      if (imgElement && activeImage) {
        // Créer une nouvelle image pour tester le chargement
        const testImg = new Image();
        testImg.onload = function () {
          imgElement.src = activeImage.image_url;
          imgElement.alt = activeImage.alt_text;

          // Ajouter un indicateur visuel API
          addAPIIndicator(imgElement, "Image gérée via API");
        };
        testImg.onerror = function () {
          console.warn(
            `Impossible de charger l'image API: ${activeImage.image_url}`
          );
        };
        testImg.src = activeImage.image_url;
      }
    } catch (error) {
      console.info(
        `API hero-images non disponible pour ${page}:`,
        error.message
      );
    }
  }

  // Fonction pour ajouter un indicateur visuel API
  function addAPIIndicator(imgElement, message) {
    // Éviter les doublons
    if (imgElement.parentElement.querySelector(".api-indicator")) return;

    const indicator = document.createElement("div");
    indicator.className = "api-indicator";
    indicator.innerHTML = "🌐 API";
    indicator.title = message;
    indicator.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
            z-index: 10;
            pointer-events: none;
        `;

    // S'assurer que le conteneur parent a position relative
    const container = imgElement.parentElement;
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }

    container.appendChild(indicator);
  }

  // Détecter la page actuelle et charger l'image appropriée
  const currentPage = window.location.pathname;

  if (currentPage.includes("index.html") || currentPage === "/") {
    // Page d'accueil
    const heroImg = document.querySelector(".hero-image img");
    if (heroImg) {
      heroImg.id = "index-hero-img";
      loadHeroImage("index", "index-hero-img");
    }
  } else if (currentPage.includes("a-propos.html")) {
    // Page à propos
    loadHeroImage("about", "about-hero-img");
  }

  // Fonction utilitaire pour l'admin : changer l'image hero
  window.changeHeroImage = async function (
    page,
    imageFile,
    altText,
    description = ""
  ) {
    if (!imageFile) {
      console.error("Fichier image requis");
      return false;
    }

    const formData = new FormData();
    formData.append("page", page);
    formData.append("image", imageFile);
    formData.append("alt_text", altText);
    formData.append("description", description);
    formData.append("is_active", true);

    try {
      const response = await fetch(
        `${window.PURELINK_API_BASE}/api/hero-images.php`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.success) {
        // Recharger l'image sur la page
        if (page === "index") {
          loadHeroImage("index", "index-hero-img");
        } else if (page === "about") {
          loadHeroImage("about", "about-hero-img");
        }
        return true;
      } else {
        console.error("Erreur API:", result.message);
        return false;
      }
    } catch (error) {
      console.error("Erreur lors du changement d'image:", error);
      return false;
    }
  };
});

// Styles pour les indicateurs API
const heroApiStyles = document.createElement("style");
heroApiStyles.textContent = `
    .hero-image-container {
        position: relative;
        overflow: hidden;
    }

    .api-indicator {
        opacity: 0.9;
        transition: opacity 0.3s ease;
    }

    .hero-image-container:hover .api-indicator {
        opacity: 1;
    }
`;
document.head.appendChild(heroApiStyles);
