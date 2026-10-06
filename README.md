# Civic Platform — Prototype V3

## Vision
Une base de code commune, mais **une instance indépendante par commune**.

Chaque commune possède :
- sa configuration,
- sa base de données,
- ses fichiers,
- ses utilisateurs,
- ses secrets,
- son domaine,
- ses contenus,
- ses sauvegardes.

Aucun administrateur municipal ne voit ou ne choisit une autre commune.

## Fichiers du prototype
- `demo.html` : écran d'entrée du prototype
- `index.html` : application citoyenne, pensée téléphone en priorité
- `admin.html` : administration municipale, pensée PC/tablette et utilisable sur téléphone
- `config.json` : exemple de configuration de la commune
- `styles.css` : design system partagé
- `common.js` : moteur d'application de la configuration

## Principe white-label
Le moteur ne doit jamais dépendre de Ferrières-en-Brie.

Les éléments suivants sont des données/configurations :
- nom de la commune,
- nom de l'application,
- logo,
- couleurs,
- coordonnées,
- modules actifs,
- catégories,
- textes légaux,
- liens,
- flux RSS,
- réseaux sociaux,
- contenus.

## Architecture cible recommandée
Code commun :
- Next.js / React / TypeScript
- composants partagés
- modules activables

Pour chaque commune :
- 1 projet Vercel distinct
- 1 projet Supabase distinct
- 1 stockage distinct
- 1 jeu de variables d'environnement distinct
- 1 domaine ou sous-domaine propre
- sauvegardes et journaux séparés

## Déploiement d'une nouvelle commune
1. Créer l'instance Supabase.
2. Créer le projet Vercel depuis le code commun.
3. Renseigner la configuration initiale de la commune.
4. Charger son logo, ses couleurs et ses coordonnées.
5. Activer ses modules.
6. Créer le premier administrateur municipal.
7. Connecter les flux/API utiles.
8. Tester.
9. Mettre en production.

Le code métier n'est pas dupliqué manuellement : les évolutions du produit sont développées dans le moteur commun puis publiées sur les instances concernées.
