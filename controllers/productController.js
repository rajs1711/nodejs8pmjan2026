
const productModel=require('../models/productModel');
const createProduct=async(req,res)=>{

    try{
        
        const { name, cateogry, description, price  }=req.body

         //prodcut data save 
        const product_code='PROD26'+Math.random(100,10);
        const product=await productModel.create({
            name, 
            cateogry, 
            description,
            price ,
            code:product_code
         });

         if(product){
            return res.json({
                "msg":"Product created Successfully",
                "data":null,
                "status":200
                });
         }else{
            return res.json({
                "msg":"Error In Product Creation ",
                "data":null,
                "status":400
                });
         }
    }catch(error){
        res.json({
            "msg":"Internal Server Error",
            "status":500
        });
    }
}

const getAllProducts=async(req,res)=>{

    try{
        
    }catch(error){
        res.json({
            "msg":"Interna Server Error",
            "status":500
        });
    }
}


const getProductById=async(req,res)=>{

    try{
        
    }catch(error){
        res.json({
            "msg":"Interna Server Error",
            "status":500
        });
    }
}

const listProduct=async(req,res)=>{

    try{
        
    }catch(error){
        res.json({
            "msg":"Interna Server Error",
            "status":500
        });
    }
}

const getProductdetailsById=async(req,res)=>{

    try{
        
    }catch(error){
        res.json({
            "msg":"Interna Server Error",
            "status":500
        });
    }
}



module.exports={createProduct ,getAllProducts,getProductById,listProduct,getProductdetailsById}