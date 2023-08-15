import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: false
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    classtify: {
        type: String,
        require: true
    }
}, {
    versionKey: false, timestamps: true
})

export default mongoose.model('Product', productSchema)