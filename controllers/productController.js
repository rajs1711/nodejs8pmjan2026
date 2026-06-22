
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
        const prodcuts= await productModel.find({
        },{_id:0,name:1,price:1,cateogry:1,code:1,productThumbnail:1});

        if(prodcuts){
            return res.json({
                "msg":"Product list fetched successfully",
                "data":prodcuts,
                "status":200
            })
        }
    }catch(error){
        res.json({
            "msg":"Interna Server Error",
            "status":500
        });
    }
}


const getProductById=async(req,res)=>{
    try{
        const {pid}=req.query;
        const product=await productModel.find({code:pid});
        console.log(product)
        if(product.length >0){
            res.json({
                "msg":"Product found successfully",
                "data":product,
                "status":200
            });
        }else{
            res.json({
                "msg":"Data not Found",
                "status":400
            });
        }

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

const uploadProductImage=async(req,res)=>{
    //const{productcode}=req.body
    const result=await productModel.updateOne(
        { code:'PROD260.18377845480050914'},          // filter
        { $set: 
            
            { 
                productThumbnail: req.productThumbnail
            } 
        
        } // update
        );

return res.json({"product_url":req.productThumbnail,"msg":"Product image Updated successfully"})
}



module.exports={createProduct ,getAllProducts,getProductById,listProduct,getProductdetailsById,uploadProductImage}