// Configuration API
const API_URL = "../api";

// State
let products = [];
let editingProductId = null;

// DOM Elements (will be initialized in DOMContentLoaded)
let productsGrid;
let productModal;
let deleteModal;
let productForm;
let addProductBtn;
let searchInput;
let categoryFilter;
let imageInput;
let imagePreview;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Initialize DOM elements
  productsGrid = document.getElementById("products-list");
  productModal = document.getElementById("product-modal");
  deleteModal = document.getElementById("delete-modal");
  productForm = document.getElementById("product-form");
  addProductBtn = document.getElementById("add-product-btn");
  searchInput = document.getElementById("search-products");
  categoryFilter = document.getElementById("category-filter");
  imageInput = document.getElementById("product-image");
  imagePreview = document.getElementById("image-preview");

  loadProducts();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  if (addProductBtn) addProductBtn.addEventListener("click", openAddModal);
  if (productForm) productForm.addEventListener("submit", handleSubmit);
  if (searchInput) searchInput.addEventListener("input", filterProducts);
  if (categoryFilter) categoryFilter.addEventListener("change", filterProducts);
  if (imageInput) imageInput.addEventListener("change", previewImage);

  // Close modals on background click
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal(e.target.id);
    }
  });
}

// Load Products
async function loadProducts() {
  try {
    const response = await fetch(`${API_URL}/products.php`);
    const data = await response.json();

    if (data.success) {
      products = data.products;
      displayProducts(products);
      updateStats();
    } else {
      showError("Erreur lors du chargement des produits");
    }
  } catch (error) {
    console.error("Error:", error);
    showError("Erreur de connexion au serveur");
  }
}

// Display Products
function displayProducts(productsToDisplay) {
  if (productsToDisplay.length === 0) {
    productsGrid.innerHTML =
      '<p style="text-align: center; color: #6b7280; grid-column: 1/-1;">Aucun produit trouvé</p>';
    return;
  }

  productsGrid.innerHTML = productsToDisplay
    .map(
      (product) => `
        <div class="product-card">
            <img src="${product.image_url || "../assets/placeholder.jpg"}"
                 alt="${product.name}"
                 class="product-image"
                 onerror="this.src='../assets/placeholder.jpg'">
            <div class="product-info">
                <div class="product-header">
                    <h3 class="product-name">${product.name}</h3>
                    ${
                      product.featured
                        ? '<i class="fas fa-star product-featured" title="En vedette"></i>'
                        : ""
                    }
                </div>
                <span class="product-category">${product.category}</span>
                <p class="product-description">${
                  product.short_description || ""
                }</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-secondary" onclick="editProduct(${
                      product.id
                    })">
                        <i class="fas fa-edit"></i> Modifier
                    </button>
                    <button class="btn btn-danger" onclick="openDeleteModal(${
                      product.id
                    })">
                        <i class="fas fa-trash"></i> Supprimer
                    </button>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Filter Products
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter ? categoryFilter.value : null;

  let filtered = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.short_description?.toLowerCase().includes(searchTerm);
    const matchesCategory = !category || product.category === category;

    return matchesSearch && matchesCategory;
  });

  displayProducts(filtered);
}

// Update Statistics
function updateStats() {
  const totalProducts = products.length;
  const featuredProducts = products.filter((p) => p.featured).length;
  const categories = [...new Set(products.map((p) => p.category))].length;

  document.getElementById("total-products").textContent = totalProducts;
  document.getElementById("featured-products").textContent = featuredProducts;
  document.getElementById("total-categories").textContent = categories;
}

// Modal Functions
function openAddModal() {
  editingProductId = null;
  productForm.reset();
  imagePreview.innerHTML = "";
  document.getElementById("modal-title").textContent = "Ajouter un produit";
  openModal("product-modal");
}

function openModal(modalId) {
  document.getElementById(modalId).classList.remove("hidden");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
}

// Edit Product
async function editProduct(id) {
  try {
    const response = await fetch(`${API_URL}/products.php?id=${id}`);
    const data = await response.json();

    if (data.success) {
      const product = data.product;
      editingProductId = id;

      // Fill form
      document.getElementById("product-name").value = product.name;
      document.getElementById("product-category").value = product.category;
      document.getElementById("product-short-desc").value =
        product.short_description || "";
      document.getElementById("product-description").value =
        product.description || "";
      document.getElementById("product-price").value = product.price;
      document.getElementById("product-featured").checked = product.featured;

      // Show current image
      if (product.image_url) {
        imagePreview.innerHTML = `
                    <img src="${product.image_url}" alt="${product.name}">
                    <p style="margin-top: 10px; color: #6b7280;">Image actuelle</p>
                `;
      }

      document.getElementById("modal-title").textContent =
        "Modifier le produit";
      openModal("product-modal");
    }
  } catch (error) {
    console.error("Error:", error);
    showError("Erreur lors du chargement du produit");
  }
}

// Handle Form Submit
async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(productForm);

  try {
    const url = editingProductId
      ? `${API_URL}/products.php?id=${editingProductId}`
      : `${API_URL}/products.php`;

    const options = {
      method: editingProductId ? "PUT" : "POST",
      body: formData,
    };

    // For PUT requests, we need to handle FormData differently
    if (editingProductId) {
      const object = {};
      formData.forEach((value, key) => {
        // Skip file if no new file selected
        if (key === "image" && !value.name) return;
        object[key] = value;
      });

      // If there's a new image, keep FormData, otherwise use JSON
      if (formData.get("image").name) {
        options.body = formData;
      } else {
        options.headers = { "Content-Type": "application/json" };
        options.body = JSON.stringify(object);
      }
    }

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.success) {
      closeModal("product-modal");
      loadProducts();
      showSuccess(
        editingProductId
          ? "Produit modifié avec succès"
          : "Produit ajouté avec succès"
      );
    } else {
      showError(data.message || "Erreur lors de l'enregistrement");
    }
  } catch (error) {
    console.error("Error:", error);
    showError("Erreur lors de l'enregistrement du produit");
  }
}

// Delete Product
let productToDelete = null;

function openDeleteModal(id) {
  productToDelete = id;
  openModal("delete-modal");
}

async function confirmDelete() {
  if (!productToDelete) return;

  try {
    const response = await fetch(
      `${API_URL}/products.php?id=${productToDelete}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (data.success) {
      closeModal("delete-modal");
      loadProducts();
      showSuccess("Produit supprimé avec succès");
    } else {
      showError(data.message || "Erreur lors de la suppression");
    }
  } catch (error) {
    console.error("Error:", error);
    showError("Erreur lors de la suppression du produit");
  }

  productToDelete = null;
}

function cancelDelete() {
  productToDelete = null;
  closeModal("delete-modal");
}

// Image Preview
function previewImage(e) {
  const file = e.target.files[0];

  if (file) {
    if (!file.type.startsWith("image/")) {
      showError("Veuillez sélectionner une image valide");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showError("L'image ne doit pas dépasser 5 Mo");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      imagePreview.innerHTML = `
                <img src="${event.target.result}" alt="Aperçu">
                <p style="margin-top: 10px; color: #6b7280;">Nouvelle image</p>
            `;
    };
    reader.readAsDataURL(file);
  }
}

// Utility Functions
function formatPrice(price) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

function showError(message) {
  alert("❌ " + message);
}

function showSuccess(message) {
  alert("✅ " + message);
}
