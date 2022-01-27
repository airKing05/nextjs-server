const Product = require('../../model/productSchema');
// get product 

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
        
    }
}

module.exports = getProduct;