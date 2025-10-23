# 🔧 Guide Backend - Gestion dynamique des produits

## 🎯 Problématique

**Besoin :** Ajouter/modifier des produits sans toucher au code HTML.

**Solution :** Mettre en place un système de gestion de contenu (CMS) ou une base de données.

---

## 📊 Comparatif des solutions

| Solution | Complexité | Coût | Temps setup | Backend requis | Recommandé pour |
|----------|------------|------|-------------|----------------|-----------------|
| **Fichier JSON** | ⭐ Très facile | Gratuit | 1h | Non | Sites statiques simples |
| **Google Sheets + API** | ⭐⭐ Facile | Gratuit | 2h | Non | Débutants, petits sites |
| **Netlify CMS** | ⭐⭐ Facile | Gratuit | 3h | Non | Sites statiques JAMstack |
| **Strapi (Headless CMS)** | ⭐⭐⭐ Moyen | Gratuit | 1 jour | Oui | Sites professionnels |
| **WordPress** | ⭐⭐ Facile | 6€/mois | 2h | Oui | Sites traditionnels |
| **Backend custom (Node.js)** | ⭐⭐⭐⭐⭐ Difficile | Variable | 1 semaine | Oui | Besoins spécifiques |

---

## ✅ Solution 1 : Fichier JSON (RECOMMANDÉ pour commencer)

### Avantages
- ✅ Très simple à mettre en place
- ✅ Gratuit
- ✅ Pas de backend nécessaire
- ✅ Fonctionne avec Netlify
- ✅ Peut être édité via interface (avec Netlify CMS)

### Inconvénients
- ❌ Nécessite redeploiement pour chaque modification
- ❌ Pas d'interface admin intégrée (sauf avec Netlify CMS)

### 📝 Mise en place

#### 1. Créer le fichier de données

**Fichier : `data/produits.json`**

```json
{
  "produits": [
    {
      "id": "cafe",
      "nom": "Café PureLiink",
      "categorie": "drinks",
      "categorie_label": "Drinks",
      "slug": "cafe",
      "description_courte": "Café bio enrichi pour booster votre énergie naturellement",
      "description_longue": "Notre café PureLiink combine les meilleurs grains arabica bio avec des extraits naturels de guarana et de ginseng. Parfait pour démarrer votre journée avec énergie et vitalité.",
      "image": "assets/produits/cafe.jpg",
      "benefits": [
        "Boost d'énergie naturel",
        "Concentration améliorée",
        "Antioxydants puissants",
        "100% bio et naturel"
      ],
      "ingredients": [
        "Café arabica bio",
        "Extrait de guarana",
        "Ginseng",
        "MCT oil"
      ],
      "prix": "29.90",
      "devise": "EUR",
      "stock": true,
      "featured": true,
      "date_ajout": "2024-01-15",
      "lien_achat": "https://pureliink.com/produits/cafe",
      "seo": {
        "title": "Café PureLiink - Café Bio Énergisant",
        "description": "Découvrez notre café bio enrichi en guarana et ginseng pour un boost d'énergie naturel",
        "keywords": "café bio, énergie naturelle, guarana, ginseng"
      }
    },
    {
      "id": "chocolat",
      "nom": "Chocolat PureLiink",
      "categorie": "drinks",
      "categorie_label": "Drinks",
      "slug": "chocolat",
      "description_courte": "Chocolat chaud gourmand et bien-être",
      "description_longue": "Un délicieux chocolat chaud qui allie plaisir et bienfaits. Riche en magnésium et cacao pur, il apaise et réconforte tout en prenant soin de vous.",
      "image": "assets/produits/chocolat.jpg",
      "benefits": [
        "Riche en magnésium",
        "Effet relaxant",
        "Antioxydants",
        "Goût intense et naturel"
      ],
      "ingredients": [
        "Cacao pur 70%",
        "Magnésium",
        "Stevia",
        "Lait d'amande"
      ],
      "prix": "27.90",
      "devise": "EUR",
      "stock": true,
      "featured": true,
      "date_ajout": "2024-01-15",
      "lien_achat": "https://pureliink.com/produits/chocolat",
      "seo": {
        "title": "Chocolat PureLiink - Chocolat Chaud Bien-être",
        "description": "Chocolat chaud riche en magnésium et cacao pur pour un moment de détente gourmand",
        "keywords": "chocolat bio, magnésium, cacao, bien-être"
      }
    },
    {
      "id": "omega-3",
      "nom": "Omega-3 Premium",
      "categorie": "nutrition",
      "categorie_label": "Nutrition",
      "slug": "omega-3",
      "description_courte": "Acides gras essentiels pour votre santé cardiovasculaire",
      "description_longue": "Nos Omega-3 Premium sont extraits d'huiles de poissons sauvages de qualité supérieure. Essentiels pour la santé du cœur, du cerveau et des yeux.",
      "image": "assets/produits/omega3.jpg",
      "benefits": [
        "Santé cardiovasculaire",
        "Fonction cérébrale",
        "Vision optimale",
        "Anti-inflammatoire"
      ],
      "ingredients": [
        "Huile de poisson sauvage",
        "EPA 500mg",
        "DHA 250mg",
        "Vitamine E"
      ],
      "prix": "34.90",
      "devise": "EUR",
      "stock": true,
      "featured": true,
      "date_ajout": "2024-02-01",
      "lien_achat": "https://pureliink.com/produits/omega-3",
      "seo": {
        "title": "Omega-3 Premium PureLiink - Santé Cardiovasculaire",
        "description": "Omega-3 de qualité supérieure pour votre cœur, cerveau et vision",
        "keywords": "omega-3, EPA, DHA, santé cardiovasculaire"
      }
    }
  ],
  "categories": [
    {
      "id": "nutrition",
      "nom": "Nutrition",
      "icon": "fa-apple-alt",
      "description": "Compléments nutritionnels essentiels"
    },
    {
      "id": "care",
      "nom": "Care",
      "icon": "fa-heart",
      "description": "Soins et bien-être quotidien"
    },
    {
      "id": "drinks",
      "nom": "Drinks",
      "icon": "fa-coffee",
      "description": "Boissons santé et énergie"
    },
    {
      "id": "elixirs",
      "nom": "Elixirs",
      "icon": "fa-magic",
      "description": "Formules concentrées pour des besoins spécifiques"
    }
  ]
}
```

#### 2. Créer le script JavaScript pour charger les produits

**Fichier : `js/produits-loader.js`**

```javascript
// Configuration
const PRODUITS_JSON_URL = '/data/produits.json';

// Classe pour gérer les produits
class ProduitsManager {
    constructor() {
        this.produits = [];
        this.categories = [];
    }

    // Charger les données depuis le JSON
    async chargerProduits() {
        try {
            const response = await fetch(PRODUITS_JSON_URL);
            if (!response.ok) {
                throw new Error('Erreur de chargement des produits');
            }
            const data = await response.json();
            this.produits = data.produits;
            this.categories = data.categories;
            return data;
        } catch (error) {
            console.error('Erreur:', error);
            return null;
        }
    }

    // Obtenir tous les produits
    getTousProduits() {
        return this.produits;
    }

    // Obtenir les produits en vedette
    getProduitsVedette() {
        return this.produits.filter(p => p.featured);
    }

    // Obtenir les produits par catégorie
    getProduitsParCategorie(categorieId) {
        return this.produits.filter(p => p.categorie === categorieId);
    }

    // Obtenir un produit par slug
    getProduitParSlug(slug) {
        return this.produits.find(p => p.slug === slug);
    }

    // Rechercher des produits
    rechercherProduits(query) {
        const q = query.toLowerCase();
        return this.produits.filter(p => 
            p.nom.toLowerCase().includes(q) ||
            p.description_courte.toLowerCase().includes(q) ||
            p.description_longue.toLowerCase().includes(q)
        );
    }

    // Générer HTML pour une carte produit
    genererCardProduit(produit) {
        return `
            <div class="product-card" data-category="${produit.categorie}">
                <div class="product-image">
                    <img src="${produit.image}" alt="${produit.nom}" loading="lazy">
                    ${produit.featured ? '<span class="badge-featured">⭐ Vedette</span>' : ''}
                    ${!produit.stock ? '<span class="badge-stock">Rupture</span>' : ''}
                </div>
                <div class="product-content">
                    <span class="product-category">${produit.categorie_label}</span>
                    <h3 class="product-title">${produit.nom}</h3>
                    <p class="product-description">${produit.description_courte}</p>
                    <div class="product-price">${produit.prix}€</div>
                    <a href="${produit.slug}.html" class="btn btn-primary">
                        <i class="fas fa-eye"></i> Découvrir
                    </a>
                </div>
            </div>
        `;
    }

    // Afficher les produits dans un conteneur
    afficherProduits(conteneurId, produits = null) {
        const conteneur = document.getElementById(conteneurId);
        if (!conteneur) return;

        const produitsAfficher = produits || this.produits;
        
        if (produitsAfficher.length === 0) {
            conteneur.innerHTML = '<p class="no-products">Aucun produit trouvé.</p>';
            return;
        }

        conteneur.innerHTML = produitsAfficher
            .map(p => this.genererCardProduit(p))
            .join('');
    }

    // Afficher les produits vedette sur la page d'accueil
    afficherProduitsVedette(conteneurId, limite = 4) {
        const produitsVedette = this.getProduitsVedette().slice(0, limite);
        this.afficherProduits(conteneurId, produitsVedette);
    }

    // Générer les filtres de catégories
    genererFiltresCategories(conteneurId) {
        const conteneur = document.getElementById(conteneurId);
        if (!conteneur) return;

        const filtresHTML = `
            <button class="filter-btn active" data-category="all">
                Tous les produits
            </button>
            ${this.categories.map(cat => `
                <button class="filter-btn" data-category="${cat.id}">
                    <i class="fas ${cat.icon}"></i> ${cat.nom}
                </button>
            `).join('')}
        `;

        conteneur.innerHTML = filtresHTML;

        // Ajouter les événements de filtrage
        this.ajouterEvenementsFiltrage();
    }

    // Ajouter les événements de filtrage
    ajouterEvenementsFiltrage() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Retirer la classe active de tous les boutons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Ajouter la classe active au bouton cliqué
                e.target.classList.add('active');

                const category = e.target.dataset.category;
                
                if (category === 'all') {
                    this.afficherProduits('produits-grid');
                } else {
                    const produitsFiltres = this.getProduitsParCategorie(category);
                    this.afficherProduits('produits-grid', produitsFiltres);
                }
            });
        });
    }

    // Ajouter la recherche
    ajouterRecherche(inputId, btnId) {
        const input = document.getElementById(inputId);
        const btn = document.getElementById(btnId);

        const effectuerRecherche = () => {
            const query = input.value.trim();
            if (query.length < 2) {
                this.afficherProduits('produits-grid');
                return;
            }
            const resultats = this.rechercherProduits(query);
            this.afficherProduits('produits-grid', resultats);
        };

        if (btn) {
            btn.addEventListener('click', effectuerRecherche);
        }

        if (input) {
            input.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    effectuerRecherche();
                }
            });
        }
    }
}

// Initialisation globale
const produitsManager = new ProduitsManager();

// Fonction d'initialisation pour la page d'accueil
async function initPageAccueil() {
    await produitsManager.chargerProduits();
    produitsManager.afficherProduitsVedette('produits-vedette-grid', 4);
}

// Fonction d'initialisation pour la page produits
async function initPageProduits() {
    await produitsManager.chargerProduits();
    produitsManager.afficherProduits('produits-grid');
    produitsManager.genererFiltresCategories('filtres-categories');
    produitsManager.ajouterRecherche('search-input', 'search-btn');
}

// Fonction d'initialisation pour une page produit détail
async function initPageProduitDetail() {
    const slug = getSlugFromURL();
    await produitsManager.chargerProduits();
    const produit = produitsManager.getProduitParSlug(slug);
    
    if (produit) {
        afficherDetailProduit(produit);
    } else {
        // Rediriger vers la page produits si le produit n'existe pas
        window.location.href = 'produits.html';
    }
}

// Fonction utilitaire pour obtenir le slug depuis l'URL
function getSlugFromURL() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    return filename.replace('.html', '');
}

// Fonction pour afficher le détail d'un produit
function afficherDetailProduit(produit) {
    // Mettre à jour le titre de la page
    document.title = produit.seo.title;
    
    // Mettre à jour les meta tags
    updateMetaTags(produit);
    
    // Afficher les informations du produit
    document.getElementById('produit-nom').textContent = produit.nom;
    document.getElementById('produit-categorie').textContent = produit.categorie_label;
    document.getElementById('produit-image').src = produit.image;
    document.getElementById('produit-image').alt = produit.nom;
    document.getElementById('produit-description').textContent = produit.description_longue;
    document.getElementById('produit-prix').textContent = `${produit.prix}€`;
    
    // Afficher les bénéfices
    const benefitsContainer = document.getElementById('produit-benefits');
    benefitsContainer.innerHTML = produit.benefits
        .map(b => `<li><i class="fas fa-check"></i> ${b}</li>`)
        .join('');
    
    // Afficher les ingrédients
    const ingredientsContainer = document.getElementById('produit-ingredients');
    ingredientsContainer.innerHTML = produit.ingredients
        .map(i => `<li>${i}</li>`)
        .join('');
    
    // Lien d'achat
    const btnAchat = document.getElementById('btn-achat');
    btnAchat.href = produit.lien_achat;
}

// Fonction pour mettre à jour les meta tags
function updateMetaTags(produit) {
    // Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = produit.seo.description;
    }
    
    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.content = produit.seo.keywords;
    }
}

// Export pour utilisation globale
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ProduitsManager, produitsManager };
}
```

#### 3. Modifier les pages HTML pour utiliser le JSON

**Dans `index.html` (Page d'accueil) :**

```html
<!-- Section Produits Vedette -->
<section class="products-section">
    <div class="container">
        <h2 class="section-title">Nos produits phares</h2>
        <div id="produits-vedette-grid" class="products-grid">
            <!-- Les produits seront chargés dynamiquement ici -->
            <div class="loading">Chargement des produits...</div>
        </div>
    </div>
</section>

<!-- Avant la fermeture du body -->
<script src="js/produits-loader.js"></script>
<script>
    // Initialiser les produits au chargement de la page
    document.addEventListener('DOMContentLoaded', initPageAccueil);
</script>
```

**Dans `produits.html` (Page catalogue) :**

```html
<section class="products-catalog">
    <div class="container">
        <h1>Nos Produits PureLiink</h1>
        
        <!-- Barre de recherche -->
        <div class="search-bar">
            <input type="text" id="search-input" placeholder="Rechercher un produit...">
            <button id="search-btn"><i class="fas fa-search"></i></button>
        </div>
        
        <!-- Filtres catégories -->
        <div id="filtres-categories" class="category-filters">
            <!-- Généré dynamiquement -->
        </div>
        
        <!-- Grille de produits -->
        <div id="produits-grid" class="products-grid">
            <div class="loading">Chargement des produits...</div>
        </div>
    </div>
</section>

<script src="js/produits-loader.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', initPageProduits);
</script>
```

#### 4. Template pour page produit détail

**Fichier : `template-produit.html`**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produit - Ludivine & Olivier</title>
    <meta name="description" content="">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="produit-template.css">
</head>
<body>
    <!-- Header (inclure votre header existant) -->
    
    <main class="produit-detail">
        <div class="container">
            <div class="produit-grid">
                <!-- Image -->
                <div class="produit-image-container">
                    <img id="produit-image" src="" alt="" class="produit-main-image">
                </div>
                
                <!-- Informations -->
                <div class="produit-info">
                    <span id="produit-categorie" class="produit-category"></span>
                    <h1 id="produit-nom" class="produit-title"></h1>
                    <p id="produit-description" class="produit-description"></p>
                    
                    <div class="produit-prix-container">
                        <span id="produit-prix" class="produit-prix"></span>
                    </div>
                    
                    <a id="btn-achat" href="#" target="_blank" class="btn btn-primary btn-large">
                        <i class="fas fa-shopping-cart"></i> Acheter sur PureLiink
                    </a>
                    
                    <div class="produit-benefits">
                        <h3>Bénéfices</h3>
                        <ul id="produit-benefits"></ul>
                    </div>
                    
                    <div class="produit-ingredients">
                        <h3>Ingrédients</h3>
                        <ul id="produit-ingredients"></ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
    <!-- Footer (inclure votre footer existant) -->
    
    <script src="js/produits-loader.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', initPageProduitDetail);
    </script>
</body>
</html>
```

### 📝 Comment ajouter un nouveau produit

1. Ouvrez `data/produits.json`
2. Ajoutez un nouvel objet dans le tableau `produits` :

```json
{
  "id": "nouveau-produit",
  "nom": "Nom du produit",
  "categorie": "nutrition",
  "categorie_label": "Nutrition",
  "slug": "nouveau-produit",
  "description_courte": "Description courte",
  "description_longue": "Description détaillée",
  "image": "assets/produits/nouveau-produit.jpg",
  "benefits": ["Bénéfice 1", "Bénéfice 2"],
  "ingredients": ["Ingrédient 1", "Ingrédient 2"],
  "prix": "29.90",
  "devise": "EUR",
  "stock": true,
  "featured": false,
  "date_ajout": "2025-10-22",
  "lien_achat": "https://pureliink.com/produits/nouveau-produit",
  "seo": {
    "title": "Titre SEO",
    "description": "Description SEO",
    "keywords": "mots, clés, seo"
  }
}
```

3. Créez la page HTML du produit : `nouveau-produit.html` (copier `template-produit.html`)
4. Sauvegardez et redéployez sur Netlify

---

## ✅ Solution 2 : Netlify CMS (Interface admin incluse)

### Avantages
- ✅ Interface d'administration visuelle
- ✅ Gratuit
- ✅ S'intègre parfaitement avec Netlify
- ✅ Authentification GitHub intégrée
- ✅ Prévisualisation en temps réel

### 📝 Mise en place

#### 1. Créer le fichier de configuration

**Fichier : `admin/config.yml`**

```yaml
backend:
  name: git-gateway
  branch: main

media_folder: "assets/produits"
public_folder: "/assets/produits"

collections:
  - name: "produits"
    label: "Produits"
    folder: "content/produits"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Nom du produit", name: "nom", widget: "string"}
      - {label: "Catégorie", name: "categorie", widget: "select", options: ["nutrition", "care", "drinks", "elixirs"]}
      - {label: "Description courte", name: "description_courte", widget: "text"}
      - {label: "Description longue", name: "description_longue", widget: "markdown"}
      - {label: "Image", name: "image", widget: "image"}
      - {label: "Prix", name: "prix", widget: "number"}
      - {label: "En stock", name: "stock", widget: "boolean", default: true}
      - {label: "Produit vedette", name: "featured", widget: "boolean", default: false}
      - {label: "Bénéfices", name: "benefits", widget: "list"}
      - {label: "Ingrédients", name: "ingredients", widget: "list"}
      - {label: "Lien d'achat", name: "lien_achat", widget: "string"}
```

#### 2. Créer la page d'administration

**Fichier : `admin/index.html`**

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin - Ludivine & Olivier</title>
</head>
<body>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>
```

#### 3. Activer Git Gateway sur Netlify

1. Allez sur votre dashboard Netlify
2. Site Settings > Identity > Enable Identity
3. Settings > Registration > Invite only
4. Services > Enable Git Gateway

#### 4. Accéder à l'admin

URL : `https://votre-site.netlify.app/admin/`

---

## ✅ Solution 3 : Strapi (Headless CMS professionnel)

### Avantages
- ✅ Interface d'administration complète
- ✅ API REST/GraphQL automatique
- ✅ Gestion des médias
- ✅ Gestion des utilisateurs
- ✅ Extensible

### Inconvénients
- ❌ Nécessite un serveur Node.js
- ❌ Plus complexe à configurer
- ❌ Coût d'hébergement si trafic élevé

### 📝 Mise en place rapide

```bash
# Installer Strapi
npx create-strapi-app backend-pureliink --quickstart

# Lancer Strapi
cd backend-pureliink
npm run develop
```

Interface admin : `http://localhost:1337/admin`

---

## 🎯 Recommandation

### Pour démarrer : Solution 1 (JSON)
- Simple et gratuit
- Parfait pour < 50 produits
- Facile à maintenir

### Pour évoluer : Netlify CMS (Solution 2)
- Interface admin gratuite
- Reste simple
- Idéal pour 50-200 produits

### Pour un site complexe : Strapi (Solution 3)
- Si > 200 produits
- Si plusieurs administrateurs
- Si besoins avancés (multilangue, workflows, etc.)

---

## 📞 Besoin d'aide ?

Choisissez une solution et je vous aide à la mettre en place étape par étape !

---

*Dernière mise à jour : 22 octobre 2025*
