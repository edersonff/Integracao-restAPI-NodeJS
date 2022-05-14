const Joi = require("joi");
//schema params
module.exports = {
  // products
  product: {
    code: Joi.string().max(12).min(12),
    status: Joi.number().max(1),
    name: Joi.string().max(60),
    description: Joi.string(),
    value: Joi.number(),
  },
  productStore: {
    code: Joi.required(),
    name: Joi.required(),
    value: Joi.required(),
  },
  // category
  category: {
    code: Joi.string().max(15).min(15),
    status: Joi.number().max(1),
  },
  categoryStore: {
    code: Joi.required(),
    title: Joi.string().required().max(60),
  },
  // stock
  stock: {
    quantity: Joi.number(),
    reserved: Joi.number(),
    status: Joi.number().max(1),
  },
};
