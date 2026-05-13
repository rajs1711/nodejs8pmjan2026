const express= require('express')// include or require express package in your program
const app=express()// intiate expres app object

// Middleware: parse JSON request bodies
app.use(express.json())
// Middleware: parse application/x-www-form-urlencoded bodies (HTML forms)
app.use(express.urlencoded({ extended: true }))

const port=3000


app.use('/api',require('./routes/authroutes'));
app.use('/api',require('./routes/orderRoutes'));
 


//setup express server.
app.listen(port,()=>{
    console.log(`Server started at Port number :${port}`);
})