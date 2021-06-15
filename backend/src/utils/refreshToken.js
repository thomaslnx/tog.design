const { v4: uuidv4 } = require('uuid');

const tokens = new Map();

async function createRefreshToken(email) {
  const currentTokens = tokens.get(email) ?? [];
  const refreshToken = uuidv4();

  tokens.set(email, [...currentTokens, refreshToken]);

  return refreshToken;
}

module.exports = createRefreshToken;
