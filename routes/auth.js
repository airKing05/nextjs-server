const express = require('express');
const route = express.Router();
const user = require('../model/userSchema');

route.get('/api/user', (req, res) => {
    res.send("this is get request of the user")
})

module.exports = route;