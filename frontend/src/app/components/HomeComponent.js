"use client"
import { useState ,useEffect } from "react";
export default function HomeComponent(){
   //hooks concept 
   const [count ,setCount]=useState(0); // count is varaible name setCount is function 
   // which helps to update count varaible value  and here 0 is by default value of count
   const[x,setX]=useState(0);

   const [products,setPropducts]=useState([]);

function test(){
 
 setCount(10)
  console.log(count)
  setX(20)
  console.log(x)

}

useEffect(()=>{
   console.log("page render ")
   console.log('Api Call')
},[])

useEffect(()=>{
console.log(`count : ${count}`)
console.log(`x : ${x}`)
},[count,x])

useEffect(()=>{
 //API CALL 
 fetch('https://dummyjson.com/products')
 .then(res=>res.json())
 .then(data =>setPropducts(data.products));
},[])

console.log(products);
   


    // const products = [
    //     {
    //       id: 1,
    //       name: "Wireless Headphones",
    //       price: "$99",
    //       image: "https://img.magnific.com/free-vector/display-template-with-mobile-phones_79603-1245.jpg",
    //     },
    //     {
    //       id: 2,
    //       name: "Smart Watch",
    //       price: "$149",
    //       image: "https://img.magnific.com/free-vector/display-template-with-mobile-phones_79603-1245.jpg",
    //     },
    //     {
    //       id: 3,
    //       name: "Bluetooth Speaker",
    //       price: "$79",
    //       image: "https://img.magnific.com/free-vector/display-template-with-mobile-phones_79603-1245.jpg",
    //     },
    //     {
    //       id: 4,
    //       name: "Laptop Backpack",
    //       price: "$59",
    //       image: "https://img.magnific.com/free-vector/display-template-with-mobile-phones_79603-1245.jpg",
    //     },


    //     {
    //         id: 5,
    //         name: "Wireless Headphones",
    //         price: "$99",
    //         image: "https://img.magnific.com/free-vector/display-template-with-mobile-phones_79603-1245.jpg",
    //       },
    //       {
    //         id: 6,
    //         name: "Smart Watch",
    //         price: "$149",
    //         image: "https://img.magnific.com/free-vector/display-template-with-mobile-phones_79603-1245.jpg",
    //       },
    //       {
    //         id: 7,
    //         name: "Bluetooth Speaker",
    //         price: "$79",
    //         image: "https://img.magnific.com/free-vector/display-template-with-mobile-phones_79603-1245.jpg",
    //       },
    //       {
    //         id: 8,
    //         name: "Laptop Backpack",
    //         price: "$59",
    //         image: "https://img.magnific.com/free-vector/display-template-with-mobile-phones_79603-1245.jpg",
    //       }


    //   ];

    return(
        <>

     <div className="home">

      <section className="hero">
        <h2>Featured Products</h2>
        <p>Discover the latest gadgets and accessories.</p>
      </section>

      <div className="productGrid">

      {products.map(data=>(
          <div key={data.id} className="productCard">
          <img
            src="https://img.magnific.com/free-vector/display-template-with-mobile-phones_79603-1245.jpg"
            className="productImage"
          />
          <h3 className="productName">{data.title}</h3>
          <p className="productPrice">{data.price}</p>
          <button className="buyButton">Add to Cart</button>
        </div>
        ))}

      </div>
    </div> 
     {/* <h1>{count}</h1>
     <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>test()}>clickme</button> */}
        </>

    )
}