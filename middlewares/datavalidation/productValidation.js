const { Joi } = require('express-validation');

exports.productValidation = {
    body: Joi.object({
      name:Joi.string().required(),
      cateogry: Joi.string().required(),
      description: Joi.string().required(),
      price:Joi.string().required(),
    })
  }


  