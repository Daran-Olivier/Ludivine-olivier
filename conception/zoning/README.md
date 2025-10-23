# 🗺️ Zoning - Ludivine & Olivier

Le zoning (ou découpage fonctionnel) définit les grandes zones fonctionnelles de chaque page et leur agencement. C'est la première étape de conception, avant les wireframes.

## 🎯 Objectif

Le zoning permet de :
- Identifier les zones fonctionnelles principales
- Définir l'architecture de l'information
- Établir la hiérarchie des contenus
- Planifier la disposition générale

## 📁 Contenu de ce dossier

Ajoutez vos documents de zoning ici :

### Pages principales
- `zoning-accueil.png` - Découpage page d'accueil
- `zoning-produits.png` - Découpage page produits
- `zoning-produit-detail.png` - Découpage page détail produit
- `zoning-contact.png` - Découpage page contact
- `zoning-affiliation.png` - Découpage page affiliation
- `zoning-avis.png` - Découpage page avis

### Templates génériques
- `zoning-template-page.png` - Template page standard
- `zoning-template-landing.png` - Template page d'atterrissage

## 🧩 Zones fonctionnelles type

### Structure standard d'une page

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 1. HEADER / EN-TÊTE                   ┃ ← Navigation principale
┃    - Logo                             ┃
┃    - Menu navigation                  ┃
┃    - Bouton CTA                       ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ 2. HERO / BANNIÈRE                    ┃ ← Zone d'accroche
┃    - Titre principal                  ┃
┃    - Sous-titre                       ┃
┃    - CTA principal                    ┃
┃    - Image/Visuel                     ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ 3. CONTENU PRINCIPAL                  ┃ ← Zone de contenu
┃                                       ┃
┃    ┌─────────┐ ┌─────────┐ ┌─────────┐
┃    │ Zone A  │ │ Zone B  │ │ Zone C  │ ← Sections
┃    │         │ │         │ │         │
┃    └─────────┘ └─────────┘ └─────────┘
┃                                       ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ 4. ZONE SECONDAIRE (optionnel)        ┃ ← Contenu additionnel
┃    - Témoignages                      ┃
┃    - Partenaires                      ┃
┃    - Call-to-action                   ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ 5. FOOTER / PIED DE PAGE              ┃ ← Informations
┃    - Liens utiles                     ┃
┃    - Newsletter                       ┃
┃    - Réseaux sociaux                  ┃
┃    - Mentions légales                 ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

## 📋 Exemple : Zoning page d'accueil

### Zone 1 : Header (fixe)
- **Fonction** : Navigation, branding
- **Éléments** : Logo PureLink, Menu (Accueil, Produits, Programmes, Affiliation, Avis, Contact)
- **Hauteur** : ~80px

### Zone 2 : Hero section
- **Fonction** : Accroche visiteur
- **Éléments** : 
  - Titre H1 "Partenaires PureLink - Ludivine & Olivier"
  - Sous-titre descriptif
  - Bouton "Découvrir nos produits"
  - Image de fond ou visuel produits
- **Hauteur** : ~500px (desktop) / ~400px (mobile)

### Zone 3 : Présentation
- **Fonction** : Expliquer qui nous sommes
- **Éléments** : Texte + photo
- **Layout** : 2 colonnes (desktop) / 1 colonne (mobile)

### Zone 4 : Produits vedettes
- **Fonction** : Mise en avant produits phares
- **Éléments** : Grille de 3 cartes produits
- **Layout** : 3 colonnes (desktop) / 1 colonne (mobile)

### Zone 5 : Programmes PureLink
- **Fonction** : Présenter les programmes
- **Éléments** : Liste avec icônes + descriptions
- **Layout** : 2 colonnes (desktop) / 1 colonne (mobile)

### Zone 6 : Témoignages
- **Fonction** : Preuve sociale
- **Éléments** : Carrousel de 3 témoignages
- **Layout** : Carrousel horizontal

### Zone 7 : Newsletter CTA
- **Fonction** : Capturer emails
- **Éléments** : Formulaire newsletter + texte incitatif
- **Layout** : Centré, pleine largeur

### Zone 8 : Footer
- **Fonction** : Navigation secondaire, informations
- **Éléments** : 
  - Colonne 1 : À propos
  - Colonne 2 : Liens rapides
  - Colonne 3 : Contact
  - Colonne 4 : Réseaux sociaux
- **Layout** : 4 colonnes (desktop) / empilé (mobile)

## 🛠️ Outils pour créer le zoning

### Simples et rapides
- **Papier + stylo** - La méthode classique ✏️
- **PowerPoint / Google Slides** - Formes et rectangles
- **Excalidraw** - https://excalidraw.com
- **Draw.io** - https://app.diagrams.net
- **Wireframe.cc** - https://wireframe.cc

### Professionnels
- **Figma** - https://www.figma.com
- **Balsamiq** - https://balsamiq.com
- **Adobe XD** - Suite Adobe

## 🎨 Conventions de notation

### Numérotation des zones
```
[1] Header
[2] Hero
[3] Contenu principal
  [3.1] Section A
  [3.2] Section B
  [3.3] Section C
[4] Zone secondaire
[5] Footer
```

### Annotations
- **Fonction** : À quoi sert cette zone ?
- **Contenu** : Quels éléments contient-elle ?
- **Priorité** : Important / Secondaire / Optionnel
- **Responsive** : Comportement mobile/desktop

### Code couleur (optionnel)
- 🔴 Zone critique (CTA principal)
- 🟡 Zone importante (contenu principal)
- 🟢 Zone secondaire (informations additionnelles)
- ⚪ Zone système (header, footer)

## 📱 Responsive zoning

Créez des zonings différents pour :

### Desktop (1440px+)
- Layout multi-colonnes
- Toutes les zones visibles
- Navigation horizontale

### Tablette (768px-1023px)
- Layout 2 colonnes max
- Certaines zones réorganisées
- Navigation simplifiée

### Mobile (320px-767px)
- Layout 1 colonne
- Zones empilées verticalement
- Navigation hamburger
- Priorisation du contenu

## ✅ Checklist zoning

Chaque document de zoning doit définir :
- [ ] Toutes les zones fonctionnelles
- [ ] Hiérarchie des zones (numérotation)
- [ ] Fonction de chaque zone
- [ ] Contenus approximatifs
- [ ] Proportions/dimensions relatives
- [ ] Comportement responsive
- [ ] Zones de conversion (CTA)

## 🔗 Processus de conception

### 1️⃣ Zoning (ce dossier)
Définir les grandes zones fonctionnelles
→ Validation de l'architecture

### 2️⃣ Wireframes (../wireframes/)
Détailler la structure et le contenu
→ Validation de l'organisation

### 3️⃣ Mockups (../mockups/)
Appliquer le design visuel
→ Validation graphique

### 4️⃣ Développement
Intégration HTML/CSS/JS
→ Site final

## 💡 Bonnes pratiques

### Simplicité
- Commencez simple, affinez ensuite
- 5-8 zones maximum par page
- Une fonction = une zone

### Cohérence
- Gardez le header/footer identiques sur toutes les pages
- Respectez une grille de mise en page
- Utilisez les mêmes largeurs de conteneur

### Priorisation
- Zone la plus importante en haut (hero)
- CTA visibles sans scroll si possible
- Informations critiques avant le "fold" (première vue)

### Mobile First
- Pensez d'abord à la version mobile
- Adaptez ensuite pour tablette et desktop
- Priorisez le contenu essentiel

## 📊 Matrice des zones par page

| Page | Header | Hero | Contenu | CTA | Footer |
|------|--------|------|---------|-----|--------|
| Accueil | ✅ | ✅ | Présentation + Produits | Newsletter | ✅ |
| Produits | ✅ | Recherche | Grille produits | - | ✅ |
| Contact | ✅ | Simple | Formulaire | Envoyer | ✅ |
| Affiliation | ✅ | Formulaire | Avantages | S'inscrire | ✅ |
| Avis | ✅ | - | Liste avis + Form | Soumettre | ✅ |

---

## 🎯 Zonings détaillés par page

### Page d'accueil - Analyse complète

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ZONE 1 : HEADER                                ┃ 80px
┃ Fonction : Navigation + Branding               ┃
┃ Priorité : Critique ⚠️                         ┃
┃ Contenu :                                      ┃
┃  • Logo PureLiink (gauche)                     ┃
┃  • Menu navigation horizontal (centre)         ┃
┃  • Bouton CTA "Contact" (droite)               ┃
┃ Responsive : Devient hamburger menu            ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 2 : HERO SECTION                          ┃ 600px
┃ Fonction : Accroche + Conversion               ┃
┃ Priorité : Critique ⚠️                         ┃
┃ Contenu :                                      ┃
┃  • H1 : "Bienvenue dans l'univers..."          ┃
┃  • Sous-titre descriptif (2-3 lignes)          ┃
┃  • 2 CTA : "Prendre RDV" + "Rejoins-nous"      ┃
┃  • Image/Photo Ludivine & Olivier (droite)     ┃
┃  • Particules animées (fond)                   ┃
┃ Responsive : Image passe en dessous            ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 3 : PRÉSENTATION                          ┃ 400px
┃ Fonction : Qui sommes-nous                     ┃
┃ Priorité : Importante 🟡                       ┃
┃ Layout : 2 colonnes (40% / 60%)                ┃
┃ Contenu :                                      ┃
┃  • Photo équipe (gauche)                       ┃
┃  • Texte présentation (droite)                 ┃
┃  • Valeurs PureLiink                           ┃
┃ Responsive : 1 colonne empilée                 ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 4 : PRODUITS PHARES                       ┃ 500px
┃ Fonction : Showcase produits                   ┃
┃ Priorité : Importante 🟡                       ┃
┃ Layout : Grille 4 colonnes                     ┃
┃ Contenu :                                      ┃
┃  • H2 : "Nos produits phares"                  ┃
┃  • 4 cards produits :                          ┃
┃    - Image produit                             ┃
┃    - Nom                                       ┃
┃    - Catégorie                                 ┃
┃    - Bouton "Découvrir"                        ┃
┃ Responsive : 2 colonnes puis 1 colonne         ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 5 : PROGRAMMES                            ┃ 350px
┃ Fonction : Téléchargement programmes           ┃
┃ Priorité : Moyenne 🟢                          ┃
┃ Layout : 2 colonnes                            ┃
┃ Contenu :                                      ┃
┃  • H2 : "Programmes PureLiink"                 ┃
┃  • Cards programmes avec :                     ┃
┃    - Icône                                     ┃
┃    - Titre                                     ┃
┃    - Description courte                        ┃
┃    - Bouton "Télécharger"                      ┃
┃ Responsive : 1 colonne empilée                 ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 6 : TÉMOIGNAGES                           ┃ 300px
┃ Fonction : Preuve sociale                      ┃
┃ Priorité : Moyenne 🟢                          ┃
┃ Layout : Grille 3 colonnes                     ┃
┃ Contenu :                                      ┃
┃  • H2 : "Ils nous font confiance"              ┃
┃  • 3 témoignages :                             ┃
┃    - Note étoiles                              ┃
┃    - Citation                                  ┃
┃    - Nom client                                ┃
┃ Responsive : Carrousel 1 item                  ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 7 : NEWSLETTER CTA                        ┃ 200px
┃ Fonction : Capture emails                      ┃
┃ Priorité : Importante 🟡                       ┃
┃ Layout : Centré, pleine largeur                ┃
┃ Contenu :                                      ┃
┃  • Titre accrocheur                            ┃
┃  • Champ email                                 ┃
┃  • Bouton "S'inscrire"                         ┃
┃  • Message RGPD                                ┃
┃ Responsive : Identique                         ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 8 : FOOTER                                ┃ 300px
┃ Fonction : Navigation secondaire + infos       ┃
┃ Priorité : Standard ⚪                         ┃
┃ Layout : 4 colonnes égales                     ┃
┃ Contenu :                                      ┃
┃  • Col 1 : Branding + réseaux sociaux          ┃
┃  • Col 2 : Navigation                          ┃
┃  • Col 3 : Support                             ┃
┃  • Col 4 : Newsletter                          ┃
┃  • Bottom : Copyright                          ┃
┃ Responsive : Empilé 1 colonne                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

Total hauteur estimée : ~2730px (desktop)
```

### Page Produits - Zoning

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ZONE 1 : HEADER (identique accueil)            ┃ 80px
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 2 : PAGE TITLE + FILTRES                  ┃ 150px
┃ Fonction : Orientation + recherche             ┃
┃ Contenu :                                      ┃
┃  • H1 : "Nos Produits"                         ┃
┃  • Barre de recherche                          ┃
┃  • Filtres : Catégorie, Prix                   ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 3 : ONGLETS CATÉGORIES                    ┃ 60px
┃ Fonction : Navigation catégories               ┃
┃ Layout : Horizontal tabs                       ┃
┃ Contenu :                                      ┃
┃  • Nutrition | Care | Drinks | Elixirs         ┃
┃ Responsive : Scroll horizontal                 ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 4 : GRILLE PRODUITS                       ┃ Variable
┃ Fonction : Catalogue produits                  ┃
┃ Layout : Grille 3 colonnes (desktop)           ┃
┃ Contenu :                                      ┃
┃  • Cards produits répétées :                   ┃
┃    - Image                                     ┃
┃    - Badge catégorie                           ┃
┃    - Nom produit                               ┃
┃    - Description courte                        ┃
┃    - Bouton "Voir plus"                        ┃
┃ Responsive : 2 col → 1 col                     ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 5 : PAGINATION / LOAD MORE                ┃ 80px
┃ Fonction : Charger plus de produits            ┃
┃ Contenu : Bouton "Charger plus" ou pagination  ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 6 : FOOTER (identique)                    ┃ 300px
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### Page Contact - Zoning

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ZONE 1 : HEADER (identique)                    ┃ 80px
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 2 : HERO SIMPLE                           ┃ 200px
┃ Fonction : Titre de page                       ┃
┃ Contenu :                                      ┃
┃  • H1 : "Contactez-nous"                       ┃
┃  • Sous-titre encourageant                     ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 3 : CONTENU PRINCIPAL                     ┃ 600px
┃ Layout : 2 colonnes (60% / 40%)                ┃
┃                                                ┃
┃ ┌─────────────────┐ ┌─────────────────────┐   ┃
┃ │ COL A           │ │ COL B               │   ┃
┃ │ FORMULAIRE      │ │ INFORMATIONS        │   ┃
┃ │                 │ │                     │   ┃
┃ │ • Nom           │ │ • Email contact     │   ┃
┃ │ • Email         │ │ • Téléphone         │   ┃
┃ │ • Sujet         │ │ • Adresse           │   ┃
┃ │ • Message       │ │ • Carte Google      │   ┃
┃ │ • [Envoyer]     │ │ • Horaires          │   ┃
┃ └─────────────────┘ │ • Réseaux sociaux   │   ┃
┃                     └─────────────────────┘   ┃
┃ Responsive : Empilé (formulaire en haut)       ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 4 : FAQ RAPIDE (optionnel)                ┃ 300px
┃ Fonction : Réponses instantanées               ┃
┃ Layout : Accordéon                             ┃
┃ Contenu : 5-6 questions fréquentes             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 5 : FOOTER (identique)                    ┃ 300px
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### Page Affiliation - Zoning

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ZONE 1 : HEADER (identique)                    ┃ 80px
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 2 : HERO AFFILIATION                      ┃ 400px
┃ Fonction : Accroche recrutement                ┃
┃ Priorité : Critique ⚠️                         ┃
┃ Contenu :                                      ┃
┃  • H1 : "Rejoignez notre équipe"               ┃
┃  • Proposition de valeur                       ┃
┃  • Bouton CTA "S'inscrire"                     ┃
┃  • Visuel motivant                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 3 : AVANTAGES                             ┃ 350px
┃ Fonction : Convaincre                          ┃
┃ Layout : Grille 3 colonnes                     ┃
┃ Contenu :                                      ┃
┃  • H2 : "Pourquoi nous rejoindre ?"            ┃
┃  • 3 blocs :                                   ┃
┃    - Icône                                     ┃
┃    - Titre avantage                            ┃
┃    - Description                               ┃
┃ Responsive : 1 colonne empilée                 ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 4 : COMMENT ÇA MARCHE                     ┃ 400px
┃ Fonction : Expliquer le processus              ┃
┃ Layout : Vertical timeline                     ┃
┃ Contenu :                                      ┃
┃  • H2 : "Comment ça marche ?"                  ┃
┃  • 3-4 étapes :                                ┃
┃    - Numéro                                    ┃
┃    - Titre étape                               ┃
┃    - Description                               ┃
┃ Responsive : Identique                         ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 5 : FORMULAIRE INSCRIPTION                ┃ 500px
┃ Fonction : Conversion                          ┃
┃ Priorité : Critique ⚠️                         ┃
┃ Layout : Centré, max-width 600px               ┃
┃ Contenu :                                      ┃
┃  • H2 : "Inscription"                          ┃
┃  • Formulaire :                                ┃
┃    - Prénom / Nom                              ┃
┃    - Email                                     ┃
┃    - Téléphone                                 ┃
┃    - Message motivation                        ┃
┃    - Checkbox CGU                              ┃
┃    - Bouton "S'inscrire"                       ┃
┃ Responsive : Identique                         ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 6 : TÉMOIGNAGES PARTENAIRES               ┃ 300px
┃ Fonction : Preuve sociale                      ┃
┃ Layout : Carrousel                             ┃
┃ Contenu : Témoignages de partenaires existants ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 7 : FOOTER (identique)                    ┃ 300px
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

## 📐 Système de grille

### Grille 12 colonnes

```
Desktop (1200px container):
┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐
│1│2│3│4│5│6│7│8│9│10│11│12│
└─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘

Exemples d'utilisation :
• 1 colonne  = 12/12 (pleine largeur)
• 2 colonnes = 6/12 + 6/12
• 3 colonnes = 4/12 + 4/12 + 4/12
• 2/3 - 1/3  = 8/12 + 4/12
```

### Largeurs de conteneur

```
.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
}
```

## 📊 Tableau comparatif des pages

| Page | Hero | Formulaire | Grille | CTA Principal | Complexité |
|------|------|------------|--------|---------------|------------|
| Accueil | ✅ Fort | ❌ | ✅ Produits | Prendre RDV | Haute |
| Produits | 🔍 Recherche | ❌ | ✅ Catalogue | - | Moyenne |
| Contact | Simple | ✅ | ❌ | Envoyer | Faible |
| Affiliation | ✅ Fort | ✅ | ✅ Avantages | S'inscrire | Haute |
| Programmes | Simple | ❌ | ✅ Programmes | Télécharger | Moyenne |
| Avis | Simple | ✅ | ✅ Témoignages | Soumettre | Moyenne |
| À propos | ✅ Moyen | ❌ | ❌ | Contact | Faible |

## 🎯 Zones de conversion (CTA)

### Hiérarchie des CTA

#### CTA Primaire (Haute priorité)
- Position : Above the fold (visible sans scroll)
- Couleur : Primaire (bleu PureLink)
- Taille : Grande, visible
- Exemples : "Prendre RDV", "S'inscrire", "Commander"

#### CTA Secondaire (Moyenne priorité)
- Position : Dans le contenu
- Couleur : Secondaire ou outline
- Taille : Moyenne
- Exemples : "En savoir plus", "Découvrir", "Voir détails"

#### CTA Tertiaire (Basse priorité)
- Position : Footer, liens texte
- Style : Lien simple
- Exemples : "Lire la suite", liens navigation

### Placement stratégique

```
┌────────────────────────────┐
│ Header        [CTA Login] │ ← Tertiaire
├────────────────────────────┤
│ Hero                       │
│ [CTA PRIMAIRE] [Secondaire]│ ← Au-dessus du fold
├────────────────────────────┤
│ Contenu...                 │
│ [CTA Secondaire]           │
├────────────────────────────┤
│ Contenu...                 │
│ [CTA Secondaire]           │
├────────────────────────────┤
│ Newsletter                 │
│ [CTA PRIMAIRE]             │ ← Avant footer
├────────────────────────────┤
│ Footer [liens]             │ ← Tertiaires
└────────────────────────────┘
```

## 🔄 Flux utilisateur (User Flow)

### Parcours d'achat produit

```
Accueil
   ↓
[Produits phares]
   ↓
Page Produits → Filtres → Recherche
   ↓
Détail Produit
   ↓
[Commander] → Site PureLiink
```

### Parcours affiliation

```
Accueil
   ↓
[Rejoins-nous]
   ↓
Page Affiliation
   ↓
Lire avantages
   ↓
Formulaire inscription
   ↓
[Soumettre]
   ↓
Confirmation → Email reçu
```

### Parcours contact/RDV

```
N'importe quelle page
   ↓
[Prendre RDV] ou [Contact]
   ↓
Page Contact
   ↓
Formulaire
   ↓
[Envoyer]
   ↓
Confirmation → Email envoyé
```

## 📱 Stratégie Mobile First

### Priorisation du contenu mobile

#### À garder (essentiel)
✅ Logo
✅ Menu hamburger
✅ Titre principal
✅ CTA principal
✅ Contenu principal
✅ Formulaires
✅ Footer simplifié

#### À adapter
🔄 Navigation → Hamburger menu
🔄 Grilles 3-4 col → 1 colonne
🔄 Sidebar → Empilée
🔄 Images grandes → Optimisées
🔄 Footer 4 col → Empilé

#### À cacher (optionnel)
❌ Images décoratives
❌ Animations lourdes
❌ Contenus secondaires
❌ Sidebars

### Breakpoints mobile

```
/* Petit mobile */
@media (max-width: 375px)

/* Mobile standard */
@media (max-width: 768px)

/* Tablette portrait */
@media (min-width: 768px) and (max-width: 1023px)

/* Desktop */
@media (min-width: 1024px)
```

## 🎨 Zones par type

### Zones de contenu
- Largeur maximale : 800px (lisibilité)
- Padding latéral : 20-40px
- Line-height texte : 1.6-1.8

### Zones de grille (produits, cards)
- Gap entre items : 20-30px
- Aspect ratio cards : 1:1 ou 4:3
- Hover effects prévus

### Zones de formulaire
- Label au-dessus du champ
- Espacement champs : 20px
- Messages erreur en rouge sous le champ
- Bouton submit pleine largeur (mobile)

## ✅ Validation du zoning

### Avant de passer aux wireframes :

- [ ] Toutes les zones sont identifiées
- [ ] Fonctions de chaque zone définies
- [ ] Priorités établies (critique/important/moyen)
- [ ] Responsive pensé pour chaque zone
- [ ] CTAs positionnés stratégiquement
- [ ] Hiérarchie de l'information claire
- [ ] Parcours utilisateur fluide
- [ ] Approuvé par l'équipe/client

## 🚀 Prochaines étapes

Après validation du zoning :

1. **Wireframes** (../wireframes/)
   - Détailler chaque zone
   - Placer les éléments précis
   - Définir les espacements

2. **Mockups** (../mockups/)
   - Appliquer la charte graphique
   - Choisir images et couleurs
   - Finaliser le design

3. **Prototype**
   - Ajouter interactions
   - Tester avec utilisateurs
   - Valider l'UX

4. **Développement**
   - Intégrer HTML/CSS/JS
   - Rendre responsive
   - Optimiser performance

---

📝 **Note :** Le zoning est un document évolutif. Il peut être modifié suite aux retours utilisateurs ou contraintes techniques.

🎯 **Objectif :** Avoir une vision claire de l'architecture avant de passer au wireframing détaillé.

💡 **Conseil :** Imprimez vos zonings et annotez-les lors de réunions. La version papier facilite la collaboration et les échanges d'idées !
