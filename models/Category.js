const { DataTypes } = require("sequelize");
const mysql = require("../database/mysql");
const postgre = require("../database/postgresql");

const categoryConfig = {
  code: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  status: {
    type: DataTypes.SMALLINT,
    defaultValue: 1,
  },
}

const CategoryMysql = mysql.define("Category", categoryConfig);
const CategoryPostgresql = postgre.define("Category", categoryConfig);

module.exports = {CategoryMysql, CategoryPostgresql};
