const signupModel=require('../models/signupModel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

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
        
        // logic for login 
        
        const user=await signupModel.findOne({email:email});

        if(user)
         {
            const user_password=await bcrypt.compare(password,user.password);
   
            if(user_password){
               // logic to generate token for this user 
              const SECRET_KEY='uns77^^*hsjjs';

              const user_data={
                email:user.email,
                mobile:user.mobile
              }
              const expiry={expiresIn:"24h"}
              //generate token 
              const token=jwt.sign(user_data,SECRET_KEY,expiry);

               return  res.json({
                "msg":"Login successfull",
                "data":null,
                "token":token,
                "status":200
            });

            }else{
                return res.json({
                    "msg":"Invalid password",
                    "status":400,
                    "data":null
                })
            }

         }else{
            return res.json({
                "msg":"Invalid email, Invalid user ",
                "status":400,
                "data":null
            })
         }        



    }catch(error){
        return res.json({
            "msg":"Internal Server Error",
            "data":null,
            "status":500
        });
    }
}

const changePassword=async(req,res)=>{
   try{
     console.log('hello')
   }catch(err){
    res.json({
        "msg":"Interna Server Error",
        "status":500
    });
   }
}

const getUserProfile=async(req,res)=>{
    try{
        console.log('hello')
    }catch(err){
        res.json({
            "msg":"Interna Server Error",
            "status":500
        });
    }
 }


module.exports={signupFunction,loginFunction,changePassword,getUserProfile}
