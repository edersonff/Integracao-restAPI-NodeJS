const Product = require("../models/Product");
const Stock = require("../models/Stock");

module.exports = class stockRoutes {
  static async index(req, res) {
    const { id } = req.params;
    try {
      // get product and stock
      const product = await Product.findOne({
        include: [
          {
            model: Stock,
            where: {
              ProductId: id,
            },
          },
        ],
      });

      // verify if stock exists
      if (!product) {
        return res.json({ msg: "Produto/estoque não encontrado!" }).status(404);
      }

      //send data
      res.json({ data: product });
      //
    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    try {
      // get stock where ProductId is the param Id
      const stock = await Stock.findOne({
        where: {
          ProductId: id,
        }
      });

      // verify if stock exists
      if (!stock) {
        return res.json({ msg: "Estoque não encontrado!" }).status(404);
      }

      // get all body keys and update the stock
      Object.keys(req.body).map((key) => {
        stock[key] = req.body[key];
      });

      // save stock data
      await stock.save();

      //send data
      res.json({ data: stock });
      //
    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }

  static async destroy(req, res) {
    res.json({ msg: "Ação não pode ser feita, estoque vinculado a produto!" }).status(501);
  }
};
