const express = require('express');
const route = express.Router();
const user = require('../model/userSchema');


route.get('/', (req, res) => {
    
    res.send("this is get request of the user")
})

route.post('/', (req, res) => {
   res.send(req.body)
   
    console.log(req.body)
})

module.exports = route;