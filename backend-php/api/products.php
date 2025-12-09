<?php
require_once '../config/config.php';

header('Content-Type: application/json');

// Récupérer la méthode HTTP
$method = $_SERVER['REQUEST_METHOD'];

// Récupérer l'action depuis l'URL
$action = $_GET['action'] ?? '';
$id = $_GET['id'] ?? null;

try {
    $db = getDB();

    switch ($method) {
        case 'GET':
            if ($id) {
                // Récupérer un produit spécifique
                getProduct($db, $id);
            } else if ($action === 'categories') {
                // Récupérer les catégories
                getCategories($db);
            } else {
                // Récupérer tous les produits
                getProducts($db);
            }
            break;

        case 'POST':
            // Vérifier l'authentification
            if (!isLoggedIn()) {
                sendError('Non authentifié', 401);
            }
            createProduct($db);
            break;

        case 'PUT':
        case 'POST': // Support PUT via POST avec _method
            if (!isLoggedIn()) {
                sendError('Non authentifié', 401);
            }
            if (!$id) {
                sendError('ID produit requis', 400);
            }
            updateProduct($db, $id);
            break;

        case 'DELETE':
            if (!isLoggedIn()) {
                sendError('Non authentifié', 401);
            }
            if (!$id) {
                sendError('ID produit requis', 400);
            }
            deleteProduct($db, $id);
            break;

        default:
            sendError('Méthode non supportée', 405);
    }

} catch (Exception $e) {
    sendError($e->getMessage(), 500);
}

// Fonction pour récupérer tous les produits
function getProducts($db) {
    $category = $_GET['category'] ?? null;
    $featured = $_GET['featured'] ?? null;

    $sql = "SELECT * FROM products WHERE 1=1";
    $params = [];

    if ($category) {
        $sql .= " AND category = ?";
        $params[] = $category;
    }

    if ($featured !== null) {
        $sql .= " AND featured = ?";
        $params[] = $featured === 'true' ? 1 : 0;
    }

    $sql .= " ORDER BY created_at DESC";

    $products = $db->fetchAll($sql, $params);
    sendJSON([
        'success' => true,
        'products' => $products
    ]);
}

// Fonction pour récupérer un produit
function getProduct($db, $id) {
    $product = $db->fetch("SELECT * FROM products WHERE id = ?", [$id]);

    if (!$product) {
        sendError('Produit non trouvé', 404);
    }

    sendJSON([
        'success' => true,
        'product' => $product
    ]);
}

// Fonction pour récupérer les catégories
function getCategories($db) {
    $categories = $db->fetchAll("SELECT DISTINCT category FROM products ORDER BY category");
    $list = array_column($categories, 'category');
    sendJSON([
        'success' => true,
        'categories' => $list
    ]);
}

// Fonction pour créer un produit
function createProduct($db) {
    // Récupérer les données du formulaire
    $name = $_POST['name'] ?? '';
    $category = $_POST['category'] ?? '';
    $description = $_POST['description'] ?? '';
    $short_description = $_POST['short_description'] ?? '';
    $price = $_POST['price'] ?? null;
    $benefits = $_POST['benefits'] ?? '';
    $ingredients = $_POST['ingredients'] ?? '';
    $usage_instructions = $_POST['usage_instructions'] ?? '';
    $stock_status = $_POST['stock_status'] ?? 'in_stock';
    $featured = isset($_POST['featured']) && $_POST['featured'] === 'true' ? 1 : 0;

    // Validation
    if (empty($name) || empty($category)) {
        sendError('Nom et catégorie requis', 400);
    }

    // Gérer l'upload d'image
    $image_url = null;
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $image_url = uploadImage($_FILES['image']);
    }

    // Insérer en base de données
    $sql = "INSERT INTO products (name, category, description, short_description, price, image_url, benefits, ingredients, usage_instructions, stock_status, featured)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $db->query($sql, [
        $name,
        $category,
        $description,
        $short_description,
        $price,
        $image_url,
        $benefits,
        $ingredients,
        $usage_instructions,
        $stock_status,
        $featured
    ]);

    $productId = $db->lastInsertId();
    $product = $db->fetch("SELECT * FROM products WHERE id = ?", [$productId]);

    sendJSON([
        'success' => true,
        'product' => $product,
        'message' => 'Produit créé avec succès'
    ], 201);
}

// Fonction pour mettre à jour un produit
function updateProduct($db, $id) {
    // Vérifier que le produit existe
    $existing = $db->fetch("SELECT * FROM products WHERE id = ?", [$id]);
    if (!$existing) {
        sendError('Produit non trouvé', 404);
    }

    // Récupérer les données
    $name = $_POST['name'] ?? $existing['name'];
    $category = $_POST['category'] ?? $existing['category'];
    $description = $_POST['description'] ?? $existing['description'];
    $short_description = $_POST['short_description'] ?? $existing['short_description'];
    $price = isset($_POST['price']) ? $_POST['price'] : $existing['price'];
    $benefits = $_POST['benefits'] ?? $existing['benefits'];
    $ingredients = $_POST['ingredients'] ?? $existing['ingredients'];
    $usage_instructions = $_POST['usage_instructions'] ?? $existing['usage_instructions'];
    $stock_status = $_POST['stock_status'] ?? $existing['stock_status'];
    $featured = isset($_POST['featured']) && $_POST['featured'] === 'true' ? 1 : 0;

    $image_url = $existing['image_url'];

    // Gérer le nouvel upload d'image
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        // Supprimer l'ancienne image
        if ($image_url && file_exists(UPLOADS_PATH . $image_url)) {
            unlink(UPLOADS_PATH . $image_url);
        }
        $image_url = uploadImage($_FILES['image']);
    }

    // Mettre à jour
    $sql = "UPDATE products SET
            name = ?, category = ?, description = ?, short_description = ?,
            price = ?, image_url = ?, benefits = ?, ingredients = ?,
            usage_instructions = ?, stock_status = ?, featured = ?, updated_at = NOW()
            WHERE id = ?";

    $db->query($sql, [
        $name,
        $category,
        $description,
        $short_description,
        $price,
        $image_url,
        $benefits,
        $ingredients,
        $usage_instructions,
        $stock_status,
        $featured,
        $id
    ]);

    $product = $db->fetch("SELECT * FROM products WHERE id = ?", [$id]);
    sendJSON([
        'success' => true,
        'product' => $product,
        'message' => 'Produit mis à jour avec succès'
    ]);
}

// Fonction pour supprimer un produit
function deleteProduct($db, $id) {
    $product = $db->fetch("SELECT * FROM products WHERE id = ?", [$id]);

    if (!$product) {
        sendError('Produit non trouvé', 404);
    }

    // Supprimer l'image
    if ($product['image_url'] && file_exists(UPLOADS_PATH . $product['image_url'])) {
        unlink(UPLOADS_PATH . $product['image_url']);
    }

    $db->execute("DELETE FROM products WHERE id = ?", [$id]);

    sendJSON([
        'success' => true,
        'message' => 'Produit supprimé avec succès'
    ]);
}

// Fonction pour uploader une image
function uploadImage($file) {
    $allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    $extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

    if (!in_array($extension, $allowed)) {
        sendError('Type de fichier non autorisé. Utilisez: jpg, png, gif, webp', 400);
    }

    if ($file['size'] > 5 * 1024 * 1024) { // 5 MB max
        sendError('Fichier trop volumineux (max 5 MB)', 400);
    }

    $filename = 'product-' . uniqid() . '.' . $extension;
    $destination = UPLOADS_PATH . '/' . $filename;

    if (!move_uploaded_file($file['tmp_name'], $destination)) {
        sendError('Erreur lors de l\'upload du fichier', 500);
    }

    return '/uploads/' . $filename;
}
?>
