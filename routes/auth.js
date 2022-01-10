const express = require('express');
const route = express.Router();
const User = require('../model/userSchema');
const { body, validationResult } = require('express-validator');  // input fields verification



route.get('/', (req, res) => {

    res.send("this is get request of the user")
})

route.post('/auth',
    [
        // arr is for validation required fields
        body('name', "Enter a valid name").isLength({min: 3}),
        body('email', "Enter a valid email").isEmail(),
        body('phone',  "Length should be 10").isLength({ min: 10, max: 10 }),
        body('password',  "Password contain at least 6 char").isLength({ min: 6 })
    ],
    async (req, res) => {
        const {name, email, phone, villageORcity, district, password, cPassword} = req.body;

       
        // if errors occur while validation error throw
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // checking the fields that should be full-fill
        // if (!name || !email || !phone || !villageORcity || !district || !password || !cPassword){
        //     res.status(400).json({message: "please fill the all fields properly"})
        // }

    
        try {
            // checking the db to avoid multiple entries 
            const userExist = await User.findOne({email: email})
            console.log(userExist)
            if(userExist){
                return res.status(500).json({message: "email already exist"}) 
                
            }
            // checking password fields 
      
            else if (req.body.password !== req.body.cPassword){
                return res.status(400).json({message: "password should be same in both the fields"}) 
             }
            else{

                // if every things okay then save user into db
                const user = new User(req.body)
                const userRegistered = await user.save();
                if (userRegistered){
                    return res.status(201).json({message: "new user registered successfully"})
                }
                else{
                    return res.status(500).json({message: "unable to registered new user"})
                }
            }
        } catch (error) {
            res.status(500).json({error})
            console.log("Error==>", error)

        }
        
    })

module.exports = route;