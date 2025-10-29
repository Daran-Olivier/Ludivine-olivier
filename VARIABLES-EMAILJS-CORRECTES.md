# ✅ VARIABLES EMAILJS CORRECTES - À UTILISER DANS VOS TEMPLATES

## 🔧 PROBLÈME RÉSOLU
Les noms des champs dans les formulaires HTML ne correspondaient pas aux variables utilisées dans le JavaScript. **Tout est maintenant corrigé !**

---

## 📧 TEMPLATE 1 : Email de réception (template_cd6n0sm)

### Variables disponibles pour TOUS les formulaires :
- `{{form_type}}` - Type de formulaire (Contact, Affiliation, Newsletter, Avis)
- `{{from_name}}` - Nom complet de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur

### Variables spécifiques au formulaire CONTACT :
- `{{from_name}}` - Nom (vient du champ "nom")
- `{{from_email}}` - Email
- `{{phone}}` - Téléphone (vient du champ "tel")
- `{{age}}` - Tranche d'âge sélectionnée
- `{{objectifs}}` - Objectifs cochés (séparés par des virgules)
- `{{message}}` - Message ou "Demande de contact"
- `{{choix_contact}}` - "message" ou "rdv"
- `{{form_type}}` - "Contact"

### Variables spécifiques au formulaire AFFILIATION :
- `{{from_name}}` - Prénom + Nom (firstName + lastName)
- `{{from_email}}` - Email
- `{{phone}}` - Téléphone
- `{{age}}` - Tranche d'âge
- `{{motivation}}` - Motivation (texte libre)
- `{{newsletter}}` - "Oui" ou "Non"
- `{{form_type}}` - "Affiliation"

### Variables spécifiques au formulaire AVIS :
- `{{from_name}}` - Nom (champ "name")
- `{{from_email}}` - Email
- `{{rating}}` - Note (1 à 5 étoiles)
- `{{product}}` - Produit sélectionné
- `{{review}}` - Texte de l'avis
- `{{form_type}}` - "Avis"

### Variables spécifiques au formulaire NEWSLETTER :
- `{{from_email}}` - Email uniquement
- `{{form_type}}` - "Newsletter"
- `{{message}}` - "Nouvelle inscription à la newsletter"

---

## 📨 TEMPLATE 2 : Email de confirmation auto (template_fokk8zw)

### Variables disponibles :
- `{{to_email}}` - Email du destinataire (rempli automatiquement)
- `{{to_name}}` - Nom/Prénom du destinataire
  - Contact : `nom`
  - Affiliation : `firstName`
  - Avis : `name`
  - Newsletter : "Membre"

---

## 🎯 EXEMPLE DE TEMPLATE EMAIL (À copier dans EmailJS)

### Template 1 - Email de réception :

```html
<h2>Nouveau message depuis le formulaire {{form_type}}</h2>

<p><strong>Type de formulaire :</strong> {{form_type}}</p>
<p><strong>Nom :</strong> {{from_name}}</p>
<p><strong>Email :</strong> {{from_email}}</p>

<!-- Pour Contact -->
{{#if phone}}
<p><strong>Téléphone :</strong> {{phone}}</p>
{{/if}}

{{#if age}}
<p><strong>Tranche d'âge :</strong> {{age}}</p>
{{/if}}

{{#if objectifs}}
<p><strong>Objectifs :</strong> {{objectifs}}</p>
{{/if}}

{{#if choix_contact}}
<p><strong>Type de demande :</strong> {{choix_contact}}</p>
{{/if}}

<!-- Pour Affiliation -->
{{#if motivation}}
<p><strong>Motivation :</strong> {{motivation}}</p>
{{/if}}

{{#if newsletter}}
<p><strong>Inscription newsletter :</strong> {{newsletter}}</p>
{{/if}}

<!-- Pour Avis -->
{{#if rating}}
<p><strong>Note :</strong> {{rating}} ⭐</p>
{{/if}}

{{#if product}}
<p><strong>Produit :</strong> {{product}}</p>
{{/if}}

{{#if review}}
<p><strong>Avis :</strong></p>
<p>{{review}}</p>
{{/if}}

<!-- Pour tous -->
{{#if message}}
<p><strong>Message :</strong></p>
<p>{{message}}</p>
{{/if}}

<hr>
<p><em>Email envoyé automatiquement depuis le site PureLink</em></p>
```

### Template 2 - Confirmation automatique :

```html
<h2>Bonjour {{to_name}} ! 👋</h2>

<p>Merci pour votre message ! Nous l'avons bien reçu et nous reviendrons vers vous très rapidement.</p>

<p>À très bientôt,<br>
L'équipe Ludivine & Olivier - PureLink</p>

<hr>
<p><em>Ceci est un email automatique, merci de ne pas y répondre.</em></p>
```

---

## 🚀 ÉTAPES À SUIVRE MAINTENANT

### 1. Uploader le fichier corrigé sur Ionos
Uploadez le fichier `form-handler.js` (maintenant corrigé) sur votre serveur Ionos.

### 2. Configurer les templates EmailJS
1. Allez sur https://dashboard.emailjs.com/
2. Connectez-vous avec votre compte
3. Allez dans "Email Templates"
4. Éditez le template `template_cd6n0sm` (Email de réception)
5. Remplacez le contenu HTML par le template ci-dessus
6. Éditez le template `template_fokk8zw` (Confirmation auto)
7. Remplacez le contenu HTML par le template ci-dessus
8. **IMPORTANT** : Dans les paramètres du template 1, définissez "To Email" sur votre adresse email
9. Sauvegardez les modifications

### 3. Tester
1. Allez sur votre site
2. Remplissez le formulaire de contact
3. Vérifiez que vous recevez l'email avec TOUTES les informations
4. Vérifiez que l'utilisateur reçoit l'email de confirmation

---

## ✅ CE QUI A ÉTÉ CORRIGÉ

| Formulaire | Ancien problème | Correction |
|------------|----------------|------------|
| Contact | `formData.get("name")` | ✅ `formData.get("nom")` |
| Contact | `formData.get("phone")` | ✅ `formData.get("tel")` |
| Contact | Manque age, objectifs | ✅ Ajoutés |
| Affiliation | `formData.get("name")` + `formData.get("firstname")` | ✅ `formData.get("firstName")` + `formData.get("lastName")` |
| Affiliation | Manque age, newsletter | ✅ Ajoutés |
| Avis | Déjà correct | ✅ Pas de changement |
| Newsletter | Déjà correct | ✅ Pas de changement |

---

## 🆘 SI VOUS AVEZ ENCORE DES PROBLÈMES

1. Ouvrez la console du navigateur (F12)
2. Remplissez un formulaire
3. Regardez les erreurs affichées
4. Vérifiez que les templates EmailJS contiennent bien les variables listées ci-dessus
5. Vérifiez que "To Email" est bien configuré dans le template 1
