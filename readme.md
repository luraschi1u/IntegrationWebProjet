# Bienvenue sur notre projet d'Intégration Web
Sur ce **readme.md** vous aurez la procédure pour installer ce projet, ainsi que tous les modules nécessaires à son bon fonctionnement. Ainsi que l'architecture des dossiers et comment effectuer les modifications.


# Préparation de l'espace de travail
## Téléchargement de mon projet

Sur votre ordinateur, créer un **nouveau dossier**, installer mon projet en utilisant le **git clone** ou alors en téléchargent le dossier du projet **.zip** dans le dossier créer précédemment.  

## Installation de NodeJS

Aller sur le site officiel https://nodejs.org/en/download/ et télécharger la version qui vous intéresse.

## Ajout des modules

Pour que le projet prenne en compte tous les modules installés pour notre bon fonctionnement, faites un `npm install` dans le dossier src.
# Le gulpfile

Ce fichier contient toutes les fonctions nécessaires pour développer nos pages. En passant par des fonctions pour copier les fichiers .pug, .sass, ... ou encore des fonctions nous permettant de visionner notre site à chaque modification en réel. Cet outil est donc très important pour notre développement.
# Hiérarchie du projet
La première chose à savoir est qu'il ne faut jamais toucher le dossier **dist** car il est généré automatiquement !
Donc pour effectuer n'importe quelle modification il faudra les effectuer dans le dossier **src**. 

Dans ce dossier **src** nous retrouvons les dossiers **pug, sass, js, images**. Ces dossiers contiennent le nécessaire du développement du site. 
Pour modifier le style ça sera le dossier sass, le contenu de la page lui même le dossier pug, les scripts pour genre les graphiques ou la map dans le dossier js. .


## Contenu du site
Le site contient 8 pages. Ces 8 pages contiennent une navbar et un footer commun.

 - Une page d'accueil avec un carousel, 
 - Une page avec les services de l'entreprise,
 - Une page blog avec tous les articles,
 - Une page article pour afficher les détails d'un article et son contenu,
 - Une page statistique avec deux graphiques (colonnes et camembert)
 - Une page utilisateurs avec un tableau sur les droits des utilisateurs,
 - Une page avec un formulaire pour nous contacter, une carte googleMaps pour nous localiser et nos informations (horaires, mail, numéro de téléphone),
 - Une page de connexion (soit se connecter, soit s'inscrire).
