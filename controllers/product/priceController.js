const Item = require('../../model/product/ItemSchema');
const Price = require('../../model/product/PriceSchema');

const addPrice = async (req, res) => {
    try {
        const item = await Item.findOne({_id: req.params.itemID})
        const price = new Price(req.body);
        price.date = req.body.date;
        price.minimum_price = req.body.minimum_price;
        price.maximum_price = req.body.maximum_price;
        price.item = item._id;     // price.item is a field of priceSchema, saving a id of particular item for respected price

        await price.save((err, result) => {
            if (err){
                res.status(400).json({message: 'unable to save Price details to Database', error: err});
            }
            else{
                res.status(201).json({message: 'Price successfully cerated to the Database'});
            }
        })
        item.item_price.push(price._id);
        await item.save();

        res.send(price)

        
    } catch (error) {
        res.status(500).send("internal server error")
        console.log("Error==>", error)
    }    
};
 module.exports = addPrice;
