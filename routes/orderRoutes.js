const express=require('express');
const router = express.Router();
const ordercontroller=require('../controllers/orderController');
const {veirfyToken}=require('../middlewares/tokenValidation');

router.get('/checkorderstatus',veirfyToken,ordercontroller.checkorderstatus);

module.exports=router