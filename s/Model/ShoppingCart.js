const mongoose = require('mongoose')
const shoppingCartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    codeProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    price: {
        type: Number,
        required: true,
    }
    ,
    image: {
        type: String
    },
    count: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('ShoppingCart', shoppingCartSchema)