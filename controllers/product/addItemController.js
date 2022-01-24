const Item = require('../../model/product/ItemSchema');

// add product function 
const addItem = async (req, res) => {
    // const { city, state, mandi_name } = req.body;

    try {
        const item = await Item.create(req.body);
        if (!item){
            res.status(400).json({message: 'unable to save Item details to Database'});
        }
        else{
            res.status(201).json({message: 'Item successfully cerated to the Database'});
        }
    } catch (error) {
        res.status(500).send("internal server error")
        console.log("Error==>", error)
    }    
};
 module.exports = addItem;
