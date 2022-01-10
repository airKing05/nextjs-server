const express = require('express');
const route = express.Router();
const User = require('../model/userSchema');



route.get('/', (req, res) => {
    
    res.send("this is get request of the user")
})

route.post('/', async (req, res) => {
    const {name, email, phone, villageORcity, district, password, cPassword} = req.body;
    try {
        let newUser = new User({name, email, phone, villageORcity, district, password, cPassword} );
        const userRegistered = await newUser.save();

        if (userRegistered){
            res.status(201).json({message : "New userRegistered Successfully"})
        }
        else (res.status(500).json({err : "not able to registered"}))
    } catch (error) {
        console.log("ERROR");
        console.log(err);
    }
   
    
})

module.exports = route;