// Importa Express.
const express = require('express');

// Importa Rotas.
const routes = require('./routes');

// Cria e inicializa App.
const app = express();
app.listen(3335);

// Informa a aceitação do json como default.
app.use(express.json());

// Informa a utilização das Rotas.
app.use(routes);