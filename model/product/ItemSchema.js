const mongoose = require('mongoose');
const requiredString = require('../requriedString');

const category_itemsSchema = new mongoose.Schema({
    item_name: requiredString,
    // item_image: [{
    //     image_url: requiredString
    // }],
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category', 
        required: "field is required of Category"
    },
    item_price: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Price', 
        required: "field is required of Price"
    }]
});

const Item = mongoose.model('Item', category_itemsSchema);

module.exports = Item;