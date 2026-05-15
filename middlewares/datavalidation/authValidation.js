const { Joi } = require('express-validation');

exports.signupValidation = {
    body: Joi.object({
      name:Joi.string().required(),
      email: Joi.string().email().required(),
      mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required()
    })
  }

exports.loginValidation={
    body:Joi.object({
        email:Joi.string().required(),
        password:Joi.string().required()
    })
}
  