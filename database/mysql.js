// imports
const { Sequelize } = require("sequelize");

const database = new Sequelize("Desafio_RestAPI_NodeJS", "root", "", {  // your database connection info -> ("DATABASE_NAME", "USER", "PASSWORD")
  host: "localhost",                                                    // host ip
  dialect: "mysql",
  logging: false,
});

module.exports = database;
