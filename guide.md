# Création d'un dossier ci-cd-tests
mkdir ci-cd-tests

# Installation de npm
npm init
## Un fichier package.json a été créé

# Créer un repository github ci-cd-tests : public, pas de template, pas de readme

# Initialisation de git
git init
git remote add origin https://github.com/c13on-x/ci-cd-tests.git
git branch -M main
git push -u origin main
## Une erreur se produit car le dossier local contient déjà des fichiers. Il faut donc commit les changements
git add .
git commit -m "Initial commit"
git push -u origin main
## Les fichiers sont push vers le repo github

# Ajout d'un fichier readme.md
# Push des modifications

# Installation d'express
npm install express
## un fichier package-lock.json est créé ainsi qu'un dossier node_modules

# Création d'un fichier caché .gitignore pour ignorer le node_modules :
node_modules/
## vérification :
git status
## Seuls .gitignore et package-lock.json apparaissent et le dossier node_modules et son contenu sont ignorés

# Installation de jest, supertest et eslint@8 en mode développeur
npm install --save-dev jest supertest eslint@8