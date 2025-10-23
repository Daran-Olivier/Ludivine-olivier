<?php
require_once '../config/config.php';

// Vérifier l'authentification
if (!isLoggedIn()) {
    header('Location: login.php');
    exit;
}

// Gestion de la déconnexion
if (isset($_GET['logout'])) {
    logout();
    header('Location: login.php');
    exit;
}

$username = getLoggedInUser();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administration - PureLiink</title>
    <link rel="stylesheet" href="assets/admin.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header class="admin-header">
        <div class="header-content">
            <h1><i class="fas fa-tachometer-alt"></i> Dashboard Admin</h1>
            <div class="header-actions">
                <span class="admin-name"><i class="fas fa-user"></i> <?php echo htmlspecialchars($username); ?></span>
                <a href="?logout" class="btn btn-secondary">
                    <i class="fas fa-sign-out-alt"></i> Déconnexion
                </a>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="admin-main">
        <!-- Statistiques -->
        <div class="stats-container">
            <div class="stat-card">
                <i class="fas fa-box"></i>
                <div class="stat-info">
                    <h3 id="total-products">0</h3>
                    <p>Produits totaux</p>
                </div>
            </div>
            <div class="stat-card">
                <i class="fas fa-layer-group"></i>
                <div class="stat-info">
                    <h3 id="total-categories">0</h3>
                    <p>Catégories</p>
                </div>
            </div>
            <div class="stat-card">
                <i class="fas fa-star"></i>
                <div class="stat-info">
                    <h3 id="featured-products">0</h3>
                    <p>Produits en vedette</p>
                </div>
            </div>
        </div>

        <!-- Actions Bar -->
        <div class="actions-bar">
            <button id="add-product-btn" class="btn btn-success">
                <i class="fas fa-plus"></i> Ajouter un produit
            </button>
            <input type="text" id="search-products" placeholder="Rechercher un produit..." class="search-input">
        </div>

        <!-- Liste des produits -->
        <div class="products-container">
            <h2>Liste des produits</h2>
            <div id="products-list" class="products-grid">
                <!-- Les produits seront chargés ici via JavaScript -->
            </div>
        </div>
    </main>

    <!-- Modal Ajout/Édition Produit -->
    <div id="product-modal" class="modal hidden">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modal-title"><i class="fas fa-box"></i> Ajouter un produit</h2>
                <button class="close-modal">&times;</button>
            </div>
            <form id="product-form" enctype="multipart/form-data">
                <input type="hidden" id="product-id" name="id">
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="product-name">Nom du produit *</label>
                        <input type="text" id="product-name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="product-category">Catégorie *</label>
                        <select id="product-category" name="category" required>
                            <option value="">Choisir une catégorie</option>
                            <option value="nutrition">Nutrition</option>
                            <option value="care">Care</option>
                            <option value="drinks">Drinks</option>
                            <option value="elixirs">Elixirs</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="product-short-description">Description courte</label>
                    <input type="text" id="product-short-description" name="short_description" maxlength="150">
                </div>

                <div class="form-group">
                    <label for="product-description">Description complète</label>
                    <textarea id="product-description" name="description" rows="4"></textarea>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="product-price">Prix (€)</label>
                        <input type="number" id="product-price" name="price" step="0.01" min="0">
                    </div>
                    <div class="form-group">
                        <label for="product-stock">Statut du stock</label>
                        <select id="product-stock" name="stock_status">
                            <option value="in_stock">En stock</option>
                            <option value="out_of_stock">Rupture de stock</option>
                            <option value="preorder">Précommande</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="product-benefits">Bénéfices</label>
                    <textarea id="product-benefits" name="benefits" rows="3"></textarea>
                </div>

                <div class="form-group">
                    <label for="product-ingredients">Ingrédients</label>
                    <textarea id="product-ingredients" name="ingredients" rows="3"></textarea>
                </div>

                <div class="form-group">
                    <label for="product-usage">Mode d'utilisation</label>
                    <textarea id="product-usage" name="usage" rows="3"></textarea>
                </div>

                <div class="form-group">
                    <label for="product-image">Image du produit</label>
                    <input type="file" id="product-image" name="image" accept="image/*">
                    <div id="image-preview" class="image-preview hidden">
                        <img id="preview-img" src="" alt="Aperçu">
                    </div>
                </div>

                <div class="form-group checkbox-group">
                    <label>
                        <input type="checkbox" id="product-featured" name="featured">
                        <span>Produit en vedette</span>
                    </label>
                </div>

                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary cancel-btn">Annuler</button>
                    <button type="submit" class="btn btn-success">
                        <i class="fas fa-save"></i> Enregistrer
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Modal Confirmation Suppression -->
    <div id="delete-modal" class="modal hidden">
        <div class="modal-content modal-small">
            <h2><i class="fas fa-exclamation-triangle"></i> Confirmation</h2>
            <p>Êtes-vous sûr de vouloir supprimer ce produit ?</p>
            <div class="modal-actions">
                <button class="btn btn-secondary cancel-delete">Annuler</button>
                <button class="btn btn-danger confirm-delete">
                    <i class="fas fa-trash"></i> Supprimer
                </button>
            </div>
        </div>
    </div>

    <script src="assets/admin.js"></script>
</body>
</html>
