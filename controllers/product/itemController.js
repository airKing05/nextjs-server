const Category = require('../../model/product/categorySchema');
const Item = require('../../model/product/ItemSchema');

// add item into the products 
const addItem = async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.categoryID});
        const item = Item(req.body);
        // item.item_name = req.body.item_name;
        // item.item_image = []
        item.category = category._id;
        await item.save((err, result) => {
            if (err) {
                res.status(400).json({ message: 'unable to save Item details to Database' });
            }
            else {
                res.status(201).json({ message: 'Item successfully cerated to the Database' });
            }
        });

        // pushing specific Item model ID to a particular Category model 
        category.category_items.push(item._id);
        await category.save();

        res.send(item)
       
    } catch (error) {
        res.status(500).send("internal server error")
        console.log("Error==>", error)
    }
};

// get items of the products 
const getItem = async (req, res) => {
    try {
        const item = await Item.find().populate("item_price");
        if (!item) {
            res.status(404).json({ message: 'unable to find Item details to Database' })
        }
        else {
            res.send(item);
        }

    } catch (error) {
        res.status(500).send("internal server error")
        console.log("Error==>", error)
    }
}

module.exports = {addItem, getItem};
