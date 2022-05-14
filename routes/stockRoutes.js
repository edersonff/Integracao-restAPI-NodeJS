const express = require("express");
const Router = express.Router();
//controller
const StockController = require("../controllers/StockController");
//midllewares
const schema = require('../middlewares/schema/schema')

Router.get("/:id/estoque", StockController.index);
Router.patch("/:id/estoque", schema('stock'), StockController.update);
Router.delete("/:id/estoque", StockController.destroy);

module.exports = Router;
