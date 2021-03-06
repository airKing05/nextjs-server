const Product = require('../../model/productSchema');
// get product 
// this  API is belonging form old model of productSchema 
const getProduct = async (req, res) => {
    try {
        const product = await Product.find();
        if(!product){
            res.status(404).json({message : "product not found"})
        }
        else{
            res.send(product)
        }
    } catch (error) {
        res.status(500).send("internal server error")
        console.log("Error==>", error)
    }
}

module.exports = getProduct;