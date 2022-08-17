//express module
const express=require('express');
const router=express.Router();
//const path=require('path');

const shopController=require('../controllers/shop')
//resigtering routers to controller
//router.use(express.static(path.join(__dirname,'public')));

router.get('/',shopController.shop);
router.get('/shop-details/:productId',shopController.shopDetail);
//
module.exports = router;    