const { Sequelize } = require('sequelize');

// Connection object
const database = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.HOST,
  dialect: 'postgres',
  logging: false,
  // omitNull: true,
});

module.exports = {
  database
}