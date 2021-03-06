const mongoose = require('mongoose');
const requiredString = require('../requriedString');

const item_priceSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    minimum_price: { type: Number, required: true},
    maximum_price: { type: Number, required: true},
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: "field is required of Item"
    }
});

const Price = mongoose.model('Price', item_priceSchema)

module.exports = Price;
