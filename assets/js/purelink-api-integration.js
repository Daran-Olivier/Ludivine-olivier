// Script d'intégration API PureLink pour produits.html existant
// Ajoute les produits de l'API en complément des produits statiques

document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour ajouter les produits API aux grilles existantes
  async function addAPIProductsToExistingGrids() {
    try {
      // Vérifier si l'API est disponible
      const response = await fetch(
        `${window.PURELINK_API_BASE}/api/products.php`
      );
      if (!response.ok) {
        console.info(
          "API backend pas encore déployée - contenu statique conservé"
        );
        return;
      }

      const data = await response.json();
      if (!data.success || !data.products) {
        console.info(
          "Aucun produit API disponible - contenu statique conservé"
        );
        return;
      }

      const products = data.products;

      // Mapping des catégories existantes vers les catégories API
      const categoryMapping = {
        drinks: "gummies",
        nutrition: "poudres",
        care: "complements",
        elixirs: "accessoires",
      };

      // Pour chaque section, ajouter les produits API correspondants
      Object.entries(categoryMapping).forEach(([sectionName, apiCategory]) => {
        const grid = document.querySelector(`[data-category="${sectionName}"]`);
        if (!grid) return;

        // Filtrer les produits de cette catégorie
        const categoryProducts = products.filter(
          (p) => p.category === apiCategory
        );

        if (categoryProducts.length > 0) {
          // Créer les cartes produit API avec le même style que les existantes
          const apiCards = categoryProducts
            .map((product) => createProductCard(product))
            .join("");

          // Ajouter après les produits existants
          grid.insertAdjacentHTML("beforeend", apiCards);
        }
      });
    } catch (error) {
      console.info(
        "API non disponible - contenu statique conservé:",
        error.message
      );
    }
  }

  // Fonction pour créer une carte produit compatible avec le style existant
  function createProductCard(product) {
    const img = product.image_url || window.PURELINK_PLACEHOLDER_URL;
    const price = product.price ? `${product.price}€` : "";
    const featured = product.is_featured
      ? '<span class="api-featured">🌟 API</span>'
      : "";

    return `
            <div class="product-card" data-product="api-${
              product.id
            }" data-source="api">
                <div class="product-image">
                    <img src="${img}" alt="${product.name}" onerror="this.src='${window.PURELINK_PLACEHOLDER_URL}'">
                    <div class="product-overlay">
                        <button class="btn-modal" data-product="api-${
                          product.id
                        }">
                            <i class="fas fa-eye"></i> Voir le produit
                        </button>
                    </div>
                    ${featured}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <p class="product-description">${
                      product.short_description || product.description || ""
                    }</p>
                    ${price ? `<div class="product-price">${price}</div>` : ""}
                    <div class="product-benefits">
                        <span class="benefit"><i class="fas fa-check"></i> Depuis l'API</span>
                        ${
                          product.is_featured
                            ? '<span class="benefit"><i class="fas fa-star"></i> En vedette</span>'
                            : ""
                        }
                    </div>
                </div>
            </div>
        `;
  }

  // Style pour les badges API
  const apiStyle = document.createElement("style");
  apiStyle.textContent = `
        .api-featured {
            position: absolute;
            top: 10px;
            right: 10px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
        }
        [data-source="api"] {
            border-left: 3px solid #10b981;
        }
    `;
  document.head.appendChild(apiStyle);

  // Lancer l'intégration API
  addAPIProductsToExistingGrids();
});
