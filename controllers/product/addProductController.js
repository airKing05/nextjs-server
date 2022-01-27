const Product = require('../../model/productSchema');

// add product function 
const addProduct = async (req, res) => {
    // const { city, state, mandi_name } = req.body;

    try {
        const product = await Product.create(req.body);
        if (!product){
            res.status(400).json({message: 'unable to save product details to Database'});
        }
        else{
            res.status(201).json({message: 'product successfully cerated to the Database'});
        }
    } catch (error) {
        res.status(500).send("internal server error")
        console.log("Error==>", error)
    }    
};
 module.exports = addProduct;
