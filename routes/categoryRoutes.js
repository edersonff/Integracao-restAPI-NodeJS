const express = require("express");
const Router = express.Router();
//controller
const categoryRoutes = require("../controllers/CategoryController");
//midllewares
const schema = require('../middlewares/schema/schema')

Router.get("/", categoryRoutes.index);
Router.get("/:id", categoryRoutes.show);
Router.post("/", schema('category'), schema('categoryStore'), categoryRoutes.store);
Router.patch("/:id", schema('category'), categoryRoutes.update);
Router.delete("/:id", categoryRoutes.destroy);

module.exports = Router;
