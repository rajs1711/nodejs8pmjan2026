const express=require('express');
const authContorller = require('../controllers/authContorller');
const authvalidate=require('../middlewares/authValidation');
const router=express.Router();

//http://localhost:3000/api/signup
router.post('/signup',authvalidate.validateSignupData,authContorller.signupFunction);
router.post('/login',authContorller.loginFunction);

module.exports=router;