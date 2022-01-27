const Market = require('../../model/product/marketSchema');
const Category = require('../../model/product/categorySchema');

// add product function 
const addMarket = async (req, res) => {
    try {
        const market = await Market(req.body);
        await market.save((err, result) => {
            if (err) {
                res.status(400).json({ message: 'unable to save market details to Database', error: err });
            }
            else {
                res.status(201).json({ message: 'market successfully cerated to the Database', });
            }
        })

    } catch (error) {
        res.status(500).send("internal server error")
        console.log("Error==>", error)
    }
};



// get market details
const getMarket = async (req, res) => {
    try {
        const market = await Market.find().populate({ path: "product_category", populate: { path: "category_items", populate: "item_price" } });
        if (!market) {
            res.status(404).json({ message: 'did not get any market data', error: err });
        }
        else {
            res.send(market);
        }
    } catch (error) {
        res.status(500).send("internal server error")
        console.log("Error==>", error)
    }
};


// update market details
 const updateMarket = async (req, res) => {
     try {
         const market = await Market.findByIdAndUpdate({ _id: req.params.marketID }, req.body, (err, result) => {
            if (err) {
                res.status(400).json({ message: 'not able to update market details', error: err})
               console.log(err);
            }
            res.status(200).json({ message: 'market details updated successfully',})
         });

     } catch (error) {
        res.status(500).send("internal server error")
        console.log("Error==>", error)
     }
 }



// delete market details
const removeMarket = async (req, res) => {
    try {
        const market = await Market.findByIdAndDelete({ _id: req.params.marketID }, (err, result) => {
            if (err) {
                res.status(400).json({ message: 'not able to delete market', error: err})
               console.log(err);
            }
            res.status(200).json({ message: 'market successfully deleted',})

        });

    } catch (error) {
        
        console.log("Error==>", error)
    }
}

module.exports = { addMarket, getMarket, updateMarket, removeMarket };


