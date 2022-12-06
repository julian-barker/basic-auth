const { Sequelize } = require("sequelize");
const { UsersModelCtor } = require('./users.schema')

require('dotenv').config();

const DATABASE_URL = process.env.NODE_ENV === 'test' ?
  'sqlite::memory' :
  process.env.DATABASE_URL;

console.log(DATABASE_URL);

const sequelizeDatabase = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const Users = UsersModelCtor(sequelizeDatabase);

module.exports = { sequelizeDatabase , Users };
