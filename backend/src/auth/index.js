const jwt = require('jsonwebtoken');
const createRefreshToken = require('../utils/refreshToken');

function generateJwtAndRefreshToken(email, secret) {
  const token = jwt.sign(
    {
      subject: email,
      expiresIn: 5,
    },
    secret
  );

  const refreshToken = createRefreshToken(email);

  return {
    token,
    refreshToken,
  };
}

module.exports = generateJwtAndRefreshToken;
