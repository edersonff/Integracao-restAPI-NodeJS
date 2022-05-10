const Joi = require("joi");
const params = require("../../helpers/params-schema");
module.exports = (param) => {
  return (req, res, next) => {
    // schema options
    const options = {
      allowUnknown: true,
      stripUnknow: true,
    };

    // creating schema
    const schema = Joi.object(params[param]);

    // get filtered body and if error
    const { error, value } = schema.validate(req.body, options);

    //validation
    if (error) {
      res.json({ msg: error.details[0].message }).status(500);
    } else {
      req.body = value;
      next();
    }
  };
};
