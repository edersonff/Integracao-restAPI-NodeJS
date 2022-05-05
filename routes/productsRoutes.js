const express = require("express");
const Router = express.Router();
//controller
const productRoutes = require("../controllers/ProductController");
//midllewares
const checkBody = require("../middlewares/checkBody");

Router.get("/", productRoutes.index);
Router.get("/:id", productRoutes.show);
Router.post("/",(req,res,next)=>{checkBody(req,res,next,['name'])}, productRoutes.store);

module.exports = Router;
