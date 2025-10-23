# 🎨 Mockups - Ludivine & Olivier

Les mockups (maquettes graphiques) sont les représentations visuelles finales du site avant le développement. Ils incluent tous les éléments graphiques : couleurs, typographie, images, icônes, etc.

## 🎯 Objectif

Les mockups permettent de :
- Visualiser le rendu final du site
- Valider les choix graphiques (charte graphique)
- Définir l'identité visuelle
- Servir de référence pour l'intégration
- Présenter le projet aux clients/partenaires

## 📁 Contenu de ce dossier

Ajoutez vos mockups ici :

### Pages principales - Desktop
- `mockup-accueil-desktop.png` - Page d'accueil version desktop
- `mockup-produits-desktop.png` - Page catalogue produits
- `mockup-produit-detail-desktop.png` - Page détail d'un produit
- `mockup-contact-desktop.png` - Page de contact
- `mockup-affiliation-desktop.png` - Page d'affiliation
- `mockup-programmes-desktop.png` - Page programmes
- `mockup-avis-desktop.png` - Page des avis
- `mockup-apropos-desktop.png` - Page à propos
- `mockup-questionnaire-desktop.png` - Page questionnaire

### Pages principales - Mobile
- `mockup-accueil-mobile.png` - Page d'accueil version mobile
- `mockup-produits-mobile.png` - Page catalogue mobile
- `mockup-produit-detail-mobile.png` - Détail produit mobile
- `mockup-contact-mobile.png` - Contact mobile
- `mockup-navigation-mobile.png` - Menu hamburger

### Pages secondaires
- `mockup-faq.png` - FAQ
- `mockup-conditions.png` - Conditions d'utilisation
- `mockup-politique-confidentialite.png` - Politique de confidentialité
- `mockup-404.png` - Page d'erreur 404

### Composants UI
- `mockup-header.png` - En-tête avec navigation
- `mockup-footer.png` - Pied de page
- `mockup-card-produit.png` - Carte produit
- `mockup-formulaire.png` - Styles de formulaire
- `mockup-boutons.png` - Boutons et CTA
- `mockup-modals.png` - Fenêtres modales
- `mockup-cookie-consent.png` - Bandeau cookies

### États et interactions
- `mockup-hover-states.png` - États au survol
- `mockup-form-validation.png` - Validation de formulaire
- `mockup-loading-states.png` - États de chargement
- `mockup-error-states.png` - États d'erreur

## 🎨 Charte graphique PureLink

### Couleurs principales
```css
/* Identité PureLink */
--primary-blue: #4A90E2;          /* Bleu principal PureLink */
--primary-green: #7ED321;         /* Vert accent */
--primary-purple: #BD10E0;        /* Violet accent */

/* Tons naturels */
--natural-beige: #F5F1E8;         /* Fond clair */
--natural-brown: #8B6F47;         /* Marron naturel */
--natural-green: #A8D5BA;         /* Vert naturel */

/* Interface */
--white: #FFFFFF;
--gray-light: #F8F9FA;
--gray-medium: #6C757D;
--gray-dark: #343A40;
--black: #000000;

/* Alertes */
--success: #28A745;
--warning: #FFC107;
--error: #DC3545;
--info: #17A2B8;
```

### Typographie
```css
/* Polices */
--font-main: 'Poppins', sans-serif;      /* Texte principal */
--font-display: 'Pacifico', cursive;     /* Titres décoratifs */

/* Tailles */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */

/* Poids */
--font-light: 300;
--font-regular: 400;
--font-semibold: 600;
--font-bold: 700;
```

### Espacements
```css
/* Système d'espacement (base 8px) */
--space-1: 0.5rem;   /* 8px */
--space-2: 1rem;     /* 16px */
--space-3: 1.5rem;   /* 24px */
--space-4: 2rem;     /* 32px */
--space-5: 2.5rem;   /* 40px */
--space-6: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-10: 5rem;    /* 80px */
```

### Bordures et ombres
```css
/* Rayons de bordure */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;

/* Ombres */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.15);
```

## 🛠️ Outils recommandés

### Design d'interface (UI Design)

#### **Figma** ⭐ (Recommandé)
- 🌐 https://www.figma.com
- ✅ Gratuit pour usage personnel
- ✅ Collaboratif en temps réel
- ✅ Prototypage intégré
- ✅ Composants réutilisables
- ✅ Export en PNG, SVG, PDF

#### **Adobe XD**
- 🌐 https://www.adobe.com/products/xd.html
- ✅ Version gratuite disponible
- ✅ Intégration Creative Cloud
- ✅ Prototypage avancé

#### **Sketch** (Mac uniquement)
- 🌐 https://www.sketch.com
- ✅ Standard de l'industrie
- ⚠️ Payant, Mac seulement

### Outils complémentaires

#### **Canva**
- 🌐 https://www.canva.com
- ✅ Gratuit (version limitée)
- ✅ Templates prêts à l'emploi
- ✅ Facile pour débutants

#### **Photoshop**
- Pour retouches photos
- Création de visuels personnalisés

#### **Illustrator**
- Pour créations vectorielles
- Icônes et illustrations

## 📐 Grille et layout

### Container
```
Max-width: 1200px
Padding: 0 20px (mobile) / 0 40px (desktop)
Centré horizontalement
```

### Grille 12 colonnes
```
Desktop:  12 colonnes | Gutter: 20px
Tablette: 8 colonnes  | Gutter: 16px
Mobile:   4 colonnes  | Gutter: 12px
```

### Breakpoints
```css
/* Mobile First */
--breakpoint-sm: 576px;   /* Petit mobile */
--breakpoint-md: 768px;   /* Tablette */
--breakpoint-lg: 992px;   /* Petit desktop */
--breakpoint-xl: 1200px;  /* Desktop */
--breakpoint-xxl: 1400px; /* Grand écran */
```

## 🖼️ Assets graphiques

### Images à prévoir
- Logo PureLink (PNG transparent)
- Photos produits (haute résolution)
- Photo Ludivine & Olivier
- Icônes catégories produits
- Visuels hero section
- Images de fond
- Illustrations well-being

### Formats recommandés
- **Images photos** : JPG (optimisées, max 200KB)
- **Logos/icônes** : SVG ou PNG transparent
- **Icônes UI** : Font Awesome (déjà intégré)
- **Dimensions** : 
  - Hero desktop: 1920x600px
  - Produits: 800x800px (ratio 1:1)
  - Thumbnails: 400x400px

## 🎯 Éléments clés à mocker

### Header
- [ ] Logo PureLink
- [ ] Menu navigation (8 items)
- [ ] Version desktop
- [ ] Version mobile (hamburger)
- [ ] États hover/active

### Hero Section
- [ ] Titre principal accrocheur
- [ ] Sous-titre descriptif
- [ ] 2 CTA principaux
- [ ] Visuel de fond ou image
- [ ] Version desktop/mobile

### Cards Produits
- [ ] Image produit
- [ ] Nom du produit
- [ ] Catégorie
- [ ] Description courte
- [ ] Prix (si applicable)
- [ ] Bouton "Découvrir"
- [ ] États hover

### Formulaires
- [ ] Champs texte
- [ ] Sélecteurs
- [ ] Checkboxes/radios
- [ ] Boutons submit
- [ ] Messages d'erreur
- [ ] Messages de succès
- [ ] États de validation

### Footer
- [ ] Logo
- [ ] 4 colonnes d'informations
- [ ] Newsletter
- [ ] Réseaux sociaux
- [ ] Copyright
- [ ] Version mobile (empilé)

### Éléments interactifs
- [ ] Boutons (primaire, secondaire, tertiaire)
- [ ] Liens
- [ ] Dropdowns
- [ ] Modals
- [ ] Tooltips
- [ ] Notifications
- [ ] Loader/Spinner

## ✅ Checklist mockup

Avant de valider un mockup :

### Design
- [ ] Respecte la charte graphique PureLink
- [ ] Couleurs cohérentes avec l'identité
- [ ] Typographie harmonieuse et lisible
- [ ] Hiérarchie visuelle claire
- [ ] Espacement cohérent
- [ ] Alignements précis

### Contenu
- [ ] Tous les éléments du wireframe présents
- [ ] Textes réalistes (pas de Lorem Ipsum)
- [ ] Images de qualité professionnelle
- [ ] Icônes cohérentes
- [ ] CTAs clairs et visibles

### Responsive
- [ ] Version desktop (1440px)
- [ ] Version tablette (768px) - optionnel
- [ ] Version mobile (375px)
- [ ] Adaptation fluide des éléments

### Accessibilité
- [ ] Contraste suffisant (WCAG AA)
- [ ] Tailles de texte lisibles
- [ ] Zones de clic suffisantes (44x44px min)
- [ ] Focus states visibles

### Technique
- [ ] Résolution suffisante pour export
- [ ] Nommage des calques organisé
- [ ] Composants réutilisables créés
- [ ] Styles partagés définis
- [ ] Prêt pour le handoff développeur

## 📤 Export et livraison

### Formats d'export

#### Pour présentation client
```
- PDF haute résolution
- PNG (2x pour Retina)
- Présentation interactive (Figma/XD)
```

#### Pour développement
```
- PNG des écrans complets
- SVG pour icônes et logos
- Spécifications CSS (couleurs, typo, espacements)
- Assets découpés individuellement
```

### Nomenclature
```
page-type_device_version.format

Exemples:
accueil_desktop_v1.png
produits_mobile_v2.png
header_desktop_final.png
```

## 🔗 Processus de conception

```
1. Zoning          → Zones fonctionnelles
   ↓
2. Wireframes      → Structure détaillée
   ↓
3. Mockups         → Design visuel (← VOUS ÊTES ICI)
   ↓
4. Prototype       → Interactions et animations
   ↓
5. Développement   → Intégration HTML/CSS/JS
```

## 💡 Bonnes pratiques

### Design cohérent
- Utilisez un design system (composants réutilisables)
- Respectez la grille de mise en page
- Gardez les espacements consistants
- Alignez tous les éléments précisément

### Mobile First
- Concevez d'abord la version mobile
- Adaptez ensuite pour tablette et desktop
- Priorisez le contenu essentiel
- Optimisez les zones tactiles

### Performance
- Optimisez le poids des images
- Utilisez SVG pour les icônes
- Prévoyez des versions compressées
- Pensez au lazy loading

### Accessibilité
- Contraste minimum 4.5:1 pour le texte
- Taille de police minimum 16px
- Zones de clic min 44x44px
- États focus bien visibles

### Conversion
- CTA visibles et attractifs
- Formulaires simples et clairs
- Hiérarchie visuelle forte
- Messages d'encouragement

## 🎨 Inspiration et ressources

### Inspiration design
- **Dribbble** - https://dribbble.com
- **Behance** - https://www.behance.net
- **Awwwards** - https://www.awwwards.com
- **SiteInspire** - https://www.siteinspire.com

### Ressources graphiques
- **Unsplash** - Photos gratuites
- **Pexels** - Photos et vidéos
- **Font Awesome** - Icônes
- **Flaticon** - Icônes variées
- **Coolors** - Palettes de couleurs

### UI Kits et composants
- **Figma Community** - Templates gratuits
- **UI8** - Kits premium
- **Creative Market** - Ressources variées

## 📊 Template de présentation

Créez un document de présentation incluant :

### Page de couverture
- Nom du projet
- Logo PureLink
- Date
- Version

### Sommaire
- Pages mockées
- Composants
- Annexes

### Mockups par page
- Titre de la page
- Version desktop
- Version mobile
- Notes et annotations

### Guide de style
- Palette de couleurs
- Typographie
- Boutons
- Formulaires
- Icônes

### Annexes
- Grille de layout
- Espacements
- États interactifs
- Assets list

---

📝 **Note :** Les mockups sont des documents de référence pour le développement. Ils doivent être aussi précis que possible.

🎨 **Objectif :** Créer une identité visuelle forte et cohérente qui reflète les valeurs de bien-être et de naturel de PureLink.

💼 **Pro Tip :** Travaillez en composants réutilisables dès le départ. Cela facilitera grandement les modifications et le développement.

🔄 **Itération :** N'hésitez pas à créer plusieurs versions et à demander des retours. Le design est un processus itératif !
