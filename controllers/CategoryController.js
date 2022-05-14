const Category = require("../models/Category").CategoryMysql;

module.exports = class categoryRoutes {
  static async index(req, res) {
    try {
      // get all categorys
      const categorys = await Category.findAll();

      // verify if category exists
      if(!categorys){
        return res.json({ msg: "Nenhuma categoria encontrada!" }).status(404);
      }
      
      //send data
      res.json({ data: categorys });
      //
    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }

  static async show(req, res) {
    const { id } = req.params;

    try {
      // get the category by id
      const category = await Category.findOne({where:{id}, raw:true});

      // verify if category exists
      if(!category){
        return res.json({ msg: "Categoria não encontrada!" }).status(404);
      }

      //send data
      res.json({ data: category });
      //
    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }

  static async store(req, res) {
    try {
      // store, save category
      const category = await Category.create(req.body);

      //send new category data
      res.json({ data: category }).status(201);

    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }

  static async update(req, res) {
    const {id} = req.params;
    try {
      // get category by id
      const category = await Category.findOne({where:{id}});

      // verify if category exists
      if(!category){
        return res.json({ msg: "Categoria não encontrada!" }).status(404);
      }
    
      // get all body keys and update the category
      Object.keys(req.body).map((key)=>{
        category[key] = req.body[key];
      })

      // update, save category
      await category.save();

      //send new category data
      res.json({ msg: "Categoria atualizada!", data: category })
      
    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }

  static async destroy(req,res) {
    const {id} = req.params;
    try {
      // get category by id
      const category = await Category.findOne({where:{id}});

      // verify if category exists
      if(!category){
        return res.json({ msg: "Categoria não encontrada!" }).status(404);
      }

      // delete the category
      await category.destroy();

      res.json({ msg: "Categoria excluida!", data: category })

    } catch (err) {
      res.json({ msg: err }).status(500);
    }
  }
  
};
