const express=require('express');
const router = express.Router();
const productController=require('../controllers/productController');
const {veirfyToken}=require('../middlewares/tokenValidation');

const {productValidation}=require('../middlewares/datavalidation/productValidation');// express-validatio package validation module

const { validate } = require('express-validation');// validation package
//pricate api
router.post('/admin/createproduct',veirfyToken,validate(productValidation,{},{}),productController.createProduct);
router.get('/admin/getallproducts',veirfyToken,productController.getAllProducts);
router.get('/admin/getproductbyid',veirfyToken,productController.getProductById);

//public api
router.get('/getallproducts',productController.listProduct);
router.get('/getproductbyid',productController.getProductdetailsById);

module.exports=router