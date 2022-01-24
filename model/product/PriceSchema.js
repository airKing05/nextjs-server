const mongoose = require('mongoose');
const requiredString = require('../requriedString');

const item_priceSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    minimum_price: { type: Number, required: true},
    maximum_price: { type: Number, required: true}
});

const Price = mongoose.model('Price', item_priceSchema)

module.exports = Price;
