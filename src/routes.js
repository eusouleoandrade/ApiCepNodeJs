// Importa a especificação de rotas do Express.
const { Router } = require('express');

// Importa o AdressCepController.
const AdressCepController = require('./controllers/AdressCepController');

const routes = Router();

// Registra as rotas.
routes.get('/AdressCep', AdressCepController.show);

module.exports = routes;