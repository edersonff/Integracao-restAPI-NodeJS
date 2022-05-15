const { Sequelize } = require("sequelize");

const database = new Sequelize(
  "postgres://postgres@localhost:5433/Desafio_RestAPI_NodeJS",  //your database connection info -> postgres://postgres@IP:PORT/DATABASE_NAME
  {
    dialect: "postgres",
    password: "123456",                                         //your password
    logging: false,
  }
);

module.exports = database;
