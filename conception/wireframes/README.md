# 📐 Wireframes - Ludivine & Olivier

Les wireframes (maquettes fil de fer) définissent la structure et l'organisation du contenu de chaque page sans se concentrer sur les aspects visuels (couleurs, images, typographie).

## 🎯 Objectif

Les wireframes permettent de :
- Définir la hiérarchie de l'information
- Organiser les zones de contenu
- Planifier la navigation
- Valider l'architecture avant le design

## 📁 Contenu de ce dossier

Ajoutez vos wireframes ici :

### Pages principales
- `wireframe-accueil-desktop.png` - Page d'accueil version desktop
- `wireframe-accueil-mobile.png` - Page d'accueil version mobile
- `wireframe-produits.png` - Page catalogue produits
- `wireframe-produit-detail.png` - Page détail d'un produit
- `wireframe-contact.png` - Page de contact
- `wireframe-affiliation.png` - Page d'affiliation
- `wireframe-avis.png` - Page des avis

### Composants
- `wireframe-navigation.png` - Menu de navigation
- `wireframe-footer.png` - Pied de page
- `wireframe-formulaire.png` - Structure des formulaires

## 🛠️ Outils recommandés

### Gratuits
- **Figma** - https://www.figma.com (recommandé)
- **Balsamiq** - https://balsamiq.com (spécialisé wireframes)
- **Wireframe.cc** - https://wireframe.cc (simple et rapide)
- **Excalidraw** - https://excalidraw.com (dessin à main levée)
- **Draw.io** - https://app.diagrams.net

### Payants
- **Adobe XD** - Interface professionnelle
- **Sketch** - Mac uniquement
- **Axure RP** - Wireframes interactifs

## ✏️ Conventions

### Éléments standards
```
┌─────────────────────────────────────┐
│ [LOGO]              [MENU]          │  ← Header
├─────────────────────────────────────┤
│                                     │
│  [TITRE PRINCIPAL]                  │  ← Hero section
│  [Sous-titre]                       │
│  [Bouton CTA]                       │
│                                     │
├─────────────────────────────────────┤
│  Section 1                          │  ← Contenu
│  ┌───┐ ┌───┐ ┌───┐                 │
│  │ 1 │ │ 2 │ │ 3 │  ← Cards        │
│  └───┘ └───┘ └───┘                 │
├─────────────────────────────────────┤
│  [LOGO]  [LIENS]  [NEWSLETTER]      │  ← Footer
└─────────────────────────────────────┘
```

### Annotations
- Utilisez des annotations pour expliquer les interactions
- Indiquez les liens entre les pages
- Précisez les comportements responsive

## 📱 Breakpoints à considérer

- **Mobile** : 320px - 767px
- **Tablette** : 768px - 1023px
- **Desktop** : 1024px et plus

## ✅ Checklist wireframe

Chaque wireframe doit inclure :
- [ ] Structure générale de la page
- [ ] Zones de contenu définies
- [ ] Hiérarchie visuelle claire
- [ ] Éléments de navigation
- [ ] Emplacements des CTA (Call-to-Action)
- [ ] Version mobile si nécessaire
- [ ] Annotations si comportements spécifiques

## 🔗 Liens avec les autres dossiers

- **Wireframes** (ce dossier) → Structure
- **Zoning** (../zoning/) → Zones fonctionnelles
- **Mockups** (../mockups/) → Design final

## 🎯 Wireframes détaillés par page

### Page d'accueil (index.html)

#### Desktop (1440px)
```
┌─────────────────────────────────────────────────────────┐
│ [LOGO]  Accueil À propos Produits... Contact    [CTA]   │ Header fixe
├─────────────────────────────────────────────────────────┤
│                                                         │
│  🌿 Bienvenue dans l'univers de                        │
│     Ludivine & Olivier                                  │
│                                                         │
│  Découvrez PureLiink, une entreprise française...      │ Hero
│                                                         │
│  [Prendre RDV]  [Rejoins-nous]            [Photo L&O]  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Qui sommes-nous ?                                      │
│  ┌──────────┐  ┌────────────────────────────────────┐  │
│  │  Photo   │  │  Texte présentation                │  │ Section présentation
│  │  équipe  │  │  Valeurs, mission                  │  │
│  └──────────┘  └────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│  Nos produits phares                                    │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │ [Image] │  │ [Image] │  │ [Image] │  │ [Image] │  │
│  │ Produit │  │ Produit │  │ Produit │  │ Produit │  │ Section produits
│  │ Nom     │  │ Nom     │  │ Nom     │  │ Nom     │  │
│  │ [Voir]  │  │ [Voir]  │  │ [Voir]  │  │ [Voir]  │  │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  │
├─────────────────────────────────────────────────────────┤
│  Programmes PureLiink                                   │
│  ┌────────────────┐  ┌────────────────┐               │
│  │ 📥 Programme 1 │  │ 📥 Programme 2 │               │ Section programmes
│  │ Description    │  │ Description    │               │
│  │ [Télécharger]  │  │ [Télécharger]  │               │
│  └────────────────┘  └────────────────┘               │
├─────────────────────────────────────────────────────────┤
│  Témoignages                                            │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐          │
│  │ ⭐⭐⭐⭐⭐  │  │ ⭐⭐⭐⭐⭐  │  │ ⭐⭐⭐⭐⭐  │          │ Témoignages
│  │ "Texte"   │  │ "Texte"   │  │ "Texte"   │          │
│  │ - Client  │  │ - Client  │  │ - Client  │          │
│  └───────────┘  └───────────┘  └───────────┘          │
├─────────────────────────────────────────────────────────┤
│  Newsletter - Restez informé                            │
│  [Email ___________________________] [S'inscrire]      │ Newsletter CTA
├─────────────────────────────────────────────────────────┤
│  [LOGO]                                                 │
│  Navigation     Support        Newsletter    Réseaux    │
│  - Accueil     - FAQ           [Email]       [FB][IG]  │ Footer
│  - Produits    - CGU           [Envoyer]     [LI][TT]  │
│  - Contact     - Politique                              │
│                                                         │
│  © 2025 Ludivine & Olivier - PureLink                   │
└─────────────────────────────────────────────────────────┘
```

#### Mobile (375px)
```
┌──────────────────────┐
│ [≡] LOGO      [CTA]  │ Header
├──────────────────────┤
│  🌿 Bienvenue        │
│  Ludivine & Olivier  │
│                      │
│  [Photo L&O]         │ Hero
│                      │
│  Texte présentation  │
│                      │
│  [Prendre RDV]       │
│  [Rejoins-nous]      │
├──────────────────────┤
│  [Photo équipe]      │
│                      │
│  Qui sommes-nous ?   │ Présentation
│  Texte...            │
├──────────────────────┤
│  Nos produits        │
│  ┌────────────────┐  │
│  │ [Image]        │  │
│  │ Produit        │  │ Produits
│  │ [Découvrir]    │  │ (empilés)
│  └────────────────┘  │
│  ┌────────────────┐  │
│  │ [Image]        │  │
│  └────────────────┘  │
├──────────────────────┤
│  [Footer empilé]     │
└──────────────────────┘
```

### Page Produits (produits.html)

```
┌─────────────────────────────────────────────┐
│ Header (identique)                          │
├─────────────────────────────────────────────┤
│ Nos Produits PureLiink                      │
│                                             │
│ [Recherche: ____________] [🔍]              │ Barre recherche
│ Filtres: [Nutrition▼] [Care▼] [Prix▼]      │
├─────────────────────────────────────────────┤
│ Catégories:                                 │
│ [Nutrition] [Care] [Drinks] [Elixirs]       │ Onglets filtres
├─────────────────────────────────────────────┤
│ Grille produits (3 colonnes desktop)       │
│ ┌────────┐ ┌────────┐ ┌────────┐           │
│ │[Image] │ │[Image] │ │[Image] │           │
│ │ Nom    │ │ Nom    │ │ Nom    │           │
│ │ Catég. │ │ Catég. │ │ Catég. │           │
│ │ Desc   │ │ Desc   │ │ Desc   │           │
│ │[Voir+] │ │[Voir+] │ │[Voir+] │           │
│ └────────┘ └────────┘ └────────┘           │
│ ┌────────┐ ┌────────┐ ┌────────┐           │
│ │[Image] │ │[Image] │ │[Image] │           │
│ └────────┘ └────────┘ └────────┘           │
│                                             │
│ [Charger plus...]                           │
├─────────────────────────────────────────────┤
│ Footer (identique)                          │
└─────────────────────────────────────────────┘
```

### Page Contact (contact.html)

```
┌──────────────────────────────────────────────┐
│ Header                                       │
├──────────────────────────────────────────────┤
│ Contactez-nous                               │
│ Nous sommes là pour vous accompagner         │
├──────────────────────────────────────────────┤
│ ┌─────────────────┐  ┌──────────────────┐   │
│ │ Formulaire      │  │ Informations     │   │
│ │                 │  │                  │   │
│ │ Nom:            │  │ 📧 Email         │   │
│ │ [________]      │  │ contact@...      │   │
│ │                 │  │                  │   │
│ │ Email:          │  │ 📱 Téléphone     │   │
│ │ [________]      │  │ 06 XX XX XX XX   │   │
│ │                 │  │                  │   │
│ │ Message:        │  │ 📍 Localisation  │   │
│ │ [________]      │  │ [Carte]          │   │
│ │ [________]      │  │                  │   │
│ │ [________]      │  │ 🕐 Horaires      │   │
│ │                 │  │ Lun-Ven 9h-18h   │   │
│ │ [Envoyer]       │  │                  │   │
│ └─────────────────┘  └──────────────────┘   │
├──────────────────────────────────────────────┤
│ FAQ Rapide                                   │
│ ▼ Question 1                                 │
│ ▼ Question 2                                 │
│ ▼ Question 3                                 │
├──────────────────────────────────────────────┤
│ Footer                                       │
└──────────────────────────────────────────────┘
```

### Page Affiliation (affiliation.html)

```
┌────────────────────────────────────────────┐
│ Header                                     │
├────────────────────────────────────────────┤
│ Rejoignez notre équipe                     │
│ Devenez partenaire PureLiink               │
│ [S'inscrire maintenant]                    │
├────────────────────────────────────────────┤
│ Pourquoi nous rejoindre ?                  │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│ │ 💰 Icon  │ │ 🎓 Icon  │ │ 🤝 Icon  │    │
│ │ Revenus  │ │Formation │ │ Support  │    │
│ │ Texte    │ │ Texte    │ │ Texte    │    │
│ └──────────┘ └──────────┘ └──────────┘    │
├────────────────────────────────────────────┤
│ Comment ça marche ?                        │
│ 1️⃣ ──────────────────────────────────────  │
│    Inscription gratuite                    │
│                                            │
│ 2️⃣ ──────────────────────────────────────  │
│    Formation et accompagnement             │
│                                            │
│ 3️⃣ ──────────────────────────────────────  │
│    Partagez et gagnez                      │
├────────────────────────────────────────────┤
│ Formulaire d'inscription                   │
│ Prénom: [_________] Nom: [_________]       │
│ Email: [_________________________]         │
│ Téléphone: [_____________________]         │
│ Message: [_______________________]         │
│ ☐ J'accepte les conditions                │
│ [S'inscrire]                               │
├────────────────────────────────────────────┤
│ Témoignages de partenaires                 │
│ Carrousel ◀ [Témoignage] ▶                 │
├────────────────────────────────────────────┤
│ Footer                                     │
└────────────────────────────────────────────┘
```

## 🔄 États et interactions à wireframer

### Navigation
- [ ] État normal
- [ ] État hover (survol)
- [ ] État active (page actuelle)
- [ ] Menu dropdown ouvert/fermé
- [ ] Menu mobile déployé

### Formulaires
- [ ] État vide
- [ ] État rempli
- [ ] État focus (champ actif)
- [ ] État erreur (validation)
- [ ] État succès (validation)
- [ ] Message d'erreur affiché
- [ ] Message de succès

### Boutons
- [ ] État normal
- [ ] État hover
- [ ] État actif (clic)
- [ ] État désactivé
- [ ] État loading

### Cards produits
- [ ] État normal
- [ ] État hover
- [ ] Modal/overlay détails

### Modals/Popups
- [ ] Cookie consent
- [ ] Newsletter popup
- [ ] Confirmation messages
- [ ] Lightbox images

## � Composants responsive

### Navigation responsive
```
Desktop (>992px):
┌────────────────────────────────────┐
│ [LOGO] Menu1 Menu2 Menu3... [CTA]  │
└────────────────────────────────────┘

Mobile (<768px):
┌────────────────────┐
│ [LOGO]        [≡]  │
└────────────────────┘
     ↓ (quand cliqué)
┌────────────────────┐
│ [LOGO]        [✕]  │
├────────────────────┤
│ Menu 1             │
│ Menu 2             │
│ Menu 3             │
│ Menu 4             │
│ [CTA Button]       │
└────────────────────┘
```

### Grille produits responsive
```
Desktop (3 colonnes):
┌────┐ ┌────┐ ┌────┐
│ 1  │ │ 2  │ │ 3  │
└────┘ └────┘ └────┘

Tablette (2 colonnes):
┌────┐ ┌────┐
│ 1  │ │ 2  │
└────┘ └────┘
┌────┐ ┌────┐
│ 3  │ │ 4  │
└────┘ └────┘

Mobile (1 colonne):
┌──────────┐
│    1     │
└──────────┘
┌──────────┐
│    2     │
└──────────┘
```

## 💼 Livrables wireframe

### Document final
Créez un document PDF incluant :

1. **Page de garde**
   - Titre du projet
   - Date
   - Version

2. **Sommaire**
   - Liste des pages wireframées
   - Liste des composants

3. **Wireframes des pages**
   - Page d'accueil (desktop + mobile)
   - Produits (desktop + mobile)
   - Détail produit
   - Contact
   - Affiliation
   - Programmes
   - Avis
   - À propos
   - Questionnaire

4. **Composants UI**
   - Header (états)
   - Footer
   - Navigation
   - Cards
   - Formulaires
   - Boutons
   - Modals

5. **Flux utilisateur**
   - Parcours d'achat
   - Inscription affiliation
   - Contact/RDV
   - Navigation principale

6. **Annotations**
   - Notes techniques
   - Interactions
   - Comportements responsive

## 🎓 Ressources et tutoriels

### Apprendre le wireframing
- **UX Design Institute** - https://www.uxdesigninstitute.com
- **Nielsen Norman Group** - https://www.nngroup.com
- **Interaction Design Foundation** - https://www.interaction-design.org

### Templates Figma
- **Figma Community - Wireframe Kits**
- **Wireframe Kit by Figma**
- **Mobile Wireframe Kit**

### Inspiration
- **Wireframe.cc Gallery**
- **Dribbble (tag: wireframe)**
- **Behance (search: wireframe)**

## 🚀 Workflow recommandé

1. **Analyse** (1h)
   - Comprendre les objectifs
   - Lister les fonctionnalités
   - Identifier les pages nécessaires

2. **Sketch rapide** (30min)
   - Dessiner sur papier
   - Tester différentes layouts
   - Valider la structure générale

3. **Wireframe low-fi** (2h)
   - Créer les wireframes basiques
   - Définir la hiérarchie
   - Placer les éléments principaux

4. **Wireframe high-fi** (3h)
   - Ajouter les détails
   - Préciser les contenus
   - Annoter les interactions

5. **Validation** (1h)
   - Tester avec utilisateurs
   - Recueillir feedbacks
   - Ajuster si nécessaire

6. **Documentation** (1h)
   - Créer le document final
   - Ajouter annotations
   - Préparer pour mockups

## 📋 Checklist avant passage aux mockups

- [ ] Toutes les pages sont wireframées
- [ ] Versions desktop ET mobile
- [ ] Navigation claire et logique
- [ ] Hiérarchie de l'information définie
- [ ] Tous les CTA sont positionnés
- [ ] Formulaires structurés
- [ ] États des composants définis
- [ ] Annotations complètes
- [ ] Validé par le client/équipe
- [ ] Prêt pour la phase design

---

�📝 **Note :** Les wireframes sont des documents évolutifs. N'hésitez pas à les mettre à jour au fur et à mesure du projet.

🎯 **Objectif :** Avoir une structure solide et validée avant d'investir du temps dans le design visuel.

💡 **Astuce :** Gardez vos wireframes simples. Résistez à la tentation d'ajouter des couleurs ou du style. Concentrez-vous sur la structure et l'UX.
