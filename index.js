const express= require('express')// include or require express package in your program
const app=express()// intiate expres app object

// Middleware: parse JSON request bodies
app.use(express.json())
// Middleware: parse application/x-www-form-urlencoded bodies (HTML forms)
app.use(express.urlencoded({ extended: true }))

const port=3000

//API
//signup API
/**
 * name
 * email
 * mobile
 * 
 */
//http://localhost:3000/api/signup
app.post('/api/signup',(req,res)=>{
    
    //console.log(req.body); // req.body is used to get the body of the request ,here we pass our data
    const{name,email,mobile}=req.body
    
    if(!name ||!email|| !mobile)
     {
        res.json({
            "msg":"Invalid Data",
            "status":400
         });
     }else{
         // verify mobile and email is already exists in our database 
         // save incoming userdata in our database only if mobile and 
         // email is not exists in our database 

        res.json({
            "msg":"signup successful",
            "data":req.body,
            "status":200
         });
     }


});

//http://localhost:3000/api/checkorderstatus 

app.get('/api/checkorderstatus',(req,res)=>{
    const {ordernumber}=req.query;

    if(!ordernumber){
        res.json({
            "msg":"ordernumber is required",
            "status":400
        });
    }else{
        // verify ordernumber is exists in our database 
        // if exists then return the user data
        // if not exists then return the message "ordernumber not found"

        const orderdata={
            "ordernumber":'ORD1010345',
            "orderstatus":"delivered",
            "orderdate":"2026-05-11",
            "orderamount":1000,
            "orderitems":["product1","product2","product3"],
            "orderaddress":"123, Main St, Anytown, USA",
            "ordercontact":"1234567890",
        }
        if(ordernumber=='ORD1010345'){
            res.json({
                "msg":"order found",
                "data":orderdata,
                "status":200
            });
        }else{
            res.json({
                "msg":"order not found",
                "data":null,
                "status":404
            });
        }

    }
})



//setup express server.
app.listen(port,()=>{
    console.log(`Server started at Port number :${port}`);
})