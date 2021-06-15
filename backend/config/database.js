require('dotenv').config();

const database = {
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  dialect: 'postgres',
};

module.exports = {
  database,
};
