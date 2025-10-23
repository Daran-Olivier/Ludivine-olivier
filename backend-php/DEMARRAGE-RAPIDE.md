# 🚀 Guide de Démarrage Rapide - Backend PureLink

## ⏱️ Installation en 5 minutes

### 1️⃣ Prérequis O2Switch
- ✅ Compte O2Switch actif
- ✅ Accès cPanel
- ✅ Nom de domaine configuré

### 2️⃣ Créer la Base de Données (2 min)

**Dans cPanel :**
1. Cliquez sur **MySQL Database Wizard**
2. Nom de la base : `purelink_db` → **Next**
3. Créez un utilisateur :
   - Nom : `purelink_user`
   - Mot de passe : *(générez un mot de passe fort)*
   - **Copiez ces identifiants !**
4. Cochez **ALL PRIVILEGES** → **Next**
5. ✅ Base de données créée !

### 3️⃣ Configuration (1 min)

**Éditez le fichier `config/database.php` :**
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'votre_cpanel_user_purelink_db');  // Format : cpaneluser_purelink_db
define('DB_USER', 'votre_cpanel_user_purelink_user'); // Format : cpaneluser_purelink_user
define('DB_PASS', 'votre_mot_de_passe');
```

**⚠️ IMPORTANT** : O2Switch préfixe automatiquement avec votre nom d'utilisateur cPanel !

### 4️⃣ Upload FTP (2 min)

**Avec FileZilla :**
1. **Hôte** : `ftp.votre-domaine.com`
2. **Utilisateur** : votre login cPanel
3. **Mot de passe** : votre password cPanel
4. **Port** : 21

**Uploadez :**
- Glissez le dossier `backend-php/` vers `/public_html/`
- Attendez la fin de l'upload
- ✅ Tous les fichiers sont en ligne !

### 5️⃣ Installation (30 secondes)

**Dans votre navigateur :**
1. Allez sur : `https://votre-domaine.com/backend-php/install/setup.php`
2. Cliquez sur **Installer la base de données**
3. Attendez le message de succès ✅
4. **Notez les identifiants admin :**
   - Identifiant : `admin`
   - Mot de passe : `admin123`

### 6️⃣ Connexion Admin

**Accédez au dashboard :**
1. URL : `https://votre-domaine.com/backend-php/admin/`
2. Connectez-vous avec `admin` / `admin123`
3. **⚠️ CHANGEZ immédiatement le mot de passe !**

---

## ✅ C'est Prêt !

Vous pouvez maintenant :
- ➕ Ajouter des produits
- ✏️ Modifier les descriptions
- 📸 Uploader des images
- ⭐ Marquer des produits en vedette
- 🔍 Rechercher et filtrer

## 🔒 Sécurité Post-Installation

**À faire immédiatement :**

1. **Supprimer le dossier d'installation :**
   ```
   Connectez-vous en FTP et supprimez :
   /backend-php/install/
   ```

2. **Ou protégez-le dans `.htaccess` :**
   Décommentez cette ligne dans `/backend-php/.htaccess` :
   ```apache
   RewriteRule ^install/ - [F,L]
   ```

3. **Activer HTTPS :**
   Dans `.htaccess`, décommentez :
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

4. **Changer le mot de passe admin :**
   - Connectez-vous au dashboard
   - (Vous devrez le faire via MySQL pour l'instant)
   - Utilisez un générateur de hash bcrypt

---

## 📱 Utiliser l'API dans votre Site

### Exemple Simple - Afficher les Produits

**Dans votre page HTML :**
```html
<div id="products-container"></div>

<script>
async function loadProducts() {
  try {
    const response = await fetch('/backend-php/api/products.php');
    const data = await response.json();
    
    if (data.success) {
      displayProducts(data.products);
    }
  } catch (error) {
    console.error('Erreur:', error);
  }
}

function displayProducts(products) {
  const container = document.getElementById('products-container');
  
  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image_url}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="category">${product.category}</p>
      <p class="description">${product.short_description}</p>
      <p class="price">${product.price}€</p>
      <a href="produit.html?id=${product.id}">Voir le produit</a>
    </div>
  `).join('');
}

// Charger au démarrage
loadProducts();
</script>
```

### Filtrer par Catégorie
```javascript
// Seulement les poudres
fetch('/backend-php/api/products.php?category=poudres')
  .then(res => res.json())
  .then(data => displayProducts(data.products));

// Seulement les produits en vedette
fetch('/backend-php/api/products.php?featured=1')
  .then(res => res.json())
  .then(data => displayProducts(data.products));
```

### Afficher un Produit Spécifique
```javascript
// Page de détail produit
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch(`/backend-php/api/products.php?id=${productId}`)
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      displayProductDetails(data.product);
    }
  });
```

---

## 🐛 Problèmes Courants

### ❌ "Erreur de connexion à la base de données"
**Solution :**
- Vérifiez que vous avez bien le préfixe cPanel dans les noms
- Format correct : `cpaneluser_purelink_db` et `cpaneluser_purelink_user`
- Testez la connexion MySQL dans phpMyAdmin

### ❌ "403 Forbidden"
**Solution :**
- Vérifiez les permissions des fichiers : 644
- Permissions des dossiers : 755
- Dans FileZilla : clic droit → Permissions des fichiers

### ❌ Les images ne s'affichent pas
**Solution :**
- Créez manuellement le dossier `/uploads/` si besoin
- Permissions : 755
- Vérifiez que le chemin est correct dans la base

### ❌ "Session expirée"
**Normal !** La session expire après 24h d'inactivité. Reconnectez-vous.

---

## 📞 Besoin d'Aide ?

1. **Consultez le README complet** : `/backend-php/README.md`
2. **Guide détaillé O2Switch** : `/backend-php/GUIDE-O2SWITCH.md`
3. **Logs d'erreurs** : Dans cPanel → Error Log
4. **Support O2Switch** : Si problème serveur

---

## 🎉 Félicitations !

Votre backend est maintenant opérationnel ! Vous pouvez gérer vos produits sans jamais toucher au code du site.

**URL importantes à mettre en favoris :**
- 🔐 Admin : `https://votre-domaine.com/backend-php/admin/`
- 📊 API : `https://votre-domaine.com/backend-php/api/products.php`

---

**Version** : 1.0.0  
**Support** : PHP 7.4+ / MySQL 5.7+  
**Optimisé pour** : O2Switch
