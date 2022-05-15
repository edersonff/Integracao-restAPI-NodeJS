//external imports
const express = require("express");
const cors = require("cors");
const cron = require("node-cron");

//database import
const mysql = require("./database/mysql");
const postgre = require("./database/postgresql");

//app iniciliazation
const app = express();

//schedule save data at 02:00 UTC+3
cron.schedule("0 2 * * *",
  () => {
    exec("node config.js", (error) => {
      if (error) return console.error(`error: ${error.message}`);
      else console.log("Salvando dados Mysql para Postgresql");
    });
  },
  {
    scheduled: true,
    timezone: "America/Sao_Paulo",
  }
);

//body config for json response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors config
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200, methods: ['GET', 'PATCH', 'POST', 'DELETE'],}));

//routes import
const productRoutes = require("./routes/productsRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const stockRoutes = require("./routes/stockRoutes");

//using routes
app.use("/produtos", productRoutes);
app.use("/categorias", categoryRoutes);
app.use("/categorias", stockRoutes);

mysql
  //mysql inicialization
  .sync()
  .then(() => {
    //postgre inicialization
    postgre.sync().then(() => {
      //listening at port 3000
      app.listen(3000);
    });
  });
