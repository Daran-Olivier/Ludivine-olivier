<?php
/**
 * FICHIER DE TEST DE CONNEXION MYSQL
 *
 * Uploadez ce fichier dans backend-php/ sur Ionos
 * Puis ouvrez : https://votre-domaine.com/backend-php/test-connexion.php
 *
 * Ce script va tester si la connexion à la base de données fonctionne
 */

// Inclure le fichier de configuration
require_once 'config/database.php';

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Connexion MySQL - PureLink</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            padding: 40px;
            max-width: 600px;
            width: 100%;
        }
        h1 {
            color: #333;
            margin-bottom: 30px;
            text-align: center;
        }
        .test-section {
            margin: 20px 0;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }
        .test-label {
            font-weight: bold;
            color: #555;
            margin-bottom: 10px;
        }
        .test-result {
            padding: 15px;
            border-radius: 6px;
            margin-top: 10px;
        }
        .success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        .info {
            background: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }
        .config-display {
            background: #2d3436;
            color: #dfe6e9;
            padding: 15px;
            border-radius: 6px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            margin: 10px 0;
            overflow-x: auto;
        }
        .icon {
            font-size: 24px;
            margin-right: 10px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔍 Test de Connexion MySQL</h1>

        <!-- Configuration -->
        <div class="test-section">
            <div class="test-label">📋 Configuration actuelle :</div>
            <div class="config-display">
DB_HOST: <?php echo DB_HOST; ?><br>
DB_NAME: <?php echo DB_NAME; ?><br>
DB_USER: <?php echo DB_USER; ?><br>
DB_PASS: <?php echo str_repeat('*', strlen(DB_PASS)); ?> (masqué)
            </div>
        </div>

        <!-- Test de connexion -->
        <div class="test-section">
            <div class="test-label">🔌 Test de connexion à la base de données :</div>
            <?php
            try {
                // Tentative de connexion
                $db = Database::getInstance();
                $connection = $db->getConnection();

                echo '<div class="test-result success">';
                echo '<span class="icon">✅</span>';
                echo '<strong>SUCCÈS !</strong> La connexion à la base de données fonctionne parfaitement.';
                echo '</div>';

                // Test de requête simple
                echo '<div class="test-section">';
                echo '<div class="test-label">📊 Test de requête SQL :</div>';

                $stmt = $connection->query("SELECT VERSION() as version, DATABASE() as db_name");
                $result = $stmt->fetch(PDO::FETCH_ASSOC);

                echo '<div class="test-result success">';
                echo '<span class="icon">✅</span>';
                echo '<strong>Version MySQL :</strong> ' . htmlspecialchars($result['version']) . '<br>';
                echo '<strong>Base de données actuelle :</strong> ' . htmlspecialchars($result['db_name']);
                echo '</div>';
                echo '</div>';

                // Vérifier les tables
                echo '<div class="test-section">';
                echo '<div class="test-label">🗄️ Tables existantes :</div>';

                $stmt = $connection->query("SHOW TABLES");
                $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);

                if (count($tables) > 0) {
                    echo '<div class="test-result success">';
                    echo '<span class="icon">✅</span>';
                    echo '<strong>Tables trouvées :</strong><br>';
                    foreach ($tables as $table) {
                        echo '• ' . htmlspecialchars($table) . '<br>';
                    }
                    echo '</div>';
                } else {
                    echo '<div class="test-result info">';
                    echo '<span class="icon">ℹ️</span>';
                    echo '<strong>Aucune table trouvée.</strong><br>';
                    echo 'Vous devez exécuter l\'installation : ';
                    echo '<a href="install/setup.php">install/setup.php</a>';
                    echo '</div>';
                }
                echo '</div>';

            } catch (PDOException $e) {
                echo '<div class="test-result error">';
                echo '<span class="icon">❌</span>';
                echo '<strong>ERREUR DE CONNEXION</strong><br><br>';
                echo '<strong>Message d\'erreur :</strong><br>';
                echo htmlspecialchars($e->getMessage());
                echo '<br><br>';
                echo '<strong>Solutions possibles :</strong><br>';
                echo '• Vérifiez que les identifiants dans <code>config/database.php</code> sont corrects<br>';
                echo '• Vérifiez que la base de données existe bien dans votre cPanel Ionos<br>';
                echo '• Vérifiez que l\'utilisateur a les privilèges nécessaires<br>';
                echo '• Vérifiez que le nom inclut bien le préfixe Ionos (ex: dbi123456_...)<br>';
                echo '</div>';
            } catch (Exception $e) {
                echo '<div class="test-result error">';
                echo '<span class="icon">❌</span>';
                echo '<strong>ERREUR SYSTÈME</strong><br><br>';
                echo htmlspecialchars($e->getMessage());
                echo '</div>';
            }
            ?>
        </div>

        <!-- Actions suivantes -->
        <div class="test-section">
            <div class="test-label">🚀 Prochaines étapes :</div>
            <div class="test-result info">
                <?php if (isset($db) && count($tables ?? []) === 0): ?>
                    <strong>1.</strong> Exécutez l'installation : <a href="install/setup.php" style="color: #0066cc;">install/setup.php</a><br>
                    <strong>2.</strong> Ensuite, accédez à l'admin : <a href="admin/" style="color: #0066cc;">admin/</a>
                <?php elseif (isset($db)): ?>
                    ✅ Tout est prêt ! Accédez à l'admin : <a href="admin/" style="color: #0066cc;">admin/</a>
                <?php else: ?>
                    ⚠️ Corrigez d'abord les erreurs de connexion ci-dessus
                <?php endif; ?>
            </div>
        </div>

        <div class="footer">
            <strong>⚠️ SÉCURITÉ :</strong> Supprimez ce fichier après le test !
        </div>
    </div>
</body>
</html>
