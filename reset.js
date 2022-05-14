//database import
const mysql = require("./database/mysql");
const postgre = require("./database/postgresql");

mysql
  //mysql inicialization
  .sync({force:true})
  .then(() => {
    //postgre inicialization
    postgre.sync({force:true})
  });
