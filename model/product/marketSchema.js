const mongoose = require('mongoose');

const requiredString = {
    type: String,
    required: true
};

const item_priceSchema = new mongoose.Schema({
    date: {
        type: String,
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

// product's all the category list will be here
const product_category_Schema = new mongoose.Schema({
    category_name : requiredString,
    category_items : [category_itemsSchema]
 });


// selling market will be come here 
const marketSchema = new mongoose.Schema({
    market_name: requiredString,
    market_address : {
        city: requiredString,
        state: requiredString
    },
    // product_category: [{type: mongoose.Types.ObjectId, ref: 'Product'}]
});

const Product = mongoose.model('Product', product_category_Schema);
const Market = mongoose.model('MARKET', marketSchema);

module.exports = Market;