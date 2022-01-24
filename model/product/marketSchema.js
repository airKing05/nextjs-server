const mongoose = require('mongoose');
const requiredString = require('../requriedString');



// selling market will be come here 
const marketSchema = new mongoose.Schema({
    market_name: requiredString,
    market_address : {
        city: requiredString,
        state: requiredString
    },
    product_category: [{type: mongoose.Types.ObjectId, ref: 'Category', required: "field in required of category"}]
});


const Market = mongoose.model('Market', marketSchema);

module.exports = Market;