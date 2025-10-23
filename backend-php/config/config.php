<?php
// Fichier de configuration globale
session_start();

// Chemins
define('ROOT_PATH', dirname(__DIR__));
define('CONFIG_PATH', ROOT_PATH . '/config');
define('UPLOADS_PATH', ROOT_PATH . '/uploads');
define('UPLOADS_URL', '/uploads');

// Configuration de sécurité
define('ADMIN_SESSION_KEY', 'pureliink_admin_logged_in');
define('ADMIN_USER_KEY', 'pureliink_admin_user');

// Timezone
date_default_timezone_set('Europe/Paris');

// Gestion des erreurs (à désactiver en production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Headers CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Si requête OPTIONS (preflight), terminer ici
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Inclure la configuration de la base de données
require_once CONFIG_PATH . '/database.php';

// Fonction pour vérifier si l'utilisateur est connecté
function isLoggedIn() {
    return isset($_SESSION[ADMIN_SESSION_KEY]) && $_SESSION[ADMIN_SESSION_KEY] === true;
}

// Fonction pour obtenir l'utilisateur connecté
function getLoggedInUser() {
    return $_SESSION[ADMIN_USER_KEY] ?? null;
}

// Fonction pour se connecter
function login($username) {
    $_SESSION[ADMIN_SESSION_KEY] = true;
    $_SESSION[ADMIN_USER_KEY] = $username;
}

// Fonction pour se déconnecter
function logout() {
    session_unset();
    session_destroy();
}

// Fonction pour envoyer une réponse JSON
function sendJSON($data, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

// Fonction pour envoyer une erreur JSON
function sendError($message, $statusCode = 400) {
    sendJSON(['error' => $message], $statusCode);
}

// Fonction pour sécuriser les uploads
function secureFilename($filename) {
    $extension = pathinfo($filename, PATHINFO_EXTENSION);
    $basename = pathinfo($filename, PATHINFO_FILENAME);
    $basename = preg_replace('/[^a-zA-Z0-9]/', '-', $basename);
    $basename = substr($basename, 0, 50);
    return $basename . '-' . time() . '.' . $extension;
}

// Créer le dossier uploads s'il n'existe pas
if (!file_exists(UPLOADS_PATH)) {
    mkdir(UPLOADS_PATH, 0755, true);
}
?>
