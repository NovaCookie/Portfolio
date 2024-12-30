
# Mon Projet React avec Next.js

Ce projet utilise **React** et **Next.js** pour construire une application moderne et performante. Ce README fournit des instructions pour l'installation et l'exécution de l'application en local.

## Prérequis

Avant de commencer, assurez-vous que vous avez installé **Node.js** et **npm** sur votre machine.

### 1. Installer Node.js et npm

Téléchargez et installez la dernière version de [Node.js](https://nodejs.org/). L'installation de Node.js inclut également **npm** (le gestionnaire de paquets pour Node.js).

Vous pouvez vérifier si Node.js et npm sont correctement installés en exécutant les commandes suivantes dans votre terminal :

```bash
node -v
npm -v
```

Ces commandes devraient renvoyer les versions installées de Node.js et npm.

### 2. Installer les dépendances du projet

Une fois que vous avez cloné le projet ou téléchargé les fichiers sources, suivez ces étapes pour installer les dépendances nécessaires :

1. Ouvrez votre terminal et naviguez dans le répertoire de votre projet.

```bash
cd chemin/vers/votre/projet
```

2. Installez les dépendances du projet avec npm :

```bash
npm install
```

Cela va installer toutes les dépendances définies dans le fichier `package.json`.

## Lancer le projet en local

Une fois les dépendances installées, vous pouvez démarrer le serveur de développement local.

### Lancer le serveur de développement

Pour démarrer l'application en mode développement, exécutez la commande suivante :

```bash
npm run dev
```

Cela démarre le serveur de développement et vous pouvez accéder à l'application en ouvrant votre navigateur à l'adresse suivante : 

```
http://localhost:3000
```

### Environnement de développement

Le projet utilise le serveur de développement de **Next.js** qui offre des fonctionnalités de **rechargement à chaud** (Hot Reload) pour vous permettre de voir instantanément les changements que vous effectuez dans le code.

## Scripts disponibles

Voici les commandes courantes que vous pouvez utiliser avec npm :

- **`npm run dev`** : Démarre l'application en mode développement.
- **`npm run build`** : Crée une version optimisée de l'application pour la production.
- **`npm run start`** : Démarre l'application en mode production après l'avoir construite avec `npm run build`.
- **`npm run lint`** : Exécute un linter pour analyser le code et détecter les erreurs de style.

## Déploiement en production

Lorsque vous êtes prêt à déployer votre application, exécutez la commande suivante pour créer un build optimisé pour la production :

```bash
npm run build
```

Cela crée un dossier `.next/` contenant les fichiers optimisés pour le déploiement. Vous pouvez ensuite déployer votre application sur un serveur ou une plateforme comme **Vercel**, **Netlify**, ou un serveur Node.js classique.

### Déploiement sur Vercel

Si vous déployez votre application sur **Vercel** (la plateforme recommandée pour Next.js), vous pouvez simplement lier votre dépôt GitHub, GitLab ou Bitbucket à **Vercel**, et le déploiement sera automatique à chaque push sur votre branche principale.

## Structure du projet

Voici un aperçu de la structure des fichiers du projet :

```
my-nextjs-project/

├── public/             # Dossier pour les images et fichiers statiques
|    ├── styles/        # Fichiers CSS ou SCSS pour la mise en page
|    ├── datas/         # Fichiers Json pour les informations
|    └── images/        # Les images
├── src
|    ├── components/    # Composants React réutilisables
|    └── app/           # Fichier pour le rendu final sur le navigateur
├── .gitignore          # Liste des fichiers à ignorer par Git
├── package.json        # Dépendances et scripts du projet
└── next.config.js      # Configuration de Next.js
```

## Auteurs

- [NovaCookie](https://github.com/NovaCookie/Portfolio/) - Créateur et développeur principal du projet.

## Remerciements

- [Next.js](https://nextjs.org/) pour la structure de l'application.
- [React](https://reactjs.org/) pour la bibliothèque UI.