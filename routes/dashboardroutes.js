const express=require('express');
const router = express.Router();
const dashboardController=require('../controllers/dashboardController');
const {veirfyToken}=require('../middlewares/tokenValidation');

//pricate api
router.get('/admin/getdashboarddata',veirfyToken,dashboardController.getDashboarData);


module.exports=router