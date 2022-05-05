const { Sequelize } = require("sequelize");

const database = new Sequelize("Desafio_RestAPI_NodeJS", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = database;
