# 🚀 CONFIGURATION BACKEND PHP POUR IONOS

## ✅ ÉTAPE 1 : CRÉER LA BASE DE DONNÉES (5 minutes)

### Dans votre espace Ionos :

1. **Connectez-vous à votre compte Ionos**
   - URL : https://www.ionos.fr/login

2. **Accédez à "Hébergement" puis "MySQL Databases"**
   - Ou cherchez "Bases de données" dans le menu

3. **Créer une nouvelle base de données :**
   - Cliquez sur "Créer une nouvelle base de données"
   - Nom suggéré : `purelink_db`
   - ⚠️ Ionos va préfixer automatiquement (ex: `dbi123456_purelink_db`)
   - **NOTEZ LE NOM COMPLET** ici : ____________________________

4. **Créer un utilisateur MySQL :**
   - Dans la même section, créez un utilisateur
   - Nom suggéré : `purelink_user`
   - Générez un mot de passe FORT (utilisez le générateur)
   - ⚠️ Ionos va préfixer automatiquement (ex: `dbi123456_purelink_user`)
   - **NOTEZ LE NOM COMPLET** ici : ____________________________
   - **NOTEZ LE MOT DE PASSE** ici : ____________________________

5. **Associer l'utilisateur à la base :**
   - Sélectionnez votre utilisateur
   - Sélectionnez votre base de données
   - Cochez **"Tous les privilèges"** ou **"ALL PRIVILEGES"**
   - Validez

---

## ✅ ÉTAPE 2 : INFORMATIONS À COPIER

**Une fois la base créée, remplissez ces informations :**

```
Hôte MySQL : localhost
Nom de la base : dbi_______ (le nom complet avec préfixe)
Utilisateur : dbi_______ (le nom complet avec préfixe)
Mot de passe : _______ (le mot de passe que vous avez noté)
```

---

## ✅ ÉTAPE 3 : MODIFIER LE FICHIER database.php

**Ouvrez le fichier :** `backend-php/config/database.php`

**Modifiez les lignes 5 à 8 avec VOS informations :**

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'VOTRE_BASE_COMPLETE');     // ← Collez le nom complet de la base
define('DB_USER', 'VOTRE_UTILISATEUR_COMPLET'); // ← Collez le nom complet de l'utilisateur
define('DB_PASS', 'VOTRE_MOT_DE_PASSE');        // ← Collez votre mot de passe
```

**Exemple après modification :**
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'dbi123456_purelink_db');
define('DB_USER', 'dbi123456_purelink_user');
define('DB_PASS', 'VotreMotDePasse123!@#');
```

**ENREGISTREZ le fichier !**

---

## ✅ ÉTAPE 4 : UPLOADER SUR IONOS (3 minutes)

### Option A : Avec FileZilla (recommandé)

1. **Téléchargez FileZilla** (si pas déjà installé) : https://filezilla-project.org/

2. **Connectez-vous en FTP :**
   - Hôte : `ftp.votre-domaine.com` (ou l'adresse FTP dans votre compte Ionos)
   - Utilisateur : votre login Ionos
   - Mot de passe : votre password Ionos
   - Port : 21

3. **Naviguez vers `/` ou `/htdocs/` ou `/public_html/`** (selon la config Ionos)

4. **Uploadez le dossier `backend-php/` complet :**
   - Clic droit sur le dossier local `backend-php/`
   - "Upload" ou "Envoyer"
   - Attendez la fin (tous les fichiers en vert)

### Option B : Avec le gestionnaire de fichiers Ionos

1. Dans votre espace Ionos, allez dans "Gestionnaire de fichiers"
2. Naviguez vers la racine web (`/` ou `/htdocs/`)
3. Créez un dossier `backend-php`
4. Uploadez tous les sous-dossiers (`admin/`, `api/`, `config/`, `install/`, `uploads/`)

---

## ✅ ÉTAPE 5 : INSTALLATION (30 secondes)

1. **Ouvrez votre navigateur**
2. **Allez sur :** `https://votre-domaine.com/backend-php/install/setup.php`
   - Remplacez `votre-domaine.com` par votre vrai domaine
3. **Cliquez sur "Installer la base de données"**
4. **Attendez le message de succès** ✅

**Identifiants admin par défaut :**
- Identifiant : `admin`
- Mot de passe : `admin123`

---

## ✅ ÉTAPE 6 : CONNEXION

1. **Allez sur :** `https://votre-domaine.com/backend-php/admin/`
2. **Connectez-vous avec :** `admin` / `admin123`
3. **⚠️ IMPORTANT : Changez immédiatement le mot de passe !**

---

## ✅ ÉTAPE 7 : SÉCURITÉ POST-INSTALLATION

**À faire IMMÉDIATEMENT après l'installation :**

1. **Supprimez le dossier d'installation :**
   - Via FileZilla ou le gestionnaire de fichiers
   - Supprimez `/backend-php/install/`
   - ⚠️ C'est CRITIQUE pour la sécurité !

2. **Changez le mot de passe admin :**
   - Dans le dashboard admin
   - Utilisez un mot de passe fort

---

## 🆘 DÉPANNAGE

### Erreur "Connexion à la base de données impossible"
- ✅ Vérifiez que les identifiants dans `database.php` sont corrects
- ✅ Vérifiez que l'utilisateur a TOUS les privilèges
- ✅ Vérifiez que vous avez bien noté le nom COMPLET avec préfixe

### Erreur 404 sur `/backend-php/`
- ✅ Vérifiez que vous avez uploadé dans le bon dossier (`/htdocs/` ou `/public_html/`)
- ✅ Vérifiez que le dossier s'appelle bien `backend-php`

### Page blanche ou erreur 500
- ✅ Vérifiez que PHP est bien activé sur votre hébergement Ionos
- ✅ Vérifiez les permissions des fichiers (644 pour les fichiers, 755 pour les dossiers)
- ✅ Consultez les logs d'erreur dans votre espace Ionos

---

## 📞 BESOIN D'AIDE ?

Si vous rencontrez un problème :
1. Notez le message d'erreur exact
2. Vérifiez à quelle étape vous êtes bloqué
3. Contactez-moi avec ces informations
