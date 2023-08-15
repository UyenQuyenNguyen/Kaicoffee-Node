import dotenv from "dotenv";
import Store from "../models/Store";
import storeValidator from "../validations/store";
dotenv.config();

export const getAll = async (req, res) => {
    try {
        const data = await Store.find({})
        if (!data && data.length === 0) {
            return res.status(404).json({
                message: "Store not found",
            });
        }
        return res.status(200).json({
            message: "Store successfully",
            store: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const getDetail = async (req, res) => {
    try {
        const data = await Store.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "Store not found",
            });
        }
        return res.status(200).json({
            message: "Store successfully",
            store: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const create = async (req, res) => {
    try {
        const { error } = storeValidator.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message || "Please re-check your data!",
            });
        }
        const data = await Product.create(req.body)
        if (!data) {
            return res.status(404).json({
                message: "Create Store not successful",
            });
        }
        return res.status(200).json({
            message: "Create Store successful",
            products: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};