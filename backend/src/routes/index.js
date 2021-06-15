const express = require('express');
const SessionController = require('../Controllers/SessionController');

const routes = express.Router();

routes.get('/session', SessionController.create);

module.exports = routes;
