# Lab 4 - React Native : Styliser BookShelf avec StyleSheet

Ce projet implémente les objectifs du **Lab 4 React Native** : styliser l'application de bibliothèque numérique **BookShelf** selon une charte graphique professionnelle, puis extraire l'ensemble des styles en ligne (inline) vers l'API `StyleSheet`.

---

## 🎨 Charte Graphique BookShelf

| Couleur | Utilisation |
| :--- | :--- |
| `#EE9972` | Accent / bandeau (Header et Footer), bordures d'accentuation |
| `#333333` | Fond principal sombre de l'application (`App.js`, `WelcomeScreen.js`) |
| `#EDEFEE` | Texte clair et lisible sur fond sombre |
| `black` | Texte de l'en-tête et du pied de page |
| `white` | Indicateur de défilement du `ScrollView` |

---

## 📁 Architecture des Composants

```
lab4-reactnative/
├── App.js               # Composant racine : structure globale (Header + Welcome + Footer)
├── BookShelfHeader.js   # En-tête avec titre "BookShelf" et bandeau #EE9972
├── WelcomeScreen.js     # Écran d'accueil défilant (ScrollView) avec texte descriptif
├── BookShelfFooter.js   # Pied de page avec mention de droits réservés
├── app.json             # Configuration Expo
├── package.json         # Dépendances et scripts de l'application
└── README.md            # Documentation du lab
```

---

## 🛠️ Étapes réalisées

### Étape 1 : Application de la nouvelle charte graphique
- Remplacement des styles arbitraires (violet, bleu, etc.) par la palette officielle.
- Harmonisation des contrastes pour garantir une lisibilité optimale.
- Utilisation d'un `ScrollView` avec `indicatorStyle="white"` dans `WelcomeScreen` pour accueillir les textes longs.

### Étape 2 : Extraction vers l'API `StyleSheet`
- Import de `StyleSheet` dans chaque composant depuis `react-native`.
- Centralisation de tous les styles à la fin des fichiers via `StyleSheet.create({...})`.
- Nommage sémantique des classes de style (`appContainer`, `container`, `headerText`, `screenContainer`, `title`, `description`, `footerText`, etc.).
- Élimination de tous les styles inline dans le JSX.

---

## 🚀 Lancer l'application

Pour installer les dépendances compatibles avec votre version d'Expo Go (SDK 58) :

```bash
# 1. Aligner et installer les dépendances compatibles SDK 58
npx expo install expo@^58.0.0 --fix

# Ou directement :
npm install

# 2. Démarrer le serveur de développement Expo (avec vidage du cache Metro)
npx expo start -c
```
