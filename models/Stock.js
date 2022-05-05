const { DataTypes } = require("sequelize/types");
const db = require("../database/conn");

const Category = require("./Category");

const Product = db.define("Stock", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  reserved: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.TINYINT(1),
    defaultValue: 1,
  },
});

Product.hasOne(Category);
Category.hasMany(Product);

module.exports = Product;
