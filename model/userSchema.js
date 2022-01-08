const mongoose = require('mongoose');

const requireSchema = mongoose.Schema({
    types: String, 
})

const userSchema = new mongoose.Schema({
    name : requireSchema,
    email:  requireSchema,
    phone: {
        types: Number,
       
    },
    password: requireSchema,
    villageORcity : requireSchema,
    district: requireSchema
});

const user = new mongoose.model('user', 'userSchema');

module.exports = user;