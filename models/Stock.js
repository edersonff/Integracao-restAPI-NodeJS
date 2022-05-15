const { DataTypes } = require("sequelize");
const mysql = require("../database/mysql");
const postgre = require("../database/postgresql");

const stockConfig = {
  quantity: {
    type: DataTypes.INTEGER, // -> 200 uni
  },
  reserved: {
    type: DataTypes.INTEGER, // -> 100 uni
  },
  status: {
    type: DataTypes.SMALLINT, // -> 1/0 starting at 1
    defaultValue: 1,          // starting at 1
  },
};

// postgre refences because hasOne and hasMany don't work
const postgresConfig = {
  ProductId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Products',
      key: 'id'
    },
    onDelete: 'CASCADE'       // -> on delete cascade(delete everything related)
  }
}

const StockMysql = mysql.define("Stock", stockConfig);
const StockPostgresql = postgre.define("Stock", Object.assign(stockConfig, postgresConfig));

module.exports = {StockMysql, StockPostgresql};
