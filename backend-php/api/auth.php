<?php
require_once '../config/config.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

try {
    $db = getDB();
    
    switch ($action) {
        case 'login':
            loginHandler($db);
            break;
            
        case 'logout':
            logoutHandler();
            break;
            
        case 'status':
            statusHandler();
            break;
            
        case 'create-admin':
            createAdminHandler($db);
            break;
            
        default:
            sendError('Action non reconnue', 400);
    }
    
} catch (Exception $e) {
    sendError($e->getMessage(), 500);
}

// Gestion de la connexion
function loginHandler($db) {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';
    
    if (empty($username) || empty($password)) {
        sendError('Username et password requis', 400);
    }
    
    // Récupérer l'admin
    $admin = $db->fetch("SELECT * FROM admins WHERE username = ?", [$username]);
    
    if (!$admin) {
        sendError('Identifiants invalides', 401);
    }
    
    // Vérifier le mot de passe
    if (!password_verify($password, $admin['password_hash'])) {
        sendError('Identifiants invalides', 401);
    }
    
    // Créer la session
    login($username);
    
    sendJSON([
        'message' => 'Connexion réussie',
        'user' => [
            'id' => $admin['id'],
            'username' => $admin['username']
        ]
    ]);
}

// Gestion de la déconnexion
function logoutHandler() {
    logout();
    sendJSON(['message' => 'Déconnexion réussie']);
}

// Vérification du statut de connexion
function statusHandler() {
    if (isLoggedIn()) {
        sendJSON([
            'authenticated' => true,
            'user' => [
                'username' => getLoggedInUser()
            ]
        ]);
    } else {
        sendJSON(['authenticated' => false]);
    }
}

// Création d'un admin (à utiliser une fois puis désactiver)
function createAdminHandler($db) {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';
    $email = $data['email'] ?? '';
    
    if (empty($username) || empty($password)) {
        sendError('Username et password requis', 400);
    }
    
    // Vérifier si l'admin existe déjà
    $existing = $db->fetch("SELECT * FROM admins WHERE username = ?", [$username]);
    
    if ($existing) {
        sendError('Cet utilisateur existe déjà', 400);
    }
    
    // Hasher le mot de passe
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
    
    // Créer l'admin
    $db->query(
        "INSERT INTO admins (username, password_hash, email) VALUES (?, ?, ?)",
        [$username, $passwordHash, $email]
    );
    
    sendJSON(['message' => 'Admin créé avec succès']);
}
?>
