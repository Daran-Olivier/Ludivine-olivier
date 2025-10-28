# ✅ Checklist Complète Avant Mise en Ligne

## 📋 Vue d'ensemble
Cette checklist vous aide à vérifier tous les points critiques avant de déployer votre site PureLink.

---

## 🔴 CRITIQUE - À FAIRE ABSOLUMENT

### 1. ✅ Configuration Google Analytics (FAIT)
- ⚠️ **Action requise** : Remplacer `UA-XXXXXXXX-X` dans `cookie-consent.js` ligne 250
- **Fichier** : `cookie-consent.js`
- **Ligne** : 250
- **Actuel** : `ga('create', 'UA-XXXXXXXX-X', 'auto');`
- **À faire** :
  1. Créer un compte Google Analytics sur https://analytics.google.com
  2. Obtenir votre ID de suivi (format: `G-XXXXXXXXXX` ou `UA-123456789-1`)
  3. Remplacer dans le code

```javascript
// AVANT (ligne 250 de cookie-consent.js)
ga('create', 'UA-XXXXXXXX-X', 'auto');

// APRÈS
ga('create', 'VOTRE-VRAI-ID-GOOGLE-ANALYTICS', 'auto');
```

### 2. ✅ Vérification Formulaires Formspree (DÉJÀ CONFIGURÉS ✓)
Les endpoints Formspree sont déjà configurés dans `form-handler.js` :
- ✅ Contact : `mdkwrapg`
- ✅ Newsletter : `manpgqlj`
- ✅ Affiliation : `xqayvegl`
- ✅ Avis : `xzzjldkk`

**Test recommandé** : Ouvrir `test-formulaires.html` et tester chaque formulaire avant la mise en ligne.

### 3. ⚠️ Backend PHP - Sécurité Admin
- **Action requise** : Changer le mot de passe admin par défaut
- **Identifiants actuels** :
  - Login : `admin`
  - Mot de passe : `admin123` ⚠️ **À CHANGER IMMÉDIATEMENT**

**Après déploiement sur O2Switch** :
1. Se connecter à `https://votre-domaine.com/backend-php/admin/login.php`
2. Changer le mot de passe dans la base de données MySQL
3. Supprimer ou protéger le dossier `backend-php/install/`

---

## 🟡 IMPORTANT - SEO & Performance

### 4. ⚠️ Balises Meta Description (MANQUANTES)
**Statut** : Aucune balise meta description trouvée dans les pages HTML

**Impact** : Mauvais référencement Google - vos pages n'auront pas de description dans les résultats de recherche

**Action requise** : Ajouter dans le `<head>` de chaque page HTML principale :

```html
<!-- index.html -->
<meta name="description" content="Ludivine & Olivier, partenaires officiels PureLink. Découvrez nos produits de bien-être naturels : nutrition, care, drinks et elixirs pour votre santé.">
<meta name="keywords" content="PureLink, bien-être, nutrition, compléments alimentaires, santé naturelle">

<!-- produits.html -->
<meta name="description" content="Catalogue complet des produits PureLink : gummies, poudres, compléments alimentaires et accessoires de bien-être naturel.">

<!-- contact.html -->
<meta name="description" content="Contactez Ludivine & Olivier, vos conseillers PureLink. Prenez rendez-vous pour découvrir nos solutions de bien-être personnalisées.">

<!-- affiliation.html -->
<meta name="description" content="Rejoignez le programme d'affiliation PureLink avec Ludivine & Olivier. Devenez partenaire et partagez les bienfaits du bien-être naturel.">
```

### 5. ⚠️ Balises Open Graph (MANQUANTES - RECOMMANDÉ)
**Statut** : Pas de balises OG pour le partage sur réseaux sociaux

**Impact** : Mauvais affichage lors du partage sur Facebook, LinkedIn, WhatsApp

**Action recommandée** : Ajouter dans chaque page principale :

```html
<meta property="og:title" content="Ludivine & Olivier - Partenaires PureLink">
<meta property="og:description" content="Votre partenaire santé et bien-être avec les produits PureLink">
<meta property="og:image" content="https://votre-domaine.com/assets/Charte décomposée PNG/PLBleu(fondTransparent).png">
<meta property="og:url" content="https://votre-domaine.com">
<meta property="og:type" content="website">
```

### 6. ⚠️ Fichier robots.txt (MANQUANT)
**Statut** : Aucun fichier `robots.txt` trouvé

**Action** : Créer un fichier `robots.txt` à la racine :

```txt
User-agent: *
Allow: /

# Bloquer l'accès au backend et admin
Disallow: /backend-php/admin/
Disallow: /backend-php/install/
Disallow: /backend-php/config/

# Fichiers de test
Disallow: /test-formulaires.html
Disallow: /test-produits.html

# Sitemap
Sitemap: https://votre-domaine.com/sitemap.xml
```

### 7. ⚠️ Fichier sitemap.xml (MANQUANT)
**Statut** : Aucun sitemap trouvé

**Action** : Créer `sitemap.xml` à la racine pour améliorer l'indexation Google :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://votre-domaine.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://votre-domaine.com/produits.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://votre-domaine.com/a-propos.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://votre-domaine.com/contact.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://votre-domaine.com/affiliation.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- Ajouter toutes vos autres pages ici -->
</urlset>
```

### 8. ℹ️ Favicon (DÉJÀ CONFIGURÉ ✓)
- ✅ Favicon présent : `assets/Charte décomposée PNG/PLflavicon-carréBleu(fondTransparent).png`
- ✅ Bien référencé dans toutes les pages HTML

---

## 🟢 OPTIONNEL - Améliorations

### 9. Images Alt Tags
**Statut** : Semble correct (logo a un alt="PureLink Logo")
**Recommandation** : Vérifier que toutes les images produits ont des attributs `alt` descriptifs

### 10. Configuration HTTPS
- ✅ Netlify : HTTPS automatique et gratuit
- ✅ O2Switch : Let's Encrypt gratuit via cPanel

### 11. Tests de Performance
**À faire après déploiement** :
1. Tester sur Google PageSpeed Insights : https://pagespeed.web.dev/
2. Tester sur GTmetrix : https://gtmetrix.com/
3. Vérifier temps de chargement mobile/desktop

### 12. Tests Cross-Browser
**Recommandé** : Tester sur :
- ✅ Chrome/Edge (navigateur principal)
- ✅ Firefox
- ✅ Safari (Mac/iOS)
- ✅ Mobile (Android/iOS)

---

## 📝 PROCÉDURE DE DÉPLOIEMENT

### Étape 1 : Frontend (Netlify)
```
1. Corriger les points critiques ci-dessus (Google Analytics, Meta tags)
2. Créer robots.txt et sitemap.xml
3. Se connecter sur https://app.netlify.com
4. Glisser-déposer le dossier racine (sauf backend-php/)
5. Configurer le nom de domaine personnalisé
6. Vérifier que HTTPS est activé
7. Tester tous les formulaires
```

### Étape 2 : Backend PHP (O2Switch)
```
1. Créer une base de données MySQL via cPanel
2. Uploader backend-php/ vers /public_html/backend-php/
3. Éditer config/database.php avec les vrais identifiants
4. Exécuter install/setup.php
5. SE CONNECTER et CHANGER le mot de passe admin
6. SUPPRIMER le dossier install/ après installation
7. Tester l'API : https://votre-domaine.com/backend-php/api/products.php
```

### Étape 3 : Vérifications Post-Déploiement
```
✅ Le site s'affiche correctement
✅ Navigation fonctionne (menu, liens)
✅ Formulaires envoient bien les emails
✅ Bannière cookies s'affiche
✅ Produits statiques s'affichent
✅ API backend répond (si déployé)
✅ HTTPS activé (cadenas vert)
✅ Responsive (mobile/tablette/desktop)
✅ Google Analytics reçoit du trafic
```

---

## ⚠️ SÉCURITÉ - Points Critiques

### À faire IMMÉDIATEMENT après déploiement backend :
1. ❌ **SUPPRIMER** `backend-php/install/setup.php` (ou protéger par .htaccess)
2. ❌ **CHANGER** le mot de passe admin par défaut (admin123)
3. ✅ **VÉRIFIER** que les fichiers de config ne sont pas accessibles publiquement
4. ✅ **TESTER** que seuls les endpoints API publics sont accessibles

### Protection recommandée (via .htaccess) :
```apache
# Dans backend-php/config/.htaccess
Order deny,allow
Deny from all
```

---

## 🎯 RÉSUMÉ DES ACTIONS IMMÉDIATES

### AVANT Netlify :
1. ⚠️ Remplacer l'ID Google Analytics dans `cookie-consent.js`
2. ⚠️ Ajouter balises meta description dans index.html, produits.html, contact.html
3. ⚠️ Créer `robots.txt` à la racine
4. ⚠️ Créer `sitemap.xml` à la racine
5. ✅ Tester les formulaires avec `test-formulaires.html`

### APRÈS Déploiement O2Switch :
1. 🔴 CHANGER le mot de passe admin (admin123 → mot de passe fort)
2. 🔴 SUPPRIMER le dossier `backend-php/install/`
3. ✅ Vérifier l'accès API public

---

## 📞 Support & Documentation

- **Guide déploiement Netlify** : `GUIDE-HEBERGEMENT.txt`
- **Guide backend O2Switch** : `backend-php/DEMARRAGE-RAPIDE.md`
- **Configuration formulaires** : `GUIDE-CONFIGURATION-FORMULAIRES.md`
- **Tests formulaires** : Ouvrir `test-formulaires.html` dans le navigateur

---

## ✅ Validation Finale

Avant de mettre en ligne, cochez mentalement :
- [ ] Google Analytics configuré avec le vrai ID
- [ ] Balises meta description ajoutées
- [ ] robots.txt créé
- [ ] sitemap.xml créé
- [ ] Formulaires testés et fonctionnels
- [ ] Email de contact vérifié : ludivine.olivier.pureliink@gmail.com
- [ ] Bannière cookies fonctionnelle
- [ ] Site responsive sur mobile
- [ ] Toutes les pages HTML se chargent sans erreur

**Une fois en ligne :**
- [ ] Mot de passe admin changé
- [ ] Dossier install/ supprimé
- [ ] HTTPS activé et fonctionnel
- [ ] Google Analytics reçoit du trafic
- [ ] Formulaires envoient bien les emails

---

🎉 **Votre site est prêt à 90% !** Il ne reste que quelques optimisations SEO à faire.

**Temps estimé pour finaliser** : 1-2 heures (surtout les balises meta et fichiers SEO)
