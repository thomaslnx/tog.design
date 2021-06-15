const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');

// const { response } = require('express');
const routes = require('./routes');

const SessionController = require('./Controllers/SessionController');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(routes);

// function CheckAuthMiddleware(req, res) {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return response.status(401).json({
//       error: 'Token invalid/not present',
//     });
//   }
// }

app.post('/session', SessionController.create);

app.listen(port, () => console.log(`Server on in port ${port}`));
