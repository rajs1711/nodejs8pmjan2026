const mongoose = require("mongoose");   // import mongoose package  to connect with mongodb database 

const connectDB=async()=>{
    try{
        const con=await mongoose.connect('mongodb+srv://rajsrv171195_db_user:Abc%401711@cluster0.nfxo8w9.mongodb.net/Nodejs8pmJAN');
        if(con){
        console.log("Connected to MongoDB");
       }else{
        console.log("Error connecting to MongoDB");
       }
    }catch(error){
        console.log("Error connecting to MongoDB",error);
    }
}

module.exports=connectDB;