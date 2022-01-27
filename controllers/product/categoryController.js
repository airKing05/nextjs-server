const Category = require('../../model/product/categorySchema');
const Market = require('../../model/product/marketSchema');

// add product function 
const addCategory = async (req, res) => {
    // find market by id
    const market = await Market.findOne({ _id: req.params.marketID })

    // creating the category of the products
    const category = new Category();
    category.category_name = req.body.category_name;
    category.market = market._id;
    await category.save((err, result) => {
        if (err) {
            res.status(400).json({ message: 'unable to save category details to Database', error: err });
        }
        else {
            res.send(result);
        }
    })

    // now associated market with category by push category id into the market
    market.product_category.push(category._id);
    await market.save();

    res.send(category);
}
module.exports = addCategory;
