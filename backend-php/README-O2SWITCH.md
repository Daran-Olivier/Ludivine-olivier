# 🎯 BACK-END PHP POUR O2SWITCH

## ✅ Version compatible O2Switch créée !

Cette version utilise **PHP + MySQL** au lieu de Node.js, ce qui est 100% compatible avec O2Switch.

---

## 📁 Structure des fichiers PHP

```
backend-php/
├── config/
│   └── database.php          # Connexion MySQL
├── api/
│   ├── products.php          # API CRUD produits
│   └── auth.php              # Authentification
├── admin/
│   ├── index.php             # Interface admin
│   ├── login.php             # Page de connexion
│   └── assets/
│       ├── admin.css         # Styles
│       └── admin.js          # JavaScript
├── uploads/                  # Images des produits
├── install/
│   └── setup.php             # Installation automatique
└── README-O2SWITCH.md        # Instructions O2Switch
```

---

## 🚀 Installation sur O2Switch (5 étapes)

### 1. Créer la base de données MySQL
- Va dans cPanel O2Switch
- Crée une base de données MySQL
- Crée un utilisateur et donne-lui tous les droits
- Note les informations (nom DB, user, password)

### 2. Uploader les fichiers
- Télécharge tout le dossier `backend-php/`
- Upload via FTP (FileZilla) sur O2Switch
- Place dans : `public_html/api/` ou `public_html/backend/`

### 3. Configurer la base
- Édite `config/database.php`
- Entre tes infos MySQL O2Switch

### 4. Lancer l'installation
- Va sur : `https://ton-site.com/backend/install/setup.php`
- Suis les instructions

### 5. Accéder à l'admin
- Va sur : `https://ton-site.com/backend/admin/`
- Connecte-toi avec : admin / admin123

---

## 🎯 Fonctionnalités identiques

✅ Interface d'administration moderne
✅ Gestion complète des produits (ajout/modification/suppression)
✅ Upload d'images
✅ API REST pour le front-end
✅ Authentification sécurisée
✅ Recherche et filtrage

---

Je crée maintenant tous les fichiers PHP...
