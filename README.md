# Sophrolo'Joie – Site web

Site complet de Cathy de Almeida, sophrologue à Montauriol.

## Fichiers

```
sophrolojoie/
├── index.html              ← Accueil
├── la-sophrologie.html     ← La sophrologie
├── seances-et-tarifs.html  ← Séances & tarifs
├── votre-sophrologue.html  ← Votre sophrologue
├── contact.html            ← Contact
├── styles.css              ← Feuille de style unique
├── script.js               ← JavaScript (navigation, animations, formulaire)
└── README.md               ← Ce fichier
```

## Hébergement sur GitHub Pages (GRATUIT)

1. Créer un compte sur https://github.com
2. Créer un nouveau dépôt public nommé `sophrolojoie` (ou tout autre nom)
3. Uploader tous les fichiers dans ce dépôt
4. Aller dans **Settings → Pages**
5. Choisir la branche `main` comme source
6. Le site sera accessible à : `https://votre-pseudo.github.io/sophrolojoie/`

## Nom de domaine personnalisé (optionnel)

Pour utiliser `sophrolojoie.fr` avec GitHub Pages :
- Créer un fichier `CNAME` contenant uniquement : `sophrolojoie.fr`
- Configurer les DNS chez votre registrar (OVH, Gandi...) :
  - Type A → 185.199.108.153
  - Type A → 185.199.109.153
  - Type A → 185.199.110.153
  - Type A → 185.199.111.153

**Coût estimé : ~10 €/an** (nom de domaine uniquement, hébergement GRATUIT)

## Formulaire de contact

Le formulaire est actuellement en mode démonstration (affiche un message de confirmation).
Pour recevoir les emails, connecter un service comme :
- **Formspree** (gratuit jusqu'à 50 soumissions/mois) : https://formspree.io
- Changer `action` du formulaire : `<form action="https://formspree.io/f/VOTRE_ID">`
