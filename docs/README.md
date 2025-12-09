# 🌿 Ludivine & Olivier - Site Web PureLink

> Site vitrine professionnel pour la promotion des produits de bien-être PureLink

[![Netlify Status](https://img.shields.io/badge/Netlify-Ready-00C7B7?style=for-the-badge&logo=netlify)](https://netlify.com)
[![License](https://img.shields.io/badge/License-Proprietary-blue?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)

---

## 📋 Table des matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Déploiement](#déploiement)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Conception](#conception)
- [Contact](#contact)
- [Licence](#licence)

---

## 🎯 À propos

Site web vitrine moderne et responsive pour **Ludivine & Olivier**, partenaires officiels de **PureLink**.

Le site présente une gamme complète de produits de bien-être naturels (nutrition, care, drinks, elixirs) et permet aux visiteurs de :
- Découvrir les produits PureLink
- Prendre rendez-vous
- Rejoindre le programme d'affiliation
- Partager leurs avis
- S'inscrire à la newsletter

### 🌟 Objectifs du projet

- **Vitrine professionnelle** : Présentation des produits et valeurs
- **Génération de leads** : Formulaires de contact et affiliation
- **Engagement** : Newsletter et avis clients
- **Conformité** : RGPD compliant avec gestion des cookies
- **Performance** : Site ultra-rapide et optimisé SEO

---

## ✨ Fonctionnalités

### Pages principales

- 🏠 **Accueil** - Présentation et appel à l'action
- 👥 **À propos** - Histoire et valeurs
- 🛍️ **Produits** - Catalogue complet avec 4 catégories
- 📥 **Programmes** - Téléchargement de guides
- 🤝 **Affiliation** - Rejoindre le réseau
- 📝 **Questionnaire** - Évaluation personnalisée
- ⭐ **Avis** - Témoignages clients
- 📧 **Contact** - Formulaire de contact

### Pages produits détaillées (13 produits)

**Drinks (4)**
- ☕ Café PureLiink
- 🍫 Chocolat PureLiink
- 🥭 Mangue PureLiink
- 🍦 Vanille PureLiink

**Elixirs (5)**
- 😌 Cool & Relax
- ⚡ Energy Boost
- 😴 Go To Sleep
- 🌿 Easy Digest
- 🧘 Love Energy

**Nutrition (3)**
- 🐟 Oméga-3
- 🧬 Collagen
- 🛡️ Immunity

**Care (1)**
- 🧪 Detox

### Fonctionnalités techniques

✅ **Design responsive** - Mobile, tablette, desktop
✅ **Navigation intuitive** - Menu hamburger sur mobile
✅ **Formulaires fonctionnels** - Intégration Formspree
✅ **Gestion des cookies** - Bannière RGPD complète
✅ **Animations modernes** - Transitions fluides
✅ **SEO optimisé** - Balises meta, structure sémantique
✅ **Performance** - Chargement rapide, images optimisées
✅ **Accessibilité** - Navigation clavier, ARIA labels

---

## 🛠️ Technologies utilisées

### Frontend

| Technologie | Version | Usage |
|------------|---------|-------|
| HTML5 | - | Structure des pages |
| CSS3 | - | Styles et animations |
| JavaScript | ES6+ | Interactivité et logique |
| Font Awesome | 6.0.0 | Icônes |
| Google Fonts | - | Typographie (Poppins, Pacifico) |

### Services tiers

| Service | Usage | Plan |
|---------|-------|------|
| Formspree | Gestion des formulaires | Gratuit (50/mois) |
| Netlify | Hébergement (recommandé) | Gratuit |
| Google Analytics | Statistiques (optionnel) | Gratuit |

### Conformité

- ✅ RGPD (Règlement Général sur la Protection des Données)
- ✅ Cookies avec consentement
- ✅ Politique de confidentialité
- ✅ Conditions d'utilisation

---

## 📁 Structure du projet

```
pureliink-ludivine-olivier/
│
├── 📄 index.html                    # Page d'accueil
├── 📄 a-propos.html                 # Page à propos
├── 📄 produits.html                 # Catalogue produits
├── 📄 programmes.html               # Programmes téléchargeables
├── 📄 affiliation.html              # Formulaire affiliation
├── 📄 questionnaire.html            # Questionnaire bien-être
├── 📄 avis.html                     # Avis clients
├── 📄 contact.html                  # Formulaire de contact
│
├── 📁 Pages produits (13 fichiers)
│   ├── cafe.html
│   ├── chocolat.html
│   ├── mangue.html
│   ├── vanille.html
│   ├── cool-relax.html
│   ├── energy-boost.html
│   ├── go-to-sleep.html
│   ├── easy-digest.html
│   ├── love-energy.html
│   ├── omega-3.html
│   ├── collagen.html
│   ├── immunity.html
│   └── detox.html
│
├── 📁 Pages légales
│   ├── politique-confidentialite.html
│   ├── politique-cookies.html
│   ├── conditions-utilisation.html
│   └── faq.html
│
├── 📁 Styles CSS
│   ├── styles.css                   # Styles globaux
│   ├── index.css                    # Styles page d'accueil
│   ├── navigation-styles.css        # Styles navigation
│   ├── recipe-template.css          # Styles produits
│   ├── cookie-consent.css           # Styles cookies
│   └── test-theme.html              # Test de thèmes
│
├── 📁 Scripts JavaScript
│   ├── script.js                    # Script principal
│   ├── index.js                     # Script page d'accueil
│   ├── form-handler.js              # Gestion formulaires
│   └── cookie-consent.js            # Gestion cookies RGPD
│
├── 📁 assets/                       # Ressources
│   ├── chartedecomposeepng/       # Logos et visuels
│   └── logo_1.png                   # Photo profil
│
├── 📁 conception/                   # Fichiers de conception
│   ├── wireframes/                  # Wireframes (maquettes fil de fer)
│   ├── mockups/                     # Mockups (maquettes finales)
│   └── zoning/                      # Zoning (zones de contenu)
│
├── 📁 documentation/                # Documentation
│   ├── GUIDE-HEBERGEMENT.txt        # Guide déploiement
│   ├── GUIDE-COOKIES.txt            # Guide cookies
│   ├── BACKEND-EXPLICATIONS.txt     # Explications back-end
│   ├── LISEZ-MOI-FORMULAIRES.txt    # Guide formulaires
│   └── GUIDE-CONFIGURATION-FORMULAIRES.md
│
├── 📄 README.md                     # Ce fichier
└── 📄 test-formulaires.html         # Page de test
```

---

## 🚀 Installation

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- (Optionnel) Un éditeur de code (VS Code recommandé)
- (Optionnel) Un compte GitHub pour versioning

### Installation locale

1. **Cloner ou télécharger le projet**
   ```bash
   git clone https://github.com/votre-username/pureliink-ludivine-olivier.git
   cd pureliink-ludivine-olivier
   ```

2. **Ouvrir le projet**
   - Double-cliquez sur `index.html` pour ouvrir dans le navigateur
   - Ou utilisez un serveur local (recommandé) :
     ```bash
     # Avec Python
     python -m http.server 8000

     # Avec Node.js (http-server)
     npx http-server

     # Avec PHP
     php -S localhost:8000
     ```

3. **Accéder au site**
   - Ouvrez votre navigateur
   - Allez sur `http://localhost:8000`

---

## 📤 Déploiement

### Option 1 : Netlify (Recommandé - Gratuit)

#### Méthode A : Drag & Drop

1. Créez un compte sur [netlify.com](https://www.netlify.com)
2. Cliquez sur "Sites" → "Add new site" → "Deploy manually"
3. Glissez-déposez le dossier complet du projet
4. Attendez 30 secondes ⏱️
5. Votre site est en ligne ! 🎉

**URL :** `https://votre-site.netlify.app`

#### Méthode B : Via Git

1. Poussez votre code sur GitHub/GitLab
2. Connectez votre repository à Netlify
3. Netlify déploie automatiquement à chaque commit

**Avantages Netlify :**
- ✅ HTTPS automatique
- ✅ CDN mondial
- ✅ Déploiement continu
- ✅ Analytics intégré
- ✅ 100% gratuit pour ce projet

### Option 2 : Vercel (Alternative gratuite)

Similaire à Netlify :
1. Compte sur [vercel.com](https://vercel.com)
2. Import du projet
3. Déploiement automatique

### Option 3 : O2Switch (Hébergement professionnel)

**Prix :** 6€/mois (72€/an)

**Avantages :**
- Hébergeur français
- Emails professionnels inclus
- Support 24/7 en français
- Nom de domaine .fr gratuit

**Déploiement :**
1. Commandez sur [o2switch.fr](https://www.o2switch.fr)
2. Accédez au cPanel
3. Uploadez les fichiers via FTP ou gestionnaire de fichiers
4. Votre site est en ligne sur votre domaine !

📖 **Guide complet :** Voir `documentation/GUIDE-HEBERGEMENT.txt`

---

## ⚙️ Configuration

### 1. Formspree (Formulaires)

Les formulaires sont configurés pour utiliser Formspree. Vous devez :

1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer 4 formulaires :
   - Contact
   - Newsletter
   - Affiliation
   - Avis
3. Copier les Form IDs
4. Les ajouter dans `form-handler.js` (lignes 8-11)

```javascript
const FORMSPREE_CONFIG = {
    contact: 'https://formspree.io/f/VOTRE_ID_CONTACT',
    newsletter: 'https://formspree.io/f/VOTRE_ID_NEWSLETTER',
    affiliation: 'https://formspree.io/f/VOTRE_ID_AFFILIATION',
    review: 'https://formspree.io/f/VOTRE_ID_AVIS'
};
```

**IDs actuels (à remplacer) :**
- Contact: `mdkwrapg`
- Newsletter: `manpgqlj`
- Affiliation: `xqayvegl`
- Avis: `xzzjldkk`

📖 **Guide complet :** Voir `documentation/LISEZ-MOI-FORMULAIRES.txt`

### 2. Google Analytics (Optionnel)

Pour suivre les statistiques du site :

1. Créez un compte [Google Analytics](https://analytics.google.com)
2. Créez une propriété pour votre site
3. Copiez l'ID de suivi (ex: `G-XXXXXXXXXX`)
4. Ajoutez le code de suivi dans toutes les pages HTML

### 3. Personnalisation

**Modifier les contenus :**
- Textes : Directement dans les fichiers HTML
- Styles : Fichiers CSS dans le dossier racine
- Images : Dossier `assets/`

**Modifier les couleurs principales :**
- Ouvrez `styles.css`
- Cherchez les variables CSS (`:root`)
- Modifiez les valeurs hexadécimales

### 4. Backend API (optionnel)

Le site peut consommer un backend PHP (dossier `backend-php/`) pour enrichir dynamiquement les produits et les images "hero". L’URL de base de l’API est centralisée dans `assets/js/purelink-api-config.js` via la variable globale `window.PURELINK_API_BASE`.

- Par défaut:
  - En local (file:, localhost): `location.origin + '/backend-php'`
  - En production: `https://ludivineolivier.fr/backend-php`

- Pour forcer une autre URL (ex: frontend sur Netlify, backend ailleurs), insérez AVANT les scripts d’intégration:

```html
<script>
  window.PURELINK_API_BASE = 'https://votre-backend.com/backend-php';
</script>
<script src="assets/js/purelink-api-config.js"></script>
```

Les scripts qui consomment cette config sont:
- `assets/js/purelink-api-integration.js` (ajoute des produits API dans `produits.html`)
- `assets/js/purelink-products.js` (page `produits-api.html`)
- `assets/js/purelink-hero-api.js` (images hero pour `index.html` et `a-propos.html`)

Fallback images: `window.PURELINK_PLACEHOLDER_URL` est également défini par `purelink-api-config.js` pour garantir un visuel en cas d'échec de chargement.

Sécurité (production):
- Les scripts de test/diagnostic du backend sont bloqués par `.htaccess` (`diagnostic.php`, `test-direct.php`, `liste-bases.php`, `test-debug.php`, `test-connexion.php`).
- Recommandé: ne pas déployer ces fichiers sur le serveur final ou les supprimer après validation.

#### Script de nettoyage FTP (optionnel)

Pour supprimer automatiquement ces fichiers côté serveur via FTP/FTPS, un script est fourni:

```
powershell -ExecutionPolicy Bypass -File .\DEPLOY\cleanup-ftp-remove-diagnostics.ps1 -UseFtps
```

Le script vous demandera:
- Host FTP (ex: ftp.votre-domaine.fr)
- Username / Password FTP
- RemoteRoot (par défaut: /htdocs) — alternatives fréquentes: /public_html

Astuce: ajoutez `-WhatIf` pour simuler sans supprimer.

---

## 📚 Documentation

Toute la documentation est disponible dans le dossier `documentation/` :

| Fichier | Description |
|---------|-------------|
| `GUIDE-HEBERGEMENT.txt` | Guide complet pour publier le site |
| `GUIDE-COOKIES.txt` | Documentation système cookies RGPD |
| `BACKEND-EXPLICATIONS.txt` | Pourquoi pas de back-end nécessaire |
| `LISEZ-MOI-FORMULAIRES.txt` | Configuration des formulaires |
| `GUIDE-CONFIGURATION-FORMULAIRES.md` | Guide détaillé Formspree |

---

## 🎨 Conception

> **📐 Documentation complète de conception disponible dans [`conception/`](./conception/)**

Le dossier `conception/` contient toute la documentation UX/UI du projet, des premières esquisses aux maquettes finales.

### 🚀 Démarrage rapide

**Nouveau sur la conception ?** Suivez ce parcours :

1. **📑 [INDEX](./conception/INDEX.md)** - Navigation dans la documentation
2. **🚦 [Guide démarrage](./conception/GUIDE-DEMARRAGE.md)** - Guide pas à pas
3. **📖 [README Conception](./conception/README.md)** - Vue d'ensemble
4. **📝 [Templates](./conception/TEMPLATES-EXEMPLES.md)** - Templates prêts à l'emploi
5. **📋 [Liste fichiers](./conception/LISTE-FICHIERS.md)** - Tous les fichiers à créer

### 📐 Phase 1 : Zoning

**Objectif :** Définir les grandes zones fonctionnelles de chaque page

📁 **Dossier :** [`conception/zoning/`](./conception/zoning/)
📖 **Guide complet :** [zoning/README.md](./conception/zoning/README.md)
⏱️ **Durée :** 1-2 jours
🛠️ **Outils :** Papier, Excalidraw, Figma

**Livrables :**
- Zoning 9 pages principales
- Template page générique
- Document PDF de présentation

### 🖼️ Phase 2 : Wireframes

**Objectif :** Structurer le contenu et définir la navigation

📁 **Dossier :** [`conception/wireframes/`](./conception/wireframes/)
📖 **Guide complet :** [wireframes/README.md](./conception/wireframes/README.md)
⏱️ **Durée :** 3-5 jours
🛠️ **Outils :** Figma, Balsamiq, Adobe XD

**Livrables :**
- Wireframes desktop (9 pages)
- Wireframes mobile (9 pages)
- Composants UI
- Document PDF de présentation

### 🎨 Phase 3 : Mockups

**Objectif :** Créer le design visuel final

📁 **Dossier :** [`conception/mockups/`](./conception/mockups/)
📖 **Guide complet :** [mockups/README.md](./conception/mockups/README.md)
⏱️ **Durée :** 5-10 jours
🛠️ **Outils :** Figma (recommandé), Adobe XD, Sketch

**Livrables :**
- Mockups desktop haute-fidélité
- Mockups mobile
- Design system complet
- Assets graphiques exportés
- Guide de style CSS
- Document de présentation

### 🎨 Charte graphique PureLiink

**Couleurs principales :**
- 🔵 Bleu principal : `#4A90E2`
- 🟢 Vert accent : `#7ED321`
- 🟣 Violet accent : `#BD10E0`

**Tons naturels :**
- 🟤 Beige : `#F5F1E8`
- 🟤 Marron : `#8B6F47`
- 🟢 Vert naturel : `#A8D5BA`

**Typographie :**
- **Principale :** Poppins (Light, Regular, SemiBold, Bold)
- **Décorative :** Pacifico (Logo et accents)

**Icônes :**
- Font Awesome 6.0 (déjà intégré)

### 📚 Documentation conception

| Document | Description | Priorité |
|----------|-------------|----------|
| [INDEX.md](./conception/INDEX.md) | Navigation dans la doc | ⭐⭐⭐ |
| [README.md](./conception/README.md) | Vue d'ensemble | ⭐⭐⭐ |
| [GUIDE-DEMARRAGE.md](./conception/GUIDE-DEMARRAGE.md) | Guide pas à pas | ⭐⭐⭐ |
| [TEMPLATES-EXEMPLES.md](./conception/TEMPLATES-EXEMPLES.md) | Templates réutilisables | ⭐⭐ |
| [LISTE-FICHIERS.md](./conception/LISTE-FICHIERS.md) | Liste de tous les fichiers | ⭐⭐ |

### 🎯 Pages à concevoir

1. **Accueil** (`index.html`) ⭐
2. **Produits** (`produits.html`)
3. **Détail produit** (13 pages produits)
4. **À propos** (`a-propos.html`)
5. **Contact** (`contact.html`)
6. **Affiliation** (`affiliation.html`) ⭐
7. **Programmes** (`programmes.html`)
8. **Avis** (`avis.html`)
9. **Questionnaire** (`questionnaire.html`)
10. **FAQ** (`faq.html`)
11. **Pages légales** (3 pages)

### 📊 Progression conception

Consultez [LISTE-FICHIERS.md](./conception/LISTE-FICHIERS.md) pour suivre votre progression :
- ⬜ Zoning (10 fichiers)
- ⬜ Wireframes (25 fichiers)
- ⬜ Mockups (40 fichiers)

**Total :** ~75 fichiers de conception à créer
- ⚫ Texte : `#1f2937`
- ⚪ Fond : `#ffffff`

**Typographie :**
- Titres : Poppins (Google Fonts)
- Texte : Poppins (Google Fonts)
- Accents : Pacifico (Google Fonts)

**Logo :**
- Format : PNG avec fond transparent
- Versions : Bleu (header), Blanc (footer)

---

## 🧪 Tests

### Test des formulaires

Une page de test est disponible : `test-formulaires.html`

**Tests à effectuer :**
- ✅ Formulaire de contact
- ✅ Newsletter
- ✅ Formulaire d'affiliation
- ✅ Formulaire d'avis

### Test de compatibilité

**Navigateurs testés :**
- ✅ Chrome (recommandé)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

**Appareils testés :**
- ✅ Desktop (1920x1080, 1366x768)
- ✅ Tablette (iPad, Android)
- ✅ Mobile (iPhone, Android)

### Test de performance

**Outils recommandés :**
- Google PageSpeed Insights
- GTmetrix
- Lighthouse (Chrome DevTools)

---

## 🔒 Sécurité et conformité

### RGPD

✅ **Bannière de cookies** - Consentement obligatoire
✅ **Politique de confidentialité** - Page dédiée
✅ **Politique de cookies** - Liste complète des cookies
✅ **Droit de retrait** - Bouton flottant pour modifier
✅ **Données sécurisées** - HTTPS partout

### Cookies utilisés

**Essentiels (toujours actifs) :**
- `purelink_cookie_consent` - Préférences cookies (1 an)

**Analytiques (optionnels) :**
- `_ga`, `_gid`, `_gat` - Google Analytics

**Marketing (optionnels) :**
- `_fbp`, `_fbc` - Facebook Pixel

---

## 📊 Analytics et métriques

### Métriques à suivre

**Trafic :**
- Visiteurs uniques
- Pages vues
- Taux de rebond
- Durée moyenne de session

**Conversions :**
- Soumissions formulaire contact
- Inscriptions newsletter
- Demandes affiliation
- Avis publiés

**Sources :**
- Réseaux sociaux
- Recherche organique
- Référencement direct
- Campagnes email

---

## 🚧 Améliorations futures

### Court terme
- [ ] Ajouter plus de témoignages clients
- [ ] Créer une FAQ interactive
- [ ] Ajouter des vidéos de présentation
- [ ] Optimiser les images (WebP)

### Moyen terme
- [ ] Intégrer un chat en direct (Tawk.to)
- [ ] Ajouter Google Analytics
- [ ] Créer un blog
- [ ] Système de rendez-vous en ligne (Calendly)

### Long terme
- [ ] Espace membre
- [ ] Boutique en ligne
- [ ] Programme de fidélité
- [ ] Application mobile (PWA)

---

## 📞 Contact

**Ludivine & Olivier**
Partenaires PureLink

- 📧 Email : ludivine.olivier.pureliink@gmail.com
- 📱 Facebook : [Ludivine Olivier](https://www.facebook.com/people/Ludivine-Olivier/61573924110352/)
- 📷 Instagram : [@ludivine.olivier.pureliink](https://www.instagram.com/ludivine.olivier.pureliink/)
- 💼 LinkedIn : [Ludivine et Olivier](https://www.linkedin.com/in/ludivine-et-olivier)
- 🎵 TikTok : [@ludivine.olivier8](https://www.tiktok.com/@ludivine.olivier8)

---

## 👨‍💻 Développement

**Développeur :** [Votre nom]
**Date de création :** Octobre 2025
**Dernière mise à jour :** 22 octobre 2025
**Version :** 1.0.0

### Technologies stack

```
Frontend:
  - HTML5
  - CSS3 (Flexbox, Grid, Animations)
  - JavaScript ES6+

Services:
  - Formspree (Formulaires)
  - Netlify (Hébergement)
  - Google Fonts (Typographie)
  - Font Awesome (Icônes)

Conformité:
  - RGPD
  - Cookies avec consentement
  - Accessibilité WCAG 2.1
```

---

## 📄 Licence

© 2025 Ludivine & Olivier - PureLink. Tous droits réservés.

Ce projet est propriétaire. Toute utilisation, reproduction ou distribution sans autorisation est interdite.

---

## 🙏 Remerciements

- **PureLink** - Pour les produits de qualité
- **Nicolas & Sabrina Fleury** - Fondateurs de PureLink
- **Communauté PureLink** - Pour le soutien
- **Formspree** - Pour le service de formulaires
- **Netlify** - Pour l'hébergement gratuit

---

## 📝 Changelog

### Version 1.0.0 (22 octobre 2025)
- ✨ Lancement initial du site
- ✅ 25 pages HTML créées
- ✅ Design responsive complet
- ✅ Intégration Formspree
- ✅ Système cookies RGPD
- ✅ 13 pages produits détaillées
- ✅ Documentation complète

---

<div align="center">

**🌿 Fait avec ❤️ pour Ludivine & Olivier**

[⬆ Retour en haut](#-ludivine--olivier---site-web-purelink)

</div>
