const Category = require('../../model/product/marketSchema');

// add product function 
const addCategory = async (req, res) => {
   

    try {
        const category = await Category.create(req.body);
        if (!category){
            res.status(400).json({message: 'unable to save Category details to Database'});
        }
        else{
            res.status(201).json({message: 'Category successfully cerated to the Database'});
        }
    } catch (error) {
        res.status(500).send("internal server error")
        console.log("Error==>", error)
    }    
};
 module.exports = addCategory;
