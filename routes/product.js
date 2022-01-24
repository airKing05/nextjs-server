const express = require('express');
const route = express.Router();
const Product = require('../model/productSchema');
const marketController = require('../controllers/product/marketController');
const addCategoryController = require('../controllers/product/addCategoryController');
const addItemController = require('../controllers/product/addItemController');
const addPriceController = require('../controllers/product/addPriceController');
const getProductController = require('../controllers/product/getProductController')


// POST-GET details about products required fields API
route.get('/get-product', getProductController);
route.get('/market-details',  marketController.getMarket);

// POST-add details about products required fields API
route.post('/market-details',  marketController.addMarket);
route.post('/:marketID/product-category-details', addCategoryController);
route.post('/product-item-details', addItemController);
route.post('/product-Price-details', addPriceController);

module.exports = route;