const express = require('express');
const SessionController = require('../Controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

module.exports = routes;
