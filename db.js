const Sequelize = require('sequelize');

const databaseURL =
  process.env.DATABASE_URL ||
  'postgres://postgres:6772@localhost:5432/postgres';
const db = new Sequelize(databaseURL);

db.sync()
  .then(() => console.log('database has been updated'))
  .catch(error => console.log(error));

module.exports = db;
