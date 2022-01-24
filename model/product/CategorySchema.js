const mongoose = require('mongoose');
const requiredString = require('../requriedString');


// product's all the category list will be here
const product_category_Schema = new mongoose.Schema({
    category_name : requiredString,
    // category_items : [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
    market : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Market',
        required: "field in required of market"
    }
 });

 const Category = mongoose.model('Category', product_category_Schema);

 module.exports = Category;