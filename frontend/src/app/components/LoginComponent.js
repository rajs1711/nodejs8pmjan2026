"use client"
// import InputBox from "./formcomponents/inputBox";
// import Button from "./formcomponents/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";

export default function loginComponent(){

    const router = useRouter();
    
    const[formData,setFormData]=useState({
        email:'',
        password:'',
    });

    const [message,setMessage]=useState('');
    
    // handle input value change :

    const handleChange=(e)=>{

        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    // handle form submission
   const handleSubmit=async(e)=>{
    e.preventDefault();// prevents the browser from reloading the page
    setMessage('');
    setFormData({
        email: '',
        password: '',
      });

    try{
     //you can hit api using fetch method or axios package 
     const response=await axios.post('http://localhost:4000/api/login',formData
     );
    
     setMessage(response.data.msg);
     if(response.data.status==200){// successfulyy login
        Cookies.set(
            "accessToken",response.data.token,
            {
                expires:1,
                path:"/",
                secure:true,
                sameSite:"Strict"
            }
        )
        

        //if we have token then redirect user to dashboard page 
        if(response.data.token){
            
            router.replace("/dashboard"); // this line helps to redirect to anothe page 
        }

     }
    }catch(e){
       console.log(e);
    }
   }





    return(
        <>
                    <div className="marginprop">
                    <h2>Login </h2>
                    {message && <p className="password">{message}</p>}
                        <form onSubmit={handleSubmit}>
                
                        <input type="email" name="email" placeholder="please Enter Email" value={formData.email} onChange={handleChange}/>
                        <input type="password" name="password" placeholder="please Enter your password" value={formData.password} onChange={handleChange}/>
                        <button type="submit">SignIn</button>
                    </form>
                    <div className="login-link">
                            Create account <Link href="/signup">Signup</Link>
                        </div>
            </div>
        </>
    )
}