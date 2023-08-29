import Joi from "joi";
const productValidator = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  price: Joi.number().required(),
  description: Joi.string(),
  img: Joi.string(),
  classtify: Joi.string()
});

export default productValidator;
