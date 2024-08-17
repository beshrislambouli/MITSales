import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    info: {
        type: String,
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    }
});

export const Product = mongoose.model ('Product', ProductSchema );