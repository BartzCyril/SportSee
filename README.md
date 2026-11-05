# SportSee — tableau de bord sportif

> Page de profil d'une application de coaching sportif : graphiques d'activité, de sessions, de performance et de score, alimentés par une API Node.js.

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-22B5BF)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

**👉 Voir le site : [bartzcyril.github.io/SportSee/1](https://bartzcyril.github.io/SportSee/1)**

## Sujet

Projet de formation OpenClassrooms. SportSee, start-up de coaching sportif, veut une nouvelle page profil. Le Product Owner fournit maquettes et user stories ; le Lead Developer impose React, une bibliothèque de graphiques (D3 ou Recharts), une API Node.js fournie et la standardisation des données de l'API côté front.

## Fonctionnalités

- Message d'accueil personnalisé
- **Activité quotidienne** : poids et calories brûlées (histogramme)
- **Durée moyenne des sessions** par jour de la semaine (courbe)
- **Performance** par type d'activité (radar)
- **Score** de réalisation de l'objectif (jauge circulaire)
- Cartes nutritionnelles : calories, protéines, glucides, lipides
- États de chargement et d'erreur

## Compétences acquises

- **Data visualisation** avec Recharts : quatre types de graphiques, tooltips et axes personnalisés
- **Appels HTTP** vers une API REST avec `fetch` et gestion des erreurs
- **Standardisation des données** : une classe par ressource (`UserData`, `UserActivity`, `UserAverageSessions`, `UserPerformance`) qui transforme la réponse de l'API dans le format attendu par les composants
- **Données mockées** : le front peut basculer entre l'API réelle et des fichiers JSON locaux, ce qui permet de développer sans back-end et de déployer une démo statique
- **React + TypeScript** : composants typés, routage par identifiant d'utilisateur
- **Docker** pour lancer l'API fournie

## Lancer le projet en local

### API (dossier `back/`)

```bash
cd back
yarn install
yarn dev                 # http://localhost:3000
# ou avec Docker :
docker build -t sportsee-api . && docker run -p 3000:3000 sportsee-api
```

### Front (dossier `front/`)

```bash
cd front
npm install
npm run dev
```

Par défaut, le front lit les données mockées de `front/public/user/`. Pour utiliser l'API, passer `mockedApi` à `false` dans `front/src/utils/api/api.ts`.

## Site

[Page Profil Utilisateur SportSee](https://bartzcyril.github.io/SportSee/1)

## Maquette

[Maquette Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?type=design&node-id=0-1&mode=design)
