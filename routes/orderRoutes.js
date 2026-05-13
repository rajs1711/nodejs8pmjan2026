const express=require('express');
const router = express.Router();
const ordercontroller=require('../controllers/orderController');


router.get('/checkorderstatus',ordercontroller.checkorderstatus);

module.exports=router