const { DataTypes } = require("sequelize/types");
const db = require("../database/conn");

const Product = db.define("Category", {
  code: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  status: {
    type: DataTypes.TINYINT(1),
    defaultValue: 1,
  },
});

module.exports = Product;
