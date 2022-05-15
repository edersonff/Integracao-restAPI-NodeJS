const { DataTypes } = require("sequelize");
const mysql = require("../database/mysql");
const postgre = require("../database/postgresql");
const Stock = require("./Stock").StockMysql;

const productConfig = {
  code: {
    type: DataTypes.CHAR(12), // example: XXX-YY-ZZ-AA-BB => XXXXYYZZAABB
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  value: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.SMALLINT,
    defaultValue: 1,
  },
};

const ProductPostgresql = postgre.define("Product", productConfig);
const ProductMysql = mysql.define("Product", productConfig);

ProductMysql.hasOne(Stock, { onDelete: "CASCADE" });
ProductPostgresql.hasOne(Stock, { onDelete: "CASCADE" });

module.exports = { ProductMysql, ProductPostgresql };
