// imports
const { Sequelize } = require("sequelize");
const postgresql = require("./postgresql");

let queryLog;
const database = new Sequelize("Desafio_RestAPI_NodeJS", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: (str) => {
    queryLog = str.replace("Executing (default): ", "").replaceAll("`", '"');
  },
  hooks: {
    // concat with postgresql
    beforeFind: async (query) => {

      console.log(queryLog);
    },
  },
});

module.exports = database;
