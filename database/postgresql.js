const { Sequelize } = require("sequelize");

const database = new Sequelize(
  "postgres://postgres@localhost:5433/Desafio_RestAPI_NodeJS",
  {
    dialect: "postgres",
    password: "123456",
    logging: false,
  }
);

module.exports = database;
