# 🚀 GUIDE COMPLET - DÉPLOIEMENT SUR O2SWITCH

## 📋 Table des matières
1. [Prérequis](#prérequis)
2. [Étape 1 : Créer la base de données MySQL](#étape-1--créer-la-base-de-données-mysql)
3. [Étape 2 : Configurer les fichiers](#étape-2--configurer-les-fichiers)
4. [Étape 3 : Uploader les fichiers](#étape-3--uploader-les-fichiers)
5. [Étape 4 : Installation](#étape-4--installation)
6. [Étape 5 : Utilisation](#étape-5--utilisation)
7. [Dépannage](#dépannage)

---

## ✅ Prérequis

- Un compte O2Switch actif
- Accès à cPanel
- Un client FTP (FileZilla recommandé)
- Votre nom de domaine configuré

---

## 📊 Étape 1 : Créer la base de données MySQL

### 1.1 Connexion à cPanel
1. Connectez-vous à votre cPanel O2Switch
2. URL : `https://cpanel.votre-domaine.com:2083`

### 1.2 Créer la base de données
1. Dans cPanel, cherchez **"MySQL® Databases"** ou **"Bases de données MySQL"**
2. Cliquez dessus

3. **Créer une nouvelle base de données** :
   - Section "Create New Database"
   - Nom : `pureliink_db` (ou autre nom)
   - Cliquez sur "Create Database"
   - ✅ Notez le nom complet (ex: `votreco_pureliink_db`)

4. **Créer un utilisateur MySQL** :
   - Section "MySQL Users"
   - Username : `pureliink_user`
   - Password : Générez un mot de passe fort (et notez-le !)
   - Cliquez sur "Create User"
   - ✅ Notez le nom complet (ex: `votreco_pureliink_user`)

5. **Associer l'utilisateur à la base** :
   - Section "Add User To Database"
   - Sélectionnez l'utilisateur créé
   - Sélectionnez la base créée
   - Cliquez sur "Add"
   - Dans la page suivante, cochez **"ALL PRIVILEGES"**
   - Cliquez sur "Make Changes"

### 1.3 Informations à noter
```
Nom de la base : votreco_pureliink_db
Utilisateur : votreco_pureliink_user
Mot de passe : [le mot de passe que vous avez créé]
Hôte : localhost
```

⚠️ **GARDEZ CES INFORMATIONS, vous en aurez besoin !**

---

## ⚙️ Étape 2 : Configurer les fichiers

### 2.1 Modifier le fichier de configuration
1. Ouvrez le fichier `backend-php/config/database.php`
2. Modifiez les lignes suivantes avec vos informations :

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'votreco_pureliink_db'); // ← Votre nom de base
define('DB_USER', 'votreco_pureliink_user'); // ← Votre utilisateur
define('DB_PASS', 'votre_mot_de_passe'); // ← Votre mot de passe
```

3. **Enregistrez le fichier**

### 2.2 Vérifier la structure
Assurez-vous que la structure du dossier `backend-php` est :
```
backend-php/
├── admin/
│   ├── index.php
│   ├── login.php
│   └── assets/
│       ├── admin.css
│       └── admin.js
├── api/
│   ├── products.php
│   └── auth.php
├── config/
│   ├── database.php
│   ├── config.php
├── install/
│   └── setup.php
└── uploads/
```

---

## 📤 Étape 3 : Uploader les fichiers

### 3.1 Connexion FTP avec FileZilla

1. **Téléchargez FileZilla** (si pas déjà fait) : https://filezilla-project.org/

2. **Informations de connexion FTP** :
   - Hôte : `ftp.votre-domaine.com` ou l'IP fournie par O2Switch
   - Utilisateur : Votre username cPanel
   - Mot de passe : Votre mot de passe cPanel
   - Port : 21

3. **Se connecter** :
   - Ouvrez FileZilla
   - Entrez les informations
   - Cliquez sur "Connexion rapide"

### 3.2 Upload des fichiers

1. **Naviguer vers le bon dossier** :
   - Dans FileZilla (partie droite = serveur)
   - Allez dans `/public_html/`

2. **Créer un dossier pour l'API** :
   - Clic droit → "Créer un répertoire"
   - Nom : `backend` ou `api`
   - Entrez dans ce dossier

3. **Uploader les fichiers** :
   - Dans la partie gauche (votre ordinateur), sélectionnez tout le contenu de `backend-php/`
   - Glissez-déposez vers la partie droite (serveur)
   - Attendez que tous les fichiers soient uploadés (barre verte en bas)

### 3.3 Vérifier les permissions

1. **Dossier uploads** :
   - Clic droit sur le dossier `uploads/`
   - "Permissions de fichier"
   - Valeur numérique : `755`
   - Cocher "Récursif"
   - Appliquer

2. **Fichiers PHP** :
   - Les fichiers .php doivent avoir les permissions `644`
   - C'est normalement automatique

---

## 🎯 Étape 4 : Installation

### 4.1 Lancer le script d'installation

1. **Ouvrez votre navigateur**
2. **Allez sur** : `https://votre-domaine.com/backend/install/setup.php`
   (Remplacez `backend` par le nom du dossier que vous avez créé)

3. **Le script va** :
   - Créer les tables MySQL (products, admins)
   - Créer le compte admin par défaut
   - Ajouter des produits d'exemple
   - Afficher les messages de succès

4. **Si tout est vert** ✅ :
   - Bravo ! La base est installée
   - Notez les identifiants : `admin` / `admin123`

### 4.2 Sécuriser l'installation

**IMPORTANT** : Après l'installation réussie, supprimez le dossier `install/` :
1. Dans FileZilla
2. Clic droit sur le dossier `install/`
3. "Supprimer"

---

## 🖥️ Étape 5 : Utilisation

### 5.1 Accéder à l'interface admin

1. **URL** : `https://votre-domaine.com/backend/admin/`
2. **Identifiants** :
   - Username : `admin`
   - Password : `admin123`

3. **⚠️ Changez immédiatement le mot de passe !**

### 5.2 Ajouter des produits

1. Cliquez sur "Ajouter un produit"
2. Remplissez le formulaire :
   - Nom du produit
   - Catégorie (nutrition, care, drinks, elixirs)
   - Description
   - Prix
   - Bénéfices
   - Ingrédients
   - Mode d'utilisation
3. Uploadez une image
4. Cliquez sur "Enregistrer"

### 5.3 API accessible

Votre API est maintenant disponible :
- **Liste des produits** : `https://votre-domaine.com/backend/api/products.php`
- **Produit spécifique** : `https://votre-domaine.com/backend/api/products.php?id=1`
- **Par catégorie** : `https://votre-domaine.com/backend/api/products.php?category=nutrition`

---

## 🔗 Connecter votre site front-end

### Dans votre fichier JavaScript (produits.js) :

```javascript
// Configuration de l'API
const API_URL = 'https://votre-domaine.com/backend/api';

// Charger les produits
async function loadProducts() {
    try {
        const response = await fetch(`${API_URL}/products.php`);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Erreur chargement produits:', error);
    }
}

// Afficher les produits
function displayProducts(products) {
    const container = document.querySelector('.products-grid');
    
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="https://votre-domaine.com/backend${product.image_url}" 
                 alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.short_description}</p>
            <span class="price">${product.price}€</span>
        </div>
    `).join('');
}

// Lancer au chargement
document.addEventListener('DOMContentLoaded', loadProducts);
```

---

## 🐛 Dépannage

### Erreur "Cannot connect to database"

**Causes possibles** :
- Mauvaises informations dans `config/database.php`
- Base de données non créée
- Utilisateur n'a pas les droits

**Solutions** :
1. Vérifiez les informations dans `database.php`
2. Vérifiez dans cPanel que la base existe
3. Vérifiez que l'utilisateur a tous les privilèges

### Page blanche

**Causes** :
- Erreur PHP non affichée
- Fichier manquant

**Solutions** :
1. Ajoutez au début de vos fichiers PHP :
```php
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
```
2. Vérifiez les logs d'erreurs dans cPanel → "Error Log"

### Erreur 500

**Solutions** :
1. Vérifiez les permissions des fichiers (644 pour .php, 755 pour dossiers)
2. Vérifiez le fichier `.htaccess` (s'il existe)
3. Consultez les logs d'erreurs

### Images ne s'affichent pas

**Solutions** :
1. Vérifiez que le dossier `uploads/` a les permissions 755
2. Vérifiez les chemins dans le code (relatifs vs absolus)
3. Vérifiez que les images ont été uploadées

### "Headers already sent"

**Cause** : Espaces ou caractères avant `<?php`

**Solution** :
1. Ouvrez le fichier mentionné dans l'erreur
2. Assurez-vous que `<?php` est à la toute première ligne
3. Pas d'espace avant, pas de BOM UTF-8

---

## 🔒 Sécurité en production

### ⚠️ OBLIGATOIRE avant mise en ligne :

1. **Changer le mot de passe admin** :
   - Connectez-vous à l'admin
   - Allez dans les paramètres
   - Changez le mot de passe

2. **Supprimer le dossier install/** :
   - Via FTP, supprimez complètement `/backend/install/`

3. **Désactiver les erreurs PHP** :
   - Dans `config/config.php`, changez :
   ```php
   error_reporting(0);
   ini_set('display_errors', 0);
   ```

4. **HTTPS obligatoire** :
   - O2Switch fournit des certificats SSL gratuits
   - Activez-le dans cPanel → "SSL/TLS"
   - Forcez HTTPS avec un `.htaccess`

5. **Fichier .htaccess de sécurité** :
   Créez un fichier `.htaccess` dans `/backend/` :
   ```apache
   # Empêcher l'affichage de la liste des fichiers
   Options -Indexes
   
   # Forcer HTTPS
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   
   # Protéger les fichiers sensibles
   <FilesMatch "\.(env|log|sql)$">
       Order allow,deny
       Deny from all
   </FilesMatch>
   ```

---

## 📊 Structure finale sur O2Switch

```
public_html/
├── index.html                    # Votre site front-end
├── produits.html
├── styles.css
├── ...
└── backend/                      # Back-end PHP
    ├── admin/
    │   ├── index.php
    │   ├── login.php
    │   └── assets/
    ├── api/
    │   ├── products.php
    │   └── auth.php
    ├── config/
    │   ├── database.php (configuré)
    │   └── config.php
    └── uploads/                  # Images des produits
        └── product-xxxxx.jpg
```

---

## ✅ Checklist de déploiement

- [ ] Base de données MySQL créée dans cPanel
- [ ] Utilisateur MySQL créé et associé
- [ ] Fichier `database.php` configuré avec les bonnes infos
- [ ] Tous les fichiers uploadés via FTP
- [ ] Permissions du dossier `uploads/` : 755
- [ ] Script `install/setup.php` exécuté avec succès
- [ ] Dossier `install/` supprimé
- [ ] Interface admin accessible
- [ ] Connexion admin réussie
- [ ] Mot de passe admin changé
- [ ] Premier produit de test ajouté
- [ ] API fonctionne (test avec navigateur)
- [ ] HTTPS activé
- [ ] Erreurs PHP désactivées en production

---

## 💡 Conseils O2Switch

### Support O2Switch
- Support réactif 24/7
- Chat en ligne sur o2switch.fr
- Ticket depuis cPanel

### Backup automatique
- O2Switch fait des backups quotidiens automatiques
- Accessible via cPanel → "Backups"

### phpMyAdmin
- Pour gérer la base manuellement
- cPanel → "phpMyAdmin"
- Utile pour voir/modifier les données

### Quota
- O2Switch offre stockage illimité
- Pas de limite de bande passante

---

## 🎉 Résultat final

Une fois tout configuré :

1. **Votre site** : `https://votre-domaine.com`
2. **Interface admin** : `https://votre-domaine.com/backend/admin/`
3. **API** : `https://votre-domaine.com/backend/api/products.php`

**Vous pouvez** :
- ✅ Gérer les produits via l'interface admin
- ✅ Uploader des images
- ✅ Les produits s'affichent automatiquement sur votre site
- ✅ Tout est hébergé sur O2Switch

**Plus besoin de modifier le code HTML pour ajouter des produits !** 🚀

---

**Temps total d'installation : 15-20 minutes**

**Besoin d'aide ?** Consultez la documentation dans les autres fichiers du projet.
