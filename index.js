require('dotenv').config()
const cors = require("cors");
const express= require('express')// include or require express package in your program
const app=express()// intiate expres app object
const { ValidationError } = require('express-validation')
const connectDB=require('./config/db')


app.use(cors());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
// Middleware: parse JSON request bodies
app.use(express.json())
// Middleware: parse application/x-www-form-urlencoded bodies (HTML forms)
app.use(express.urlencoded({ extended: true }))



const port=5000

app.use('/api',require('./routes/authroutes'));
app.use('/api',require('./routes/orderRoutes'));
app.use('/api',require('./routes/productsroutes'));
app.use('/api',require('./routes/dashboardroutes'));


// error registration 
app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
  
    return res.status(500).json(err)
  })
  

//setup express server.
app.listen(4000,()=>{
    console.log(`Server started at Port number :${port}`);
    connectDB();
})