const express=require('express');
const authContorller = require('../controllers/authContorller');
const router=express.Router();

//http://localhost:3000/api/signup
router.post('/signup',authContorller.signupFunction);
router.post('/login',authContorller.loginFunction);

module.exports=router;