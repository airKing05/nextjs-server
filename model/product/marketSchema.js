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
    minimum_price: { type: Number, required: true},
    maximum_price: { type: Number, required: true}
});

const category_itemsSchema = new mongoose.Schema({
    item_name: requiredString,
    item_image: [{
        image_url: requiredString
    }],
    item_price: [{type: mongoose.Types.ObjectId, ref: 'Price'}]
});

// product's all the category list will be here
const product_category_Schema = new mongoose.Schema({
    category_name : requiredString,
    category_items : [{type: mongoose.Types.ObjectId, ref: 'Item'}]
 });


// selling market will be come here 
const marketSchema = new mongoose.Schema({
    market_name: requiredString,
    market_address : {
        city: requiredString,
        state: requiredString
    },
    product_category: [{type: mongoose.Types.ObjectId, ref: 'Product'}]
});

const Price = mongoose.model('Price', item_priceSchema)
const Item = mongoose.model('Item', category_itemsSchema)
const Category = mongoose.model('Category', product_category_Schema);
const Market = mongoose.model('Market', marketSchema);

module.exports = Price;