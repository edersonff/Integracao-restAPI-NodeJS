const { DataTypes } = require("sequelize");
const mysql = require("../database/mysql");
const postgre = require("../database/postgresql");

const stockConfig = {
  quantity: {
    type: DataTypes.INTEGER,
  },
  reserved: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.SMALLINT,
    defaultValue: 1,
  },
};

const postgresConfig = {
  ProductId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Products',
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}

const StockMysql = mysql.define("Stock", stockConfig);
const StockPostgresql = postgre.define("Stock", Object.assign(stockConfig, postgresConfig));

module.exports = {StockMysql, StockPostgresql};
