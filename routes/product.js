const express = require('express');
const route = express.Router();
const Product = require('../model/productSchema');
const addMarketController = require('../controllers/product/addMarketController');
const addCategoryController = require('../controllers/product/addCategoryController');
const addItemController = require('../controllers/product/addItemController');
const addPriceController = require('../controllers/product/addPriceController');
const getProductController = require('../controllers/product/getProductController')


route.get('/get-product', getProductController);
route.post('/market-details',  addMarketController);
route.post('/product-category-details', addCategoryController);
route.post('/product-item-details', addItemController);
route.post('/product-Price-details', addPriceController);

module.exports = route;