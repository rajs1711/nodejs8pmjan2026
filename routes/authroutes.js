const express=require('express');
const authContorller = require('../controllers/authContorller');
const authvalidate=require('../middlewares/authValidation');// manual validation module -middleware
const { validate } = require('express-validation');// validation package
const {signupValidation ,loginValidation }=require('../middlewares/datavalidation/authValidation');// express-validatio package validation module
const router=express.Router();

//http://localhost:3000/api/signup
//manual validation using middleware
//router.post('/signup',authvalidate.validateSignupData,authContorller.signupFunction);
//vaidation using express validation package
router.post('/signup',validate(signupValidation,{},{}),authContorller.signupFunction);
router.post('/login',validate(loginValidation,{},{}),authContorller.loginFunction);
router.post('/changepassword',validate(loginValidation,{},{}),authContorller.changePassword);
router.post('/getuserprofile',validate(loginValidation,{},{}),authContorller.getUserProfile);
module.exports=router;