# 📧 Guide de Configuration des Formulaires Email

## 🎯 Objectif
Recevoir tous les messages des formulaires directement dans votre boîte mail.

---

## 📋 Formulaires configurés

1. ✉️ **Formulaire de contact** (contact.html)
2. 🤝 **Formulaire d'affiliation** (affiliation.html)
3. ⭐ **Formulaire d'avis** (avis.html)
4. 📰 **Newsletters** (toutes les pages)

---

## ⚡ MÉTHODE 1 : Formspree (RECOMMANDÉ - Gratuit et Simple)

### Étape 1 : Créer un compte Formspree

1. Allez sur **https://formspree.io**
2. Cliquez sur **"Get Started"**
3. Créez un compte gratuit (avec Google, GitHub ou email)
4. Confirmez votre email

### Étape 2 : Créer vos formulaires

Une fois connecté, créez **4 formulaires différents** :

#### Formulaire 1 : CONTACT
- Cliquez sur **"+ New Form"**
- Nom : `Contact - Ludivine & Olivier`
- Email de réception : `votre-email@exemple.com`
- Copiez le **Form ID** (ressemble à : `xpwagryk`)

#### Formulaire 2 : NEWSLETTER
- Cliquez sur **"+ New Form"**
- Nom : `Newsletter - Ludivine & Olivier`
- Email de réception : `votre-email@exemple.com`
- Copiez le **Form ID**

#### Formulaire 3 : AFFILIATION
- Cliquez sur **"+ New Form"**
- Nom : `Affiliation - Ludivine & Olivier`
- Email de réception : `votre-email@exemple.com`
- Copiez le **Form ID**

#### Formulaire 4 : AVIS
- Cliquez sur **"+ New Form"**
- Nom : `Avis - Ludivine & Olivier`
- Email de réception : `votre-email@exemple.com`
- Copiez le **Form ID**

### Étape 3 : Configurer le fichier form-handler.js

Ouvrez le fichier `form-handler.js` et remplacez les lignes 8-11 :

```javascript
const FORMSPREE_CONFIG = {
    contact: 'https://formspree.io/f/VOTRE_ID_CONTACT',      // Ex: xpwagryk
    newsletter: 'https://formspree.io/f/VOTRE_ID_NEWSLETTER', // Ex: xyzabc12
    affiliation: 'https://formspree.io/f/VOTRE_ID_AFFILIATION', // Ex: abc12xyz
    review: 'https://formspree.io/f/VOTRE_ID_AVIS'           // Ex: xyz789abc
};
```

### Étape 4 : Ajouter le script aux pages

Le script `form-handler.js` doit être inclus sur ces pages :
- ✅ contact.html
- ✅ affiliation.html
- ✅ avis.html
- ✅ Toutes les pages avec newsletter (déjà fait dans le footer)

**Je vais maintenant ajouter automatiquement ce script à toutes les pages.**

---

## 📊 Fonctionnalités incluses

✅ Envoi par email instantané
✅ Protection anti-spam
✅ Validation des champs
✅ Messages de confirmation animés
✅ Indicateurs de chargement
✅ Réinitialisation automatique des formulaires
✅ Compatible mobile

---

## 📧 Format des emails reçus

### Email de CONTACT :
```
Sujet : Nouveau message de [Nom du contact]

Nom : John Doe
Email : john@exemple.com
Téléphone : 06 12 34 56 78
Sujet : Demande d'information
Message : Je souhaite en savoir plus sur...
```

### Email de NEWSLETTER :
```
Sujet : Nouvelle inscription à la newsletter

Email : marie@exemple.com
Source : Newsletter footer
```

### Email d'AFFILIATION :
```
Sujet : Nouvelle demande d'affiliation - Doe John

Nom : Doe
Prénom : John
Email : john@exemple.com
Téléphone : 06 12 34 56 78
Motivation : Je suis passionné par...
Expérience : 5 ans dans le domaine...
```

### Email d'AVIS :
```
Sujet : Nouvel avis - 5★ - Marie Dubois

Nom : Marie Dubois
Email : marie@exemple.com
Produit : Oméga-3
Note : 5
Titre : Excellent produit !
Commentaire : J'ai adoré ce produit car...
```

---

## 🚀 Mise en ligne

Formspree fonctionne **immédiatement** une fois configuré :
- Aucun serveur nécessaire
- Fonctionne sur n'importe quel hébergement (GitHub Pages, Netlify, etc.)
- Limite gratuite : **50 soumissions/mois**
- Si besoin de plus : Plan Pro à 10$/mois (1000 soumissions)

---

## 🔒 Sécurité

✅ Protection anti-spam intégrée (reCAPTCHA)
✅ Validation côté serveur
✅ Limite de taux (rate limiting)
✅ Emails de confirmation optionnels

---

## 🆘 Alternative : Solution PHP

Si vous préférez une solution sur votre propre serveur, je peux créer un script PHP.
**Prérequis** : Hébergement avec PHP et fonction `mail()` activée.

Dites-moi si vous préférez cette option !

---

## 📞 Support

En cas de problème :
1. Vérifiez que les Form ID sont corrects
2. Vérifiez la console du navigateur (F12 > Console)
3. Vérifiez les spams de votre boîte mail
4. Contactez le support Formspree : https://help.formspree.io

---

**Prochaine étape** : Je vais maintenant ajouter le script `form-handler.js` à toutes les pages concernées.
