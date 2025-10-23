# Backend PHP PureLink - Gestion des Produits

## 📋 Description

Système complet de gestion de produits pour le site PureLink, développé en PHP/MySQL et compatible avec l'hébergement O2Switch.

## 🚀 Fonctionnalités

### Interface d'Administration
- ✅ Authentification sécurisée (sessions PHP)
- ✅ Dashboard avec statistiques en temps réel
- ✅ Gestion complète des produits (CRUD)
- ✅ Upload d'images avec validation
- ✅ Recherche et filtres par catégorie
- ✅ Produits "en vedette"
- ✅ Interface responsive

### API REST
- ✅ GET `/api/products.php` - Liste tous les produits
- ✅ GET `/api/products.php?id=X` - Un produit spécifique
- ✅ GET `/api/products.php?category=X` - Filtrer par catégorie
- ✅ POST `/api/products.php` - Créer un produit
- ✅ PUT `/api/products.php?id=X` - Modifier un produit
- ✅ DELETE `/api/products.php?id=X` - Supprimer un produit
- ✅ POST `/api/auth.php` (login, logout, status)

## 📁 Structure des Fichiers

```
backend-php/
├── .htaccess                    # Sécurité et configuration serveur
├── README.md                    # Ce fichier
├── GUIDE-O2SWITCH.md           # Guide de déploiement O2Switch
│
├── config/
│   ├── database.php            # Connexion MySQL (PDO)
│   └── config.php              # Configuration globale
│
├── api/
│   ├── products.php            # API CRUD produits
│   └── auth.php                # API authentification
│
├── admin/
│   ├── index.php               # Dashboard admin
│   ├── login.php               # Page de connexion
│   └── assets/
│       ├── admin.css           # Styles interface admin
│       └── admin.js            # Logique JavaScript
│
├── install/
│   └── setup.php               # Script d'installation automatique
│
├── uploads/                    # Images des produits (créé auto)
└── assets/
    └── placeholder.jpg         # Image par défaut
```

## 🔧 Installation sur O2Switch

### Étape 1 : Créer la base de données MySQL
1. Connectez-vous à cPanel
2. Allez dans **MySQL Database Wizard**
3. Créez une base : `purelink_db`
4. Créez un utilisateur avec mot de passe fort
5. Accordez **TOUS les privilèges**
6. Notez les identifiants

### Étape 2 : Configurer la connexion
Éditez `config/database.php` :
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'votre_nom_bdd');
define('DB_USER', 'votre_utilisateur');
define('DB_PASS', 'votre_mot_de_passe');
```

### Étape 3 : Upload via FTP
1. Téléchargez **FileZilla**
2. Connectez-vous avec vos identifiants O2Switch
3. Uploadez le dossier `backend-php/` vers `/public_html/backend-php/`
4. Vérifiez les permissions (755 pour dossiers, 644 pour fichiers)

### Étape 4 : Installation
1. Visitez : `https://votre-domaine.com/backend-php/install/setup.php`
2. Cliquez sur **Installer la base de données**
3. Vérifiez les tables créées
4. Notez les identifiants admin par défaut

### Étape 5 : Première connexion
1. Allez sur : `https://votre-domaine.com/backend-php/admin/login.php`
2. Connectez-vous avec :
   - **Identifiant** : `admin`
   - **Mot de passe** : `admin123`
3. **⚠️ IMPORTANT** : Changez immédiatement le mot de passe !

## 🔐 Sécurité

### Après Installation
1. **Supprimez ou protégez** le dossier `install/`
2. **Changez le mot de passe** admin par défaut
3. **Vérifiez** que `.htaccess` est bien actif
4. **Activez HTTPS** (décommentez dans `.htaccess`)

### Protection des Fichiers
Le `.htaccess` protège automatiquement :
- Les fichiers de configuration
- Le dossier `/config/`
- Les fichiers sensibles (.sql, .bak, .log, etc.)

### Upload d'Images
- Maximum : **5 Mo** par image
- Formats acceptés : **JPG, PNG, GIF, WEBP**
- Nommage automatique sécurisé
- Stockage dans `/uploads/`

## 📊 Base de Données

### Table `products`
```sql
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- name (VARCHAR 255)
- category (VARCHAR 100)
- short_description (TEXT)
- description (TEXT)
- price (DECIMAL 10,2)
- image_url (VARCHAR 500)
- is_featured (BOOLEAN, DEFAULT 0)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Table `admins`
```sql
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- username (VARCHAR 50, UNIQUE)
- password (VARCHAR 255, bcrypt hash)
- created_at (TIMESTAMP)
```

## 🌐 Utilisation de l'API

### Récupérer tous les produits
```javascript
fetch('https://votre-domaine.com/backend-php/api/products.php')
  .then(res => res.json())
  .then(data => console.log(data.products));
```

### Récupérer un produit
```javascript
fetch('https://votre-domaine.com/backend-php/api/products.php?id=1')
  .then(res => res.json())
  .then(data => console.log(data.product));
```

### Filtrer par catégorie
```javascript
fetch('https://votre-domaine.com/backend-php/api/products.php?category=poudres')
  .then(res => res.json())
  .then(data => console.log(data.products));
```

### Ajouter un produit (admin)
```javascript
const formData = new FormData();
formData.append('name', 'Nouveau Produit');
formData.append('category', 'poudres');
formData.append('price', '29.99');
formData.append('image', fileInput.files[0]);

fetch('https://votre-domaine.com/backend-php/api/products.php', {
  method: 'POST',
  body: formData
})
  .then(res => res.json())
  .then(data => console.log(data));
```

## 🎨 Intégration Frontend

### Dans vos pages HTML
```html
<script>
// Charger les produits
async function loadProducts() {
  const response = await fetch('/backend-php/api/products.php');
  const data = await response.json();
  
  if (data.success) {
    displayProducts(data.products);
  }
}

// Afficher les produits
function displayProducts(products) {
  const container = document.getElementById('products-container');
  container.innerHTML = products.map(product => `
    <div class="product">
      <img src="${product.image_url}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.short_description}</p>
      <span class="price">${product.price}€</span>
    </div>
  `).join('');
}

loadProducts();
</script>
```

## 🐛 Dépannage

### "Erreur de connexion à la base de données"
- Vérifiez les identifiants dans `config/database.php`
- Assurez-vous que la base de données existe
- Vérifiez que l'utilisateur a les bons privilèges

### "403 Forbidden"
- Vérifiez les permissions des fichiers (644) et dossiers (755)
- Assurez-vous que `.htaccess` n'est pas trop restrictif

### Les images ne s'affichent pas
- Vérifiez que le dossier `uploads/` existe
- Permissions : `chmod 755 uploads/`
- Vérifiez le chemin dans le code

### Session expirée
- C'est normal après 24h d'inactivité
- Reconnectez-vous simplement

## 📝 Notes Importantes

### Catégories Disponibles
Les catégories actuelles sont :
- `poudres`
- `gummies`
- `complements`
- `accessoires`

Vous pouvez en ajouter d'autres dans la base de données.

### Produits en Vedette
Les produits marqués "en vedette" peuvent être affichés sur la page d'accueil avec un filtre spécial :
```javascript
fetch('/backend-php/api/products.php?featured=1')
```

### Performances
- Les images sont compressées automatiquement
- Cache activé pour les ressources statiques
- Compression GZIP activée

## 🔄 Mises à Jour

Pour mettre à jour le backend :
1. Faites un **backup** de la base de données
2. Sauvegardez le dossier `/uploads/`
3. Uploadez les nouveaux fichiers
4. Testez sur une URL de staging si possible

## 📞 Support

En cas de problème :
1. Vérifiez les logs PHP (dans cPanel)
2. Consultez le `GUIDE-O2SWITCH.md`
3. Contactez le support O2Switch si nécessaire

## 📄 Licence

Projet privé - PureLink © 2024

---

**Version** : 1.0.0
**Compatible** : PHP 7.4+ / MySQL 5.7+ / MariaDB 10.3+
**Hébergement** : O2Switch optimisé
