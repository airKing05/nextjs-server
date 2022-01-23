const express = require('express');
const route = express.Router();
const Product = require('../model/productSchema');
const addController = require('../controllers/product/addController');
const getProductController = require('../controllers/product/getProductController')

route.get('/get-product', getProductController);

route.post('/market-details',  addController)

module.exports = route;