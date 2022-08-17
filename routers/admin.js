const express = require('express');
const router=express.Router();
const adminController=require('../controllers/products');


router.get('/',adminController.homeAdmin);
router.get('/add-product',adminController.addProduct);
router.post('/add-product',adminController.addgetProduct);

module.exports=router;