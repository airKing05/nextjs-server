const mongoose = require('mongoose');

const requiredString = {
    type: String,
    required: true
};

const item_priceSchema = new mongoose.Schema({
    date: Date,
    default: Date.now,
    minimum_price: requiredString,
    maximum_price: requiredString
});

const item_categorySchema = new mongoose.Schema({
    item_name: requiredString,
    item_image: [{
        image_url: requiredString
    }],
    item_price: [item_priceSchema]
});

const productSchema = new mongoose.Schema({
    city: requiredString,
    state: requiredString,
    mandi_name: requiredString,
    product_category: [item_categorySchema]
});

const Product = mongoose.model('PRODUCT', productSchema);

module.exports = Product;