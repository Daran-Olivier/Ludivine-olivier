# 🗑️ Suppression du Backend Node.js

## ⚠️ À Lire Avant de Supprimer

Le dossier `backend/` contient l'ancienne version Node.js du backend qui **n'est pas compatible avec O2Switch**.

**Ce dossier peut être supprimé en toute sécurité** une fois que vous avez vérifié que le backend PHP fonctionne correctement.

---

## ✅ Liste de Vérification Avant Suppression

Avant de supprimer le dossier `backend/`, assurez-vous que :

- [x] Le backend PHP est installé et fonctionne
- [x] Vous pouvez vous connecter au dashboard admin PHP
- [x] Vous pouvez ajouter/modifier/supprimer des produits
- [x] Les images s'uploadent correctement
- [x] L'API PHP retourne les produits
- [x] Vous avez testé l'intégration dans votre site

---

## 🔄 Ce que Contenait le Backend Node.js

Le dossier `backend/` contenait :

```
backend/
├── server.js                  # Serveur Express.js
├── package.json               # Dépendances Node.js
├── .env                       # Variables d'environnement
│
├── config/
│   └── database.js           # Connexion SQLite
│
├── routes/
│   ├── auth.js               # Routes authentification
│   └── products.js           # Routes produits
│
├── public/
│   ├── admin.html            # Interface admin
│   ├── admin-styles.css      # Styles (copié vers PHP)
│   └── admin-script.js       # JavaScript (adapté pour PHP)
│
├── scripts/
│   └── init-database.js      # Init SQLite
│
└── uploads/                  # Images (à migrer si besoin)
```

---

## 📦 Migration des Images (Si Nécessaire)

Si vous aviez déjà uploadé des images dans `backend/uploads/`, vous devez les copier :

### Méthode 1 : Manuellement
1. Copiez le contenu de `backend/uploads/`
2. Collez-le dans `backend-php/uploads/`

### Méthode 2 : Via PowerShell
```powershell
# Depuis la racine du projet
Copy-Item "backend/uploads/*" -Destination "backend-php/uploads/" -Recurse
```

**Note** : Les chemins dans la base de données devront être mis à jour si les images étaient référencées avec l'ancien chemin.

---

## 🗑️ Suppression du Backend Node.js

### Option 1 : Via l'Explorateur Windows
1. Naviguez vers : `C:\Users\johnn\dw6\pureliink Ludivine et Olivier\`
2. Faites un clic droit sur le dossier `backend/`
3. Sélectionnez **Supprimer**
4. Confirmez la suppression

### Option 2 : Via PowerShell
```powershell
# ⚠️ ATTENTION : Cette commande supprime définitivement le dossier

# Naviguez vers le projet
cd "C:\Users\johnn\dw6\pureliink Ludivine et Olivier"

# Supprimez le dossier backend Node.js
Remove-Item -Path "backend" -Recurse -Force
```

---

## 💾 Sauvegarde Préventive (Recommandé)

Si vous voulez garder une copie de sauvegarde avant de supprimer :

### Via PowerShell
```powershell
# Créer une archive ZIP du backend Node.js
Compress-Archive -Path "backend" -DestinationPath "backend-nodejs-backup.zip"

# Puis supprimez le dossier
Remove-Item -Path "backend" -Recurse -Force
```

### Via l'Explorateur
1. Clic droit sur le dossier `backend/`
2. Sélectionnez **Envoyer vers → Dossier compressé**
3. Sauvegardez `backend.zip` sur un disque externe ou cloud
4. Supprimez ensuite le dossier `backend/`

---

## 📊 Comparaison des Deux Versions

| Fonctionnalité | Node.js (ancien) | PHP (actuel) |
|----------------|------------------|--------------|
| **Hébergement O2Switch** | ❌ Non compatible | ✅ Compatible |
| **Base de données** | SQLite (fichier) | MySQL (serveur) |
| **Authentification** | bcrypt + sessions | bcrypt + sessions PHP |
| **Upload d'images** | Multer | PHP native |
| **API REST** | Express.js | PHP natif |
| **Interface Admin** | HTML/CSS/JS | HTML/CSS/JS (adapté) |
| **Sécurité** | Middleware Express | .htaccess + PHP |
| **Déploiement** | npm install + PM2 | Upload FTP simple |

---

## 🎯 Fichiers à Conserver

Vous pouvez conserver pour référence :
- `backend/documentation/` - Si vous avez des docs utiles
- `backend/GUIDE-*.md` - Guides de référence

Tout le reste peut être supprimé en toute sécurité.

---

## ✅ Après la Suppression

Une fois le dossier `backend/` supprimé, votre structure sera :

```
pureliink Ludivine et Olivier/
├── index.html
├── produits.html
├── ... (autres fichiers du site)
│
└── backend-php/           ← Seul backend restant
    ├── config/
    ├── api/
    ├── admin/
    ├── install/
    └── uploads/
```

**Plus simple, plus clair, 100% compatible O2Switch !** 🎉

---

## 🆘 En Cas de Problème

Si vous supprimez par erreur et avez besoin de restaurer :

1. **Vérifiez la Corbeille Windows** (si suppression via explorateur)
2. **Utilisez votre backup ZIP** (si vous en avez fait un)
3. **Récupérez depuis Git** (si vous versionnez votre code)

---

## 📝 Note Finale

Le backend Node.js a servi de prototype et était parfaitement fonctionnel, mais incompatible avec l'hébergement O2Switch qui ne supporte pas Node.js.

Le backend PHP offre **exactement les mêmes fonctionnalités** avec une compatibilité totale O2Switch.

**Vous pouvez supprimer le dossier `backend/` sans crainte !**

---

**Date de création** : 2024  
**Status** : Prêt à supprimer  
**Backup recommandé** : ✅ Oui, par précaution
