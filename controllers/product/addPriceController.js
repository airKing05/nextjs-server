const Price = require('../../model/product/marketSchema');

const addPrice = async (req, res) => {
    try {
        const price = await Price.create(req.body);
        if (!price){
            res.status(400).json({message: 'unable to save Price details to Database'});
        }
        else{
            res.status(201).json({message: 'Price successfully cerated to the Database'});
        }
    } catch (error) {
        res.status(500).send("internal server error")
        console.log("Error==>", error)
    }    
};
 module.exports = addPrice;
