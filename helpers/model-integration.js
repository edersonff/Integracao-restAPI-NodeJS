const Models = [];
Models["Stock"] = require("../models/Stock");
Models["Product"] = require("../models/Product");
Models["Category"] = require("../models/Category");
module.exports = class modelIntegration {
  constructor(mysql, postgre) {
    //inicializate models
    this.postgre = postgre;
    this.mysql = mysql;
  }
  async findOne(options) {
    //get mysql data
    let mysql = await this.mysql.findOne(options);
    //return postgre only if mysql is null
    if (!mysql) mysql = await this.postgre.findOne(options);

    return mysql;
  }
  async findAll(options) {
    //get mysql
    const mysql = await this.mysql.findAll(options);
    //concat mysql data (older -to-> younger data)
    return (await this.postgre.findAll(options)).concat(mysql);
  }
  async create(options) {
    return await this.mysql.create(options);
  }
};
