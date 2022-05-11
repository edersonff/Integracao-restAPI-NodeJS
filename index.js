//external imports
const express = require("express");
const cors = require("cors");

//database import
const conn = require("./database/conn");

//app iniciliazation
const app = express();

//body config
app.use(express.json());
app.use(express.urlencoded());

//cors
app.use(cors({ credentials: true, origin: 'http://localhost:3000'}));

//configuration body
app.use(express.json());

//routes import
const productRoutes = require("./routes/productsRoutes");

//use routes
app.use("/", productRoutes);

//database inicialization
conn
  .sync()
  //app listening at port 3000
  .then(() => {
    app.listen(3000);
  });
