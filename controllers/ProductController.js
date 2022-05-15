const { ProductMysql, ProductPostgresql } = require("../models/Product");
const { StockMysql, StockPostgresql } = require("../models/Stock");
const integration = require("../helpers/model-integration");

const Product = new integration(ProductMysql, ProductPostgresql);
const Stock = new integration(StockMysql, StockPostgresql);

module.exports = class productRoutes {
  static async index(req, res) {
    try {
      // get all products
      const products = await Product.findAll();

      // verify if product exists
      if (!products) {
        return res.json({ msg: "Nenhum produto encontrado!" }).status(404);
      }

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
      const product = await Product.findOne({ where: { id }, raw: true });

      // verify if product exists
      if (!product) {
        return res.json({ msg: "Produto não encontrado!" }).status(404);
      }

      //send data
      res.json({ data: product });
      //
    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }

  static async store(req, res) {
    try {
      // store, save product
      const product = await Product.create(req.body);

      //create stock
      await Stock.create({ ProductId: product.id });

      //send new product data
      res.json({ data: product }).status(201);
    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    try {
      // get product by id
      const product = await Product.findOne({ where: { id } });

      // verify if product exists
      if (!product) {
        return res.json({ msg: "Produto não encontrado!" }).status(404);
      }

      // get all body keys and update the product
      Object.keys(req.body).map((key) => {
        product[key] = req.body[key];
      });

      // update, save product
      await product.save();

      //send new product data
      res.json({ msg: "Produto atualizado!", data: product });
    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }

  static async destroy(req, res) {
    const { id } = req.params;
    try {
      // get product by id
      const product = await Product.findOne({ where: { id } });

      // verify if product exists
      if (!product) {
        return res.json({ msg: "Produto não encontrado!" }).status(404);
      }

      // delete the product
      await product.destroy();

      res.json({ msg: "Produto excluido!", data: product });
    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }
};
