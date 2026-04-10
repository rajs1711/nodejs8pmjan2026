const express= require('express')// include or require express package in your program
const app=express()// intiate expres app object

const port=3000




//setup express server.
app.listen(port,()=>{
    console.log(`Server started at Port number :${port}`);
    console.log('hello Raj ')
})