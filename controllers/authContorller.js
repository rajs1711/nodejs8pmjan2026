
const signupFunction=async(req,res)=>{

    try{
    //console.log(req.body); // req.body is used to get the body of the request ,here we pass our data
    const{name,email,mobile}=req.body
    
    if(!name ||!email|| !mobile)
     {
        res.json({
            "msg":"Invalid Data",
            "status":400
         });
     }else{

        // here we call our model function to verify mobile and email is already exists in our database 
         // verify mobile and email is already exists in our database 
         // save incoming userdata in our database only if mobile and 
         // email is not exists in our database ]

        res.json({
            "msg":"signup successful",
            "data":req.body,
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
