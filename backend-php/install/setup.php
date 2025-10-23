<?php
// Script d'installation automatique de la base de données
require_once '../config/database.php';

$success = [];
$errors = [];

try {
    $db = Database::getInstance()->getConnection();
    
    // Créer la table products
    $sql_products = "CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        description TEXT,
        short_description VARCHAR(255),
        price DECIMAL(10, 2),
        image_url VARCHAR(255),
        benefits TEXT,
        ingredients TEXT,
        usage TEXT,
        stock_status VARCHAR(50) DEFAULT 'in_stock',
        featured TINYINT(1) DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_category (category),
        INDEX idx_featured (featured)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
    
    $db->exec($sql_products);
    $success[] = "Table 'products' créée avec succès";
    
    // Créer la table admins
    $sql_admins = "CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_username (username)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
    
    $db->exec($sql_admins);
    $success[] = "Table 'admins' créée avec succès";
    
    // Vérifier si un admin existe déjà
    $stmt = $db->query("SELECT COUNT(*) as count FROM admins");
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($result['count'] == 0) {
        // Créer l'admin par défaut
        $username = 'admin';
        $password = 'admin123';
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);
        
        $stmt = $db->prepare("INSERT INTO admins (username, password_hash) VALUES (?, ?)");
        $stmt->execute([$username, $passwordHash]);
        
        $success[] = "Administrateur créé : username = 'admin', password = 'admin123'";
        $success[] = "⚠️ IMPORTANT : Changez ce mot de passe après la première connexion !";
    } else {
        $success[] = "Un administrateur existe déjà";
    }
    
    // Vérifier si des produits existent
    $stmt = $db->query("SELECT COUNT(*) as count FROM products");
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($result['count'] == 0) {
        // Ajouter des produits d'exemple
        $products = [
            [
                'name' => 'Energy Boost',
                'category' => 'nutrition',
                'short_description' => 'Boostez votre énergie naturellement',
                'description' => 'Un complément alimentaire naturel pour augmenter votre niveau d\'énergie tout au long de la journée.',
                'price' => 29.90,
                'benefits' => 'Augmente l\'énergie, Réduit la fatigue, Améliore la concentration',
                'ingredients' => 'Guarana, Ginseng, Vitamine B12, Vitamine C',
                'usage' => 'Prendre 2 gélules par jour le matin',
                'stock_status' => 'in_stock',
                'featured' => 1
            ],
            [
                'name' => 'Go To Sleep',
                'category' => 'nutrition',
                'short_description' => 'Pour un sommeil réparateur',
                'description' => 'Formule naturelle pour favoriser l\'endormissement et améliorer la qualité du sommeil.',
                'price' => 24.90,
                'benefits' => 'Facilite l\'endormissement, Améliore la qualité du sommeil, Réduit le stress',
                'ingredients' => 'Mélatonine, Valériane, Passiflore, Magnésium',
                'usage' => 'Prendre 1 gélule 30 minutes avant le coucher',
                'stock_status' => 'in_stock',
                'featured' => 1
            ],
            [
                'name' => 'Collagen Pure',
                'category' => 'care',
                'short_description' => 'Pour une peau éclatante',
                'description' => 'Collagène marin de haute qualité pour préserver la jeunesse de votre peau.',
                'price' => 34.90,
                'benefits' => 'Améliore l\'élasticité de la peau, Réduit les rides, Renforce les cheveux et ongles',
                'ingredients' => 'Collagène marin, Vitamine C, Acide hyaluronique',
                'usage' => 'Diluer 1 dose dans un verre d\'eau chaque matin',
                'stock_status' => 'in_stock',
                'featured' => 0
            ],
            [
                'name' => 'Café Protéiné',
                'category' => 'drinks',
                'short_description' => 'Votre café du matin enrichi',
                'description' => 'Un café délicieux enrichi en protéines pour bien démarrer la journée.',
                'price' => 19.90,
                'benefits' => 'Source de protéines, Boost d\'énergie, Saveur authentique',
                'ingredients' => 'Café arabica, Protéines végétales, MCT',
                'usage' => 'Préparer comme un café traditionnel',
                'stock_status' => 'in_stock',
                'featured' => 0
            ]
        ];
        
        $stmt = $db->prepare(
            "INSERT INTO products (name, category, short_description, description, price, benefits, ingredients, usage, stock_status, featured) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        );
        
        foreach ($products as $product) {
            $stmt->execute([
                $product['name'],
                $product['category'],
                $product['short_description'],
                $product['description'],
                $product['price'],
                $product['benefits'],
                $product['ingredients'],
                $product['usage'],
                $product['stock_status'],
                $product['featured']
            ]);
        }
        
        $success[] = count($products) . " produits d'exemple ajoutés";
    } else {
        $success[] = $result['count'] . " produits déjà présents dans la base";
    }
    
    $success[] = "✅ Installation terminée avec succès !";
    
} catch (PDOException $e) {
    $errors[] = "Erreur : " . $e->getMessage();
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Installation - PureLiink Backend</title>
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
            border-radius: 15px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }
        
        h1 {
            color: #333;
            margin-bottom: 10px;
            font-size: 28px;
        }
        
        .subtitle {
            color: #666;
            margin-bottom: 30px;
        }
        
        .message {
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
        }
        
        .success {
            background: #d4edda;
            border-left: 4px solid #28a745;
            color: #155724;
        }
        
        .error {
            background: #f8d7da;
            border-left: 4px solid #dc3545;
            color: #721c24;
        }
        
        .next-steps {
            background: #e7f3ff;
            padding: 20px;
            border-radius: 8px;
            margin-top: 30px;
            border-left: 4px solid #0066cc;
        }
        
        .next-steps h2 {
            color: #0066cc;
            margin-bottom: 15px;
            font-size: 20px;
        }
        
        .next-steps ol {
            margin-left: 20px;
        }
        
        .next-steps li {
            margin-bottom: 10px;
            color: #333;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 24px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            margin-top: 20px;
            transition: background 0.3s;
        }
        
        .btn:hover {
            background: #5568d3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎉 Installation PureLiink Backend</h1>
        <p class="subtitle">Configuration de la base de données</p>
        
        <?php if (!empty($errors)): ?>
            <?php foreach ($errors as $error): ?>
                <div class="message error">❌ <?php echo htmlspecialchars($error); ?></div>
            <?php endforeach; ?>
        <?php endif; ?>
        
        <?php if (!empty($success)): ?>
            <?php foreach ($success as $msg): ?>
                <div class="message success">✅ <?php echo htmlspecialchars($msg); ?></div>
            <?php endforeach; ?>
        <?php endif; ?>
        
        <?php if (empty($errors)): ?>
            <div class="next-steps">
                <h2>📝 Prochaines étapes</h2>
                <ol>
                    <li>Accédez à l'interface admin : <a href="../admin/">Cliquez ici</a></li>
                    <li>Connectez-vous avec :
                        <ul>
                            <li>Username : <strong>admin</strong></li>
                            <li>Password : <strong>admin123</strong></li>
                        </ul>
                    </li>
                    <li>⚠️ <strong>Changez le mot de passe immédiatement !</strong></li>
                    <li>Commencez à ajouter vos produits</li>
                    <li>Pour la sécurité, supprimez ce fichier d'installation après utilisation</li>
                </ol>
                
                <a href="../admin/" class="btn">Aller à l'interface admin →</a>
            </div>
        <?php endif; ?>
    </div>
</body>
</html>
