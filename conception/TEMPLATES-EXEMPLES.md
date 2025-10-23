# 📝 Templates & Exemples - Ludivine & Olivier

Ce document contient des templates réutilisables et des exemples concrets pour accélérer votre travail de conception.

## 📐 Template Zoning (ASCII Art)

### Template vierge à copier

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ZONE 1 : [NOM DE LA ZONE]                      ┃ [hauteur]
┃ Fonction : [À quoi sert cette zone]            ┃
┃ Priorité : [Critique ⚠️ / Important 🟡 / Moyen 🟢 / Standard ⚪] 
┃ Contenu :                                      ┃
┃  • [Élément 1]                                 ┃
┃  • [Élément 2]                                 ┃
┃  • [Élément 3]                                 ┃
┃ Responsive : [Comportement mobile]             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 2 : [NOM DE LA ZONE]                      ┃ [hauteur]
┃ Fonction : [À quoi sert cette zone]            ┃
┃ Priorité : [Critique ⚠️ / Important 🟡 / Moyen 🟢 / Standard ⚪]
┃ Layout : [1 col / 2 cols / 3 cols / grille]    ┃
┃ Contenu :                                      ┃
┃  • [Élément 1]                                 ┃
┃  • [Élément 2]                                 ┃
┃ Responsive : [Comportement mobile]             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ZONE 3 : FOOTER                                ┃ 300px
┃ Fonction : Navigation secondaire + infos       ┃
┃ Priorité : Standard ⚪                         ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

## 🖼️ Template Wireframe (ASCII Art)

### Page simple

```
┌─────────────────────────────────────────────────────────┐
│ [LOGO]      Menu1  Menu2  Menu3  Menu4      [CTA BTN]   │ Header
├─────────────────────────────────────────────────────────┤
│                                                         │
│  [H1 Titre principal de la page]                       │
│                                                         │
│  [Sous-titre ou description]                           │ Hero
│                                                         │
│  [Bouton CTA]                                          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  [H2 Section Title]                                     │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │  [Image]    │  │  [Image]    │  │  [Image]    │    │
│  │             │  │             │  │             │    │
│  │  Titre 1    │  │  Titre 2    │  │  Titre 3    │    │
│  │  Texte...   │  │  Texte...   │  │  Texte...   │    │ Contenu
│  │  [Bouton]   │  │  [Bouton]   │  │  [Bouton]   │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  [LOGO]  Navigation   Support    Newsletter   Social    │
│          - Link 1     - FAQ      [Email____] [Submit]   │ Footer
│          - Link 2     - Help                 [FB][IG]   │
│          © 2025 Copyright                    [LI][TT]   │
└─────────────────────────────────────────────────────────┘
```

### Formulaire

```
┌──────────────────────────────────────┐
│  [H2 Titre du formulaire]            │
│                                      │
│  Nom *                               │
│  [_____________________________]     │
│                                      │
│  Email *                             │
│  [_____________________________]     │
│                                      │
│  Message                             │
│  [_____________________________ ]    │
│  [_____________________________ ]    │
│  [_____________________________ ]    │
│                                      │
│  ☐ J'accepte les conditions          │
│                                      │
│  [Envoyer le message]                │
│                                      │
│  * Champs obligatoires               │
└──────────────────────────────────────┘
```

### Grille produits

```
┌────────────────────────────────────────────────────┐
│  [H2 Nos Produits]                                 │
│                                                    │
│  [Recherche: ________________] [🔍]                │
│  Filtres: [Catégorie ▼] [Prix ▼]                  │
├────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ [Image]  │  │ [Image]  │  │ [Image]  │        │
│  │          │  │          │  │          │        │
│  │ Produit 1│  │ Produit 2│  │ Produit 3│        │
│  │ Catégorie│  │ Catégorie│  │ Catégorie│        │
│  │ Texte... │  │ Texte... │  │ Texte... │        │
│  │ [Voir+]  │  │ [Voir+]  │  │ [Voir+]  │        │
│  └──────────┘  └──────────┘  └──────────┘        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ [Image]  │  │ [Image]  │  │ [Image]  │        │
│  │ Produit 4│  │ Produit 5│  │ Produit 6│        │
│  └──────────┘  └──────────┘  └──────────┘        │
│                                                    │
│  [Charger plus de produits]                        │
└────────────────────────────────────────────────────┘
```

## 🎨 Exemples de composants

### Card Produit

```
┌──────────────────────┐
│                      │
│   [IMAGE PRODUIT]    │
│     400 x 400px      │
│                      │
├──────────────────────┤
│ [Badge: Nutrition]   │
│                      │
│ Easy Digest          │ ← H3, Bold
│                      │
│ Favorise la digestion│ ← Description
│ et le confort        │   2 lignes max
│ intestinal...        │
│                      │
│ [Découvrir →]        │ ← CTA
└──────────────────────┘
  Hover: ↑ translation, shadow
```

### Bouton CTA

```
Primary (Bleu):
┌────────────────────────┐
│  ✉  Prendre un RDV     │
└────────────────────────┘
Hover: Bleu plus foncé + scale(1.05)

Secondary (Outline):
┌────────────────────────┐
│  👥  Rejoins-nous      │
└────────────────────────┘
Hover: Fond bleu + texte blanc
```

### Témoignage

```
┌───────────────────────────┐
│  ⭐⭐⭐⭐⭐               │
│                           │
│  "Excellent produits !    │
│  Je recommande vivement   │
│  PureLiink à tous."       │
│                           │
│  - Marie D.               │
│    Cliente depuis 2024    │
└───────────────────────────┘
```

### Navigation Desktop

```
┌────────────────────────────────────────────────────────┐
│ [LOGO]                                                 │
│                                                        │
│ Accueil  À propos  Produits▼  Programmes  ...  [CTA] │
│                      │                                │
│                      └─→ Nutrition                    │
│                          Care                         │
│                          Drinks                       │
│                          Elixirs                      │
└────────────────────────────────────────────────────────┘
```

### Navigation Mobile

```
Fermé:
┌──────────────────────┐
│ [LOGO]          [≡]  │
└──────────────────────┘

Ouvert:
┌──────────────────────┐
│ [LOGO]          [✕]  │
├──────────────────────┤
│                      │
│ 🏠 Accueil           │
│ 👥 À propos          │
│ 🛍️ Produits          │
│   → Nutrition        │
│   → Care             │
│   → Drinks           │
│   → Elixirs          │
│ 📥 Programmes        │
│ 🤝 Affiliation       │
│ 📋 Questionnaire     │
│ 💬 Avis              │
│ ✉️ Contact           │
│                      │
│ [Prendre RDV]        │
│                      │
└──────────────────────┘
```

## 📋 Templates de documentation

### Fiche page

```markdown
# Page : [Nom de la page]

## Objectif
[Quel est l'objectif de cette page ?]

## URL
`/[nom-page].html`

## SEO
- **Title** : [Titre SEO]
- **Meta Description** : [Description]
- **Keywords** : [mot1, mot2, mot3]

## Contenu

### Hero
- **H1** : [Titre principal]
- **Sous-titre** : [Texte]
- **CTA** : [Texte bouton]
- **Image** : [Description/source]

### Sections
1. **Section 1**
   - Titre : [...]
   - Contenu : [...]
   
2. **Section 2**
   - Titre : [...]
   - Contenu : [...]

## Navigation
- **Fil d'Ariane** : Accueil > [Page]
- **Menu** : Actif sur [Item]

## CTA
- **Principal** : [Texte] → [Destination]
- **Secondaire** : [Texte] → [Destination]

## Responsive
- Desktop : [Description layout]
- Mobile : [Description adaptations]

## Notes
[Remarques particulières]
```

### Fiche composant

```markdown
# Composant : [Nom]

## Usage
[Où est-il utilisé ?]

## États
- **Default** : [Description]
- **Hover** : [Changements]
- **Active** : [Changements]
- **Disabled** : [Changements]

## Variantes
- **Variante 1** : [Description]
- **Variante 2** : [Description]

## HTML Structure
```html
<div class="component-name">
  <!-- Structure -->
</div>
```

## CSS
```css
.component-name {
  /* Styles */
}
```

## Dimensions
- Width : [valeur]
- Height : [valeur]
- Padding : [valeur]
- Margin : [valeur]

## Responsive
- Desktop : [...]
- Mobile : [...]
```

## 🎨 Palette de couleurs (Copier-Coller)

### Pour Figma
```
Créez ces styles de couleurs :

Primary/Blue       #4A90E2
Primary/Green      #7ED321
Primary/Purple     #BD10E0

Natural/Beige      #F5F1E8
Natural/Brown      #8B6F47
Natural/Green      #A8D5BA

Neutral/White      #FFFFFF
Neutral/Gray-100   #F8F9FA
Neutral/Gray-500   #6C757D
Neutral/Gray-900   #343A40
Neutral/Black      #000000

Status/Success     #28A745
Status/Warning     #FFC107
Status/Error       #DC3545
Status/Info        #17A2B8
```

### Pour CSS
```css
:root {
  /* Couleurs principales */
  --color-primary: #4A90E2;
  --color-accent-green: #7ED321;
  --color-accent-purple: #BD10E0;
  
  /* Tons naturels */
  --color-natural-beige: #F5F1E8;
  --color-natural-brown: #8B6F47;
  --color-natural-green: #A8D5BA;
  
  /* Neutres */
  --color-white: #FFFFFF;
  --color-gray-100: #F8F9FA;
  --color-gray-500: #6C757D;
  --color-gray-900: #343A40;
  --color-black: #000000;
  
  /* Statuts */
  --color-success: #28A745;
  --color-warning: #FFC107;
  --color-error: #DC3545;
  --color-info: #17A2B8;
}
```

## 📏 Système d'espacement (Copier-Coller)

### Pour Figma
```
Créez ces variables d'espacement :

Space/1    8px
Space/2    16px
Space/3    24px
Space/4    32px
Space/5    40px
Space/6    48px
Space/8    64px
Space/10   80px
Space/12   96px
Space/16   128px
```

### Pour CSS
```css
:root {
  /* Système d'espacement base 8px */
  --space-1: 0.5rem;   /* 8px */
  --space-2: 1rem;     /* 16px */
  --space-3: 1.5rem;   /* 24px */
  --space-4: 2rem;     /* 32px */
  --space-5: 2.5rem;   /* 40px */
  --space-6: 3rem;     /* 48px */
  --space-8: 4rem;     /* 64px */
  --space-10: 5rem;    /* 80px */
  --space-12: 6rem;    /* 96px */
  --space-16: 8rem;    /* 128px */
}
```

## 🔤 Typographie (Copier-Coller)

### Pour Figma
```
Texte Styles:

Display/Large     Poppins Bold 48px
Display/Medium    Poppins Bold 36px
Display/Small     Poppins Bold 30px

Heading/H1        Poppins SemiBold 30px
Heading/H2        Poppins SemiBold 24px
Heading/H3        Poppins SemiBold 20px
Heading/H4        Poppins SemiBold 18px

Body/Large        Poppins Regular 18px
Body/Base         Poppins Regular 16px
Body/Small        Poppins Regular 14px
Body/XSmall       Poppins Regular 12px

Brand/Title       Pacifico Regular 36px
Brand/Subtitle    Pacifico Regular 24px
```

### Pour CSS
```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Pacifico&display=swap');

:root {
  /* Familles */
  --font-main: 'Poppins', sans-serif;
  --font-brand: 'Pacifico', cursive;
  
  /* Tailles */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  
  /* Poids */
  --font-light: 300;
  --font-regular: 400;
  --font-semibold: 600;
  --font-bold: 700;
}

/* Styles de texte */
h1 { 
  font-family: var(--font-main);
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: 1.2;
}

h2 {
  font-family: var(--font-main);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: 1.3;
}

body {
  font-family: var(--font-main);
  font-size: var(--text-base);
  font-weight: var(--font-regular);
  line-height: 1.6;
}

.brand-text {
  font-family: var(--font-brand);
  font-size: var(--text-4xl);
}
```

## 📐 Grille responsive (Copier-Coller)

### Pour CSS
```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-3);
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--space-2) * -1);
}

.col {
  padding: 0 var(--space-2);
}

/* Colonnes */
.col-12 { flex: 0 0 100%; max-width: 100%; }
.col-6 { flex: 0 0 50%; max-width: 50%; }
.col-4 { flex: 0 0 33.333%; max-width: 33.333%; }
.col-3 { flex: 0 0 25%; max-width: 25%; }

/* Responsive */
@media (max-width: 768px) {
  .col-md-12 { flex: 0 0 100%; max-width: 100%; }
  .col-md-6 { flex: 0 0 50%; max-width: 50%; }
}
```

## 🎯 Templates de contenu

### Hero Section
```
Titre H1 (accrocheur, 5-10 mots max)
↓
Sous-titre (2-3 lignes, explicatif)
↓
CTA Principal + CTA Secondaire
↓
Image/Visuel
```

### Section "Pourquoi nous ?"
```
H2 : Pourquoi nous rejoindre ?

[Bloc 1]
💰 Icône
Titre avantage
Description courte (2-3 lignes)

[Bloc 2]
🎓 Icône
Titre avantage
Description courte

[Bloc 3]
🤝 Icône
Titre avantage
Description courte
```

### Témoignage complet
```
Photo client (rond, 80x80px)
⭐⭐⭐⭐⭐
"Citation du témoignage, 2-4 lignes maximum.
Authentique et spécifique."
- Prénom N.
  Rôle/Statut
  Date
```

## 💾 Nomenclature fichiers

### Pour fichiers de conception
```
[type]-[page]-[device]-[version].[ext]

Exemples :
zoning-accueil-v1.png
zoning-accueil-v2.png
zoning-produits-final.png

wireframe-accueil-desktop-v1.fig
wireframe-accueil-mobile-v1.fig
wireframe-contact-final.fig

mockup-accueil-desktop-v1.fig
mockup-accueil-mobile-v1.fig
mockup-produits-desktop-final.png
```

### Pour assets exportés
```
[type]-[nom]-[variante].[ext]

Exemples :
logo-pureliink-bleu.svg
logo-pureliink-blanc.svg
logo-pureliink-bleu@2x.png

icon-nutrition.svg
icon-care.svg
icon-drinks.svg

photo-ludivine-olivier-hero.jpg
photo-equipe-apropos.jpg

btn-primary-default.png
btn-primary-hover.png
```

---

## 🎁 Bonus : Checklist de validation

### Avant de valider un zoning
- [ ] Toutes les zones sont numérotées
- [ ] Fonctions clairement définies
- [ ] Priorités assignées
- [ ] Comportement responsive noté
- [ ] Dimensions approximatives indiquées

### Avant de valider un wireframe
- [ ] Structure conforme au zoning
- [ ] Navigation claire
- [ ] Tous les éléments placés
- [ ] Version desktop ET mobile
- [ ] Annotations ajoutées
- [ ] Flux utilisateur logique

### Avant de valider un mockup
- [ ] Charte graphique respectée
- [ ] Couleurs cohérentes
- [ ] Typographie correcte
- [ ] Images de qualité
- [ ] Espacements harmonieux
- [ ] Tous les états (hover, active...) faits
- [ ] Assets prêts à exporter
- [ ] Responsive validé

---

📝 **Note** : Ces templates sont là pour vous aider à démarrer rapidement. N'hésitez pas à les adapter à vos besoins !

💡 **Astuce** : Sauvegardez ce fichier dans vos favoris pour y accéder facilement !

🎨 **Bon design !**
