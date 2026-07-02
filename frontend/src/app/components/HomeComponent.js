"use client"
import { useState ,useEffect } from "react";
export default function HomeComponent(){
   //hooks concept 
   const [count ,setCount]=useState(0); // count is varaible name setCount is function 
   // which helps to update count varaible value  and here 0 is by default value of count
   const[x,setX]=useState(0);

   const [products,setPropducts]=useState([]);
   const [category,setCategory]=useState("");
   const [categorylist,setCategorylist]=useState([])

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

// To show list of products when you page load first time
useEffect(()=>{
 //API CALL 
 fetch('https://dummyjson.com/products')
 .then(res=>res.json())
 .then(data =>setPropducts(data.products));

 fetch('https://dummyjson.com/products/category-list')
 .then(res => res.json())
 .then(data =>setCategorylist(data));

 

},[])

// To show product result based upon search by cateogry
useEffect(()=>{
  if(!category) return;

  fetch(`https://dummyjson.com/products/category/${category}`)
  .then(res=>res.json())
  .then(data =>setPropducts(data.products));
},[category])

console.log(products)

    return(
        <>

     <div className="home">

      <section className="hero">
        <h2>Featured Products</h2>
        <p>Discover the latest gadgets and accessories.</p>
        <select className="searchbox" onChange={(e)=>setCategory(e.target.value)}>
          <option value="">Filter By Category ......</option>
          {categorylist.map((cat)=>(
            <option value={cat} key={cat}>{cat}</option>
          ))}
          
        </select>
        
      </section>


      <div className="productGrid">

      {products.map(data=>(
          <div key={data.id} className="productCard">
          <img
            src={data.thumbnail}
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