const mongoose=require('mongoose');

//schema design 

const signupSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    password:{
        type:String
    },
    profileImage:{
        type:String
    }

},
 {
    timestamps:true
 }
);

module.exports=mongoose.model("Signups",signupSchema)