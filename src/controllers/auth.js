import User from "../models/User.js"
import { signInValidator, signUpValidator } from "../validations/users.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import dotenv from "dotenv"

dotenv.config()

const { SECRET_CODE } = process.env

export const signUp = async(req, res) => {
    try {
        const { error }  = signUpValidator.validate(req.body, { abortEarly: false})
        if(error) {
            const errors = error.details.map((err => err.message))
            return res.status(400).json({
                message: errors
            })
        }
        const userExists  = await User.findOne({ email: req.body.email})
        if(userExists) {
            return res.status(400).json({
                message: "Email này đã được đăng ký, bạn có muốn đăng nhập không?"
            })
           
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role
        })
        
        user.password = undefined
        return res.status(200).json({
            message: "Đăng ký tài khoản thành công!",
            user
        })

    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        })
    }
}

export const signIn = async (req, res) => {
    try {
        const { email, password} = req.body
        const { error }  = signInValidator.validate(req.body, { abortEarly: false})

        if(error) {
            const errors = error.details.map((err => err.message))
            return res.status(400).json({
                message: errors
            })
        }

        const user = await User.findOne({ email })
        if(!user) {
            return res.status(400).json({
                message: "Bạn chưa đăng ký email này!"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({
                message: "Mật khẩu không đúng!"
            })
        }

        const accessToken = jwt.sign({_id: user._id}, SECRET_CODE, { expiresIn: "1d"})

        user.password = undefined
        return res.status(200).json({
            message: "Đăng nhập tài khoản thành công!",
            accessToken,
            user
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}