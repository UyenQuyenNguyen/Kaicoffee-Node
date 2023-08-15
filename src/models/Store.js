import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: false
    },
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
    versionKey: false, timestamps: true
})

export default mongoose.model('Store', storeSchema)