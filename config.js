//database import
const mysql = require("./database/mysql");
const postgre = require("./database/postgresql");
//postgre models
const Stock = require('./models/Stock').StockPostgresql
const Product = require('./models/Product').ProductPostgresql
const Category = require('./models/Category').CategoryPostgresql

mysql
  //mysql inicialization
  .sync()
  .then(() => {
    //postgre inicialization
    postgre
    .sync() 
    .then(()=>{

        const Tables = ['Products', 'Categories', 'Stocks']

        async function postgreToMysqlTable(table, model){
            //Setting postgre data to mysql
            let data = await mysql.query(`SELECT * from ${table.toLowerCase()}`);
            
            //if return null array
            if(!data[0][0])
                return

            //exporting all mysql data
            data[0].map((json)=>{
                    switch(Tables.indexOf(table)){
                        case 0:
                            Product.create(json)
                            break;
                        case 1:
                            Category.create(json)
                            break;
                        case 2:
                            Stock.create(json)
                            break;
                    }
                })
                //delete all mysql data
                await mysql.query(`DELETE from ${table.toLowerCase()}`);
            }

        async function postgreToMysqlLastId(table){
            //Setting postgre last id to mysql first id
            let lastId = ((await postgre.query(`SELECT MAX("id") from "${table}"`))[0][0].max)+1;

            if(!lastId)
                lastId = 0
            await mysql.query(`ALTER TABLE ${table.toLowerCase()} AUTO_INCREMENT=${lastId}`);
        }

        Tables.map((table)=>{
            postgreToMysqlTable(table).then(()=>{
                postgreToMysqlLastId(table);
            });
        })
    });
  });
