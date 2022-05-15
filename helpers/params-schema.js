const Joi = require("joi");
/*
  -- Schema params --
  Is a file to save all the schema,
  customized for each route that is going
  to be used in schema middleware
  
  There're separation between required and
  not required(store, update).
*/

module.exports = {
  /* products */
  product: {
    code: Joi.string().max(12).min(12), // limited at 12 characters / string
    status: Joi.number().max(1),        // limited at 1 value / integer
    name: Joi.string().max(60),         // 60 characters
    description: Joi.string(),
    value: Joi.number(),
  },
  productStore: {                       //required values for post and not for update
    code: Joi.required(),
    name: Joi.required(),
    value: Joi.required(),
  },

  /* category */
  category: { 
    code: Joi.string().max(15).min(15),  // limited at 15 characters / string
    status: Joi.number().max(1),         // limited at 1 value / integer
  },
  categoryStore: {                      //required values for post and not for update
    code: Joi.required(),
    title: Joi.string().required().max(60),
  },

  /* stock */
  stock: {
    quantity: Joi.number(),
    reserved: Joi.number(),
    status: Joi.number().max(1),
  },
};
