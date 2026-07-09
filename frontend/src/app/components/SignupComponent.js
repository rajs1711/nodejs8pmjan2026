"use client"
// import InputBox from "./formcomponents/inputBox";
// import Button from "./formcomponents/Button";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function signupComponent(){

    const[formData,setFormData]=useState({
        name:'',
        email:'',
        mobile:'',
    });

    const [message,setMessage]=useState('');
    const [password,setPassword]=useState('');
    
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
        name: '',
        email: '',
        mobile: '',
      });

    try{
     //you can hit api using fetch method or axios package 
     const response=await axios.post('http://localhost:4000/api/signup',formData
     );
    
     setMessage(response.data.msg);
     if(response.data.data !=null){
        setPassword(response.data.data.password);
     }

    }catch(e){
       console.log(e);
    }
   }

    return(
        <>
            <div className="marginprop">
                <h2>Signup </h2>
                {message && <p className="msg">{message}</p>}
                {password && <p > Your password : <span className="password"> {password} </span></p>}
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="please Enter your name" value={formData.username} onChange={handleChange}/>
                        <input type="email" name="email" placeholder="please Enter Email" value={formData.email} onChange={handleChange}/>
                        <input type="number" name="mobile" placeholder="please Enter your mobile" value={formData.mobile} onChange={handleChange}/>
                        <button  type="submit">Signup</button>
                        
                    </form>
                    
                    <div className="login-link">
                            Already have an account? <Link href="/login">Login</Link>
                    </div>
            </div>
        </>
    )
}