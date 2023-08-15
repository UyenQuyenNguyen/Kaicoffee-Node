import Joi from "joi";
const storeValidator = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    address: Joi.string().min(3).max(255).required(),
    hotline: Joi.string(10).required(),
});

export default storeValidator;
