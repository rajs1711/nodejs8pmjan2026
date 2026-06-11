const jwt=require("jsonwebtoken");


const veirfyToken=async(req,res,next)=>{
  
    const authheader=req.headers.authorization;  // getimg daya from headers 
    const token=authheader && authheader.split(" ")[1];  // remove bearer from token 

    if(!token){
        return res.json({"msg":"Access Denied","status":401})
    }else{
        // verifcation of token
        const SECRET_KEY='uns77^^*hsjjs';
        jwt.verify(token,SECRET_KEY,(err,decoded)=>{
              if(err){
                return res.json({"msg":"Access Denied,Invalid token ","status":401})
              }else{
                 req.user_info=decoded;
                 next()
              }
        })
    }
  

}

module.exports={veirfyToken}