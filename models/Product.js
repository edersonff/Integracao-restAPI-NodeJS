const { DataTypes } = require("sequelize");
const db = require("../database/conn");

const Product = db.define("Product", {
  code: {
    type: DataTypes.CHAR(12), // example: XXX-YY-ZZ-AA-BB => XXXXYYZZAABB
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  },
  value: {
    type: DataTypes.FLOAT(6, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.TINYINT(1),
    defaultValue: 1,
  },
});

module.exports = Product;
