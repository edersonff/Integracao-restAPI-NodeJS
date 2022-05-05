const Product = require("../models/Product");

module.exports = class productRoutes {
  static async index(req, res) {
    try {
      // get all products
      const products = Product.findAll();
      //send data
      res.json({ data: products });
      //
    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }
  static async show(req, res) {
    const { id } = req.params;

    try {
      // get the product by id
      const product = Product.findOne({ id });
      //send data
      res.json({ data: product });
      //
    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }
  static async store(req, res) {
    const { code, name, description, value } = req.body;

    try {
      // get the product by id
      const product = Product.findOne({ id });
      //send data
      res.json({ data: product });
      //
    } catch (err) {
      res.json({ msg: err }).status(500);
    }

  }
  static async update() {}
  static async destroy() {}
};
