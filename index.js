//external imports
const express = require("express");
const cors = require("cors");

//database import
const mysql = require("./database/mysql");
const postgre = require("./database/mysql");

//app iniciliazation
const app = express();

//body config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//configuration body
app.use(express.json());

//routes import
const productRoutes = require("./routes/productsRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const stockRoutes = require("./routes/stockRoutes");

//use routes
app.use("/produtos", productRoutes);
app.use("/categorias", categoryRoutes);
app.use("/categorias", stockRoutes);

mysql
  //mysql inicialization
  .sync()
  .then(() => {
    //postgre inicialization
    postgre.sync(() => {
      //postgre listening at port 3000
      app.listen(3000);
    });
  });
