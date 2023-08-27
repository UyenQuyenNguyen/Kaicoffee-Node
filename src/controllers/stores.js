import dotenv from "dotenv";
import Store from "../models/Store.js";
import storeValidator from "../validations/store.js";
dotenv.config();

export const getAll = async (req, res) => {
    console.log("Heiii");
    try {
        const data = await Store.find({})
        if (data.length === 0) {
            return res.status(404).json({
                message: "Store not found",
            });
        }
        return res.status(200).json({
            message: "Store successfully",
            stores: data,
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
        const data = await Store.create(req.body)
        if (!data) {
            return res.status(404).json({
                message: "Create store not successful",
            });
        }
        return res.status(200).json({
            message: "Create store successful",
            store: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const update = async (req, res) => {
    try {
        const { error } = storeValidator.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message || "Please re-check your data!",
            });
        }

        const data = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!data) {
            return res.status(404).json({
                message: "Update store not successful",
            });
        }
        return res.status(200).json({
            message: "Update store successful",
            store: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const remove = async (req, res) => {
    try {
        const data = await Store.findByIdAndDelete(req.params.id)

        if (!data) {
            return res.status(404).json({
                message: "Delete store not successful",
            });
        }
        return res.status(200).json({
            message: "Delete store successful",
            store: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};