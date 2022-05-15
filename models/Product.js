const { DataTypes } = require("sequelize");
const mysql = require("../database/mysql");
const postgre = require("../database/postgresql");
const Stock = require("./Stock").StockMysql;

const productConfig = {
  code: {
    type: DataTypes.CHAR(12),       // example: XXX-YY-ZZ-AA-BB => XXXXYYZZAABB
    allowNull: false,               // required
  },
  name: {
    type: DataTypes.STRING(60),     // -> Table black 1.2 m
    allowNull: false,               // required
  },
  description: {
    type: DataTypes.TEXT,           // -> A very good table, it's black and used for ...
  },
  value: {
    type: DataTypes.DECIMAL(6, 2),  // -> ($)129.99 
    allowNull: false,               // required
  },
  status: {
    type: DataTypes.SMALLINT,       // -> 1/0 
    defaultValue: 1,                // starting at 1
  },
};

const ProductPostgresql = postgre.define("Product", productConfig);
const ProductMysql = mysql.define("Product", productConfig);

ProductMysql.hasOne(Stock, { onDelete: "CASCADE" });
ProductPostgresql.hasOne(Stock, { onDelete: "CASCADE" });

module.exports = { ProductMysql, ProductPostgresql };
