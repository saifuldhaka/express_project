const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true, unique:true},
        products: [
            {
                productId:{type: String},
                quantity: {type: Number, default: 1}
            }
        ],
        amount: {type: Number, required: true},
        billingAddress: {type: Object, required: true},
        shippingAddress: {type: Object, required: true},
        status: {type: String, default: "pending"},
        createdAt: Date.now()
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Order", OrderSchema);