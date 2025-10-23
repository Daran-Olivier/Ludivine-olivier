# Instructions Copilot - PureLink Ludivine & Olivier

## Vue d'ensemble de l'architecture

Il s'agit d'un **site vitrine double-stack** pour les produits de bien-être PureLink :

- **Frontend** : Site statique HTML/CSS/JS (déployable sur Netlify)
- **Backend** : API PHP/MySQL (`backend-php/`) pour la gestion dynamique des produits (hébergement O2Switch)
- **Produits** : Pages statiques + intégration API dynamique (pattern d'amélioration progressive)

### Pattern de conception critique : Amélioration progressive

Le site fonctionne avec **du contenu statique par défaut**, puis s'enrichit avec les données de l'API si disponibles :
```javascript
// Pattern utilisé dans assets/js/purelink-api-integration.js
fetch('/backend-php/api/products.php')
  .then(data => /* ajoute les produits API aux grilles statiques */)
  .catch(() => /* repli gracieux sur le contenu statique */)
```

## Structure du projet

```
racine/                  # Frontend (HTML/CSS/JS statique)
├── *.html              # 20+ pages (produits, légal, formulaires)
├── script.js           # Navigation globale et interactions
├── form-handler.js     # Intégration Formspree pour tous les formulaires
├── cookie-consent.js   # Bannière cookies conforme RGPD
├── assets/js/          # Scripts d'intégration API
└── backend-php/        # Backend PHP séparé
    ├── api/            # Endpoints REST (products.php, auth.php, hero-images.php)
    ├── admin/          # Interface dashboard (login.php, index.php)
    ├── config/         # Connexion base de données (MySQL via PDO)
    └── install/        # Script de configuration base de données
```

## Conventions clés

### 1. Pattern des trois scripts (toutes les pages HTML)
Chaque page charge ces scripts dans cet ordre :
```html
<script src="script.js"></script>          <!-- Navigation, menu mobile -->
<script src="form-handler.js"></script>    <!-- Formulaires newsletter -->
<script src="cookie-consent.js"></script>  <!-- Bannière RGPD -->
```

### 2. Mapping des catégories de produits
Le HTML statique utilise des noms différents de l'API :
```javascript
// assets/js/purelink-api-integration.js
const categoryMapping = {
  'drinks': 'gummies',      // HTML drinks → API gummies
  'nutrition': 'poudres',   // HTML nutrition → API poudres
  'care': 'complements',    // HTML care → API complements
  'elixirs': 'accessoires'  // HTML elixirs → API accessoires
};
```

### 3. Intégration des formulaires : Formspree
Tous les formulaires (contact, newsletter, affiliation, avis) utilisent des endpoints Formspree :
```javascript
// form-handler.js - Objet de configuration en haut du fichier
const FORMSPREE_CONFIG = {
  contact: 'https://formspree.io/f/mdkwrapg',
  newsletter: 'https://formspree.io/f/manpgqlj',
  affiliation: 'https://formspree.io/f/xqayvegl',
  review: 'https://formspree.io/f/xzzjldkk'
};
```

### 4. Format de réponse API
Le backend PHP retourne toujours :
```json
{
  "success": true,
  "products": [...],  // ou "product": {...} pour un seul produit
  "message": "..."
}
```

### 5. Authentification par sessions (PHP)
L'authentification admin utilise les sessions PHP (pas de JWT) :
```php
// backend-php/api/auth.php
session_start();
$_SESSION['admin_logged_in'] = true;
```

## Workflows de développement

### Développement Frontend
- **Pas d'étape de build** - HTML/CSS/JS pur
- **Prévisualisation live** : Utiliser l'extension VS Code Live Server OU ouvrir `index.html` directement
- **Test des formulaires** : Utiliser `test-formulaires.html` pour vérifier l'intégration Formspree

### Développement Backend (PHP)
- **Configuration** : Exécuter `install/setup.php` une fois pour créer les tables MySQL
- **Accès admin** : `backend-php/admin/login.php` (par défaut : admin/admin123)
- **Test API** : `test-produits.html` ou `curl` direct vers `/api/products.php`

### Tâches VS Code (`.vscode/tasks.json`)
**Note** : Les tâches référencent le dossier `backend/` (ancien backend Node.js - probablement inutilisé). Pour le backend PHP :
- Pas besoin d'automatisation de tâches
- Utiliser cPanel/FTP pour le déploiement sur O2Switch
- Voir `backend-php/GUIDE-O2SWITCH.md` pour les étapes de déploiement

## Stratégie de déploiement

### Frontend → Netlify (Recommandé)
1. Glisser-déposer le dossier racine sur Netlify
2. Le site est en ligne immédiatement
3. Les formulaires fonctionnent via Formspree (pas besoin de backend)
4. Voir `GUIDE-HEBERGEMENT.txt` pour les étapes détaillées

### Backend → O2Switch
1. Upload `backend-php/` vers `/public_html/backend-php/`
2. Créer une base de données MySQL via cPanel
3. Éditer `config/database.php` avec les identifiants
4. Exécuter `install/setup.php` pour créer les tables
5. Sécuriser/supprimer le dossier `install/` après installation
6. Voir `backend-php/DEMARRAGE-RAPIDE.md` pour un guide de 5 minutes

### Critique : Configuration CORS
Le frontend (Netlify) appelle le backend (O2Switch) - assurer les en-têtes CORS en PHP :
```php
// backend-php/api/hero-images.php (exemple avec CORS)
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
```

## Pièges courants

1. **Ne pas casser l'amélioration progressive** : Le contenu statique doit fonctionner sans le backend
2. **Structure HTML des cartes produit** : Doit correspondre exactement pour l'intégration API (voir `produits.html` `.product-card`)
3. **Chemins des images** : Utiliser `/backend-php/assets/placeholder.jpg` en fallback quand les images API échouent
4. **Cookie consent localStorage** : Utilise à la fois les cookies ET localStorage comme backup (lignes 20-23 dans `cookie-consent.js`)
5. **Organisation des fichiers** : Le dossier racine devient encombré - se référer à `conception/LISTE-FICHIERS.md` pour l'inventaire

## Référence rapide de la documentation

- **Démarrage** : `README.md` (vue d'ensemble du projet)
- **Déploiement** : `GUIDE-HEBERGEMENT.txt` (étapes Netlify/O2Switch)
- **Configuration formulaires** : `GUIDE-CONFIGURATION-FORMULAIRES.md` (intégration Formspree)
- **API Backend** : `backend-php/README.md` (documentation API PHP)
- **Inventaire fichiers** : `conception/LISTE-FICHIERS.md` (75+ fichiers listés)
- **Conception projet** : `conception/INDEX.md` (documents du processus de design)

## Lors de modifications

### Ajouter une nouvelle page produit
1. Copier la structure de `produit-template.css`
2. Ajouter une carte dans `produits.html` avec `data-product="id-unique"`
3. Suivre la nomenclature : `{nom-produit}.html` (minuscules, tirets)
4. Inclure le pattern des trois scripts dans le footer

### Ajouter un nouveau formulaire
1. Ajouter l'endpoint à `FORMSPREE_CONFIG` dans `form-handler.js`
2. Utiliser les patterns de formulaires existants (voir `contact.html` pour référence)
3. Tester avec `test-formulaires.html`

### Modifier l'API Backend
1. Éditer dans `backend-php/api/products.php` (ou l'endpoint concerné)
2. Maintenir le format de réponse `{success, data, message}`
3. Vérifier l'authentification avec `isLoggedIn()` pour les routes protégées
4. Tester avec le dashboard admin ou des appels API directs

### Mettre à jour les styles
- **Global** : `styles.css` (navigation, footer, général)
- **Page d'accueil** : `index.css` (section hero, spécifique à index.html)
- **Produits** : `produit-template.css` (pages détails produits)
- **Formulaires** : Inline dans les pages de formulaires (contact.css, affiliation.css, etc.)
