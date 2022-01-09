const mongoose = require('mongoose');

const requireSchema = mongoose.Schema({
    types: String, 
})

const userSchema = new mongoose.Schema({
    name : requireSchema,
    email: requireSchema, 
    phone: {
        types: Number,
       
    },
    password: requireSchema,
    cPassword: requireSchema,
    villageORcity : requireSchema,
    district: requireSchema,
    data: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;