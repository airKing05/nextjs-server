const mongoose = require('mongoose');
const requiredString = require('../requriedString');

const category_itemsSchema = new mongoose.Schema({
    item_name: requiredString,
    item_image: [{
        image_url: requiredString
    }],
    item_price: [{type: mongoose.Types.ObjectId, ref: 'Price'}]
});


const Item = mongoose.model('Item', category_itemsSchema);

module.exports = Item;