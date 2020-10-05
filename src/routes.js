// Importa a especificação de rotas do Express.
const { Router } = require('express');

// Importa o AdressCepController.
const AdressCepController = require('./controllers/AdressCepController');

// Importa a HomeController
const HomeController = require('./controllers/HomeController');

const routes = Router();

// Registra as rotas.
routes.get('/AdressCep', AdressCepController.show);
routes.get('/', HomeController.show);

module.exports = routes;