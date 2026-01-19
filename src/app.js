// Charger le module express
const express = require('express')
// Récupération du fichier routes. Ce que fait le fichier routes.js est stocké dans une variable routes
const routes = require('./routes')

// Création d'un objet app qui utlise express (constructeur)
const app = express()

app.use('/', routes)

// Démarre le serveur uniquement si le fichier est exécuté directement
if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

module.exports = app