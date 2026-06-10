const signupModel=require('../models/signupModel');
const bcrypt=require('bcrypt');
const signupFunction=async(req,res)=>{

    try{
    //console.log(req.body); // req.body is used to get the body of the request ,here we pass our data
    const{name,email,mobile}=req.body
    

    const user_email= await signupModel.findOne({email:email});
            
    if(user_email){
        return res.json({
            "msg":"User already exists",
            "status":400,
            "data":null
        });
    }   
    const user_mobile= await signupModel.findOne({mobile:mobile});
    if(user_mobile){
        return res.json({
            "msg":"User already exists",
            "status":400,
            "data":null
        });
    }   

    const tmp_password=Math.random().toString(36).substring(2,15);
    const encrypted_password=await bcrypt.hash(tmp_password,10);
    //save user data in our database 
    const user=await signupModel.create({
        name:name,
        email:email,
        mobile:mobile,
        password:encrypted_password
    })
    if(user){
        const data={
            name:user.name,
            email:user.email,
            password:tmp_password
        }
         return res.json({
            "msg":"signup successful, please save or change your password",
            "data":data,
            "status":200
            });
    }




     
    }catch(error){
        res.json({
            "msg":"Internal Server Error",
            "status":500
        });
    }
}

const loginFunction=async(req,res)=>{
    try{
        const {email,password}=req.body
        
        console.log(email,password);

        res.json({
            "msg":"Login successfull",
            "data":{"email":email},
            "status":200
        });

    }catch(error){
        res.json({
            "msg":"Internal Server Error",
            "data":null,
            "status":500
        });
    }
}
module.exports={signupFunction,loginFunction}
