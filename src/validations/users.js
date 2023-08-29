import Joi from "joi"

export const signUpValidator = Joi.object({
    firstName: Joi.string().required().messages({
        "string.empty": "First Name cannot be empty!",
        "any.required": "First Name field is required!" 
    }),
    lastName: Joi.string().required().messages({
        "string.empty": "Last Name cannot be empty!",
        "any.required": "Last Name field is required!"
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "Email cannot be empty!",
        "any.required": "Email field is required!",
        "string.email": "Email invalidate!"
    }),
    password: Joi.string().required().min(6).messages({
        "string.empty": "Password cannot be empty!",
        "any.required": "Password field is required!",
        "string.min": "Password phải có ít nhất {#limit} ký tự!"
    }),
    passwordRepeat: Joi.string().required().valid(Joi.ref("password")).messages({
        "string.empty": "Password re-entered cannot be empty!",
        "any.required": "Password re-entered field is required!",
        "string.min": "Password re-entered must be at least { #limit} characters!",
        "any.only":"Password re-entered does not match!"
    })
})

export const signInValidator = Joi.object({
    email: Joi.string().email().required().messages({
        "string.empty":"Email cannot be empty!",
        "any.required": "Email field is required!",
        "string.email": "Email invalidate!"
    }),
    password: Joi.string().required().min(6).messages({
        "string.empty": "Password cannot be empty!",
        "any.required": "Password field is required!",
        "string.min": "Password must be at least {#limit} characters!"
    })
})