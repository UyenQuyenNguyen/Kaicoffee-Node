import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    hotline: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: "Store"
})

export default mongoose.model('Store', storeSchema)