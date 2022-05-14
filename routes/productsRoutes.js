const express = require("express");
const Router = express.Router();
//controller
const ProductController = require("../controllers/ProductController");
//midllewares
const schema = require('../middlewares/schema/schema')

Router.get("/", ProductController.index);
Router.get("/:id", ProductController.show);
Router.post("/", schema('product', false), schema('productStore'), ProductController.store);
Router.patch("/:id", schema('product'), ProductController.update);
Router.delete("/:id", ProductController.destroy);

module.exports = Router;
