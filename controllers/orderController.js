const checkorderstatus=async(req,res)=>{

    try{
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
    }catch(error){
        res.json({
            "msg":"Interna Server Error",
            "status":500
        });
    }
}

module.exports={checkorderstatus}