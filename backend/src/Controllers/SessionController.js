const bcrypt = require('bcrypt');
const { User } = require('../../models');
const generateJwtAndRefreshToken = require('../auth');

require('dotenv').config();

class SessionController {
  async create(req, res) {
    const { email, password } = req.body;
    const secret = process.env.SECRET;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    const comparedPassword = await bcrypt.compare(password, user.password);

    if (!user.email || !comparedPassword) {
      return res.status(401).json({ message: 'Email or password incorrect' });
    }

    const { token, refreshToken } = generateJwtAndRefreshToken(email, secret);

    return res.json({
      token,
      refreshToken,
    });
  }
}

module.exports = new SessionController();
