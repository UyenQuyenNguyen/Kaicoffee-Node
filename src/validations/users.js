import Joi from "joi"

export const signUpValidator = Joi.object({
    firstName: Joi.string().required().messages({
        "string.empty": "userName không được để trống!",
        "any.required": "Trường \"firstName\" là bắt buộc!" 
    }),
    lastName: Joi.string().required().messages({
        "string.empty": "userName không được để trống!",
        "any.required": "Trường \"lastName\" là bắt buộc!"
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "Email không được để trống!",
        "any.required": "Trường \"email\" là bắt buộc!",
        "string.email": "Email không đúng định dạng!"
    }),
    password: Joi.string().required().min(6).messages({
        "string.empty": "Password không được để trống!",
        "any.required": "Trường \"password\" là bắt buộc!",
        "string.min": "Password phải có ít nhất {#limit} ký tự!"
    }),
    passwordRepeat: Joi.string().required().valid(Joi.ref("password")).messages({
        "string.empty": "passwordRepeat không được để trống!",
        "any.required": "Trường \"passwordRepeat\" là bắt buộc!",
        "string.min": "passwordRepeat phải có ít nhất {#limit} ký tự!",
        "any.only": "Mật khẩu nhập lại không khớp!"
    })
})

export const signInValidator = Joi.object({
    email: Joi.string().email().required().messages({
        "string.empty": "Email không được để trống!",
        "any.required": "Trường \"email\" là bắt buộc!",
        "string.email": "Email không đúng định dạng!"
    }),
    password: Joi.string().required().min(6).messages({
        "string.empty": "Password không được để trống!",
        "any.required": "Trường \"password\" là bắt buộc!",
        "string.min": "Password phải có ít nhất {#limit} ký tự!"
    })
})