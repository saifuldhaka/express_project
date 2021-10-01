const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique:true},
        sku: {type: String, required: true, unique:true},
        shortDesc: {type: String},
        desc: {type: String, required: true},
        img: {type: String,  required: true},
        sizes:{ type: Array },
        colors: {type: Array},
        categories: { type: Array},
        price: {type: Number},
        createdAt: Date.now()
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Product", ProductSchema);