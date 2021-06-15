const express = require('express');
const cors = require('cors');
const db = require('../models');

const routes = require('./routes');

const SessionController = require('./Controllers/SessionController');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(routes);
db.sequelize.sync();

app.post('/session', SessionController.create);

app.listen(port, () => console.log(`Server on in port ${port}`));
