const express=require('express');
const router = express.Router();
const ordercontroller=require('../controllers/orderController');
const {veirfyToken}=require('../middlewares/tokenValidation');

router.get('/admin/createorder',veirfyToken,ordercontroller.createOrder);
router.get('/admin/orderhistory',veirfyToken,ordercontroller.OrderHistory);

module.exports=router