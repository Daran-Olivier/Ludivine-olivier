# 📐 Conception - Ludivine & Olivier x PureLiink

Bienvenue dans le dossier de conception du site web **Ludivine & Olivier** - Partenaires PureLiink.

Ce dossier contient toute la documentation de conception UX/UI du projet, depuis les premières esquisses jusqu'aux maquettes finales prêtes pour le développement.

---

## 🚀 Démarrage rapide

### 👉 Nouveau sur le projet ? Commencez ici :

1. **📖 Lisez ce README** (vue d'ensemble du projet)
2. **🚦 Consultez [GUIDE-DEMARRAGE.md](./GUIDE-DEMARRAGE.md)** (démarrage pas à pas)
3. **📝 Utilisez [TEMPLATES-EXEMPLES.md](./TEMPLATES-EXEMPLES.md)** (templates prêts à l'emploi)
4. **📋 Suivez [LISTE-FICHIERS.md](./LISTE-FICHIERS.md)** (tous les fichiers à créer)
5. **🎯 Commencez par le [zoning](./zoning/README.md)** !

### 📚 Documentation disponible

| Document | Description | Quand l'utiliser |
|----------|-------------|------------------|
| [README.md](./README.md) | Vue d'ensemble complète | Pour comprendre le projet |
| [GUIDE-DEMARRAGE.md](./GUIDE-DEMARRAGE.md) | Guide pas à pas + checklist | Quand vous débutez |
| [TEMPLATES-EXEMPLES.md](./TEMPLATES-EXEMPLES.md) | Templates réutilisables | Pour gagner du temps |
| [LISTE-FICHIERS.md](./LISTE-FICHIERS.md) | Tous les fichiers à créer | Pour suivre votre progression |
| [zoning/README.md](./zoning/README.md) | Guide complet zoning | Phase 1 |
| [wireframes/README.md](./wireframes/README.md) | Guide complet wireframes | Phase 2 |
| [mockups/README.md](./mockups/README.md) | Guide complet mockups | Phase 3 |

---

## 📁 Structure du dossier

```
conception/
│
├── README.md (ce fichier)
│
├── zoning/
│   ├── README.md (guide complet)
│   └── [vos fichiers de zoning]
│
├── wireframes/
│   ├── README.md (guide complet)
│   └── [vos wireframes]
│
└── mockups/
    ├── README.md (guide complet)
    └── [vos mockups]
```

## 🎯 Méthodologie de conception

Ce projet suit une approche **Design Thinking** et **Mobile First** :

### 1️⃣ Recherche & Analyse
- Comprendre les besoins de Ludivine & Olivier
- Analyser la cible (clients potentiels PureLiink)
- Étudier la concurrence
- Définir les objectifs du site

### 2️⃣ Zoning → `./zoning/`
**Objectif** : Définir les grandes zones fonctionnelles

📋 **Livrables** :
- Schémas des zones par page
- Annotations fonctionnelles
- Hiérarchie de l'information
- Comportement responsive

🛠️ **Outils** : Papier/crayon, Excalidraw, Figma

⏱️ **Durée estimée** : 1-2 jours

👉 [Voir le guide Zoning](./zoning/README.md)

### 3️⃣ Wireframes → `./wireframes/`
**Objectif** : Structurer le contenu et la navigation

📋 **Livrables** :
- Wireframes desktop et mobile
- Structure détaillée des pages
- Composants UI définis
- Flux utilisateur

🛠️ **Outils** : Figma, Balsamiq, Adobe XD

⏱️ **Durée estimée** : 3-5 jours

👉 [Voir le guide Wireframes](./wireframes/README.md)

### 4️⃣ Mockups → `./mockups/`
**Objectif** : Créer le design visuel final

📋 **Livrables** :
- Maquettes haute-fidélité
- Charte graphique appliquée
- Tous les états et interactions
- Assets graphiques
- Spécifications pour le développement

🛠️ **Outils** : Figma (recommandé), Adobe XD, Sketch

⏱️ **Durée estimée** : 5-10 jours

👉 [Voir le guide Mockups](./mockups/README.md)

### 5️⃣ Prototype (optionnel)
**Objectif** : Rendre le design interactif

📋 **Livrables** :
- Prototype cliquable
- Animations et transitions
- Tests utilisateur

🛠️ **Outils** : Figma Prototype, Adobe XD, InVision

⏱️ **Durée estimée** : 2-3 jours

### 6️⃣ Développement
**Objectif** : Transformer le design en code

📋 **Livrables** :
- Site web fonctionnel
- HTML/CSS/JavaScript
- Responsive et optimisé

🛠️ **Technologies** : HTML5, CSS3, JavaScript, Font Awesome

⏱️ **Durée estimée** : 10-15 jours

## 🎨 Identité visuelle PureLiink

### Palette de couleurs

```css
/* Couleurs principales PureLiink */
#4A90E2  /* Bleu principal */
#7ED321  /* Vert accent */
#BD10E0  /* Violet accent */

/* Tons naturels */
#F5F1E8  /* Beige clair */
#8B6F47  /* Marron naturel */
#A8D5BA  /* Vert naturel */

/* Interface */
#FFFFFF  /* Blanc */
#F8F9FA  /* Gris clair */
#6C757D  /* Gris moyen */
#343A40  /* Gris foncé */
```

### Typographie

- **Police principale** : Poppins (Google Fonts)
  - Light 300 : textes secondaires
  - Regular 400 : texte courant
  - SemiBold 600 : sous-titres
  - Bold 700 : titres

- **Police décorative** : Pacifico (Google Fonts)
  - Pour le logo "Ludivine & Olivier"
  - Touches créatives

### Icônes

- **Font Awesome 6.0** (déjà intégré)
- Style : Regular et Solid
- Couleur : selon contexte (primaire/gris)

## 📄 Pages du site

### Pages principales
1. **Accueil** (`index.html`) ⭐
   - Hero section accueillante
   - Présentation L&O
   - Produits phares
   - Programmes
   - Témoignages
   - Newsletter

2. **À propos** (`a-propos.html`)
   - Histoire de Ludivine & Olivier
   - Partenariat avec PureLiink
   - Valeurs et mission
   - Équipe

3. **Produits** (`produits.html`)
   - Catalogue complet
   - Filtres par catégorie
   - Recherche
   - Cards produits

4. **Détails produit** (pages individuelles)
   - Café, Chocolat, Vanille, Mangue
   - Omega-3, Collagen
   - Easy Digest, Detox, Energy Boost, etc.

5. **Programmes** (`programmes.html`)
   - Programmes téléchargeables
   - Guides bien-être
   - Ressources gratuites

6. **Affiliation** (`affiliation.html`) ⭐
   - Opportunité de partenariat
   - Avantages
   - Processus d'inscription
   - Formulaire

7. **Avis** (`avis.html`)
   - Témoignages clients
   - Formulaire d'avis
   - Preuve sociale

8. **Contact** (`contact.html`)
   - Formulaire de contact
   - Informations
   - Prise de RDV

9. **Questionnaire** (`questionnaire.html`)
   - Quiz bien-être
   - Recommandations personnalisées

### Pages secondaires
- FAQ (`faq.html`)
- Conditions d'utilisation (`conditions-utilisation.html`)
- Politique de confidentialité (`politique-confidentialite.html`)
- Politique cookies (`politique-cookies.html`)

## 🎯 Objectifs du site

### Objectifs business
1. **Conversion** : Générer des inscriptions affiliés
2. **Information** : Présenter PureLiink et ses produits
3. **Engagement** : Créer une relation de confiance
4. **Vente** : Rediriger vers l'achat (via affiliation)

### Objectifs utilisateur
1. Comprendre qui sont Ludivine & Olivier
2. Découvrir les produits PureLiink
3. Trouver des solutions bien-être
4. Devenir partenaire/affilié
5. Contacter facilement

## 👥 Cibles utilisateur

### Persona 1 : Le Client Bien-être
- **Âge** : 30-50 ans
- **Profil** : Actif, soucieux de sa santé
- **Besoin** : Produits naturels de qualité
- **Comportement** : Recherche d'informations, comparaison

### Persona 2 : L'Entrepreneur potentiel
- **Âge** : 25-45 ans
- **Profil** : Cherche opportunité business
- **Besoin** : Revenu complémentaire, MLM
- **Comportement** : Évalue l'opportunité, témoignages

### Persona 3 : Le Curieux
- **Âge** : 20-60 ans
- **Profil** : Découvre PureLiink
- **Besoin** : Information, confiance
- **Comportement** : Navigation, lecture

## 📊 KPI et métriques

### Métriques de succès
- **Taux de conversion** formulaire affiliation
- **Temps sur la page** produits
- **Taux de rebond** < 50%
- **Pages par session** > 3
- **Inscriptions newsletter** / mois
- **Clics vers produits PureLiink**

### Outils analytics
- Google Analytics (configuré)
- Suivi des formulaires
- Heatmaps (Hotjar recommandé)

## 🛠️ Outils recommandés

### Design
- **Figma** ⭐ - Tout-en-un (gratuit)
- Adobe XD - Alternative Adobe
- Sketch - Mac uniquement

### Prototypage
- Figma Prototype
- InVision
- Marvel App

### Collaboration
- Figma (temps réel)
- Miro (brainstorming)
- Notion (documentation)

### Feedback
- Figma Comments
- Useberry (tests utilisateur)
- Maze (tests UX)

## ✅ Checklist de conception

### Phase Zoning
- [ ] Toutes les pages identifiées
- [ ] Zones fonctionnelles définies
- [ ] Hiérarchie établie
- [ ] Responsive prévu
- [ ] Validé par l'équipe

### Phase Wireframes
- [ ] Wireframes desktop créés
- [ ] Wireframes mobile créés
- [ ] Navigation définie
- [ ] Composants réutilisables identifiés
- [ ] Flux utilisateur validé
- [ ] Annotations complètes

### Phase Mockups
- [ ] Charte graphique appliquée
- [ ] Tous les écrans mockés (desktop)
- [ ] Versions mobile créées
- [ ] États interactifs définis
- [ ] Assets graphiques exportés
- [ ] Spécifications CSS documentées
- [ ] Validé par le client

### Pré-développement
- [ ] Design system créé
- [ ] Composants documentés
- [ ] Grid system défini
- [ ] Breakpoints établis
- [ ] Assets optimisés
- [ ] Handoff développeur préparé

## 📚 Ressources et inspiration

### Inspiration design
- **Awwwards** - https://www.awwwards.com
- **Dribbble** - https://dribbble.com/search/wellness
- **Behance** - https://www.behance.net/search/projects?search=wellness
- **SiteInspire** - https://www.siteinspire.com

### Sites similaires (analyse)
- Sites de partenaires MLM/affiliation
- Sites de produits bien-être
- Sites e-commerce santé
- Landing pages conversion

### UI/UX Resources
- **Nielsen Norman Group** - Recherche UX
- **Smashing Magazine** - Articles design
- **CSS-Tricks** - Techniques front-end
- **Codrops** - Inspiration interactive

### Assets graphiques
- **Unsplash** - Photos gratuites
- **Pexels** - Photos et vidéos
- **Flaticon** - Icônes
- **Font Awesome** - Icônes (déjà intégré)

## 🔄 Processus itératif

```
┌─────────────────────────────────────────┐
│  1. RECHERCHE                           │
│     - Analyse besoin                    │
│     - Benchmark                         │
│     - Personas                          │
└────────────┬────────────────────────────┘
             ↓
┌─────────────────────────────────────────┐
│  2. ZONING                              │
│     - Zones fonctionnelles              │
│     - Architecture info                 │
└────────────┬────────────────────────────┘
             ↓
┌─────────────────────────────────────────┐
│  3. WIREFRAMES                          │
│     - Structure détaillée               │
│     - Navigation                        │
└────────────┬────────────────────────────┘
             ↓
┌─────────────────────────────────────────┐
│  4. MOCKUPS                             │
│     - Design visuel                     │
│     - Charte graphique                  │
└────────────┬────────────────────────────┘
             ↓
┌─────────────────────────────────────────┐
│  5. PROTOTYPE                           │
│     - Interactions                      │
│     - Tests utilisateur                 │
└────────────┬────────────────────────────┘
             ↓
┌─────────────────────────────────────────┐
│  6. DÉVELOPPEMENT                       │
│     - Intégration                       │
│     - Tests                             │
│     - Déploiement                       │
└─────────────────────────────────────────┘
             ↓
        ┌────────┐
        │ITERATION│ ← Retours et améliorations
        └────────┘
```

## 💡 Bonnes pratiques

### Design
- ✅ Mobile First
- ✅ Cohérence visuelle
- ✅ Hiérarchie claire
- ✅ Espacement harmonieux
- ✅ Typographie lisible

### UX
- ✅ Navigation intuitive
- ✅ CTA visibles
- ✅ Formulaires simples
- ✅ Feedback utilisateur
- ✅ Accessibilité (WCAG)

### Performance
- ✅ Images optimisées
- ✅ Lazy loading
- ✅ CSS/JS minifiés
- ✅ Cache navigateur
- ✅ Temps de chargement < 3s

### SEO
- ✅ Structure HTML sémantique
- ✅ Balises meta
- ✅ Alt sur images
- ✅ URLs descriptives
- ✅ Sitemap

## 📞 Contacts projet

### Équipe
- **Client** : Ludivine & Olivier (partenaires PureLiink)
- **Designer** : [Votre nom]
- **Développeur** : [Votre nom]
- **Chef de projet** : [Votre nom]

### Réunions
- **Kick-off** : Définition du projet
- **Review zoning** : Validation architecture
- **Review wireframes** : Validation structure
- **Review mockups** : Validation design
- **UAT** : Tests utilisateur

## 📅 Timeline projet

| Phase | Durée | Livrables |
|-------|-------|-----------|
| Recherche | 2-3 jours | Brief, personas, benchmark |
| Zoning | 1-2 jours | Schémas zones |
| Wireframes | 3-5 jours | Wireframes toutes pages |
| Mockups | 5-10 jours | Maquettes HD |
| Prototype | 2-3 jours | Prototype interactif |
| Développement | 10-15 jours | Site fonctionnel |
| Tests | 2-3 jours | Corrections bugs |
| **TOTAL** | **25-40 jours** | Site en production |

## 🎓 Pour aller plus loin

### Livres recommandés
- "Don't Make Me Think" - Steve Krug
- "The Design of Everyday Things" - Don Norman
- "100 Things Every Designer Needs to Know About People" - Susan Weinschenk

### Cours en ligne
- **Coursera** - UI/UX Design Specialization
- **Udemy** - Web Design courses
- **Interaction Design Foundation** - UX courses

### Communautés
- **Designers Discord**
- **Reddit - r/web_design**
- **Figma Community**

---

## 📝 Notes importantes

> ⚠️ **Convention de nommage**
> 
> Utilisez cette nomenclature pour vos fichiers :
> 
> ```
> [type]-[page]-[device]-[version].[ext]
> 
> Exemples :
> zoning-accueil-v1.png
> wireframe-produits-desktop-v2.fig
> mockup-contact-mobile-final.png
> ```

> 💡 **Versioning**
> 
> - v1, v2, v3... pour les itérations
> - "final" pour la version validée
> - Gardez toujours les versions précédentes

> 🔒 **Sauvegarde**
> 
> - Sauvegardez régulièrement sur cloud (Google Drive, Dropbox)
> - Versionnez avec Git si possible
> - Exportez les PDF de présentation

---

## 🚀 Pour commencer

1. **Lisez la documentation** de chaque dossier
2. **Commencez par le zoning** (./zoning/)
3. **Progressez étape par étape** (ne sautez pas d'étapes !)
4. **Validez chaque phase** avant de passer à la suivante
5. **Itérez** basé sur les retours

---

📧 **Questions ?** Consultez les README de chaque dossier ou contactez l'équipe projet.

🎨 **Bonne conception !** 

*"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs*
