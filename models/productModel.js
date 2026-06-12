const mongoose=require('mongoose');

//schema design 

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    cateogry:{
        type:String,
        required:true 
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String
    },
    code:{
        type:String
    },
    productThumbnail:{
        type:String
    }

},
 {
    timestamps:true
 }
);

module.exports=mongoose.model("Products",productSchema)