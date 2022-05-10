const Joi = require("joi");
//schema params
module.exports = {
  productStore: {
    code: Joi.string().required().max(12).min(12),
    name: Joi.string().required().max(60),
    description: Joi.string(),
    value: Joi.number().required(),
    status: Joi.string().max(1),
  },
};
