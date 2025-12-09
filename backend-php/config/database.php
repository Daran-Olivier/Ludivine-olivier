<?php
// Configuration de la base de données MySQL
// IONOS Production - PureLink Ludivine & Olivier
// Configuré le 30 octobre 2025

// === CONFIGURATION IONOS (Production) ===
define('DB_HOST', 'db5018909886.hosting-data.io');
define('DB_NAME', 'dbs14912745');
define('DB_USER', 'dbu4298706');
define('DB_PASS', 'Q.gQKgSi6mPtkpqNoelya18@');
define('DB_CHARSET', 'utf8mb4');

// Connexion à la base de données
class Database
{
    private static $instance = null;
    private $connection;

    private function __construct()
    {
        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];

            $this->connection = new PDO($dsn, DB_USER, DB_PASS, $options);
        } catch (PDOException $e) {
            die("Erreur de connexion à la base de données: " . $e->getMessage());
        }
    }

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getConnection()
    {
        return $this->connection;
    }

    // Méthode pour exécuter une requête SELECT et retourner un array
    public function query($sql, $params = [])
    {
        try {
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            error_log("Erreur SQL: " . $e->getMessage());
            throw $e;
        }
    }

    // Récupérer plusieurs lignes
    public function fetchAll($sql, $params = [])
    {
        try {
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            error_log("Erreur SQL: " . $e->getMessage());
            throw $e;
        }
    }

    // Récupérer une seule ligne
    public function fetch($sql, $params = [])
    {
        try {
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            return $stmt->fetch();
        } catch (PDOException $e) {
            error_log("Erreur SQL: " . $e->getMessage());
            throw $e;
        }
    }

    // Exécuter une requête INSERT/UPDATE/DELETE
    public function execute($sql, $params = [])
    {
        try {
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);

            // Si c'est un INSERT, retourner le dernier ID
            if (stripos($sql, 'INSERT') === 0) {
                return $this->connection->lastInsertId();
            }

            // Sinon retourner le nombre de lignes affectées
            return $stmt->rowCount();
        } catch (PDOException $e) {
            error_log("Erreur SQL: " . $e->getMessage());
            throw $e;
        }
    }

    // Récupérer le dernier ID inséré
    public function lastInsertId()
    {
        return $this->connection->lastInsertId();
    }
}

// Fonction helper pour obtenir la connexion
function getDB()
{
    return Database::getInstance();
}
