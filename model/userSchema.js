const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    villageORcity: {
        type: String,
        require: true,
    },
    district: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    cPassword: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
   

})

const User = mongoose.model('USER', userSchema);

module.exports = User;