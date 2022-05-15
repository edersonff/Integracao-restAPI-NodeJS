const { DataTypes } = require("sequelize");
const mysql = require("../database/mysql");
const postgre = require("../database/postgresql");

const categoryConfig = {
  code: {
    type: DataTypes.STRING(15),   // -> new_tables
    allowNull: false              // required
  },
  title: {
    type: DataTypes.STRING(60),   // -> New and good tables
    allowNull: false              // required
  },
  status: {
    type: DataTypes.SMALLINT,     // -> 1/0 
    defaultValue: 1,              // starting at 1
  },
}

const CategoryMysql = mysql.define("Category", categoryConfig);
const CategoryPostgresql = postgre.define("Category", categoryConfig);

module.exports = {CategoryMysql, CategoryPostgresql};
