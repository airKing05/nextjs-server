const mongoose = require('mongoose');

const requiredString = {
    type: String,
    required: true
};

const item_priceSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    minimum_price: requiredString,
    maximum_price: requiredString
});

const category_itemsSchema = new mongoose.Schema({
    item_name: requiredString,
    item_image: [{
        image_url: requiredString
    }],
    item_price: [item_priceSchema]
});

const product_category_nameSchema = new mongoose.Schema({
   category_name : requiredString,
   category_items : [category_itemsSchema]
});

const productSchema = new mongoose.Schema({
    city: requiredString,
    state: requiredString,
    mandi_name: requiredString,
    product_category: [product_category_nameSchema]
});

const Product = mongoose.model('PRODUCT', productSchema);

module.exports = Product;