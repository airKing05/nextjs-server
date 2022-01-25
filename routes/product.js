const express = require('express');
const route = express.Router();
const Product = require('../model/productSchema');
const marketController = require('../controllers/product/marketController');
const categoryController = require('../controllers/product/categoryController');
const itemController = require('../controllers/product/itemController');
const priceController = require('../controllers/product/priceController');
const getProductController = require('../controllers/product/getProductController')


// POST-GET details about products required fields API
route.get('/get-product', getProductController);
route.get('/market-details',  marketController.getMarket);
route.get('/product-item-details', itemController.getItem);

// POST-add details about products required fields API
route.post('/market-details',  marketController.addMarket);
route.post('/:marketID/product-category-details', categoryController);
route.post('/product-item-details', itemController.addItem);
route.post('/:itemID/product-Price-details', priceController);

module.exports = route;