const express= require('express')// include or require express package in your program
const app=express()// intiate expres app object

const port=3000

// create one welcome API 
//https://localhost:3000/api/welcome
app.get('/api/welcome',(req,res)=>{
    
     console.log(req.body)
    const msg='welcome to our Express Application';

    return res.json({"msg":msg,"status":200}); // here we return data in json format
});
// JSON => java script object notation 
/**
 * 
 * {
 *  "name":"saurav"
 * 
 * }
 */





//setup express server.
app.listen(port,()=>{
    console.log(`Server started at Port number :${port}`);
})