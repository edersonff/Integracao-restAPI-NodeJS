const Joi = require("joi");
const params = require("../../helpers/params-schema");
/*
  -- Schema (middleware) --
  Is a middleware used in routes like
  a body 'filter', receive a better and
  'health' data, not requiring have
  to validate in every post and update
  controller.
  
  It's using params-schema.js to receive
  each custom param.

  It's using Joi(module) to validate every
  param.
*/
module.exports = (param, unknown) => {
  return (req, res, next) => {

    // verify if nknown exists
    if(!unknown)
      unknown = true;

    // schema options
    const options = {
      allowUnknown: unknown,  //optional allow unknown param
      stripUnknow: true,
    };

    // creating schema
    const schema = Joi.object(params[param]);

    // get filtered body and if there's a error
    const { error, value } = schema.validate(req.body, options);

    // validation (if error)
    if (error) {
      res.json({ msg: error.details[0].message }).status(500);
    } else {
      req.body = value;
      next();
    }
  };
};
