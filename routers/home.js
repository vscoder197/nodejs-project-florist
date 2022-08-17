//express module
const express=require('express');
const router=express.Router();
//const path=require('path');
const homecontroller=require('../controllers/home');

//resigtering routers to controller
//router.use(express.static(path.join(__dirname,'public')));
router.get('/',homecontroller.home);

module.exports = router;    