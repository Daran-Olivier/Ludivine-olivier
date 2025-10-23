<?php
require_once '../config/config.php';
require_once '../config/database.php';

// Headers pour API
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Gestion des requêtes OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    $db = Database::getInstance();
    $method = $_SERVER['REQUEST_METHOD'];
    
    switch ($method) {
        case 'GET':
            handleGet($db);
            break;
        case 'POST':
            handlePost($db);
            break;
        case 'PUT':
            handlePut($db);
            break;
        case 'DELETE':
            handleDelete($db);
            break;
        default:
            sendJSON(['success' => false, 'message' => 'Méthode non supportée'], 405);
    }
    
} catch (Exception $e) {
    sendJSON(['success' => false, 'message' => 'Erreur serveur: ' . $e->getMessage()], 500);
}

// GET - Récupérer les images hero
function handleGet($db) {
    if (isset($_GET['id'])) {
        // Récupérer une image spécifique
        $id = (int) $_GET['id'];
        $image = $db->fetch("SELECT * FROM hero_images WHERE id = ?", [$id]);
        
        if ($image) {
            sendJSON(['success' => true, 'image' => $image]);
        } else {
            sendJSON(['success' => false, 'message' => 'Image non trouvée'], 404);
        }
    } else {
        // Récupérer toutes les images hero
        $page = $_GET['page'] ?? null;
        
        if ($page) {
            // Filtrer par page
            $images = $db->query("SELECT * FROM hero_images WHERE page = ? ORDER BY created_at DESC", [$page]);
        } else {
            // Toutes les images
            $images = $db->query("SELECT * FROM hero_images ORDER BY created_at DESC");
        }
        
        sendJSON(['success' => true, 'images' => $images]);
    }
}

// POST - Ajouter une nouvelle image hero
function handlePost($db) {
    $input = getInput();
    
    // Validation des champs requis
    if (empty($input['page']) || empty($input['alt_text'])) {
        sendJSON(['success' => false, 'message' => 'Page et texte alternatif requis'], 400);
    }
    
    $page = $input['page'];
    $alt_text = $input['alt_text'];
    $description = $input['description'] ?? '';
    $is_active = isset($input['is_active']) ? (bool) $input['is_active'] : true;
    $image_url = '';
    
    // Gestion de l'upload d'image
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $uploadResult = uploadImage($_FILES['image'], 'hero');
        if ($uploadResult['success']) {
            $image_url = $uploadResult['url'];
        } else {
            sendJSON(['success' => false, 'message' => $uploadResult['error']], 400);
        }
    } else {
        // URL d'image fournie directement
        $image_url = $input['image_url'] ?? '';
    }
    
    if (empty($image_url)) {
        sendJSON(['success' => false, 'message' => 'Image requise (fichier ou URL)'], 400);
    }
    
    // Désactiver les autres images de la même page si celle-ci est active
    if ($is_active) {
        $db->execute("UPDATE hero_images SET is_active = 0 WHERE page = ?", [$page]);
    }
    
    // Insérer la nouvelle image
    $id = $db->execute(
        "INSERT INTO hero_images (page, image_url, alt_text, description, is_active, created_at) VALUES (?, ?, ?, ?, ?, NOW())",
        [$page, $image_url, $alt_text, $description, $is_active]
    );
    
    if ($id) {
        $image = $db->fetch("SELECT * FROM hero_images WHERE id = ?", [$id]);
        sendJSON(['success' => true, 'message' => 'Image hero ajoutée', 'image' => $image], 201);
    } else {
        sendJSON(['success' => false, 'message' => 'Erreur lors de l\'ajout'], 500);
    }
}

// PUT - Modifier une image hero
function handlePut($db) {
    if (!isset($_GET['id'])) {
        sendJSON(['success' => false, 'message' => 'ID requis'], 400);
    }
    
    $id = (int) $_GET['id'];
    $input = getInput();
    
    // Vérifier que l'image existe
    $existing = $db->fetch("SELECT * FROM hero_images WHERE id = ?", [$id]);
    if (!$existing) {
        sendJSON(['success' => false, 'message' => 'Image non trouvée'], 404);
    }
    
    // Préparer les champs à mettre à jour
    $updates = [];
    $params = [];
    
    if (isset($input['page'])) {
        $updates[] = "page = ?";
        $params[] = $input['page'];
    }
    
    if (isset($input['alt_text'])) {
        $updates[] = "alt_text = ?";
        $params[] = $input['alt_text'];
    }
    
    if (isset($input['description'])) {
        $updates[] = "description = ?";
        $params[] = $input['description'];
    }
    
    if (isset($input['is_active'])) {
        $is_active = (bool) $input['is_active'];
        $updates[] = "is_active = ?";
        $params[] = $is_active;
        
        // Désactiver les autres images de la même page si celle-ci devient active
        if ($is_active) {
            $page = $input['page'] ?? $existing['page'];
            $db->execute("UPDATE hero_images SET is_active = 0 WHERE page = ? AND id != ?", [$page, $id]);
        }
    }
    
    // Gestion du changement d'image
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $uploadResult = uploadImage($_FILES['image'], 'hero');
        if ($uploadResult['success']) {
            $updates[] = "image_url = ?";
            $params[] = $uploadResult['url'];
            
            // Supprimer l'ancienne image si c'était un upload
            if (strpos($existing['image_url'], '/uploads/') !== false) {
                $oldPath = __DIR__ . '/../' . $existing['image_url'];
                if (file_exists($oldPath)) {
                    unlink($oldPath);
                }
            }
        } else {
            sendJSON(['success' => false, 'message' => $uploadResult['error']], 400);
        }
    } elseif (isset($input['image_url'])) {
        $updates[] = "image_url = ?";
        $params[] = $input['image_url'];
    }
    
    if (empty($updates)) {
        sendJSON(['success' => false, 'message' => 'Aucun champ à mettre à jour'], 400);
    }
    
    $updates[] = "updated_at = NOW()";
    $params[] = $id;
    
    $sql = "UPDATE hero_images SET " . implode(', ', $updates) . " WHERE id = ?";
    $result = $db->execute($sql, $params);
    
    if ($result) {
        $image = $db->fetch("SELECT * FROM hero_images WHERE id = ?", [$id]);
        sendJSON(['success' => true, 'message' => 'Image mise à jour', 'image' => $image]);
    } else {
        sendJSON(['success' => false, 'message' => 'Erreur lors de la mise à jour'], 500);
    }
}

// DELETE - Supprimer une image hero
function handleDelete($db) {
    if (!isset($_GET['id'])) {
        sendJSON(['success' => false, 'message' => 'ID requis'], 400);
    }
    
    $id = (int) $_GET['id'];
    
    // Récupérer l'image avant suppression
    $image = $db->fetch("SELECT * FROM hero_images WHERE id = ?", [$id]);
    if (!$image) {
        sendJSON(['success' => false, 'message' => 'Image non trouvée'], 404);
    }
    
    // Supprimer le fichier si c'était un upload
    if (strpos($image['image_url'], '/uploads/') !== false) {
        $filePath = __DIR__ . '/../' . $image['image_url'];
        if (file_exists($filePath)) {
            unlink($filePath);
        }
    }
    
    // Supprimer l'enregistrement
    $result = $db->execute("DELETE FROM hero_images WHERE id = ?", [$id]);
    
    if ($result) {
        sendJSON(['success' => true, 'message' => 'Image supprimée']);
    } else {
        sendJSON(['success' => false, 'message' => 'Erreur lors de la suppression'], 500);
    }
}

// Fonction pour récupérer les données d'entrée (JSON ou form-data)
function getInput() {
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    
    if (strpos($contentType, 'application/json') !== false) {
        $input = json_decode(file_get_contents('php://input'), true);
        return $input ?: [];
    } else {
        return $_POST;
    }
}
?>