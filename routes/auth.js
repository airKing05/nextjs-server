const express = require('express');
const route = express.Router();
const User = require('../model/userSchema');
const { body, validationResult } = require('express-validator');  // input fields verification
const bcrypt = require('bcryptjs');    // password hashing
const jwt = require('jsonwebtoken');   // for use auth...



route.get('/', (req, res) => {

    res.send("this is get request of the user")
})


// user registration api 
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
         
            if(userExist){
                return res.status(500).json({message: "email already exist"}) 
                
            }
            // checking password fields 
      
            else if (req.body.password !== req.body.cPassword){
                return res.status(400).json({message: "password should be same in both the fields"}) 
             }
            else{
               
                // if every things okay then save user into db

                // password hashing 
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                const hashedCPassword = await bcrypt.hash(cPassword, salt);
               
                
                // not able to save hashed pass. using save()
                // const user = new User(req.body)
                // const userRegistered = await user.save
                let userRegistered = await User.create({
                    name: name, 
                    email: email,
                    phone: phone, 
                    villageORcity: villageORcity, 
                    district: district, 
                    password: hashedPassword, 
                    cPassword: hashedCPassword
                });
                const data = {
                    user: {
                        id: User._id
                    }
                }
                const authToken = jwt.sign(data, 'JWT_SECRET_KEY');
                console.log(authToken);

                if (userRegistered){
                    return res.status(201).json({
                        message: "new user registered successfully", 
                        user: userRegistered,
                        token: authToken
                    })
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



    // user-login api

module.exports = route;