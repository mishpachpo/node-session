const mongoose = require('mongoose')
const prodectSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true

    },
    code: {
        type: Number,
        require: true,
        unique: true
    },
    price: {
        type: Number,
        require: true,
    }
    ,
    image: {
        type: String
    },
    category: {
        type: String,
        enum: ["מגשי פירות", "שוקולאב", "מארזי אירועים", "כלים ומפות"],
        require: true
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('Product', prodectSchema)