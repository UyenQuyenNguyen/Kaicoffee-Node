import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
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
    timestamps: true,
    collection: "Product"
})

export default mongoose.model('Product', productSchema)