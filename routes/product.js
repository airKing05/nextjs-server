const express = require('express');
const route = express.Router();
const Product = require('../model/productSchema');
const addProductController = require('../controllers/product/addProductController');
const getProductController = require('../controllers/product/getProductController')

route.get('/get-product', getProductController);

route.post('/fake-details',  addProductController)

module.exports = route;