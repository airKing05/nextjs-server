const mongoose = require('mongoose');
const requiredString = require('./requriedString');

const userSchema = new mongoose.Schema({
    name: requiredString,
    email: requiredString,
    phone: {
        type: Number,
        require: true,
    },
    villageORcity: requiredString,
    district: requiredString,
    password: requiredString,
    cPassword: requiredString,
    date: {
        type: Date,
        default: Date.now
    }
   

})

const User = mongoose.model('USER', userSchema);

module.exports = User;