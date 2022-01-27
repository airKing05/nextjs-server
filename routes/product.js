const express = require('express');
const route = express.Router();
const Product = require('../model/productSchema');
const marketController = require('../controllers/product/marketController');
const categoryController = require('../controllers/product/categoryController');
const itemController = require('../controllers/product/itemController');
const priceController = require('../controllers/product/priceController');
const getProductController = require('../controllers/product/getProductController')


// GET- find details about products required fields API

// this get api belong to the old model
route.get('/get-product', getProductController);   // ignore it while reading the code

// this is new style of all the get api
route.get('/market-details',  marketController.getMarket);
route.get('/product-item-details', itemController.getItem);

// POST-add details about products required fields API
route.post('/market-details',  marketController.addMarket);
route.post('/:marketID/product-category-details', categoryController);
route.post('/:categoryID/product-item-details', itemController.addItem);
route.post('/:itemID/product-Price-details', priceController);

// PUT - update details about products form the details
route.put('/market-details/:marketID', marketController.updateMarket);


// Delete- remove details about product from the details 
route.delete('/market-details/:marketID', marketController.removeMarket);


module.exports = route;