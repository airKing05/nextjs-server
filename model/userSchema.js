const mongoose = require('mongoose');

const requireSchema = mongoose.Schema({
    types: String, 
})

const userSchema = new mongoose.Schema({
    name : {
        types: String,
    },
    email: {
        types: String,
    },
    phone: {
        types: Number,
    },
    password: {
        types: String,
    },
    cPassword: {
        types: String,
    },
    villageORcity : {
        types: String,
    },
    district: {
        types: String,
    },
    data: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;