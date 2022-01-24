const Market = require('../../model/product/marketSchema');

// add product function 
const addMarket = async (req, res) => {
    // const { city, state, mandi_name } = req.body;

    try {
        const market = await Market(req.body);
        await market.save((err, result) => {
            if (err) {
                res.status(400).json({ message: 'unable to save market details to Database', error: err });
            }
            else {
                res.status(201).json({ message: 'market successfully cerated to the Database',  });
            }
        })

    } catch (error) {
        res.status(500).send("internal server error")
        console.log("Error==>", error)
    }
};
module.exports = addMarket;
