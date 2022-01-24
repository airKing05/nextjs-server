const mongoose = require('mongoose');
const requiredString = require('../requriedString');

// product's all the category list will be here
const product_category_Schema = new mongoose.Schema({
    category_name : requiredString,
    category_items : [{type: mongoose.Types.ObjectId, ref: 'Item'}]
 });

 const Category = mongoose.model('Category', product_category_Schema);

 module.exports = Category;